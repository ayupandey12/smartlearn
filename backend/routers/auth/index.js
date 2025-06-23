import express, { Router } from "express";
import signup from "./signup.js";

const router=express.Router();

router.post('/signup',signup)
export default router;