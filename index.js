const express = require("express");
const app = express();
const userRouter = require("./routes/routes");
require('dotenv').config()
const PORT = process.env.PORT

app.get("/", (req, res) => {
  res.send("hello home page");
});

app.use(express.json());

app.use("/api", userRouter);

app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});
