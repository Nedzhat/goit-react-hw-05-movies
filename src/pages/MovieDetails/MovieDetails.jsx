import { useState, useEffect, Suspense } from "react";
import { Link, useParams, Outlet, useLocation } from "react-router-dom";

import { serchMovieForId } from "services/api-findById";
import { LinkGoBack } from "./MovieDetails.styled";

const MovieDetails = () => { 
    const [movie, setMovie] = useState({});
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/movies";
  
    useEffect(() => {
    serchMovieForId(id).then(res => {
        setMovie(res)
    }).catch(console.log);    
    }, [id])

  const { poster_path, title, release_date, vote_average, overview, genres } = movie;

  const fixReleaseDate = (date) => {
    if (!date) {
      return;
    }
    return date.slice(0, 4);
  }

  return (
    <main>
      <LinkGoBack to={backLinkHref} style={{ textDecoration: 'none' }}>Go Back</LinkGoBack>
      <div style={{display:"flex", borderBottom:"1px solid black", padding:"30px"}}>
      <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt="Film" />
      <div style={{padding:"0 0 0 20px"}}>
        <h2 style={{margin:"0"}}>
          {title} {`(${fixReleaseDate(release_date)})`}
        </h2>
        <p>
          User Score: {`${parseInt(vote_average*10)}%`}
          </p>
          <h3>Overiew</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          {genres && genres.map(genre => genre.name).join(", ")}
        </div>
      </div>
      <div style={{borderBottom:"1px solid black"}}>
        <p>Additional information</p>
        <ul>
          <li>
          <Link to="cast" state={{from: location.state.from}}><p>Cast</p></Link>
        </li>
        <li>
          <Link to="reviews" state={{from: location.state.from}}><p>Reviews</p></Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading page...</div>}>
            <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;