import axios from "axios";

export const getImages = async (query, page = 1) => {

    try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}?key=${process.env.REACT_APP_API_KEY}&q=${query}&per_page=12&page=${page}`)
        return response.data
    } catch (error) {
        console.log(error.messege.data);
    }
}