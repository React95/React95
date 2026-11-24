import { describe, expect, it } from 'vitest';
import { getSourceType } from './sourceType';

describe('getSourceType', () => {
  it('maps the common video extensions to their MIME types', () => {
    expect(getSourceType('movie.mp4')).toBe('video/mp4');
    expect(getSourceType('movie.webm')).toBe('video/webm');
    expect(getSourceType('movie.ogv')).toBe('video/ogg');
    expect(getSourceType('movie.mov')).toBe('video/quicktime');
  });

  it('ignores the case of the extension', () => {
    expect(getSourceType('MOVIE.MP4')).toBe('video/mp4');
  });

  it('ignores the query string and the hash', () => {
    expect(getSourceType('https://cdn.test/movie.webm?token=a.b#t=10')).toBe(
      'video/webm',
    );
  });

  it('returns undefined for an unknown extension or none', () => {
    expect(getSourceType('movie.xyz')).toBeUndefined();
    expect(getSourceType('https://cdn.test/stream')).toBeUndefined();
  });
});
