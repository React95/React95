const fs = require('fs');
const path = require('path');

exports.onPreBootstrap = ({ reporter }) => {
  const contentPath = 'content';

  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`);

    fs.mkdirSync(contentPath);
  }
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const basePath = '/';

  const { createPage } = actions;

  createPage({
    path: basePath,
    component: path.resolve('./src/components/desktop.js'),
  });

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            slug
            frontmatter {
              icon {
                name
                variant
              }
              title
            }
            body
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('error loading content', reporter.errors);

    return;
  }

  const contents = result.data.allMdx.edges;

  contents.forEach(({ node }) => {
    const { slug } = node;

    createPage({
      path: slug,
      component: path.resolve('./src/components/content.js'),
      context: { content: node, data: result.data },
    });
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: ['ts-loader'],
        },
      ],
    },
  });
};
