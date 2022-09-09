import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { fetchSearchMovies } from "services/api-search";


export const Movies = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        if (query === '') {
            return;
        }
        fetchSearchMovies(query).then(res => setMovies(res));
    }, [query])
    

    const handleSubmit = (e) => {
        e.preventDefault();
        setQuery(e.target.elements.query.value);
    }

    return ( 
        <main>
            <form onSubmit={handleSubmit}>
                <input type="text" name="query"/>
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