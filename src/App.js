import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyHeader from "./components/MyHeader";
import MyHome from "./components/MyHome";
import MyFooter from "./components/MyFooter";
import TvShows from "./components/TvShows.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <MyHeader />
      <Routes>
        <Route path="/" element={<MyHome />} />
        <Route path="/tv-shows/" element={<TvShows />} />
      </Routes>
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;
