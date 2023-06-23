import RestaurantDescription from '@/components/restaurant/description'
import RestaurantImages from '@/components/restaurant/images'
import RestaurantNavigation from '@/components/restaurant/navigation'
import RestaurantRating from '@/components/restaurant/rating'
import ReservationCard from '@/components/restaurant/reservationCard'
import RestaurantReviews from '@/components/restaurant/reviews'
import RestuarantTitle from '@/components/restaurant/title'
import { PrismaClient } from '@prisma/client'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Restaurant Page'
}

interface Restaurant {
  id: number
  name: string
  images: string[]
  description: string
  slug: string
}

const prisma = new PrismaClient()

const fetchRestaurantSingle = async (slug: string): Promise<Restaurant> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug
    },
    select: {
      id: true,
      name: true,
      images: true,
      description: true,
      slug: true
    }
  })

  if (!restaurant) {
    throw new Error()
  }

  return restaurant
}

export default async function Restaurant ({
  params
}: {
  params: { slug: string }
}) {
  const restaurant = await fetchRestaurantSingle(params.slug)
  const { slug, name, description, images } = restaurant
  return (
    <>
      <div className='bg-white w-[70%] rounded p-3 shadow'>
        <RestaurantNavigation slug={slug} />
        <RestuarantTitle name={name} />
        <RestaurantRating />
        <RestaurantDescription description={description} />
        <RestaurantImages images={images} />
        <RestaurantReviews />
      </div>
      <div className='w-[27%] relative text-reg'>
        <ReservationCard />
      </div>
    </>
  )
}
