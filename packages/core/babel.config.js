module.exports = {
  extends: "../../babel.config.js",
  plugins: ["transform-modern-regexp", "babel-plugin-styled-components"],
  env: {
    production: {
      ignore: ["./components/**/*.test.jsx", "./components/**/*/__snapshots__"]
    }
  }
};
