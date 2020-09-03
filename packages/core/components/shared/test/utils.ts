import { render, act, RenderOptions } from '@testing-library/react';
import ThemeProvider from '../../ThemeProvider';

const customRender = (
  ui: React.ReactElement,
  options: Omit<RenderOptions, 'queries'>,
) => render(ui, { wrapper: ThemeProvider, ...options });

const waitRender = async (
  ui: React.ReactElement,
  options: Omit<RenderOptions, 'queries'>,
) => {
  const { container, ...rest } = customRender(ui, options);

  await act(async () => {
    await Promise.resolve(container);
  });

  return { container, ...rest };
};

export * from '@testing-library/react';

export { customRender as render, waitRender };
