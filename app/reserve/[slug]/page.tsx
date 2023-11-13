import ReserveForm from '@/components/reserve/form';
import ReserveHeader from '@/components/reserve/header';
import { PrismaClient } from '@prisma/client';

import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Reserve Page',
};

const prisma = new PrismaClient();

const fetchRestaurantBySlug = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
  });

  if (!restaurant) {
    notFound();
  }

  return restaurant;
};

const Reservation = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { date: string; partySize: string };
}) => {
  const restaurant = await fetchRestaurantBySlug(params.slug);

  return (
    <>
      <div className='border-t h-screen'>
        <div className='py-9 w-3/5 m-auto'>
          <ReserveHeader
            image={restaurant.main_image}
            name={restaurant.name}
            date={searchParams.date}
            partySize={searchParams.partySize}
          />
          <ReserveForm
            partySize={searchParams.partySize}
            slug={params.slug}
            date={searchParams.date}
          />
        </div>
      </div>
    </>
  );
};

export default Reservation;
