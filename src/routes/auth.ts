import express from "express";
import { login, profile, register } from "../actions/auth";

const router = express.Router();

router.post("/login", login);
router.get("/profile", profile);
router.post("/register", register);


export default router;