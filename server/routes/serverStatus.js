// routes/serverStatus.js
import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  setTimeout(() => res.json({ status: "Server is running" }), 2000);
});

export default router;
