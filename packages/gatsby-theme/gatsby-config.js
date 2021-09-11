const config = ({ contentPath = 'content', basePath = '/' } = {}) => ({
  siteMetadata: {
    basePath,
    title: 'Gatsby - Powered By React95',
    description: 'This is a Gatsby website that uses React95',
    url: '',
    author: 'ggdaltoso',
    image: '/React95-clouds.png',
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
