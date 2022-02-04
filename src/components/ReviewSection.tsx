import React from 'react';
import { ReviewCard } from './ReviewCard';

export default function ReviewSection({ reviews }) {
  return (
    <div className="bg-gray-900 py-24">
      <div className="container">
        <div className="pb-12">
          <h2 className="text-base font-semibold uppercase tracking-wide text-green-500">
            GOOGLE REVIEWS
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-200">
            Don&apos;t just take our word for it. Check out what others say
            about being members at Renagade.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-12">
          {reviews.map((review) => (
            <div className="col-span-1">
              <ReviewCard
                id={review.id}
                name={review.author_name}
                text={review.text}
                reviewLink={review.author_url}
                time={review.relative_time_description}
                rating={review.rating}
                darkSection
              />
            </div>
          ))}
        </div>
        <p className="pt-12 text-right text-xs text-gray-300">
          Tells us what you think.{` `}
          <a
            href="https://www.google.com/search?q=renagde+mma&oq=renagde+mma&aqs=chrome..69i57j46i13i175i199j0i13j46i13i175i199j0i13l4j0i22i30.4392j1j9&sourceid=chrome&ie=UTF-8#lrd=0x6ad65d191140a833:0xfa85d323f5f6f44,1,,,"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 after:content-['_↗']"
          >
            Leave a review.
          </a>
        </p>
      </div>
    </div>
  );
}
