import { React, useState, useEffect } from "react";
import Container from "./moviesContainer";
import Hero from "./heroLanding";

export default function Home(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [ type, setType ] = useState("");

  function filterMovie(){
      setType("&type=movie")
  }

  function searchMovies(term) {
    setSearchTerm(term);
    props.onSelectMovie(null);
  }

  return (
    <div className="full-page">
        <Hero searchMovie={searchMovies} searchTerm={searchTerm} selectMovies={filterMovie} />
      {searchTerm && (
        <Container
          title={"Search Results:"}
          searchTerm={searchTerm}
          onSelectMovie={props.onSelectMovie}
          filterMovie= {type}
        />
      )}
    </div>
  );
}
