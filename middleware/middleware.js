import jwt from "jsonwebtoken";
export const auth = (req, res, next) => {
  const token = req.headers.token;
  if (!token) {
    return res.status(401).json({ message: "no token provide" });
  }
  try {
    const decode = jwt.verify(token, process.env.SECRET_KEY);
    req.userID = decode.id;
    next();
  } catch (error) {
    res.status(401).json({ message: "invalid token" });
  }
};