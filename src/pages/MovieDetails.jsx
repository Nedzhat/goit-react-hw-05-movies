import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { serchMovieForId } from "services/api-findById";


export const MovieDetails = () => { 
    const [movie, setMovie] = useState({});
    const { id } = useParams();

    useEffect(() => {
    serchMovieForId(id).then(res => {
        setMovie(res)
        console.log(res);
  }).catch(console.error());    
    }, [id])
    
  return (
    <main>
          <img width='200px' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" />
      <div>
        <h2>
          Movie - {movie.title} - {id}
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          sunt excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate
          a, sed reprehenderit? Deleniti optio quasi, amet natus reiciendis
          atque fuga dolore? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Impedit suscipit quisquam incidunt commodi fugiat aliquam
          praesentium ipsum quos unde voluptatum?
        </p>
      </div>
    </main>
  );
};
