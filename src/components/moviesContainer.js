import { React, useState, useEffect } from "react";
import Card from "./movieCard";

export default function Container(props) {
  const [movies, setMovies] = useState([]);
  const [curPage, setCurPage] = useState(1);
  const [ type, setType ] = useState(props.movieFilter);
  console.log(type);
  function getMovieRequest() {
    fetch(
      `http://www.omdbapi.com/?s=${props.searchTerm}&page=${curPage}${type}&apikey=52d162b9`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMovies((prevData) => {
          if (data.Search) {
            let newData = [...prevData, ...data.Search];
            return newData;
          }
        });
      });
  }

  useEffect(() => {
    setMovies([]);
    getMovieRequest(curPage);
    getMovieRequest(curPage + 1);

    for (let i = 1; i < 4; i++) {
      document.getElementById(`page-${i}`).setAttribute("class", "");
    }

    document
      .getElementById(`page-${curPage % 3 == 0 ? 3 : curPage % 3}`)
      .setAttribute("class", "focused");

    if (curPage % 3 === 1) {
      for (let i = 0; i < 3; i++) {
        document.getElementById(`page-${i + 1}`).innerHTML = curPage + i;
      }
    }
  }, [props.searchTerm, curPage]);

  var cards = [];
  if (movies) {
    cards = movies.map((item) => (
      <Card
        key={item.imdbID}
        id={item.imdbID}
        movieInfo={item}
        onSelectMovie={props.onSelectMovie}
      />
    ));
  }

  function changePage(n) {
    if (n < 2) {
      setCurPage(1);
      return;
    }
    setCurPage(n);
  }

  return (
    <div className="card-container">
      <div className="container-title">{props.title}</div>
      <div className="cards">{cards}</div>
      {!movies && <h1 className="no-results">No search results found...</h1>}
      <div className="pagination">
        {movies && (
          <ul className="pages">
            <li onClick={() => changePage(curPage - 1)}>
              <a>Previous</a>
            </li>
            <li onClick={() => changePage(1)} id="page-1">
              <a>1</a>
            </li>

            <li onClick={() => changePage(2)} id="page-2">
              <a>2</a>
            </li>
            <li onClick={() => changePage(3)} id="page-3">
              <a>3</a>
            </li>
            <li onClick={() => changePage(curPage + 1)}>
              <a>Next</a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
