import blogs from "../model/user.js";

export const fetchData = (req, res) => {
  res.render("home", { title: "home blogs" });
};

export const fetchAll = (req, res) => {
  console.log("fetch all controlling running");
  console.log("blogs:", blogs);
  res.render("blogs", { blogs });
};

export const fetchDetail = (req, res) => {
  const userid = parseInt(req.params.id);
  const blog = blogs.find((b) => b.id === userid);
  if (!blog) {
    return res.status(404).json({ message: "page not found" });
  }
  res.render("blogdetail", { blogs: blog });
};

export const createData = (req, res) => {
  res.render("addblogs");
};
export const pushData = (req, res) => {
  const { title, content, author } = req.body;
  blogs.push({ id: blogs.length + 1, title, content, author });
  res.redirect("/blogs");
};

export const deleteData = (req, res) => {
  const userid = parseInt(req.params.id);
  const index = blogs.findIndex((b) => b.id === userid);
  if (index === -1) {
    return res.status(404).send("Blog not found");
  }
  blogs.splice(index, 1);
  res.redirect("/blogs");
};
