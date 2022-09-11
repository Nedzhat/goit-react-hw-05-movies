import { useState, useEffect } from "react"
import { Link, useSearchParams } from "react-router-dom";

import { fetchSearchMovies } from "services/api-search";


export const Movies = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        if (query === '') {
            return;
        }
        fetchSearchMovies(query).then(res => setMovies(res));
    }, [query])
    
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
            {movies && <ul>
          {
            movies.map(({id, title}) => (
                <Link to={`${id}`} key={id}><p>{title}</p></Link>
            ))
        }
        </ul>}
    </main>
    )
}