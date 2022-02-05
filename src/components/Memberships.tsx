/* eslint-disable max-len */
import React from 'react';
import ApplicationForm from './ApplicationForm';
import { TextCard } from './TextCard';

export default function Memberships({ memberships }) {
  return (
    <div id="memberships" className="container py-12 md:py-20 lg:py-24">
      <div className="pb-12">
        <h2 className="text-base font-semibold uppercase tracking-wide text-green-800">
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
      <div className="mb-24 grid grid-cols-1 gap-x-12 gap-y-12 lg:grid-cols-2 lg:gap-x-12 xl:grid-cols-3">
        <div className="col-span-1 xl:col-span-2">
          <div className="grid grid-cols-1 gap-y-12 text-gray-700 md:grid-cols-2 md:gap-x-12 md:gap-y-24">
            {memberships.map((membership) => (
              <TextCard
                id={membership.id}
                title={membership.title}
                overview={membership.shortDescription}
                darkSection={false}
              />
            ))}
          </div>
        </div>
        <div className="col-span-1 xl:col-start-3">
          <div className="h-full bg-green-600 p-8 text-center shadow-2xl lg:flex lg:flex-shrink-0 lg:flex-col lg:justify-center lg:p-12">
            <p className="text-2xl font-medium leading-6 text-white">
              Membership
            </p>
            <div className="mt-4 -ml-8 flex items-center justify-center text-7xl font-extrabold text-gray-900">
              <span className="text-5xl">$</span>
              65
            </div>
            <div className="justify-center text-5xl font-extrabold text-gray-900">
              <p className="text-2xl font-medium text-white">Per Week</p>
            </div>
          </div>
        </div>
      </div>
      <ApplicationForm />
    </div>
  );
}
