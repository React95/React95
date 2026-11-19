import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import ts from 'typescript';

const ALREADY_JS_EXT = /\.(?:[cm]?js|json)$/i;

export function resolveDtsSpecifier(dir, specifier) {
  if (
    specifier !== '.' &&
    specifier !== '..' &&
    !specifier.startsWith('./') &&
    !specifier.startsWith('../')
  ) {
    return specifier;
  }

  if (ALREADY_JS_EXT.test(specifier)) {
    return specifier;
  }

  const target = path.resolve(dir, specifier);

  if (fs.existsSync(`${target}.d.ts`)) {
    return `${specifier}.js`;
  }

  if (fs.existsSync(path.join(target, 'index.d.ts'))) {
    const base =
      specifier === '.' || specifier === '..'
        ? specifier
        : specifier.replace(/\/+$/, '');
    return `${base}/index.js`;
  }

  return specifier;
}

export function rewriteDtsFile(filePath) {
  const sourceText = fs.readFileSync(filePath, 'utf8');
  const sourceFile = ts.createSourceFile(
    filePath,
    sourceText,
    ts.ScriptTarget.Latest,
    false,
    ts.ScriptKind.TS,
  );
  const dir = path.dirname(filePath);
  const edits = [];

  const recordLiteral = literal => {
    const rewritten = resolveDtsSpecifier(dir, literal.text);
    if (rewritten === literal.text) return;

    const start = literal.getStart(sourceFile);
    const end = literal.getEnd();
    const quote = sourceText[start];
    edits.push({ start, end, replacement: `${quote}${rewritten}${quote}` });
  };

  const visit = node => {
    if (
      (ts.isImportDeclaration(node) || ts.isExportDeclaration(node)) &&
      node.moduleSpecifier &&
      ts.isStringLiteral(node.moduleSpecifier)
    ) {
      recordLiteral(node.moduleSpecifier);
    } else if (
      ts.isImportTypeNode(node) &&
      ts.isLiteralTypeNode(node.argument) &&
      ts.isStringLiteral(node.argument.literal)
    ) {
      recordLiteral(node.argument.literal);
    } else if (
      ts.isExternalModuleReference(node) &&
      ts.isStringLiteral(node.expression)
    ) {
      recordLiteral(node.expression);
    } else if (ts.isModuleDeclaration(node) && ts.isStringLiteral(node.name)) {
      recordLiteral(node.name);
    }

    ts.forEachChild(node, visit);
  };

  visit(sourceFile);

  if (edits.length === 0) return 0;

  edits.sort((a, b) => b.start - a.start);
  let output = sourceText;
  for (const edit of edits) {
    output =
      output.slice(0, edit.start) + edit.replacement + output.slice(edit.end);
  }

  fs.writeFileSync(filePath, output, 'utf8');
  return edits.length;
}

export function addDtsExtensions(typesDir) {
  let count = 0;

  for (const entry of fs.readdirSync(typesDir, { withFileTypes: true })) {
    const fullPath = path.join(typesDir, entry.name);
    if (entry.isDirectory()) {
      count += addDtsExtensions(fullPath);
    } else if (entry.name.endsWith('.d.ts')) {
      count += rewriteDtsFile(fullPath);
    }
  }

  return count;
}

const isMain =
  process.argv[1] &&
  pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url;

if (isMain) {
  const defaultDir = path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    '../dist/types',
  );
  const targetDir = process.argv[2]
    ? path.resolve(process.argv[2])
    : defaultDir;
  addDtsExtensions(targetDir);
}
