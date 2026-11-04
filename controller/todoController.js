import modelTodo from "../model/modelTodo.js";

export const firstData = (req, res) => {
  res.send("home page");
};

export const postData = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || title.trim() === "") {
      res
        .status(500)
        .json({ message: "please provide the title", success: false });
    }

    const data = await modelTodo.create({
      title,
      description,
    });
    res
      .status(201)
      .json({
        message: "user created successfully",
        success: true,
        todo: data,
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
