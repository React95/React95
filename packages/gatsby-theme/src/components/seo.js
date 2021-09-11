import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ content }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          url
          image
        }
      }
    }
  `);

  const defaults = data.site.siteMetadata;

  if (defaults.url === '' && typeof window !== 'undefined') {
    defaults.url = window.location.origin;
  }

  if (defaults.url === '') {
    console.error('Please set a url in your site metadata!');

    return null;
  }

  const title = content.frontmatter?.title || defaults.title;
  const description = content.frontmatter?.description || defaults.description;
  const url = new URL(content.slug || '', defaults.url);
  const image = defaults.image
    ? `${defaults.url}${content.frontmatter?.image || defaults.image}`
    : false;
  const author = content.frontmatter?.author || defaults.author;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link rel="canonical" href={url} />
        <meta name="description" content={description} />
        {image && <meta name="image" content={image} />}

        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {image && <meta property="og:image" content={image} />}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={author} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {image && <meta name="twitter:image" content={image} />}
      </Helmet>
    </>
  );
};

export default SEO;
