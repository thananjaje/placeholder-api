import { fetchAllPosts } from "../services/postService.js";

export const getAllPosts = async (req, res) => {
    try {
        const posts = await fetchAllPosts();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to feth posts' });
    }
};