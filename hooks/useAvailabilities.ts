import { useState } from 'react';

export default function useAvailabilities() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState<
    { time: string; available: boolean }[] | null
  >(null);

  const fetchAvailabilities = async ({
    slug,
    partySize,
    day,
    time,
  }: {
    slug: string;
    partySize: string;
    day: string;
    time: string;
  }) => {
    setLoading(true);

    const response = await fetch(
      `http://localhost:3000/api/restaurant/${slug}/availability?day=${day}&time=${time}&partySize=${partySize}`
    );
    if (!response.ok) {
      const error = await response.json();
      setLoading(false);
      setError(error.errorMessage);
    } else {
      const data = await response.json();
      setLoading(false);
      setData(data);
    }
  };

  return { loading, data, error, fetchAvailabilities };
}
