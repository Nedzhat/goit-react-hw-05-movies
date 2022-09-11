import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { serchCastForId } from "services/api-findCast";

export const Cast = () => {
    const [cast, setCast] = useState([]);
    const { id } = useParams();

    useEffect(() => {
    serchCastForId(id).then(res => {
        setCast(res)
  }).catch(console.error());    
    }, [id])

    return (
        <div>
            <ul>
                {cast.map(({profile_path, name, character, id}) => (
                    <li key={id}>
                    <img width='50px' src={`https://image.tmdb.org/t/p/original/${profile_path}`} alt="Hero"/>
                    <p>{ name }</p>
                    <p>{ character }</p>
                </li>
                ))}
            </ul>
        </div>
    )
}