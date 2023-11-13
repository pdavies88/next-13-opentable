import { PrismaClient, Table, Review } from '@prisma/client';
import { NextResponse } from 'next/server';

export const priceLookup = {
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
  ),
};

export const reviewRatingAverage = (reviews: Review[]) => {
  if (!reviews.length) return 0;
  return (
    reviews.reduce((sum, review) => {
      return sum + review.rating;
    }, 0) / reviews.length
  );
};

export const partyOptions = [
  {
    value: 1,
    label: '1 person',
  },
  {
    value: 2,
    label: '2 people',
  },
  {
    value: 3,
    label: '3 people',
  },
  {
    value: 4,
    label: '4 people',
  },
  {
    value: 5,
    label: '5 people',
  },
  {
    value: 6,
    label: '6 people',
  },
  {
    value: 7,
    label: '7 people',
  },
  {
    value: 8,
    label: '8 people',
  },
  {
    value: 9,
    label: '9 people',
  },
  {
    value: 10,
    label: '10 people',
  },
];

export const times = [
  {
    displayTime: '12:00 AM',
    time: '00:00:00.000Z',
    searchTimes: ['00:00:00.000Z', '00:30:00.000Z', '01:00:00.000Z'],
  },
  {
    displayTime: '12:30 AM',
    time: '00:30:00.000Z',
    searchTimes: [
      '00:00:00.000Z',
      '00:30:00.000Z',
      '01:00:00.000Z',
      '01:30:00.000Z',
    ],
  },
  {
    displayTime: '1:00 AM',
    time: '01:00:00.000Z',
    searchTimes: [
      '00:00:00.000Z',
      '00:30:00.000Z',
      '01:00:00.000Z',
      '01:30:00.000Z',
      '02:00:00.000Z',
    ],
  },
  {
    displayTime: '1:30 AM',
    time: '01:30:00.000Z',
    searchTimes: [
      '00:30:00.000Z',
      '01:00:00.000Z',
      '01:30:00.000Z',
      '02:00:00.000Z',
      '02:30:00.000Z',
    ],
  },
  {
    displayTime: '2:00 AM',
    time: '02:00:00.000Z',
    searchTimes: [
      '01:00:00.000Z',
      '01:30:00.000Z',
      '02:00:00.000Z',
      '02:30:00.000Z',
      '03:00:00.000Z',
    ],
  },
  {
    displayTime: '2:30 AM',
    time: '02:30:00.000Z',
    searchTimes: [
      '01:30:00.000Z',
      '02:00:00.000Z',
      '02:30:00.000Z',
      '03:00:00.000Z',
      '03:30:00.000Z',
    ],
  },
  {
    displayTime: '3:00 AM',
    time: '03:00:00.000Z',
    searchTimes: [
      '02:00:00.000Z',
      '02:30:00.000Z',
      '03:00:00.000Z',
      '03:30:00.000Z',
      '04:00:00.000Z',
    ],
  },
  {
    displayTime: '3:30 AM',
    time: '03:30:00.000Z',
    searchTimes: [
      '02:30:00.000Z',
      '03:00:00.000Z',
      '03:30:00.000Z',
      '04:00:00.000Z',
      '04:30:00.000Z',
    ],
  },
  {
    displayTime: '4:00 AM',
    time: '04:00:00.000Z',
    searchTimes: [
      '03:00:00.000Z',
      '03:30:00.000Z',
      '04:00:00.000Z',
      '04:30:00.000Z',
      '05:00:00.000Z',
    ],
  },
  {
    displayTime: '4:30 AM',
    time: '04:30:00.000Z',
    searchTimes: [
      '03:30:00.000Z',
      '04:00:00.000Z',
      '04:30:00.000Z',
      '05:00:00.000Z',
      '05:30:00.000Z',
    ],
  },
  {
    displayTime: '5:00 AM',
    time: '05:00:00.000Z',
    searchTimes: [
      '04:00:00.000Z',
      '04:30:00.000Z',
      '05:00:00.000Z',
      '05:30:00.000Z',
      '06:00:00.000Z',
    ],
  },
  {
    displayTime: '5:30 AM',
    time: '05:30:00.000Z',
    searchTimes: [
      '04:30:00.000Z',
      '05:00:00.000Z',
      '05:30:00.000Z',
      '06:00:00.000Z',
      '06:30:00.000Z',
    ],
  },
  {
    displayTime: '6:00 AM',
    time: '06:00:00.000Z',
    searchTimes: [
      '05:00:00.000Z',
      '05:30:00.000Z',
      '06:00:00.000Z',
      '06:30:00.000Z',
      '07:00:00.000Z',
    ],
  },
  {
    displayTime: '6:30 AM',
    time: '06:30:00.000Z',
    searchTimes: [
      '05:30:00.000Z',
      '06:00:00.000Z',
      '06:30:00.000Z',
      '07:00:00.000Z',
      '07:30:00.000Z',
    ],
  },
  {
    displayTime: '7:00 AM',
    time: '07:00:00.000Z',
    searchTimes: [
      '06:00:00.000Z',
      '06:30:00.000Z',
      '07:00:00.000Z',
      '07:30:00.000Z',
      '08:00:00.000Z',
    ],
  },
  {
    displayTime: '7:30 AM',
    time: '07:30:00.000Z',
    searchTimes: [
      '06:30:00.000Z',
      '07:00:00.000Z',
      '07:30:00.000Z',
      '08:00:00.000Z',
      '08:30:00.000Z',
    ],
  },
  {
    displayTime: '8:00 AM',
    time: '08:00:00.000Z',
    searchTimes: [
      '07:00:00.000Z',
      '07:30:00.000Z',
      '08:00:00.000Z',
      '08:30:00.000Z',
      '09:00:00.000Z',
    ],
  },
  {
    displayTime: '8:30 AM',
    time: '08:30:00.000Z',
    searchTimes: [
      '07:30:00.000Z',
      '08:00:00.000Z',
      '08:30:00.000Z',
      '09:00:00.000Z',
      '09:30:00.000Z',
    ],
  },
  {
    displayTime: '9:00 AM',
    time: '09:00:00.000Z',
    searchTimes: [
      '08:00:00.000Z',
      '08:30:00.000Z',
      '09:00:00.000Z',
      '09:30:00.000Z',
      '10:00:00.000Z',
    ],
  },
  {
    displayTime: '9:30 AM',
    time: '09:30:00.000Z',
    searchTimes: [
      '08:30:00.000Z',
      '09:00:00.000Z',
      '09:30:00.000Z',
      '10:00:00.000Z',
      '10:30:00.000Z',
    ],
  },
  {
    displayTime: '10:00 AM',
    time: '10:00:00.000Z',
    searchTimes: [
      '09:00:00.000Z',
      '09:30:00.000Z',
      '10:00:00.000Z',
      '10:30:00.000Z',
      '11:00:00.000Z',
    ],
  },
  {
    displayTime: '10:30 AM',
    time: '10:30:00.000Z',
    searchTimes: [
      '09:30:00.000Z',
      '10:00:00.000Z',
      '10:30:00.000Z',
      '11:00:00.000Z',
      '11:30:00.000Z',
    ],
  },
  {
    displayTime: '11:00 AM',
    time: '11:00:00.000Z',
    searchTimes: [
      '10:00:00.000Z',
      '10:30:00.000Z',
      '11:00:00.000Z',
      '11:30:00.000Z',
      '12:00:00.000Z',
    ],
  },
  {
    displayTime: '11:30 AM',
    time: '11:30:00.000Z',
    searchTimes: [
      '10:30:00.000Z',
      '11:00:00.000Z',
      '11:30:00.000Z',
      '12:00:00.000Z',
      '12:30:00.000Z',
    ],
  },
  {
    displayTime: '12:00 PM',
    time: '12:00:00.000Z',
    searchTimes: [
      '11:00:00.000Z',
      '11:30:00.000Z',
      '12:00:00.000Z',
      '12:30:00.000Z',
      '13:00:00.000Z',
    ],
  },
  {
    displayTime: '12:30 PM',
    time: '12:30:00.000Z',
    searchTimes: [
      '11:30:00.000Z',
      '12:00:00.000Z',
      '12:30:00.000Z',
      '13:00:00.000Z',
      '13:30:00.000Z',
    ],
  },
  {
    displayTime: '1:00 PM',
    time: '13:00:00.000Z',
    searchTimes: [
      '12:00:00.000Z',
      '12:30:00.000Z',
      '13:00:00.000Z',
      '13:30:00.000Z',
      '14:00:00.000Z',
    ],
  },
  {
    displayTime: '1:30 PM',
    time: '13:30:00.000Z',
    searchTimes: [
      '12:30:00.000Z',
      '13:00:00.000Z',
      '13:30:00.000Z',
      '14:00:00.000Z',
      '14:30:00.000Z',
    ],
  },
  {
    displayTime: '2:00 PM',
    time: '14:00:00.000Z',
    searchTimes: [
      '13:00:00.000Z',
      '13:30:00.000Z',
      '14:00:00.000Z',
      '14:30:00.000Z',
      '15:00:00.000Z',
    ],
  },
  {
    displayTime: '2:30 PM',
    time: '14:30:00.000Z',
    searchTimes: [
      '13:30:00.000Z',
      '14:00:00.000Z',
      '14:30:00.000Z',
      '15:00:00.000Z',
      '15:30:00.000Z',
    ],
  },
  {
    displayTime: '3:00 PM',
    time: '15:00:00.000Z',
    searchTimes: [
      '14:00:00.000Z',
      '14:30:00.000Z',
      '15:00:00.000Z',
      '15:30:00.000Z',
      '16:00:00.000Z',
    ],
  },
  {
    displayTime: '3:30 PM',
    time: '15:30:00.000Z',
    searchTimes: [
      '14:30:00.000Z',
      '15:00:00.000Z',
      '15:30:00.000Z',
      '16:00:00.000Z',
      '16:30:00.000Z',
    ],
  },
  {
    displayTime: '4:00 PM',
    time: '16:00:00.000Z',
    searchTimes: [
      '15:00:00.000Z',
      '15:30:00.000Z',
      '16:00:00.000Z',
      '16:30:00.000Z',
      '17:00:00.000Z',
    ],
  },
  {
    displayTime: '4:30 PM',
    time: '16:30:00.000Z',
    searchTimes: [
      '15:30:00.000Z',
      '16:00:00.000Z',
      '16:30:00.000Z',
      '17:00:00.000Z',
      '17:30:00.000Z',
    ],
  },
  {
    displayTime: '5:00 PM',
    time: '17:00:00.000Z',
    searchTimes: [
      '16:00:00.000Z',
      '16:30:00.000Z',
      '17:00:00.000Z',
      '17:30:00.000Z',
      '18:00:00.000Z',
    ],
  },
  {
    displayTime: '5:30 PM',
    time: '17:30:00.000Z',
    searchTimes: [
      '16:30:00.000Z',
      '17:00:00.000Z',
      '17:30:00.000Z',
      '18:00:00.000Z',
      '18:30:00.000Z',
    ],
  },
  {
    displayTime: '6:00 PM',
    time: '18:00:00.000Z',
    searchTimes: [
      '17:00:00.000Z',
      '17:30:00.000Z',
      '18:00:00.000Z',
      '18:30:00.000Z',
      '19:00:00.000Z',
    ],
  },
  {
    displayTime: '6:30 PM',
    time: '18:30:00.000Z',
    searchTimes: [
      '17:30:00.000Z',
      '18:00:00.000Z',
      '18:30:00.000Z',
      '19:00:00.000Z',
      '19:30:00.000Z',
    ],
  },
  {
    displayTime: '7:00 PM',
    time: '19:00:00.000Z',
    searchTimes: [
      '18:00:00.000Z',
      '18:30:00.000Z',
      '19:00:00.000Z',
      '19:30:00.000Z',
      '20:00:00.000Z',
    ],
  },
  {
    displayTime: '7:30 PM',
    time: '19:30:00.000Z',
    searchTimes: [
      '18:30:00.000Z',
      '19:00:00.000Z',
      '19:30:00.000Z',
      '20:00:00.000Z',
      '20:30:00.000Z',
    ],
  },
  {
    displayTime: '8:00 PM',
    time: '20:00:00.000Z',
    searchTimes: [
      '19:00:00.000Z',
      '19:30:00.000Z',
      '20:00:00.000Z',
      '20:30:00.000Z',
      '21:00:00.000Z',
    ],
  },
  {
    displayTime: '8:30 PM',
    time: '20:30:00.000Z',
    searchTimes: [
      '19:30:00.000Z',
      '20:00:00.000Z',
      '20:30:00.000Z',
      '21:00:00.000Z',
      '21:30:00.000Z',
    ],
  },
  {
    displayTime: '9:00 PM',
    time: '21:00:00.000Z',
    searchTimes: [
      '20:00:00.000Z',
      '20:30:00.000Z',
      '21:00:00.000Z',
      '21:30:00.000Z',
      '22:00:00.000Z',
    ],
  },
  {
    displayTime: '9:30 PM',
    time: '21:30:00.000Z',
    searchTimes: [
      '20:30:00.000Z',
      '21:00:00.000Z',
      '21:30:00.000Z',
      '22:00:00.000Z',
      '22:30:00.000Z',
    ],
  },
  {
    displayTime: '10:00 PM',
    time: '22:00:00.000Z',
    searchTimes: [
      '21:00:00.000Z',
      '21:30:00.000Z',
      '22:00:00.000Z',
      '22:30:00.000Z',
      '23:00:00.000Z',
    ],
  },
  {
    displayTime: '10:30 PM',
    time: '22:30:00.000Z',
    searchTimes: [
      '21:30:00.000Z',
      '22:00:00.000Z',
      '22:30:00.000Z',
      '23:00:00.000Z',
      '23:30:00.000Z',
    ],
  },
  {
    displayTime: '11:00 PM',
    time: '23:00:00.000Z',
    searchTimes: [
      '22:00:00.000Z',
      '22:30:00.000Z',
      '23:00:00.000Z',
      '23:30:00.000Z',
    ],
  },
  {
    displayTime: '11:30 PM',
    time: '23:30:00.000Z',
    searchTimes: ['22:30:00.000Z', '23:00:00.000Z', '23:30:00.000Z'],
  },
];

