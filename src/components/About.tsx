/* eslint-disable max-len */
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export default function About() {
  return (
    <div id="about" className="container py-12 md:py-20 lg:py-24">
      <h2 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
        Our Story
      </h2>
      <div className="grid grid-cols-1 gap-x-12 lg:grid-cols-6 lg:gap-y-12">
        <div className="col-span-1 lg:col-span-2">
          <p className="mb-4 text-xl lg:text-lg">
            Renegade is home to people training in Brazilian Jiu Jitsu and Mixed
            Martial Arts.
          </p>
          <p className="mb-4 text-base lg:text-sm">
            Founded in 2010 by Jamie Murray and John Mirabella, the academy is a
            community that celebrates people and culture, skill development and
            great training experiences.
          </p>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <p className="mb-4 text-base lg:text-sm">
            People come for the training but they stay for the community.
          </p>
          <p className="mb-4 text-base lg:text-sm">
            Our instructors have decades of experience in coaching and are black
            belts in Brazilian Jiu Jitsu. Their passion for martial arts is only
            surpassed by their joy in seeing all students find new skills and
            increased happiness at Renegade.
          </p>
        </div>
        <div className="col-span-1 col-start-1 lg:col-span-2">
          <StaticImage
            src="../assets/images/jamie-john.jpg"
            alt="Jamie Murray and John Mirrabella in their gi's at renegade mma"
            placeholder="blurred"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
}
