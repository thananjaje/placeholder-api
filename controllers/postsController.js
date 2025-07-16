import { fetchAllPosts, fetchPostById } from "../services/postService.js";
import { handleError } from "../utils/errorHandler.js";

export const getAllPosts = async (req, res) => {
    try {
        const posts = await fetchAllPosts();
        res.json(posts);
    } catch (error) {
        handleError(res, error, 'Failed to fetch Posts');
    }
};

export const getPostById = async (req, res) => {
    try {
        const post = await fetchPostById(req.params.id);
        res.json(post);
    } catch (error) {
        handleError(res, error, `Failed to fetch post ID: ${req.params.id}`);
    }
}