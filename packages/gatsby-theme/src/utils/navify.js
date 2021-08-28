import objectPath from 'object-path';

const navify = nodes => {
  let allRoutes = {};

  nodes.forEach(({ slug, frontmatter }) => {
    const path = slug.replace(/\/$/, '').replaceAll('/', '.');

    if (objectPath.has(allRoutes, path)) {
      const origin = objectPath.get(allRoutes, path);

      objectPath.set(allRoutes, path, { slug, ...frontmatter, ...origin });
    } else {
      objectPath.set(allRoutes, path, { slug, ...frontmatter });
    }
  });

  return allRoutes;
};

export default navify;
