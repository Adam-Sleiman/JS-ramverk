import React from "react";
import Movie from "./Movie";

export default function MovieList({ movies, onDeleteMovie }) {
  return (
    <ul id="movies">
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          movie={movie}
          onDeleteMovie={() => onDeleteMovie(movie.id)}
        />
      ))}
    </ul>
  );
}
