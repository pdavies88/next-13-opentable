import SearchCard from '@/components/search/card';
import SearchHeader from '@/components/search/header';
import SearchSidebar from '@/components/search/sidebar';
import { PRICE, PrismaClient } from '@prisma/client';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Search Page',
};

interface SearchParams {
  city?: string;
  cuisine?: string;
  price?: PRICE;
}

const prisma = new PrismaClient();

const fetchRestaurantByCity = (searchParams: SearchParams) => {
  const where: any = {};

  if (searchParams.city) {
    const location = {
      name: {
        equals: searchParams.city.toLowerCase(),
      },
    };
    where.location = location;
  }

  if (searchParams.cuisine) {
    const cuisine = {
      name: {
        equals: searchParams.cuisine.toLowerCase(),
      },
    };
    where.cuisine = cuisine;
  }

  if (searchParams.price) {
    const price = {
      equals: searchParams.price,
    };
    where.price = price;
  }

  const select = {
    id: true,
    name: true,
    main_image: true,
    price: true,
    cuisine: true,
    location: true,
    slug: true,
    reviews: true,
  };

  return prisma.restaurant.findMany({
    where,
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
  searchParams: SearchParams;
}) {
  const restaurants = await fetchRestaurantByCity(searchParams);
  const locationData = await fetchLocations();
  const cuisineData = await fetchCuisines();

  return (
    <>
      <SearchHeader />
      <div className='flex py-4 m-auto w-2/3 justify-between items-start'>
        <SearchSidebar
          locations={locationData}
          cuisines={cuisineData}
          searchParams={searchParams}
        />
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
