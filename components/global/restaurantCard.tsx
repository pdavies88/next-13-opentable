import { RestaurantCardType } from '@/app/page'
import Link from 'next/link'

interface Props {
  restaurant: RestaurantCardType
}

const RestaurantCard = ({ restaurant }: Props) => {
  const { name, cuisine, main_image, slug, price, location } = restaurant

  const priceLookup = {
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
    )
  }

  return (
    <div className='w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer'>
      <Link href={`/restaurant/${slug}`}>
        <img src={main_image} alt='' className='w-full h-36' />
        <div className='p-1'>
          <h3 className='font-bold text-2xl mb-2'>{name}</h3>
          <div className='flex items-start'>
            <div className='flex mb-2'>*****</div>
            <p className='ml-2'>77 reviews</p>
          </div>
          <div className='flex text-reg font-light capitalize'>
            <p className='mr-3'>{cuisine.name}</p>
            <p className='mr-3'>{priceLookup[price]}</p>
            <p>{location.name}</p>
          </div>
          <p className='text-sm mt-1 font-bold'>Booked 3 times today</p>
        </div>
      </Link>
    </div>
  )
}

export default RestaurantCard
