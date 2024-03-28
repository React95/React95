import {
  RenderOptions,
  RenderResult,
  act,
  render,
} from '@testing-library/react';

const waitRender = async (
  ui: React.ReactElement,
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
