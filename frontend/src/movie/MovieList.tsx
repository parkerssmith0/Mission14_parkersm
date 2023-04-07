import { useEffect, useState } from 'react';
import { Movie } from '../types/movie';

function MovieList() {
  const [movieInfo, setMovieInfo] = useState<Movie[]>([]);

  useEffect(() => {
    const getMovie = async () => {
      const rsp = await fetch('https://localhost:4000/movie');
      const temp = await rsp.json();
      setMovieInfo(temp);
    };
    getMovie();
  }, []);

  movieInfo.sort((a, b) => a.title.localeCompare(b.title));
  const editedMovies = movieInfo.filter((m) => m.edited === 'Yes');
  return (
    <>
      <div>
        <h2 className="text-center">List of Movies</h2>
      </div>

      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
              <th>Lent To</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {editedMovies.map((m) => (
              <tr key={m.movieId}>
                <td>{m.title}</td>
                <td>{m.year}</td>
                <td>{m.director}</td>
                <td>{m.rating}</td>
                <td>{m.category}</td>
                <td>{m.edited}</td>
                <td>{m.lentTo}</td>
                <td>{m.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MovieList;
