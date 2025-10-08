import { Router } from "express";
import { messages } from "./indexRouter.js";

export const newRouter = Router();

newRouter.get("/", (req, res) => {
  res.render("form", { title: "Send a Message!" });
});

newRouter.post("/", (req, res) => {
  messages.push({
    id: messages.length,
    user: req.body.user,
    text: req.body.text,
    added: new Date().toLocaleString(),
  });

  res.redirect("/")
});
