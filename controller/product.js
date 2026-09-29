const findProductHandler = (req, res) => {
  try {
    const { roll } = req.body;

    const arr = [
      {
        name: "ali",
        rollNumber: 5,
      },
    ];

    const std = arr.find((std) => (std.rollNumber = roll));

    if (std) {
      return res.status(200).json({ message: "user found" });
    }
      return res.status(404).json({ message: "user not found" });

  } catch (error) {
    return res.status(404).json({ message: "user found" });
  }
};

const getallProduct = (req, res) => {
  try {

    const arr = [
      {
        name: "ali",
        rollNumber: 5,
      },
    ];


      return res.status(200).json({ message: arr });
  } catch (error) {
    return res.status(404).json({ message: "user found" });
  }
};

module.exports = {findProductHandler, getallProduct};