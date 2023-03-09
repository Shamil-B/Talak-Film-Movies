import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div className="card">
      <Link
        to={{
          pathname: "/movie",
          state: { movie: props.movieInfo },
        }}
        onClick={() => props.onSelectMovie(props.movieInfo)}
      >
        <img className="card-img" alt="" src={props.movieInfo.Poster} />
      </Link>

      <h1 className="card-title">{props.movieInfo.Title}</h1>

      <ul className="card-info">
        <li className="year">{props.movieInfo.Year}</li>
        <li className="type">{props.movieInfo.Type}</li>
      </ul>
    </div>
  );
}
