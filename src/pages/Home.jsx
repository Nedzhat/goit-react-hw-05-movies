import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMovies } from "services/api-trends";

export const Home = () => {
    const [trends, setTrends] = useState([]);

  useEffect(() => {
    fetchMovies().then(res => {
        setTrends(res)
        console.log(res);
  }).catch(console.error());
  },[])

    return (
        <main>
        <ul>
          {
            trends.map(({id,title}) => (
              <li key={id}><NavLink to="/movies">{title}</NavLink></li>
            ))
        }
        </ul>
      </main>
    )
};