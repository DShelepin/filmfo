import { useEffect, useState } from 'react';
import MovieApi from '../api';

const genreById = {
  action: 28,
  adventure: 12,
  comedy: 35,
  documentary: 99,
  fantasy: 14,
  horror: 27,
  western: 37,
};

export function useMovies() {
  const [movies, setMovies] = useState({
    upcoming: [],
    popular: [],
    topRated: [],
    action: [],
    adventure: [],
    comedy: [],
    documentary: [],
    fantasy: [],
    horror: [],
    western: [],
  });

  const [isLoading, setIsLodaing] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    Promise.all([
      MovieApi.getUpcoming(),
      MovieApi.getPopular(),
      MovieApi.getTopRated(),
      MovieApi.getMovieByGenreId(genreById.action),
      MovieApi.getMovieByGenreId(genreById.adventure),
      MovieApi.getMovieByGenreId(genreById.comedy),
      MovieApi.getMovieByGenreId(genreById.documentary),
      MovieApi.getMovieByGenreId(genreById.fantasy),
      MovieApi.getMovieByGenreId(genreById.horror),
      MovieApi.getMovieByGenreId(genreById.western),
    ])
      .then((responses) =>
        setMovies({
          upcoming: responses[0],
          popular: responses[1],
          topRated: responses[2],
          action: responses[3],
          adventure: responses[4],
          comedy: responses[5],
          documentary: responses[6],
          fantasy: responses[7],
          horror: responses[8],
          western: responses[9],
        })
      )
      .catch((error) => setError(error?.message || 'Something went wrong'))
      .finally(() => setIsLodaing(false));
  }, []);

  return {
    movies,
    isLoading,
    error,
  };
}
