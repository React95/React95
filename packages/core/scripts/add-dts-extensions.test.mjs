import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import ts from 'typescript';
import { afterEach, describe, expect, it } from 'vitest';

import { addDtsExtensions } from './add-dts-extensions.mjs';

const tempDirs = [];

function createFixture(files) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'react95-dts-'));
  tempDirs.push(root);

  for (const [relPath, content] of Object.entries(files)) {
    const fullPath = path.join(root, relPath);
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });
    fs.writeFileSync(fullPath, content, 'utf8');
  }

  return root;
}

afterEach(() => {
  while (tempDirs.length > 0) {
    fs.rmSync(tempDirs.pop(), { recursive: true, force: true });
  }
});

describe('addDtsExtensions', () => {
  it('appends .js and /index.js to relative declaration specifiers and is idempotent', () => {
    const dir = createFixture({
      'index.d.ts': [
        "import { Alert } from './Alert/Alert';",
        "import { Cursor } from './Cursor/Cursor.css';",
        "import * as tokens from './themes/tokens';",
        "export * from './shared/events';",
        'export { Alert, Cursor, tokens };',
      ].join('\n'),
      'Alert/Alert.d.ts': [
        "import type { ReactNode } from 'react';",
        "import { ModalProps } from '../Modal/Modal';",
        'export type AlertProps = ModalProps & { message: string; icon?: ReactNode; buttons?: import("../Modal/Modal").ModalButton[]; };',
        'export declare const Alert: (props: AlertProps) => null;',
      ].join('\n'),
      'Modal/Modal.d.ts':
        'export type ModalButton = { value: string };\nexport type ModalProps = { title: string };\n',
      'Cursor/Cursor.css.d.ts': 'export declare const Cursor: string;\n',
      'themes/tokens/index.d.ts': "export * from './win95';\n",
      'themes/tokens/win95.d.ts': 'export declare const bg: string;\n',
      'shared/events.d.ts': 'export declare const ModalEvents: object;\n',
      'RadioButton/states.d.ts':
        "import img from './imgs/radio.png';\nexport { img };\n",
    });

    const firstPass = addDtsExtensions(dir);
    expect(firstPass).toBe(7);

    expect(fs.readFileSync(path.join(dir, 'index.d.ts'), 'utf8')).toBe(
      [
        "import { Alert } from './Alert/Alert.js';",
        "import { Cursor } from './Cursor/Cursor.css.js';",
        "import * as tokens from './themes/tokens/index.js';",
        "export * from './shared/events.js';",
        'export { Alert, Cursor, tokens };',
      ].join('\n'),
    );

    expect(fs.readFileSync(path.join(dir, 'Alert/Alert.d.ts'), 'utf8')).toBe(
      [
        "import type { ReactNode } from 'react';",
        "import { ModalProps } from '../Modal/Modal.js';",
        'export type AlertProps = ModalProps & { message: string; icon?: ReactNode; buttons?: import("../Modal/Modal.js").ModalButton[]; };',
        'export declare const Alert: (props: AlertProps) => null;',
      ].join('\n'),
    );

    expect(
      fs.readFileSync(path.join(dir, 'RadioButton/states.d.ts'), 'utf8'),
    ).toBe("import img from './imgs/radio.png';\nexport { img };\n");

    expect(addDtsExtensions(dir)).toBe(0);
  });

  it('produces declarations that preserve types under both nodenext and bundler', () => {
    const root = createFixture({
      'package.json': JSON.stringify({ type: 'module' }),
      'node_modules/@react95/core/package.json': JSON.stringify({
        name: '@react95/core',
        type: 'module',
        exports: {
          '.': {
            import: { types: './types/index.d.ts', default: './esm/index.mjs' },
          },
        },
      }),
      'node_modules/@react95/core/types/index.d.ts': [
        "import { Alert } from './Alert/Alert';",
        "import { Cursor } from './Cursor/Cursor.css';",
        "import * as tokens from './themes/tokens';",
        'export { Alert, Cursor, tokens };',
      ].join('\n'),
      'node_modules/@react95/core/types/Alert/Alert.d.ts': [
        "import { ModalProps } from '../Modal/Modal';",
        'export type AlertProps = ModalProps & { message: string; extra?: import("../Modal/Modal").ModalExtra };',
        'export declare function Alert(props: AlertProps): void;',
      ].join('\n'),
      'node_modules/@react95/core/types/Modal/Modal.d.ts':
        'export type ModalExtra = boolean;\nexport type ModalProps = { title: string };\n',
      'node_modules/@react95/core/types/Cursor/Cursor.css.d.ts':
        'export declare const Cursor: { Pointer: string };\n',
      'node_modules/@react95/core/types/themes/tokens/index.d.ts':
        "export * from './win95';\n",
      'node_modules/@react95/core/types/themes/tokens/win95.d.ts':
        'export declare const win95: string;\n',
      'consumer.ts': [
        "import { Alert, Cursor, tokens } from '@react95/core';",
        'Alert({ title: "Error", message: 123 });',
        'export const cursorCheck: string = Cursor.Pointer;',
        'export const tokenCheck: string = tokens.win95;',
      ].join('\n'),
    });

    addDtsExtensions(path.join(root, 'node_modules/@react95/core/types'));

    const consumerFile = path.join(root, 'consumer.ts');

    for (const options of [
      {
        module: ts.ModuleKind.NodeNext,
        moduleResolution: ts.ModuleResolutionKind.NodeNext,
      },
      {
        module: ts.ModuleKind.ESNext,
        moduleResolution: ts.ModuleResolutionKind.Bundler,
      },
    ]) {
      const program = ts.createProgram([consumerFile], {
        ...options,
        strict: true,
        noEmit: true,
        skipLibCheck: false,
        types: [],
      });
      const diagnostics = ts.getPreEmitDiagnostics(program).map(d => ({
        code: d.code,
        message: ts.flattenDiagnosticMessageText(d.messageText, '\n'),
      }));

      expect(diagnostics).toEqual([
        {
          code: 2322,
          message: "Type 'number' is not assignable to type 'string'.",
        },
      ]);
    }
  });
});
