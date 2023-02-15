import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyHeader from "./components/MyHeader";
import MyHome from "./components/MyHome";
import MyFooter from "./components/MyFooter";
import TvShows from "./components/TvShows.jsx";
import MovieDetails from "./components/MovieDetails.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <MyHeader />
      <Routes>
        <Route path="/" element={<MyHome />} />
        <Route path="/tv-shows" element={<TvShows />} />
        <Route path="/movie-details/:movieId/" element={<MovieDetails />} />
      </Routes>
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;
