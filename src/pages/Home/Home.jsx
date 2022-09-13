import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { fetchMovies } from "services/api-trends";
import { MainTitle,ListOfFilms,FilmItem, NameOfFilm } from "./Home.styled";

const Home = () => {
    const [trends, setTrends] = useState([]);

  useEffect(() => {
    fetchMovies().then(res => {
      setTrends(res)
  }).catch(console.log());
  },[])

    return (
      <main>
        <MainTitle>Trending Today</MainTitle>
        <ListOfFilms>
          {
            trends.map(({id,title,poster_path}) => (
              <FilmItem key={id}><NavLink to={`/movies/${id}`}
                style={{ textDecoration: 'none' }}
                state={{ from: "/" }}
              ><NameOfFilm>{title}</NameOfFilm>
              <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt="Film" />
              </NavLink></FilmItem>
            ))
        }
        </ListOfFilms>
      </main>
    )
};

export default Home;