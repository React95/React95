import React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Notepad, notepadData } from '../src/react/Notepad';

describe('Icon components', () => {
  it('renders the default variant without crashing', () => {
    const { container } = render(<Notepad />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the specified variant', () => {
    const { container } = render(<Notepad variant="16x16_4" />);
    expect(container.querySelector('svg')).toHaveAttribute('width', '16');
  });

  it('forwards SVG props to the underlying element', () => {
    const { container } = render(<Notepad aria-label="Notepad icon" />);
    expect(container.querySelector('svg')).toHaveAttribute(
      'aria-label',
      'Notepad icon',
    );
  });
});

describe('Icon data maps', () => {
  it('exposes all available variants', () => {
    expect(notepadData['16x16_4']).toBeDefined();
    expect(notepadData['32x32_4']).toBeDefined();
  });

  it('each variant is a valid React component', () => {
    Object.values(notepadData).forEach(Variant => {
      expect(() => render(<Variant />)).not.toThrow();
    });
  });
});
