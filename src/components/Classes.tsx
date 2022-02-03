import React from 'react';
import { TextCard } from './TextCard';

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
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-y-12 md:gap-x-12 lg:grid-cols-3 xl:grid-cols-3">
          {sessions.map((session) => (
            <TextCard
              id={session.id}
              title={session.title}
              overview={session.overview}
              darkSection
            />
          ))}
        </div>
      </div>
    </div>
  );
}
