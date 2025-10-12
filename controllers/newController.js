import { addMessage } from "../db/queries.js";

export async function getForm(req, res) {
  res.render("form", { title: "Send a Message!" });
}

export async function postForm(req, res) {
  await addMessage({
    name: req.body.name,
    text: req.body.text,
    added: new Date().toLocaleString(),
  });

  res.redirect("/");
}
