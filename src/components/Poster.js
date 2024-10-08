export function Poster({ title, poster_path, onClick }) {
  return (
    <div
      className=" bg-slate-400 min-w-[150px] h-[225px] overflow-hidden rounded-lg cursor-pointer"
      onClick={onClick}
    >
      {poster_path ? (
        <img
          alt={title}
          src={`https://image.tmdb.org/t/p/w200${poster_path}`}
          width={150}
          height={225}
          className="min-w-[150px] h-[225px] hover:scale-125 transition-all duration-700"
        />
      ) : (
        <div className="min-w-[150px] h-[225px] bg-slate-700 flex justify-center items-center ">
          Image not found
        </div>
      )}
    </div>
  );
}
