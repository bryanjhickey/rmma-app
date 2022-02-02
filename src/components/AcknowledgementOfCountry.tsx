import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export default function AcknowledgementOfCountry() {
  return (
    <>
      <StaticImage
        className="w-20"
        src="../assets/images/flag-aboriginal.jpeg"
        alt="Aboriginal Flag"
        placeholder="blurred"
        width={120}
        height={82}
      />
      <StaticImage
        className="ml-3 w-20"
        src="../assets/images/flag-ts.jpeg"
        alt="Torres Straight Islander Flag"
        placeholder="blurred"
        width={120}
        height={82}
      />
      <p className="mt-12 text-base text-gray-700 lg:text-xl">
        Renegade MMA acknowledges the Traditional Owners of the lands on which
        we gather to train, and we pay our respects to their Elders past,
        present, and emerging.
      </p>
    </>
  );
}
