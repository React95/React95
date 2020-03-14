import { render } from '@testing-library/react';
import ThemeProvider from '../../ThemeProvider';

const customRender = (ui, options) =>
  render(ui, { wrapper: ThemeProvider, ...options });

export * from '@testing-library/react';

export { customRender as render };
