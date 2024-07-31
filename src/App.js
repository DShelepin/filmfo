import { Fragment, useEffect, useState } from 'react';
import MovieApi from './api';

const genreById = {
  action: 28,
  adventure: 12,
  comedy: 35,
  documentary: 99,
  fantasy: 14,
  horror: 27,
  western: 37,
};

function App() {
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
      .catch((error) => console.log(error));
  }, []);

  console.log('movies', movies);

  //https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg

  const movieList = [
    {
      key: 'upcoming',
      title: 'Upcoming Movies',
    },
    {
      key: 'popular',
      title: 'Popular Movies',
    },
    {
      key: 'topRated',
      title: 'Top Rated Movies',
    },
    {
      key: 'action',
      title: 'Action Movies',
    },
    {
      key: 'adventure',
      title: 'Adventure Movies',
    },
    {
      key: 'comedy',
      title: 'Comedy Movies',
    },
    {
      key: 'documentary',
      title: 'Documentary Movies',
    },
    {
      key: 'fantasy',
      title: 'Fantasy Movies',
    },
    {
      key: 'horror',
      title: 'Horror Movies',
    },
    {
      key: 'western',
      title: 'Western Movies',
    },
  ];

  return (
    <div className="container mx-auto text-3xl">
      {movieList.map(({ key, title }) => (
        <Fragment key={title + key}>
          <h2 className="mb-5 font-bold mt-10">{title}</h2>
          <div className="overflow-x-auto overflow-y-hidden flex gap-7">
            {movies[key].map(({ poster_path, title, id }) => (
              <div
                key={key + id}
                className=" bg-slate-400 min-w-[150px] h-[225px] overflow-hidden cursor-pointer"
              >
                <img
                  alt={title}
                  src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                  width={150}
                  height={225}
                  className="hover:scale-125 transition-all duration-700"
                />
              </div>
            ))}
          </div>
        </Fragment>
      ))}
    </div>
  );
}

export default App;
