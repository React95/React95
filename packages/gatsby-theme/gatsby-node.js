const fs = require('fs');
const path = require('path');

exports.onPreBootstrap = ({ reporter }) => {
  const contentPath = 'content';

  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`);

    fs.mkdirSync(contentPath);
  }
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const parent = getNode(node.parent);

    const value =
      parent.relativePath && parent.relativePath.replace(parent.ext, '');

    createNodeField({
      node,
      name: 'slug',
      value: `/${value && value.replace('index', '')}`,
    });

    createNodeField({
      name: 'title',
      node,
      value: node.frontmatter.title || startCase(parent.name),
    });
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
            fields {
              slug
            }
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

  contents.forEach(({ node: { fields } }) => {
    const { slug } = fields;

    createPage({
      path: slug,
      component: path.resolve('./src/components/desktop.js'),
    });
  });
};
