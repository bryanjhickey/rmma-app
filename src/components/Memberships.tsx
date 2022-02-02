/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ApplicationForm from './ApplicationForm';

export default function Memberships({ memberships }) {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start(`visible`);
    }
  }, [controls, inView]);

  const CardVariants = {
    hidden: {
      opacity: 0,
      x: `-80px`,
    },
    visible: {
      opacity: 0.9,
      x: `0px`,
      transition: {
        duration: 0.75,
      },
    },
  };

  return (
    <div id="memberships" className="container py-12 md:py-20 lg:py-24">
      <div className="pb-12">
        <h2 className="text-base font-semibold uppercase tracking-wide text-green-600">
          Membership
        </h2>
        <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
          A membership with all the benefits.
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-700">
          Once your application to join has been successful, you’ll become a
          full member. There are no tricks, hidden fees or lock-in contracts.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="col-span-1 md:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {memberships.map((membership) => (
              <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                transition={{ type: `spring` }}
                variants={CardVariants}
                key={membership.title}
                className="relative grid"
              >
                <div className="mr-12 py-12 text-lg leading-6">
                  <h3 className="mb-2 font-medium text-gray-900">
                    {membership.title}
                  </h3>
                  <p className="text-base text-gray-700">
                    {membership.shortDescription}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="col-span-1 md:col-start-3">
          <div className="h-full bg-green-600 p-8 text-center shadow-2xl lg:flex lg:flex-shrink-0 lg:flex-col lg:justify-center lg:p-12">
            <p className="text-2xl font-medium leading-6 text-white">
              Membership
            </p>
            <div className="mt-4 -ml-8 flex items-center justify-center text-7xl font-extrabold text-gray-900">
              <span className="text-5xl">$</span>
              60
            </div>
            <div className="justify-center text-5xl font-extrabold text-gray-900">
              <p className="text-lg font-medium text-white">Per Week</p>
              <a
                href="/membership-policy"
                className="text-sm font-medium text-white underline"
              >
                Learn about our membership policy
              </a>
            </div>
          </div>
        </div>
      </div>
      <ApplicationForm />
    </div>
  );
}
