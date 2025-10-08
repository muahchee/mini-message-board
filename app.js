import e from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { indexRouter } from "./routes/indexRouter.js";
import { newRouter } from "./routes/newRouter.js";

//--setup stuff--
const app = e();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsPath = path.join(__dirname, "public");
const PORT = process.env.PORT || 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(e.static(assetsPath));
app.use(e.urlencoded({ extended: true }));

//--write code here!--

app.use("/", indexRouter);
app.use("/new", newRouter);

//--more setup stuff--
app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Listening on port ${PORT}!`);
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});
