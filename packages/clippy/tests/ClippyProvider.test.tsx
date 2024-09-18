import { ClippyProvider } from '@react95/clippy';
import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';

import clippyStyle from '../src/style';

describe('ClippyProvider', () => {
  it('should add Clippy styles', () => {
    expect(document.getElementsByTagName('style')).toHaveLength(0);

    render(<ClippyProvider />);

    expect(document.getElementsByTagName('style')).toHaveLength(1);

    const [style] = document.getElementsByTagName('style');
    expect(style.textContent).toBe(clippyStyle);
  });
});
