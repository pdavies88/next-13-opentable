import { findTablesToBooks } from '@/app/services/findTablesToBooks';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const requestUrl = new URL(req.url);
  const searchParams = requestUrl.searchParams;
  const slug = requestUrl.pathname?.split('/')[3];
  const day = searchParams.get('day');
  const time = searchParams.get('time');
  const partySize = searchParams.get('partySize');

  const body = await req.json();
  const {
    bookerEmail,
    bookerPhone,
    bookerFirstName,
    bookerLastName,
    bookerOccasion,
    bookerRequest,
  } = body;

  if (!day || !time || !partySize) {
    return NextResponse.json(
      {
        errorMessage: 'Invalid data provided',
      },
      { status: 400 }
    );
  }

  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      tables: true,
      open_time: true,
      close_time: true,
      id: true,
    },
  });

  if (!restaurant) {
    return NextResponse.json(
      {
        errorMessage: 'Restaurant not found',
      },
      { status: 400 }
    );
  }

  if (
    new Date(`${day}T${time}`) < new Date(`${day}T${restaurant.open_time}`) ||
    new Date(`${day}T${time}`) > new Date(`${day}T${restaurant.close_time}`)
  ) {
    return NextResponse.json(
      {
        errorMessage: 'Restaurant is not open at that time',
      },
      { status: 400 }
    );
  }

  const booking = await findTablesToBooks({
    day,
    time,
    restaurant,
    partySize,
    bookerEmail,
    bookerPhone,
    bookerFirstName,
    bookerLastName,
    bookerOccasion,
    bookerRequest,
  });

  if (!booking) {
    return NextResponse.json(
      {
        errorMessage: 'Invalid data provided',
      },
      { status: 400 }
    );
  }

  return NextResponse.json(booking);
}

// http://localhost:3000/api/restaurant/vivaan-fine-indian-cuisine-ottawa/reserve?day=2023-02-03&time=15:00:00.000Z&partySize=8
