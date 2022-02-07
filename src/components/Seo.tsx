import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { imageUrlFor } from '../lib/image-url';

// https://ogp.me

function SEO({ description, lang, meta, keywords, title, image, gradient }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={(data) => {
        const metaDescription =
          description || (data.site && data.site.description) || ``;
        const siteTitle = (data.site && data.site.title) || ``;
        const metaImage =
          image && image.asset ? imageUrlFor(image).width(1200).url() : ``;

        const pageTitle = title || siteTitle;

        return (
          <Helmet
            // bodyAttributes={bodyAttr}
            htmlAttributes={{ lang }}
            title={pageTitle}
            titleTemplate={
              pageTitle === siteTitle ? siteTitle : `%s | ${siteTitle}`
            }
            meta={[
              {
                name: `google-site-verification`,
                content: `72F5yoegMoxfGScdFdfK1eC9ODcNXzF4hnkZgTDTaBE`,
              },
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                property: `og:image`,
                content: metaImage,
              },
            ]
              .concat(
                keywords && keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : [],
              )
              .concat(meta)}
          >
            {gradient && gradient.from && gradient.to && (
              <style type="text/css">{`
              .gradient {
                background: linear-gradient(90deg, ${gradient.from} 0%, ${gradient.to} 100%);
              }
            `}</style>
            )}
          </Helmet>
        );
      }}
    />
  );
}

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      openGraph {
        title
        description
      }
    }
  }
`;
