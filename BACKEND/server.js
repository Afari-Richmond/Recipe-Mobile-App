
import express from 'express';
import dotenv from 'dotenv';
import { sql } from './config/db.js';

dotenv.config();

const app =  express();
const PORT = process.env.PORT || 5001;

async function connectDatabase( ) {
    try {
         await sql`CREATE TABLE IF NOT EXISTS transactions(
            id SERIAL PRIMARY KEY,
            user_id VARCHAR(255) NOT NULL,
            title VARCHAR(255) NOT NULL,
            amount DECIMAL(10, 2) NOT NULL,
            category VARCHAR(255) NOT NULL,
            created_at DATE NOT NULL DEFAULT CURRENT_TIMESTAMP
         )`

         console.log("Database connected successfully");
        
    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1)
    }
}

app.get('/', (req, res) => {
    res.send("The server is working, I will be good at mobile development");
})

connectDatabase().then( () => {
    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
})