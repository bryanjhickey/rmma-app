import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { GatsbyImage } from 'gatsby-plugin-image';

import { useInView } from 'react-intersection-observer';

export default function Hero({ hero }) {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start(`visible`);
    }
  }, [controls, inView]);

  const HeroVariants = {
    hidden: {
      opacity: 0,
      x: `-80px`,
    },
    visible: {
      opacity: 1,
      x: `0px`,
      transition: {
        duration: 0.75,
      },
    },
  };
  return (
    <div className="bg-white">
      <div>
        {/* Hero card */}
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-full" />
          <div className="relative shadow-xl sm:overflow-hidden">
            <div className="absolute inset-0">
              <GatsbyImage
                className="h-full w-full object-cover"
                image={hero.image.asset.gatsbyImageData}
                alt={hero.title}
              />
              <div className="absolute inset-0 bg-gray-800 opacity-50 mix-blend-multiply" />
            </div>
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              transition={{ type: `spring` }}
              variants={HeroVariants}
              className="relative"
            >
              <div className="container" style={{ height: `70vh` }}>
                <div className="absolute bottom-24">
                  <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                    {hero.title}
                  </h1>
                  <p className="mx-auto mt-6 max-w-lg text-xl text-white">
                    {hero.copy}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
