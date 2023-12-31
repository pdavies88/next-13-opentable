import { Review } from '@prisma/client';
import React from 'react';

const RestaurantReviewCard = ({ review }: { review: Review }) => {
  const name = `${review.first_name} ${review.last_name}`;
  const initials = `${review.first_name.charAt(0)}${review.last_name.charAt(
    0
  )}`;
  return (
    <div className='border-b pb-7 mb-7'>
      <div className='flex'>
        <div className='w-1/6 flex flex-col items-center'>
          <div className='rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center'>
            <h2 className='text-white text-2xl uppercase'>{initials}</h2>
          </div>
          <p className='text-center'>{name}</p>
        </div>
        <div className='ml-10 w-5/6'>
          <div className='flex items-center'>
            <div
              className='flex mr-5 stars'
              style={
                {
                  '--rating': review.rating,
                } as React.CSSProperties
              }
            />
          </div>
          <div className='mt-5'>
            <p className='text-lg font-light'>{review.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantReviewCard;
