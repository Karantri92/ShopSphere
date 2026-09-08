import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";

dotenv.config();

const products = [
  {
    name: "iPhone 16",
    price: 79999,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab",
    rating: 4.5,
    category: "Electronics",
  },
  {
    name: "MacBook Air M3",
    price: 99999,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    rating: 4.8,
    category: "Laptops",
  },
  {
    name: "Nike Air Max",
    price: 8999,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    rating: 4.6,
    category: "Shoes",
  },
  {
    name: "Classic Denim Jacket",
    price: 2499,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5",
    rating: 4.3,
    category: "Fashion",
  },
  {
    name: "Apple Watch Series 10",
    price: 45999,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
    rating: 4.7,
    category: "Watches",
  },
  {
    name: "Sony WH-1000XM5",
    price: 29999,
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b",
    rating: 4.8,
    category: "Audio",
  },
  {
    name: "Modern Lounge Chair",
    price: 12999,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
    rating: 4.4,
    category: "Furniture",
  },
  {
    name: "Beauty Care Set",
    price: 1999,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348",
    rating: 4.2,
    category: "Beauty",
  },
];

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    await Product.deleteMany();

    await Product.insertMany(products);

    console.log("Products inserted successfully");

    await mongoose.connection.close();
  } catch (error) {
    console.log("Error:", error);
  }
};

seedProducts();