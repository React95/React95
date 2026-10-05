/**
 * The color a theme token (e.g. `contract.colors.headerBackground`) has in the
 * current theme, as the browser computes it (`rgb(...)`).
 *
 * Tokens are CSS variables, which `toHaveStyle` can't compare against, and
 * their values change with the theme. Resolving them in the browser lets a
 * play function check that a component uses a token, whatever the theme:
 * `expect(el).toHaveStyle({ backgroundColor: themeColor(token) })`.
 */
export const themeColor = (token: string) => {
  const probe = document.createElement('div');

  probe.style.color = token;
  document.body.append(probe);

  const { color } = getComputedStyle(probe);

  probe.remove();

  return color;
};
