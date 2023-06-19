import Navigation from '@/components/navigation'
import RestaurantHeader from '@/components/restaurant/header'
import RestaurantMenu from '@/components/restaurant/menu'
import RestaurantNavigation from '@/components/restaurant/navigation'

export default function Menu () {
  return (
    <main className='bg-gray-100 min-h-screen w-screen'>
      <main className='max-w-screen-2xl m-auto bg-white'>
        <Navigation />
        <RestaurantHeader />
        <div className='flex m-auto w-2/3 justify-between items-start 0 -mt-11'>
          <div className='bg-white w-[100%] rounded p-3 shadow'>
            <RestaurantNavigation />
            <RestaurantMenu />
          </div>
        </div>
      </main>
    </main>
  )
}
