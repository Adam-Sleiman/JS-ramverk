import React from "react";

export default function Movie({ movie, onDeleteMovie }) {
  // Skapa stjärnor baserat på betyg
  const stars = [];
  for (let i = 0; i < movie.rating; i++) {
    stars.push(
      <img
        key={i}
        src="/images/star.png"
        alt="Star"
        className="movie-star"
      />
    );
  }

  return (
    <li data-grade={movie.rating} data-title={movie.title}>
      {movie.title}{" "}
      {stars}
      <img
        src="/images/delete.png"
        alt="Delete movie"
        className="delete-movie-icon"
        onClick={onDeleteMovie}
      />
    </li>
  );
}
