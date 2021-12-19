const config = ({ contentPath = 'content', basePath = '/' } = {}) => ({
  siteMetadata: {
    basePath,
    title: 'Gatsby - Powered By React95',
    description: 'This is a Gatsby website that uses React95',
    siteUrl: 'http://localhost:8000',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: contentPath,
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-mdx-frontmatter',
    'gatsby-plugin-mdx',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
  ],
});

module.exports = process.env.THEME_STANDALONE ? config() : config;
