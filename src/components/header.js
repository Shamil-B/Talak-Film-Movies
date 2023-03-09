import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  const [term, setTerm] = useState("");
  const searchInputRef = useRef(null);

  // Add event listener to the input element
  const handleSearchKeyDown = (event) => {
    if (event.code === "Enter") {
      handleSearchClick();
    }
  };

  const handleSearchClick = () => {
    const searchTerm = searchInputRef.current.value.trim();
    if (searchTerm !== "") {
      setTerm(searchTerm);
      props.searcher(searchTerm);
    }
  };

  return (
    <div className="header">
      <a href="./" className="home-page">
        <h1 className="logo">Talak Film</h1>
      </a>

      <ul className="navigation">
        <a href="./" className="home-page">
          <li className="home">Home</li>
        </a>
        <li className="genre">Genre</li>
        <li className="country">Country</li>
        <li className="movies" onClick={()=>{
            props.selectMovies()
        }}>Movies</li>
        <li className="tvshows">TV-Shows</li>
        <li className="top-imdb">Top IMDB</li>
      </ul>
      <div className="search">
        <input
          type="search"
          placeholder="Enter your keywords..."
          ref={searchInputRef}
          onKeyDown={handleSearchKeyDown}
        />
        <img
          onClick={handleSearchClick}
          src="./images/search.png"
          className="search-icon"
          id="search-btn-1"
        />
      </div>
    </div>
  );
}