const prisma = new PrismaClient();

export const findAvailabileTables = async ({
  time,
  day,
  restaurant,
  partySize,
}: {
  time: string;
  day: string;
  partySize: string;
  restaurant: {
    tables: Table[];
    open_time: string;
    close_time: string;
  };
}) => {
  const searchTimes = times.find((t) => {
    return t.time === time;
  })?.searchTimes;

  if (!searchTimes) {
    return NextResponse.json(
      {
        errorMessage: 'Invalid data provided',
      },
      { status: 400 }
    );
  }

  const bookings = await prisma.booking.findMany({
    where: {
      booking_time: {
        gte: new Date(`${day}T${searchTimes[0]}`),
        lte: new Date(`${day}T${searchTimes[searchTimes.length - 1]}`),
      },
    },
    select: {
      number_of_people: true,
      booking_time: true,
      tables: true,
    },
  });

  const bookingTablesObj: { [key: string]: { [key: number]: true } } = {};

  bookings.forEach((booking) => {
    bookingTablesObj[booking.booking_time.toISOString()] =
      booking.tables.reduce((obj, table) => {
        return {
          ...obj,
          [table.table_id]: true,
        };
      }, {});
  });

  const tables = restaurant.tables;

  // All tables
  const searchTimesWithTables = searchTimes.map((searchTime) => {
    return {
      date: new Date(`${day}T${searchTime}`),
      time: searchTime,
      tables,
    };
  });

  // Remove unavailable tables
  searchTimesWithTables.forEach((t) => {
    t.tables = t.tables.filter((table) => {
      if (bookingTablesObj[t.date.toISOString()]) {
        if (bookingTablesObj[t.date.toISOString()][table.id]) return false;
      }
      return true;
    });
  });

  // Only show available tables when the restuarant is open
  const availabilities = searchTimesWithTables
    .map((t) => {
      const sumSeats = t.tables.reduce((sum, table) => {
        return sum + table.seats;
      }, 0);

      return {
        time: t.time,
        available: sumSeats >= parseInt(partySize),
      };
    })
    .filter((availability) => {
      const timeIsAfterOpeningHour =
        new Date(`${day}T${availability.time}`) >=
        new Date(`${day}T${restaurant.open_time}`);
      const timeIsBeforeClosingHour =
        new Date(`${day}T${availability.time}`) <=
        new Date(`${day}T${restaurant.close_time}`);

      return timeIsAfterOpeningHour && timeIsBeforeClosingHour;
    });

  return availabilities;
};
