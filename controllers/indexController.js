import { getAllMessages, getMessageById } from "../db/queries.js";
import { CustomNotFoundError } from "../error/CustomNotFoundError.js";


export async function getMessages(req, res) {

const messages = await getAllMessages();
  res.render("index", { title: "Mini Messageboard", messages: messages });
}

export async function getDetails(req, res) {
  const reqMessage = await getMessageById(req.params.id);

  if (!reqMessage) throw new CustomNotFoundError("Message Not Found!");

  res.render("details", {
    message: reqMessage,
  });
}