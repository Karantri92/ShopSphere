import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

router.post("/", async (req, res) => {
  console.log("ORDER REQUEST RECEIVED");
  console.log("ORDER DATA:", req.body);

  try {
    const order = await Order.create(req.body);

    console.log("ORDER SAVED:", order);

    res.status(201).json(order);
  } catch (error) {
    console.log("ORDER ERROR:", error);

    res.status(500).json({
      message: "Failed to create order",
    });
  }
});

export default router;
