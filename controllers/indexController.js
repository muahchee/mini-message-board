import { CustomNotFoundError } from "../error/CustomNotFoundError.js";
import { messages } from "../routes/indexRouter.js";

export async function getMessages(req, res) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
}

export async function getDetails(req, res) {
  const reqMessage = messages.find((item) => item.id === Number(req.params.id));

  if (!reqMessage) throw new CustomNotFoundError("Message Not Found!");

  res.render("details", {
    message: reqMessage,
  });
}