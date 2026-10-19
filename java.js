import express from "express";
import bodyParser from "body-parser";
import router from "./router/router.js";
const app = express();
const PORT = 3000;
app.use(express.json());

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use("/", router);
app.use("/blogs", router);
app.use("/blogs/:id", router);
app.use("/add-blog", router);
app.use("/", router);

app.use((req, res) => {
  res.status(404).render("error", {
    statusCode: 404,
    message: "Page Not Found",
  });
});

app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});
