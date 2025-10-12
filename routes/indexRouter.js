import { Router } from "express";
import { getDetails, getMessages } from "../controllers/indexController.js";

export const indexRouter = Router();

indexRouter.get("/", getMessages);
indexRouter.get("/:id/details", getDetails);
