import { Router } from "express";
import { getDetails, getMessages } from "../controllers/indexController.js";

export const indexRouter = Router();

export let messages = [
  {
    id: 0,
    text: "Hi there, shmoopy!",
    user: "Tangy",
    added: new Date().toLocaleString(),
  },
  {
    id: 1,
    text: "spaaaaaaace",
    user: "Roswell",
    added: new Date().toLocaleString(),
  },
];

indexRouter.get("/", getMessages);
indexRouter.get("/:id/details", getDetails);
