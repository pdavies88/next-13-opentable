import SearchCard from '@/components/search/card';
import SearchHeader from '@/components/search/header';
import SearchSidebar from '@/components/search/sidebar';
import { PrismaClient } from '@prisma/client';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Search Page',
};

const prisma = new PrismaClient();

const fetchRestaurantByCity = (city: string | undefined) => {
  const select = {
    id: true,
    name: true,
    main_image: true,
    price: true,
    cuisine: true,
    location: true,
    slug: true,
  };

  if (!city) return prisma.restaurant.findMany({ select });

  return prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: city.toLowerCase(),
        },
      },
    },
    select,
  });
};

const fetchLocations = async () => {
  return prisma.location.findMany();
};

const fetchCuisines = async () => {
  return prisma.cuisine.findMany();
};

export default async function Search({
  searchParams,
}: {
  searchParams: { city: string };
}) {
  const restaurants = await fetchRestaurantByCity(searchParams.city);
  const locationData = await fetchLocations();
  const cuisineData = await fetchCuisines();

  return (
    <>
      <SearchHeader />
      <div className='flex py-4 m-auto w-2/3 justify-between items-start'>
        <SearchSidebar locations={locationData} cuisines={cuisineData} />
        <div className='w-5/6'>
          {!!restaurants.length ? (
            <>
              {restaurants.map((restaurant) => (
                <SearchCard key={restaurant.id} restaurant={restaurant} />
              ))}
            </>
          ) : (
            <p>No restaurants can be found</p>
          )}
        </div>
      </div>
    </>
  );
}
