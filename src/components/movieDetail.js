import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "./header";

export default function MovieDetail(props) {
  var movie = props.movie;
  const [movieDetails, setMovieDetails] = useState(null);

  function fetchDetails() {
    if (movie) {
      fetch(`http://www.omdbapi.com/?i=${movie.imdbID}&apikey=52d162b9`)
        .then((response) => response.json())
        .then((data) => {
          setMovieDetails(data);
        });
    } else {
      window.location.href = "/";
    }
  }

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    movieDetails && (
      <>
        <Header />
        <div className="detail">
          {movieDetails && (
            <div className="hero-info">
              <img className="card-img" alt="" src={movieDetails.Poster} />

              <div className="movie-info">
                <h1 className="title">{movieDetails.Title}</h1>
                <ul className="info">
                  <li className="quality">HD</li>
                  {movieDetails.Ratings[0].Value && (
                    <li className="rating">
                      <img
                        src="./images/star.png"
                        alt=""
                        className="star-icon"
                      />
                      {movieDetails.Ratings[0].Value}
                    </li>
                  )}
                  <li className="duration">{movieDetails.Runtime}</li>
                  <li className="genre">{movieDetails.Genre}</li>
                  <li className="type">{movieDetails.Type}</li>
                  <li className="year">{movieDetails.Year}</li>
                </ul>
                <p className="desc">{movieDetails.Plot}</p>
                <ul className="more-info">
                  <li className="writer">-- Writer: {movieDetails.Writer}</li>
                  <li className="actors">-- Actors: {movieDetails.Actors}</li>
                </ul>{" "}
                <div className="buttons">
                  <a
                    href={`https://imdb.com/title/${movieDetails.imdbID}`}
                    alt=""
                    target="_blank"
                  >
                    <button className="watch-now">Learn More</button>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </>
    )
  );
}
