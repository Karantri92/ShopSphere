import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    customer: {
      name: String,
      address: String,
      city: String,
      pincode: String,
    },

    products: [
      {
        productId: String,
        name: String,
        price: Number,
        quantity: Number,
      },
    ],

    total: Number,
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;