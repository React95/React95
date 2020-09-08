interface ICO extends ArrayBuffer {}

declare module '*.ico' {
  const value: ICO;
  export = value;
}
