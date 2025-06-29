import express, { Router } from "express";
import signup from "./signup.js";
import signin from "./signin.js";


const router=express.Router();

router.post('/signup',signup);
router.post('/signin',signin);

export default router;