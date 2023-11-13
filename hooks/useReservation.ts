import { Dispatch, SetStateAction, useState } from 'react';

export default function useReservation() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createReservation = async ({
    slug,
    partySize,
    day,
    time,
    bookerFirstName,
    bookerLastName,
    bookerPhone,
    bookerEmail,
    bookerOccasion,
    bookerRequest,
    setDidBook,
  }: {
    slug: string;
    partySize: string;
    day: string;
    time: string;
    bookerFirstName: string;
    bookerLastName: string;
    bookerPhone: string;
    bookerEmail: string;
    bookerOccasion: string;
    bookerRequest: string;
    setDidBook: Dispatch<SetStateAction<boolean>>;
  }) => {
    setLoading(true);

    const reservationOptions = {
      method: 'POST',
      body: JSON.stringify({
        bookerFirstName,
        bookerLastName,
        bookerPhone,
        bookerEmail,
        bookerOccasion,
        bookerRequest,
      }),
    };

    const response = await fetch(
      `http://localhost:3000/api/restaurant/${slug}/reserve?day=${day}&time=${time}&partySize=${partySize}`,
      reservationOptions
    );
    if (!response.ok) {
      const error = await response.json();
      setLoading(false);
      setError(error.errorMessage);
    } else {
      const data = await response.json();
      setLoading(false);
      setDidBook(true);
      return data;
    }
  };

  return { loading, error, createReservation };
}
