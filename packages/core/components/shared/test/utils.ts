import {
  RenderOptions,
  RenderResult,
  act,
  render,
} from '@testing-library/react';
import type { ReactElement } from 'react';

const waitRender = async (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
): Promise<RenderResult> => {
  const { container, ...rest } = render(ui, options);

  await act(async () => {
    await Promise.resolve(container);
  });

  return { container, ...rest };
};

export * from '@testing-library/react';

export { render, waitRender };
