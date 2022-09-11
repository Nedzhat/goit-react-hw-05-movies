import { useState, useEffect } from "react";
import { Link, useParams, Outlet } from "react-router-dom";

import { serchMovieForId } from "services/api-findById";

export const MovieDetails = () => { 
    const [movie, setMovie] = useState({});
    const { id } = useParams();

    useEffect(() => {
    serchMovieForId(id).then(res => {
        setMovie(res)
  }).catch(console.error());    
    }, [id])
  
  const arrOfGenres = (genres) => {
    if (!genres) {
      return;
    }
    let arr = [];
    for (let i = 0; i < genres.length; i++) {
      arr.push(genres[i].name);
      arr.push(' ');
    }
    return arr;
  }
  const { poster_path, title, release_date, vote_average, overview, genres } = movie;
  return (
    <main>
      <button type="button">Go back</button>
      <div style={{display:"flex", borderBottom:"1px solid black"}}>
      <img width='200px' src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt="Film" />
      <div>
        <h2>
          Movie - {title} {`(${release_date})`}
        </h2>
        <p>
          User Score: {`${parseInt(vote_average*10)}%`}
          </p>
          <h3>Overiew</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{arrOfGenres(genres)}</p>
        </div>
      </div>
      <div>
        <p>Additional information</p>
        <ul>
          <li>
          <Link to="cast"><p>Cast</p></Link>
        </li>
        <li>
          <Link to="reviews"><p>Reviews</p></Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </main>
  );
};
