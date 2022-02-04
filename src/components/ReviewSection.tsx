import React from 'react';
import { ReviewCard } from './ReviewCard';

export default function ReviewSection({ reviews, placeData }) {
  return (
    <div className="bg-gray-900 py-12">
      <div className="container">
        <div>
          <h2 className="text-base font-semibold uppercase tracking-wide text-green-500">
            GOOGLE REVIEWS
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-200">
            Don&apos;t just take our word for it. Check out what others say
            about Renegade.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-12">
          {reviews.map((review) => (
            <div key={review.id} className="col-span-1">
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
        <div className="mt-6 flex justify-between border-t-2 border-gray-800 pt-6 text-sm text-white">
          <div>
            {` `}
            Tells us what you think.{` `}
            <a
              href="https://www.google.com/search?q=renagde+mma&oq=renagde+mma&aqs=chrome..69i57j46i13i175i199j0i13j46i13i175i199j0i13l4j0i22i30.4392j1j9&sourceid=chrome&ie=UTF-8#lrd=0x6ad65d191140a833:0xfa85d323f5f6f44,1,,,"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 after:content-['_↗']"
            >
              Leave a review.
            </a>
          </div>
          {placeData.map((place) => (
            <div key={place.rating}>
              <p className="text-right">
                average
                {` `}
                <span className="font-bold text-green-600">{place.rating}</span>
                {` `}
                stars (from
                {` `}
                <span className="font-bold text-green-600">
                  {place.user_ratings_total}
                </span>
                {` `}
                reviews).
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
