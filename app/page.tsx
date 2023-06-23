import Header from '@/components/global/header'
import Card from '@/components/global/restaurantCard'
import { PrismaClient, Cuisine, Location, PRICE } from '@prisma/client'

export interface RestaurantCardType {
  id: number
  name: string
  main_image: string
  cuisine: Cuisine
  location: Location
  price: PRICE
  slug: string
}

const prisma = new PrismaClient()

const fetchRestaurants = async (): Promise<RestaurantCardType[]> => {
  const restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      cuisine: true,
      location: true,
      price: true,
      slug: true
    }
  })

  return restaurants
}

export default async function Home () {
  const restaurants = await fetchRestaurants()
  return (
    <main>
      <Header />
      <div className='py-3 px-36 mt-10 flex flex-wrap justify-center'>
        {restaurants.map(restaurant => (
          <Card key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </main>
  )
}
