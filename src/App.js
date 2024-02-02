import { useEffect } from "react";

import "./App.css";
import SearchIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com?apikey=ebefa568";

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.search);
  };
  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return <h1>App</h1>;
};

export default App;
