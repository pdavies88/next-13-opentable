import RestaurantDescription from '@/components/restaurant/description'
import RestaurantImages from '@/components/restaurant/images'
import RestaurantNavigation from '@/components/restaurant/navigation'
import RestaurantRating from '@/components/restaurant/rating'
import ReservationCard from '@/components/restaurant/reservationCard'
import RestaurantReviews from '@/components/restaurant/reviews'
import RestuarantTitle from '@/components/restaurant/title'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Restaurant Page'
}

export default function Restaurant () {
  return (
    <>
      <div className='bg-white w-[70%] rounded p-3 shadow'>
        <RestaurantNavigation />
        <RestuarantTitle />
        <RestaurantRating />
        <RestaurantDescription />
        <RestaurantImages />
        <RestaurantReviews />
      </div>
      <div className='w-[27%] relative text-reg'>
        <ReservationCard />
      </div>
    </>
  )
}
