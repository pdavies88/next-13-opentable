import { reviewRatingAverage } from '@/app/helpers';
import { Review } from '@prisma/client';

const RestaurantRating = ({ reviews }: { reviews: Review[] }) => {
  return (
    <div className='flex items-end'>
      <div className='ratings mt-2 flex items-center'>
        <p
          className='stars'
          style={
            {
              '--rating': reviewRatingAverage(reviews).toFixed(1),
            } as React.CSSProperties
          }
        />
        <p className='text-reg ml-3'>
          {reviewRatingAverage(reviews).toFixed(1)}
        </p>
      </div>
      <div>
        <p className='text-reg ml-4'>
          {reviews.length} Review{reviews.length === 1 ? '' : 's'}
        </p>
      </div>
    </div>
  );
};

export default RestaurantRating;
