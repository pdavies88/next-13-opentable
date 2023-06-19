import Navigation from '@/components/navigation'
import RestaurantDescription from '@/components/restaurant/description'
import RestaurantHeader from '@/components/restaurant/header'
import RestaurantImages from '@/components/restaurant/images'
import RestaurantNavigation from '@/components/restaurant/navigation'
import RestaurantRating from '@/components/restaurant/rating'
import ReservationCard from '@/components/restaurant/reservationCard'
import RestaurantReviews from '@/components/restaurant/reviews'
import RestuarantTitle from '@/components/restaurant/title'

export default function Restaurant () {
  return (
    <main className='bg-gray-100 min-h-screen w-screen'>
      <main className='max-w-screen-2xl m-auto bg-white'>
        <Navigation />
        <RestaurantHeader />
        <div className='flex m-auto w-2/3 justify-between items-start 0 -mt-11'>
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
        </div>
      </main>
    </main>
  )
}
