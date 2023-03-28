import { Request, Response } from "express";
import prisma from "../lib/prisma";

export const getAllPost = async (req:Request, res:Response) => {
    const listPosts = await prisma.post.findMany()

    res.status(200).json(listPosts)
}