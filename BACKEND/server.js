
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app =  express();
const PORT = process.env.PORT || 5001;

app.get('/', (req, res) => {
    res.send("The server is working, I will be good at mobile development");
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});