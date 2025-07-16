import { fetchAllPosts, fetchPostById } from "../services/postService.js";

export const getAllPosts = async (req, res) => {
    try {
        const posts = await fetchAllPosts();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
};

export const getPostById = async (req, res) => {
    try {
        const post = await fetchPostById(req.params.id);
        res.json(post);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch post by ID' });
    }
}