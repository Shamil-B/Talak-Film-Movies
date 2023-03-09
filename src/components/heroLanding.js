import React, { useState, useRef, useEffect } from "react";
import Header from "./header";

export default function Hero(props) {
  const [show, setShow] = useState(true);
  const searchInputRef = useRef(null);
  const searchBtnRef = useRef(null);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === "Enter") {
        searchBtnRef.current.click();
      }
    }

    searchInputRef.current.addEventListener("keydown", handleKeyDown);
    return () => {
      if (searchInputRef.current !== null) {
        searchInputRef.current.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, []);

  function search(searchTerm) {
    if (searchTerm !== "") {
      props.searchMovie(searchTerm);
      setShow(false);
    }
  }

  function searchIt() {
    const searchTerm = searchInputRef.current.value;
    search(searchTerm);
  }

  if (!show) {
    var style = {
      display: "none",
    };
  }

  return (
    <>
    <Header searcher={search} selectMovies = {()=>props.selectMovies()}/>
      <div className="hero hero-landing" style={style}>
        <div className="hero-info">
          <p className="desc">
            <span>Welcome to our movie website</span>, because who doesn't need
            another one of those? So sit back, relax, and prepare to lose
            countless hours of your life to the silver screen.
            <span> Enjoy!</span>
          </p>
        </div>

        <div className="search">
          <input
            type="search"
            placeholder="Enter your keywords..."
            ref={searchInputRef}
          />
          <img
            onClick={searchIt}
            src="./images/search.png"
            className="search-icon"
            ref={searchBtnRef}
          />
        </div>
      </div>
    </>
  );
}
