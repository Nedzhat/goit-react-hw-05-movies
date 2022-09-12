import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { fetchMovies } from "services/api-trends";

export const Home = () => {
    const [trends, setTrends] = useState([]);

  useEffect(() => {
    fetchMovies().then(res => {
        setTrends(res)
  }).catch(console.log());
  },[])

    return (
      <main>
        <h1>Trending Today</h1>
        <ul>
          {
            trends.map(({id,title}) => (
              <li key={id}><NavLink to={`/movies/${id}`}>{title}</NavLink></li>
            ))
        }
        </ul>
      </main>
    )
};