import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type TextCardProps = {
  id: string;
  title: string;
  overview: string;
  darkSection: boolean;
};

export function TextCard({ id, title, overview, darkSection }: TextCardProps) {
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
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      transition={{ type: `spring` }}
      variants={CardVariants}
      key={id}
      className="text-lg leading-6"
    >
      <h3
        className={`mb-2 font-bold ${
          darkSection ? `text-green-500` : `text-gray-900`
        }`}
      >
        {title}
      </h3>
      <p
        className={`text-base ${
          darkSection ? `text-gray-100` : `text-gray-700`
        }`}
      >
        {overview}
      </p>
    </motion.div>
  );
}
