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
          siteUrl
          image
        }
      }
    }
  `);

  const defaults = data.site.siteMetadata;

  const title = content.frontmatter?.title || defaults.title;
  const description = content.frontmatter?.description || defaults.description;
  const url = `${defaults.siteUrl}/${content.slug || ''}`;
  const image =
    content.frontmatter?.image || defaults.image
      ? `${defaults.siteUrl}${content.frontmatter?.image || defaults.image}`
      : false;
  const author = content.frontmatter?.author || defaults.author;

  return (
    <Helmet
      title={title}
      titleTemplate={`${defaults.title} | %s`}
      meta={[
        {
          name: 'description',
          content: description,
        },
        {
          name: 'image',
          content: image,
        },

        // og
        {
          name: 'og:url',
          content: url,
        },
        {
          name: 'og:title',
          content: title,
        },
        {
          name: 'og:description',
          content: description,
        },
        {
          name: 'og:image',
          content: image,
        },

        // twitter
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:creator',
          content: author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: description,
        },
        {
          name: 'twitter:image',
          content: image,
        },
      ]}
      link={[
        {
          rel: 'canonical',
          href: url,
        },
      ]}
    />
  );
};

export default SEO;
