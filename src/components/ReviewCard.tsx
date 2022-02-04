import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import StarRating from '@/components/utils/StarRating';

type ReviewCardProps = {
  id: string;
  name: string;
  reviewLink: string;
  rating: number;
  text: string;
  time: string;
  darkSection: boolean;
};

export function ReviewCard({
  id,
  name,
  text,
  reviewLink,
  rating,
  time,
  darkSection,
}: ReviewCardProps) {
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
    <motion.blockquote
      ref={ref}
      initial="hidden"
      animate={controls}
      transition={{ type: `spring` }}
      variants={CardVariants}
      key={id}
      className="mt-12 md:flex md:flex-grow md:flex-col"
    >
      <div
        className={`md:flex-grow ${
          darkSection ? `text-white` : `text-gray-700`
        }`}
      >
        <StarRating rating={rating} />
        <a
          href={reviewLink}
          className={`text-base text-gray-700 hover:text-green-600 ${
            darkSection ? `text-white hover:text-green-500` : `text-gray-700`
          }`}
        >
          <div className="mt-2 pb-6">
            <h4 className="font-bold">{name}</h4>
            <p className="text-xs">({time})</p>
          </div>
        </a>
        <p className="text-xs font-normal">{text}</p>
      </div>
    </motion.blockquote>
  );
}
