import React from 'react';
import { render } from '@testing-library/react';
import { ClippyProvider } from '@react95/clippy';

import clippyStyle from '../src/style';

describe('ClippyProvider', () => {
  it('should add Clippy styles', () => {
    const { head } = document;
    const DOMStyles = head.getElementsByTagName('style');

    expect(DOMStyles).toHaveLength(0);

    render(<ClippyProvider />);

    expect(DOMStyles).toHaveLength(1);

    const [style] = DOMStyles;
    expect(style.textContent).toBe(clippyStyle);
  });
});
