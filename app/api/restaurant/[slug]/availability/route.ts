import { findAvailabileTables } from '@/app/services/findAvailableTables';
import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const pathName = req.nextUrl.pathname;
  const slug = pathName?.split('/')[3];
  const day = req.nextUrl.searchParams.get('day');
  const time = req.nextUrl.searchParams.get('time');
  const partySize = req.nextUrl.searchParams.get('partySize');

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
    },
  });

  if (!restaurant) {
    return NextResponse.json(
      {
        errorMessage: 'Invalid data provided',
      },
      { status: 400 }
    );
  }

  const availabilities = await findAvailabileTables({
    day,
    time,
    restaurant,
    partySize,
  });

  if (!availabilities) {
    return NextResponse.json(
      {
        errorMessage: 'Invalid data provided',
      },
      { status: 400 }
    );
  }

  return NextResponse.json(availabilities);
}

// http://localhost:3000/api/restaurant/vivaan-fine-indian-cuisine-ottawa/availability?day=2023-02-03&time=15:00:00.000Z&partySize=8
