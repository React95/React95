module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`,
      },
    },
    'gatsby-plugin-mdx-frontmatter',
    'gatsby-plugin-mdx',
    'gatsby-plugin-typescript',
  ],
};
