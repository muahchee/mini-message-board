import { addMessage, getMessageByText } from "../db/queries.js";
import { body, validationResult, query, matchedData } from "express-validator";

const textLengthErr = "must be 1 to 200 characters";
const repeatErr = "No repeat messages allowed.";

const validatePost = [
  body("name").trim(),
  body("text")
    .trim()
    .isLength({ min: 1, max: 200 })
    .withMessage(`Messages ${textLengthErr}`)
    .custom(async (value) =>{
       const message = await getMessageByText(value);
       if (message) throw new Error ("Message already exists!")
      })
    .withMessage(repeatErr),
];

export async function getForm(req, res) {
  res.render("form", { title: "Send a Message!" });
}

export const postForm = [
  validatePost,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("form", {
        title: "Send a Message!",
        errors: errors.array(),
      });
    }
    const { name, text } = matchedData(req);
    await addMessage({
      name: name,
      text: text,
      added: new Date().toLocaleString(),
    });

    res.redirect("/");
  },
];

// export async function postForm(req, res) {
//   await addMessage({
//     name: req.body.name,
//     text: req.body.text,
//     added: new Date().toLocaleString(),
//   });

//   res.redirect("/");
// }
