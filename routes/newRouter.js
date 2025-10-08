import { Router } from "express";
import { getForm, postForm } from "../controllers/newController.js";

export const newRouter = Router();

newRouter.get("/", getForm);
newRouter.post("/", postForm);
