import RestaurantDescription from '@/components/restaurant/description';
import RestaurantImages from '@/components/restaurant/images';
import RestaurantNavigation from '@/components/restaurant/navigation';
import RestaurantRating from '@/components/restaurant/rating';
import ReservationCard from '@/components/restaurant/reservationCard';
import RestaurantReviews from '@/components/restaurant/reviews';
import RestuarantTitle from '@/components/restaurant/title';
import { PrismaClient, Review } from '@prisma/client';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Restaurant Page',
};

interface Restaurant {
  id: number;
  name: string;
  images: string[];
  description: string;
  open_time: string;
  close_time: string;
  slug: string;
  reviews: Review[];
}

const prisma = new PrismaClient();

const fetchRestaurantSingle = async (slug: string): Promise<Restaurant> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      name: true,
      images: true,
      description: true,
      slug: true,
      reviews: true,
      open_time: true,
      close_time: true,
    },
  });

  if (!restaurant) {
    notFound();
  }

  return restaurant;
};

export default async function Restaurant({
  params,
}: {
  params: { slug: string };
}) {
  const restaurant = await fetchRestaurantSingle(params.slug);
  const { slug, name, description, images, reviews } = restaurant;
  return (
    <>
      <div className='bg-white w-[70%] rounded p-3 shadow'>
        <RestaurantNavigation slug={slug} />
        <RestuarantTitle name={name} />
        <RestaurantRating reviews={reviews} />
        <RestaurantDescription description={description} />
        <RestaurantImages images={images} />
        <RestaurantReviews reviews={reviews} />
      </div>
      <div className='w-[27%] relative text-reg'>
        <ReservationCard
          openTime={restaurant.open_time}
          closeTime={restaurant.close_time}
        />
      </div>
    </>
  );
}
