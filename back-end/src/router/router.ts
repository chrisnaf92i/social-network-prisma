import { Router } from "express";
import { getAllPost } from "../controller/post";

const router = Router()

router.get("/api/post", getAllPost)

export default router