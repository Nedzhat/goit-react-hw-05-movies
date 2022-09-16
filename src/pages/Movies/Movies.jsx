import { useState, useEffect } from "react"
import { Link, useLocation, useSearchParams } from "react-router-dom";

import { fetchSearchMovies } from "services/api-search";
import { ListOfFilms, FilmItem, NameOfFilm } from "pages/Home/Home.styled";


    const Movies = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    // eslint-disable-next-line
    const [searchParams, setSearchParams] = useSearchParams(); 
        const location = useLocation();
        const lastQuery = searchParams.get('query');
        
        useEffect(() => {
        if (lastQuery) {
            setQuery(lastQuery);
        }
        if (query === '') {
            return;
        }
        fetchSearchMovies(query).then(res => setMovies(res));
    }, [query,lastQuery])
    
    const updateQueryString = (query) => {
    const nextParams = query !== "" ? { query } : {};
    setSearchParams(nextParams);
  };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateQueryString(e.target.elements.query.value);
        setQuery(e.target.elements.query.value);
    }
    
    return ( 
        <main>
            <form onSubmit={handleSubmit}>
                <input type="text" name="query" />
                <button type="submit">Submit</button>
            </form>
            {movies && <ListOfFilms>
          {movies.map(({ id, title, poster_path }) => (
                        <FilmItem key={id}><Link to={`${id}`} state={{ from: location }} style={{ textDecoration: 'none' }}>
                            <NameOfFilm>{title}</NameOfFilm>
                            <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt="Film" />
                            </Link></FilmItem>
                  ))
        }
        </ListOfFilms>}       
    </main>
    )
    }

export default Movies;