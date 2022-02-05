import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { imageUrlFor } from '../lib/image-url';

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      keywords
      description
      author
    }
  }
`;
type SeoProps = {
  description: string;
  lang: string;
  meta: string[];
  keywords: string[];
  title: string;
  image: object;
  gradient: string;
};

function SEO({
  description,
  lang,
  meta,
  keywords,
  title,
  image,
  gradient,
}: SeoProps) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={(data) => {
        const metaDescription =
          description || (data.site && data.site.description) || ``;
        const siteTitle = (data.site && data.site.title) || ``;
        const siteAuthor =
          (data.site && data.site.author && data.site.author.name) || ``;
        const metaImage =
          image && image.asset
            ? imageUrlFor(image.asset).width(1200).url()
            : ``;

        const pageTitle = title || siteTitle;

        return (
          <Helmet
            htmlAttributes={{ lang }}
            title={pageTitle}
            titleTemplate={
              pageTitle === siteTitle ? siteTitle : `%s | ${siteTitle}`
            }
            meta={[
              {
                name: `google-site-verification`,
                content: `Z3-w5CTtpXNnAGFtfoXy6lt8Hhe5sE8saZF5Bv4DBwE`,
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
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: siteAuthor,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
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
