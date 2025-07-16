import axios from "axios";

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchAllPosts = async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
};

export const fetchPostById = async (id) => {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
};