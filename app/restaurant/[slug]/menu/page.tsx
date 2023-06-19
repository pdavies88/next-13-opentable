import RestaurantMenu from '@/components/restaurant/menu'
import RestaurantNavigation from '@/components/restaurant/navigation'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Menu Page'
}

export default function Menu () {
  return (
    <>
      <div className='bg-white w-[100%] rounded p-3 shadow'>
        <RestaurantNavigation />
        <RestaurantMenu />
      </div>
    </>
  )
}
