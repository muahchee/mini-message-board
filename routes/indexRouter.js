import { Router } from "express";
import { CustomNotFoundError } from "../error/CustomNotFoundError.js";

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

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

indexRouter.get("/:id/details", (req, res) => {
  const reqMessage = messages.find(item => item.id === Number(req.params.id))

  res.render("details", {
    message: reqMessage,
  });
});
