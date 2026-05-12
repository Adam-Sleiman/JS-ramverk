import React, { useState } from "react";

export default function AddMovieForm({ onAddMovie }) {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("0");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Kontrollera att båda fälten är ifyllda
    if (title === "" || rating === "0") {
      window.alert("Du måste ange både en titel och ett betyg.");
      return;
    }

    // Lägg till filmen
    onAddMovie(title, rating);
    
    // Töm formuläret
    setTitle("");
    setRating("0");
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Lägg till en film</legend>

        <div className="mb-3">
          <label htmlFor="title-field" className="form-label">
            Titel:
          </label>
          <input
            type="text"
            id="title-field"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="rating-field" className="form-label">
            Betyg:
          </label>
          <select
            id="rating-field"
            className="form-control"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <option value="0">Välj betyg här...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <input type="submit" className="btn btn-success" value="Spara film" />
      </fieldset>
    </form>
  );
}
