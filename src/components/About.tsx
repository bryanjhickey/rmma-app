/* eslint-disable max-len */
import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

export default function About() {
  return (
    <div id="about" className="container py-12 md:py-20 lg:py-24">
      <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
        <div className="space-y-5 sm:space-y-4">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Our Story
          </h2>
          <p className="mb-2 text-xl">
            Renegade is home to people training in Brazilian Jiu Jitsu and Mixed
            Martial Arts.
          </p>
          <p className="mb-4">
            Founded in 2010 by Jamie Murray and John Mirrabella, the academy is
            a community that celebrates people and culture, skill development
            and great training experiences.
          </p>
          <p className="mb-4">
            People come for the training but they stay for the community.
          </p>
          <p className="mb-4">
            <Link
              to="about"
              className="text-sm font-normal underline hover:text-green-600"
            >
              Find out more about our story and values &rarr;
            </Link>
          </p>
          <p className="mb-4">
            Our instructors have decades of experience in coaching and are black
            belts in Brazilian Jiu Jitsu. Their passion for martial arts is only
            surpassed by their joy in seeing all students find new skills and
            increased happiness at Renegade.
          </p>
        </div>
        <div className="col-span-2">
          <StaticImage
            className="lg:ml-32"
            src="../assets/images/RMMA-0010.jpg"
            alt="Jamie Murray and John Mirrabella in their gi's at renegade mma"
            placeholder="blurred"
            width={758}
            height={505}
          />
        </div>
      </div>
    </div>
  );
}
