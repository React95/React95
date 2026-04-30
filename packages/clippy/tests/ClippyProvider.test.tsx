import { ClippyProvider } from '@react95/clippy';
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';

describe('ClippyProvider', () => {
  it('should render children', async () => {
    render(
      <ClippyProvider>
        <span>hello</span>
      </ClippyProvider>,
    );

    await waitFor(() => expect(screen.getByText('hello')).toBeTruthy());
  });
});
