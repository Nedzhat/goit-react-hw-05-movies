import { Routes, Route } from "react-router-dom";
import { Container, Header, Link } from "./App.styled";
import { Movies } from "../pages/Movies";
import { Home } from "../pages/Home";
import { NotFound } from "pages/NotFound";
import { MovieDetails } from "pages/MovieDetails";

export const App = () => {

  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};

