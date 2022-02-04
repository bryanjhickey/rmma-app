import About from '@/components/About';
import Classes from '@/components/Classes';
import CovidSafe from '@/components/CovidSafe';
// import ReviewSection from '@/components/ReviewSection';
import Hero from '@/components/Hero';
import Layout from '@/components/Layout';
import Memberships from '@/components/Memberships';
import Seo from '@/components/Seo';
import { graphql } from 'gatsby';
import React from 'react';

export default function Home({ data }) {
  const { hero } = data;
  const classList = data.classList.nodes;
  const memberships = data.memberships.nodes;
  const { site } = data;
  // const reviews = data.reviews.nodes;

  return (
    <Layout>
      <Seo
        description={site.description || ``}
        lang={site.lang || `en`}
        meta={site.meta || ``}
        keywords={site.keywords || []}
        title={site.title || ``}
        image={site.image || ``}
        bodyAttr={site.bodyAttr || ``}
        gradient={site.gradient || ``}
      />
      <Hero hero={hero} />
      <About />
      {/* <ReviewSection reviews={reviews} /> */}
      <Memberships memberships={memberships} />
      <Classes sessions={classList} />
      <CovidSafe />
    </Layout>
  );
}

export const query = graphql`
  query homePageQuery {
    classList: allSanityClassList(sort: { fields: orderRank, order: ASC }) {
      nodes {
        id
        title
        overview
      }
    }
    hero: sanityBanner(_id: { eq: "e41971a1-046b-4dde-bf72-319fdcef2d3e" }) {
      title
      copy
      image {
        asset {
          gatsbyImageData(fit: FILLMAX, placeholder: BLURRED, formats: AUTO)
        }
      }
    }
    memberships: allSanityMembershipBenefits(
      sort: { order: ASC, fields: _updatedAt }
    ) {
      nodes {
        _id
        title
        shortDescription
      }
    }
    site: sanitySiteSettings {
      title
      keywords
      description
      author
    }
    reviews: allGooglePlacesReview(
      sort: { fields: time, order: DESC }
      limit: 4
    ) {
      nodes {
        author_name
        author_url
        rating
        profile_photo_url
        text
        id
        relative_time_description
      }
    }
  }
`;
