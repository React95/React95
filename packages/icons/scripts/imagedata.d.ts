declare module '@andreekeberg/imagedata' {
  /**
   * Synchronously get an ImageData instance based on provided data
   *
   * {@link https://github.com/andreekeberg/imagedata/blob/master/lib/node.js#L104 | original implementation}
   *
   * @param {(string|Buffer)} data
   * @throws {Error} If the data argument is not a string or Buffer
   * @throws {Error} If the data argument is a string and the file could not be found
   * @throws {Error} If the mime type could not be retrieved
   * @throws {Error} If no image decoder could be found for the mime type
   * @returns {ImageData}
   */
  export const getSync = (path: string) => new ImageData();
}
