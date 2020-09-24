type ICO = string;

declare module '*.ico' {
  const value: ICO;
  export = value;
}
