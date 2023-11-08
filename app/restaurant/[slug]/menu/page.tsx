import RestaurantMenu from '@/components/restaurant/menu';
import RestaurantNavigation from '@/components/restaurant/navigation';
import { PrismaClient } from '@prisma/client';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Menu Page',
};

const prisma = new PrismaClient();

const fetchRestaurantMenu = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      items: true,
    },
  });
  if (!restaurant) {
    throw new Error('Cannot find menu');
  }

  return restaurant.items;
};

export default async function Menu({ params }: { params: { slug: string } }) {
  const menu = await fetchRestaurantMenu(params.slug);
  return (
    <>
      <div className='bg-white w-[100%] rounded p-3 shadow'>
        <RestaurantNavigation slug={params.slug} />
        <RestaurantMenu menu={menu} />
      </div>
    </>
  );
}
