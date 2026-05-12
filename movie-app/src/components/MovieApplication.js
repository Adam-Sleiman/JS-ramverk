import React, { useState } from "react";
import AddMovieForm from "./AddMovieForm";
import MovieList from "./MovieList";
import "../styles/MovieApplication.css";

export default function MovieApplication() {
  const [movies, setMovies] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");
  const [nextId, setNextId] = useState(1);

  // Lägg till ny film
  const addMovie = (title, rating) => {
    const newMovie = {
      id: nextId,
      title,
      rating: Number(rating),
    };
    setNextId(nextId + 1);
    setMovies([...movies, newMovie]);
  };

  // Ta bort film
  const deleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  // Sortera filmer
  let displayedMovies = [...movies];
  if (sortOrder === "alpha") {
    displayedMovies.sort((a, b) => {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    });
  } else if (sortOrder === "grade") {
    displayedMovies.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="container">
      <h1>Min filmlista</h1>
      <AddMovieForm onAddMovie={addMovie} />

      <hr />

      <h2>Filmer</h2>

      <div className="button-container">
        <button
          className="btn btn-primary"
          onClick={() => setSortOrder("alpha")}
        >
          Sortera alfabetiskt
        </button>
        <button
          className="btn btn-primary"
          onClick={() => setSortOrder("grade")}
        >
          Sortera efter betyg
        </button>
      </div>

      <MovieList movies={displayedMovies} onDeleteMovie={deleteMovie} />
    </div>
  );
}
