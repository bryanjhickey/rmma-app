import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function ClassCard({ session }) {
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
    <motion.li
      ref={ref}
      initial="hidden"
      animate={controls}
      transition={{ type: `spring` }}
      variants={CardVariants}
      // whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
      className="overflow-hidden"
    >
      <div className="mr-12 py-12 text-lg leading-6">
        <h3 className="mb-2 font-bold text-green-500">{session.title}</h3>
        <p className="text-base text-gray-100">{session.shortDescription}</p>
      </div>
    </motion.li>
  );
}

export default function ClassesList({ sessions }) {
  return (
    <div id="classes" className="bg-gray-900 py-24">
      <div className="container">
        <div className="pb-12">
          <h2 className="text-base font-semibold uppercase tracking-wide text-green-500">
            Classes
          </h2>
          <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-white sm:text-4xl">
            From White Belt to World Champion
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-200">
            We have classes morning, lunchtime and evening. From Monday through
            to Sunday - there is a class waiting for you.
          </p>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {sessions.map((session) => (
            <ClassCard key={session.id} session={session} />
          ))}
        </ul>
      </div>
    </div>
  );
}
