import { messages } from "../routes/indexRouter.js";

export async function getForm(req, res) {
  res.render("form", { title: "Send a Message!" });
}

export async function postForm(req, res) {
  messages.push({
    id: messages.length,
    user: req.body.user,
    text: req.body.text,
    added: new Date().toLocaleString(),
  });

  res.redirect("/");
}
