import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export default function CovidSafe() {
  return (
    <div className="container py-24">
      <div className="grid grid-cols-1 place-items-center bg-green-600 lg:grid-cols-2">
        <div className="col-span-1">
          <StaticImage
            className="object-fill"
            src="../assets/images/clean-gym.jpeg"
            alt="Renegade MMA Covid Clean Gym"
            placeholder="blurred"
            width={673}
            height={484}
          />
        </div>
        <div className="col-span-1">
          <div className="px-12 py-12">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              our commitment to cleanliness
            </h2>
            <p className="mt-2 text-xl font-extrabold tracking-tight text-white sm:text-4xl md:text-3xl">
              COVID-19 Clean
            </p>
            <p className="mt-3 text-sm text-white md:text-base lg:text-xl">
              The impacts of COVID-19 are significant for all martial arts
              academies. Being closed for business and more importantly limited
              in the ways we could connect with our team hurt. That’s why we are
              committed to keeping our facilities, staff and members as safe as
              possible with our COVID-19 Safety Policy in line with health
              recommendations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
