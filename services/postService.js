import axios from "axios";
import db from "../db/database.js";

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

/* 
All posts are fetched from db only, returns [], if db doesn't have any data.
fetchAllPosts doesn't fetch data from public API
 */
export const fetchAllPosts = () => {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM posts', (err, rows) => {
            if (err) return reject(err);
            resolve(rows);
        });
    });
};

/* 
If particular id data is not present in the array, 
it will fetch the data from the public API and insert into the db. 
Can check whether its working by immediatly pinging all posts ;) 
*/
export const fetchPostById = (id) => {
    return new Promise((resolve, reject) => {
        //GENAI
        db.get('SELECT * FROM posts WHERE id = ?', [id], async (err, row) => {
            if (err) return reject(err);
            if (row) {
                return resolve(row); // Return from DB if found
            }
        //
            try {
                const response = await axios.get(`${BASE_URL}/${id}`);
                const { userId, title, body } = response.data;

                //GenAI
                db.run(
                    'INSERT INTO posts (id, userId, title, body) VALUES (?, ?, ?, ?)',
                    [id, userId, title, body],
                    (insertErr) => {
                        if (insertErr) return reject(insertErr);
                        resolve({ id, userId, title, body });
                    }
                );
                //
            } catch (apiErr) {
                reject(apiErr);
            }
        });
    });
};