import axios from "axios";

const API_KEY = 'cff5b6264b529338996c58c3bf596dd8';
axios.defaults.baseURL = "https://api.themoviedb.org/3/";

export const serchCastForId = async (id) => {
    try {
        
       const response = await axios.get(`movie/${id}/credits?api_key=${API_KEY}&language=en-US`);    

        if (!response) {
            alert('Error');
            // toast.error('По вашему запросу ничего не найдено!');
        } else {
            return response.data.cast.slice(0,10);
        }
        
    } catch (error) {
        console.log(error);
    }
}