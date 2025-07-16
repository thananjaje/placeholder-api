import express, { Router } from 'express';
import dotenv from 'dotenv';
import router from './routes/posts.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/post', router);

app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);
});