const config = ({ contentPath = 'content', basePath = '/' } = {}) => ({
  siteMetadata: {
    basePath,
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: contentPath,
      },
    },
    'gatsby-plugin-mdx-frontmatter',
    'gatsby-plugin-mdx',
    'gatsby-plugin-typescript',
  ],
});

module.exports = process.env.THEME_STANDALONE ? config() : config;
