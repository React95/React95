import { create } from "@storybook/theming";

const theme = create({
  base: "light",

  fontBase: '"MS Sans Serif", sans-serif',
  brandTitle: "React95",
  brandUrl: "https://github.com/React95/React95",
  brandImage: "https://avatars2.githubusercontent.com/u/38158713",

  appBg: "white",
  appBorderColor: "grey",
  appBorderRadius: 0
});

export default theme;
