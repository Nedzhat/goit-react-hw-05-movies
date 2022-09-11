import axios from "axios";

const API_KEY = 'cff5b6264b529338996c58c3bf596dd8';
axios.defaults.baseURL = "https://api.themoviedb.org/3/";

export const serchReviewsForId = async (id) => {
    try {
        
       const response = await axios.get(`movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`);    

        if (!response) {
            alert('Error');
            // toast.error('По вашему запросу ничего не найдено!');
        } else {
            return response.data.results
        }
        
    } catch (error) {
        console.log(error);
    }
}
