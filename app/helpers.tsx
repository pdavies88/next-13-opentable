import { Review } from '@prisma/client';

export const priceLookup = {
  CHEAP: (
    <>
      <span>$</span>
      <span className='text-gray-400'>$$$</span>
    </>
  ),
  REGULAR: (
    <>
      <span>$$</span>
      <span className='text-gray-400'>$$</span>
    </>
  ),
  EXPENSIVE: (
    <>
      <span>$$$</span>
      <span className='text-gray-400'>$</span>
    </>
  ),
};

export const reviewRatingAverage = (reviews: Review[]) => {
  if (!reviews.length) return 0;
  return (
    reviews.reduce((sum, review) => {
      return sum + review.rating;
    }, 0) / reviews.length
  );
};
