import dotenv from "dotenv";
dotenv.config();

// config/auth.js
export const jwtSecret = process.env.JWT_SECRET || "admin";
