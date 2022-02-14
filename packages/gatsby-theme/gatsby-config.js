const plugins = [
  'gatsby-plugin-mdx-frontmatter',
  'gatsby-plugin-mdx',
  'gatsby-plugin-styled-components',
  'gatsby-plugin-react-helmet',
];

if (process.env.NODE_ENV === 'development') {
  plugins.push('gatsby-plugin-typescript');
}

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
    ...plugins,
  ],
});

module.exports = process.env.THEME_STANDALONE ? config() : config;
