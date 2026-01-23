import express from "express";
import dotenv from "dotenv";
import { sql } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import transactionsRoutes from "./routes/transactionsRoutes.js";
import { connectDatabase } from "./config/db.js";

dotenv.config();

const app = express();
app.use(rateLimiter);
app.use(express.json());
const PORT = process.env.PORT || 5001;

app.use("/api/health", (req, res) => {
  res.status(200).send("API is healthy");
});

app.use("/api/transactions", transactionsRoutes);

connectDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
