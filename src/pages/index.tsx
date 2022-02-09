import About from '@/components/About';
import Classes from '@/components/Classes';
import CovidSafe from '@/components/CovidSafe';
import ReviewSection from '@/components/ReviewSection';
import Hero from '@/components/Hero';
import Layout from '@/components/Layout';
import Memberships from '@/components/Memberships';
import { graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import fbImage from '../assets/images/fb-banner.png';

export default function Home({ data }) {
  const { hero } = data;
  const classList = data.classList.nodes;
  const memberships = data.memberships.nodes;
  const { site } = data;
  const reviews = data.reviews.nodes;
  const placeData = data.placeData.nodes;
  const url = process.env.SITE_URL;

  return (
    <Layout>
      <Helmet title={site.openGraph.title}>
        <meta
          name="google-site-verification"
          content="72F5yoegMoxfGScdFdfK1eC9ODcNXzF4hnkZgTDTaBE"
        />
        <meta name="description" content={site.openGraph.description} />
        <meta property="og:url" content={url} />

        <meta property="og:title" content={site.openGraph.title} />
        <meta property="og:description" content={site.openGraph.description} />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content={site.primaryColor.hex} />
        <meta property="og:image" content={fbImage} />
        <meta name="keywords" content={site.keywords} />
        {site && site.primaryColor && site.secondaryColor && (
          <style type="text/css">{`
              .gradient {
                background: linear-gradient(90deg, ${site.primaryColor.hex} 0%, ${site.secondaryColor.hex} 100%);
              }
            `}</style>
        )}
        <html lang="en" />
      </Helmet>
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
      primaryColor {
        hex
      }
      secondaryColor {
        hex
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
