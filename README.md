
# Placeholder API – JSONPlaceholder Caching Backend

This is a simple and modular Node.js + Express backend app that fetches data from the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) public API and caches it in a local SQLite database.

If a requested post exists in the DB, it is served from there; if not, it is fetched from JSONPlaceholder, cached, and then returned.

---

## Features

- ✅ Fetch post by ID from cache or API
- ✅ Fetch all cached posts
- ✅ Caching logic with SQLite
- ✅ Modular controller/service structure
- ✅ Centralized error handling
- ✅ Simple `.env` config
- ✅ Built with minimal dependencies

---

## Technologies Used

- Node.js
- Express: We use Express because it makes building web servers and APIs in Node.js fast and straightforward with middleware management.
- Axios: promise-based HTTP client for making requests to external APIs or services from Node.js or the browser. Supports features like request/response interceptors, automatic JSON parsing, and error handling. Works seamlessly with asynchronous code using promises or async/await.
- Nodemon: Nodemon automatically restarts the server whenever we change the code, so we don’t have to do it manually during development.
- Dotenv: Dotenv lets us keep secret keys and settings in a separate file, making our app more secure and easier to configure.
- SQLite (`sqlite3`) : The DB file is created automatically inside db/data.sqlite using the schema defined in schema.sql
- Modular architecture (controllers/services)

---

## Setup Instructions

# 1. Clone the repo
git clone https://github.com/thananjaje/placeholder-api.git
cd placeholder-api

# 2. Install dependencies
npm install

# 3. Set environment variables
cp .env.example .env
# (or manually create .env with PORT=3000)

# 4. Start the server
npm start

# 4. Start the server dev mode with nodemon
npm run dev

## GenAI Note
Some snippets of this codebase & Readme were generated using an LLM (ChatGPT), marked with //GenAI in relevant files.
