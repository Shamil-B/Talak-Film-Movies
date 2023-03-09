import React, { useState } from "react";
import "./style.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieDetail from "./components/movieDetail";
import Home from "./components/home";
import Footer from "./components/footer";
import Header from "./components/header";

export default function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home onSelectMovie={setSelectedMovie} />} />
          <Route
            path="/movie"
            element={<MovieDetail movie={selectedMovie} />}
          />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}