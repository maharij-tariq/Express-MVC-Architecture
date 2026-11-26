import Cart from "../model/Cart.js";

export const addItemCart = async (req, res) => {
  try {
    const { userId, productId } = req.body;
    let cart = await Cart.findOne({ userId });
    if (!cart) {
      cart = new Cart({
        userId,
        items: [
          {
            productId,
            quantity: 1,
          },
        ],
      });
    } else {
      const item = cart.items.find((i) => i.productId.toString() === productId);
      if (item) {
        item.quantity += 1;
      } else {
        cart.items.push({
          productId,
          quantity: 1,
        });
      }
    }
    await cart.save();
    res.status(200).json({
      success: true,
      message: "product Add To Cart",
      cart: cart,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server ERROR",
      Error: error.message,
    });
  }
};
//updated cart

export const updatedCart = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;
    const productCart = await Cart.findOne({ userId });
    if (!productCart) {
      return res
        .status(404)
        .json({ success: false, message: "Cart Not Found" });
    }
    const item = productCart.items.find(
      (i) => i.productId.toString() === productId,
    );
    if (!item) {
      return res
        .status(404)
        .json({ success: false, message: "Item Not Found in Cart" });
    }
    item.quantity = quantity;
    await productCart.save();
    res
      .status(200)
      .json({
        success: true,
        message: "Cart Updated Successfully",
        productCart: productCart,
      });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", Error: error.message });
  }
};
//Remove Cart
export const deleteCart = async (req, res) => {
  try {
    const { userId, productId } = req.body;
    const cartProduct = await Cart.findOne({ userId });
    if (!cartProduct) {
      return res
        .status(404)
        .json({ success: false, message: "Cart Not Found" });
    }

    cartProduct.items = cartProduct.items.filter(
      (i) => i.productId.toString() !== productId,
    );
    await cartProduct.save();
    res
      .status(200)
      .json({
        success: true,
        message: "Cart Deleted Successfully",
        cart: cartProduct,
      });
  } catch (error) {
    res.status(500).json({ message: "Server Error", Error: error.message });
  }
};

//get all cart detail
export const fetchCart = async (req, res) => {
  try {
    const { userId } = req.params;
    const cartDetail = await Cart.findOne({ userId }).populate('items.productId');
    if (!cartDetail) {
      return res
        .status(404)
        .json({ success: false, message: "Cart is not required" });
    }
    res
      .status(200)
      .json({
        success: true,
        message: "Cart Fetched Successfully",
        cart: cartDetail,
      });
  } catch (error) {
    res.status(500).json({success:false,message:'Server Error',Error:error.message})
  }
};
