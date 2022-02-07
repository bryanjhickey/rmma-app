import About from '@/components/About';
import Classes from '@/components/Classes';
import CovidSafe from '@/components/CovidSafe';
import ReviewSection from '@/components/ReviewSection';
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
  const reviews = data.reviews.nodes;
  const placeData = data.placeData.nodes;

  return (
    <Layout>
      <Seo
        description={site.description || ``}
        lang={site.lang || `en`}
        meta={site.meta || ``}
        keywords={site.keywords || []}
        title={site.title || ``}
        image={site.image || ``}
        gradient={site.gradient || ``}
      />
      <Hero hero={hero} />
      <About />
      <ReviewSection reviews={reviews} placeData={placeData} />
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
    hero: sanityBanner(_id: { eq: "a4d069b4-a29d-4e64-8e5c-5037040e44ea" }) {
      title
      copy
      image {
        asset {
          gatsbyImageData(fit: FILLMAX, placeholder: BLURRED, formats: AUTO)
        }
      }
    }
    memberships: allSanityMembershipBenefits(
      sort: { fields: orderRank, order: ASC }
    ) {
      nodes {
        id
        title
        shortDescription
      }
    }
    site: sanitySiteSettings {
      title
      keywords
      openGraph {
        title
        description
      }
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
    placeData: allGooglePlacesPlace {
      nodes {
        user_ratings_total
        rating
      }
    }
  }
`;
