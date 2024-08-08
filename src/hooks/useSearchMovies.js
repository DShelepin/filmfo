import { useEffect, useState } from 'react';
import MovieApi from '../api';

export function useSearchMovies(query) {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLodaing] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (query) {
      setIsLodaing(true);
      MovieApi.search(query)
        .then((response) => setMovies(response))
        .catch((error) => setError(error?.message || 'Something went wrong'))
        .finally(() => setIsLodaing(false));
    }
  }, [query]);

  return {
    movies,
    isLoading,
    error,
  };
}
