import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { serchReviewsForId } from "services/api-findReviews";

export const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { id } = useParams();

    useEffect(() => {
    serchReviewsForId(id).then(res => {
        setReviews(res)
  }).catch(console.error());    
    }, [id])
    
    return (
        <div>
            <ul>
                {reviews.length > 0 ? reviews.map(({author, content, id}) => (
                    <li key={id}>
                    <p>{ author }</p>
                    <p>{ content }</p>
                </li>
                )) : (<p>We don't have any reviews for this movie.</p>)}
            </ul>
        </div>
    )
}