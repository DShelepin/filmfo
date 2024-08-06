import { useEffect, useState } from 'react';
import MovieApi from '../api';

export function useMovie(id) {
  const [movie, setMovie] = useState(null);

  const [isLoading, setIsLodaing] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setIsLodaing(true);
    MovieApi.getMovie(id)
      .then((response) => setMovie(response))
      .catch((error) => setError(error?.message || 'Something went wrong'))
      .finally(() => setIsLodaing(false));
  }, [id]);

  return {
    movie,
    isLoading,
    error,
  };
}
