import fs from 'fs';

export interface IconData {
  bpp: number;
  buffer: ArrayBuffer;
  filePath: string;
  height: number;
  id: string;
  reactImportPath: string;
  variant: string;
  width: number;
}

export const ICONS_FOLDER = './src/icons';
export const ICON_DEMOS_FILE_PATH = './src/iconDemos.ts';
export const ICONS_INDEX_FILE_PATH = './src/index.ts';
export const REACT_FOLDER = './src/react';
export const SVG_FOLDER = './src/svg';
export const IMAGE_FOLDER = './png';
export const CSS_FILE_PATH = './icons.css';

export function deleteFolder(path: string) {
  const exists = fs.existsSync(path);

  if (exists) {
    fs.rmSync(path, { recursive: true });
  }
}
