const fs = require('fs');

const MDX_TEMPLATE = `---
title: Getting Started
description: Your awesome and nostalgic website!
icon:
  name: Computer
  variant: 32x32_4
---

# Your website starts on this folder

Feel free to add your content!
`;

exports.onPreBootstrap = ({ reporter }, { contentPath = 'content' }) => {
  if (!fs.existsSync(contentPath)) {
    reporter.info(
      `creating the ${contentPath} directory with a getting started file`,
    );

    fs.mkdirSync(contentPath);
    fs.writeFileSync(`${contentPath}/getting-started.mdx`, MDX_TEMPLATE);
  }
};

exports.createPages = async (
  { actions, graphql, reporter },
  { basePath = '/' },
) => {
  const { createPage } = actions;

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
              description
              image
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

  createPage({
    path: basePath,
    component: require.resolve('./src/components/desktop.js'),
    context: { content: {}, data: result.data },
  });

  const contents = result.data.allMdx.edges;

  contents.forEach(({ node }) => {
    const { slug } = node;

    createPage({
      path: slug,
      component: require.resolve('./src/components/desktop.js'),
      context: { content: node, data: result.data },
    });
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  const extendedFrontmatter = `
    type Icon {
      name: String!
      variant: String!
    }

    type Mdx implements Node @infer {
      frontmatter: MdxFrontmatter!
    }

    type MdxFrontmatter @infer {
      title: String
      description: String
      icon: Icon
      image: String
    }

    type SiteSiteMetadata @infer {
      author: String
      image: String
    }
  `;

  createTypes(extendedFrontmatter);
};
