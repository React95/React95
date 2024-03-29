import {
  RenderOptions,
  RenderResult,
  act,
  cleanup,
  render,
} from '@testing-library/react';
import ThemeProvider from '../../ThemeProvider';

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
) => {
  cleanup();

  return render(ui, { wrapper: ThemeProvider, ...options });
};

const waitRender = async (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
): Promise<RenderResult> => {
  const { container, ...rest } = customRender(ui, options);

  await act(async () => {
    await Promise.resolve(container);
  });

  return { container, ...rest };
};

export * from '@testing-library/react';

export { customRender as render, waitRender };
