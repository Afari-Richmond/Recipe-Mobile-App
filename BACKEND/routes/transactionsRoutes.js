import express from "express";
import { sql } from "../config/db.js";      
import {
  createTransactions,
  deleteTransactionsById,
  getTransactionsByUserId,
  getTransactionSummaryByUserId,
} from "../controllers/transactionsController.js";
const router = express.Router();

router.get("/userId", getTransactionsByUserId);

router.delete("/:id", deleteTransactionsById);

router.get("/summary/:userId", getTransactionSummaryByUserId);

router.post("/", createTransactions);

export default router;
