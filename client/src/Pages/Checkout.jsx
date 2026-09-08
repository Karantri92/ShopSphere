import * as React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../Redux/cartSlice";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function Checkout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const [form, setForm] = React.useState({
    name: "",
    address: "",
    city: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const orderData = {
      customer: form,

      products: cartItems.map((item) => ({
        productId: item._id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),

      total: totalPrice,
    };

    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/orders`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    console.log("ORDER SAVED:", data);

dispatch(clearCart());

alert("Order placed successfully!");

navigate("/");
  } catch (error) {
    console.log("ORDER ERROR:", error);
    alert("Failed to place order");
  }
};

  return (
    <Container maxWidth="sm" sx={{ py: 5 }}>

      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ mb: 4 }}
      >
        Checkout
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >

        <TextField
          label="Full Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <TextField
          label="Address"
          name="address"
          value={form.address}
          onChange={handleChange}
          required
        />

        <TextField
          label="City"
          name="city"
          value={form.city}
          onChange={handleChange}
          required
        />

        <TextField
          label="Pincode"
          name="pincode"
          value={form.pincode}
          onChange={handleChange}
          required
        />

        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ mt: 2 }}
        >
          Total: ₹{totalPrice.toLocaleString("en-IN")}
        </Typography>

        <Button
          type="submit"
          variant="contained"
          size="large"
        >
          Place Order
        </Button>

      </Box>
    </Container>
  );
}