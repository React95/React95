const MIME_TYPES: Record<string, string> = {
  mp4: 'video/mp4',
  m4v: 'video/mp4',
  webm: 'video/webm',
  ogg: 'video/ogg',
  ogv: 'video/ogg',
  mov: 'video/quicktime',
};

/**
 * The MIME type of a video source, from its file extension. Returns
 * undefined for an unknown extension, so the browser works the type out
 * itself instead of skipping the source because of a made-up one.
 */
export function getSourceType(src: string): string | undefined {
  const [path] = src.split(/[?#]/);
  const extension = path.match(/\.([a-z0-9]+)$/i)?.[1];

  return extension ? MIME_TYPES[extension.toLowerCase()] : undefined;
}
