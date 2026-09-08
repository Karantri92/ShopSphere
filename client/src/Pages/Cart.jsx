import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../Redux/cartSlice";

import { useSelector } from "react-redux";

export default function Cart() {
   const navigate = useNavigate();    

  const cartItems = useSelector(
    (state) => state.cart.items
  );
  const totalPrice = cartItems.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);
  const dispatch = useDispatch();

  return (
    <Container maxWidth="lg">

      <Box sx={{ py: 5 }}>

        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
        >
          My Cart
        </Typography>

        <Grid container spacing={3}>
  {cartItems.map((item) => (
    <Grid
      key={item._id}
      size={{ xs: 12, sm: 6, md: 4 }}
    >
      <Card>
        <CardMedia
          component="img"
          height="200"
          image={item.image}
          alt={item.name}
        />

        <CardContent>
          <Typography variant="h6">
            {item.name}
          </Typography>

          <Typography>
            ₹{item.price}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 2 }}>
              <Button
                variant="outlined"
                onClick={() => dispatch(decreaseQuantity(item._id))}
                disabled={item.quantity === 1}
              >
                -
              </Button>

              <Typography>
                {item.quantity}
              </Typography>

              <Button
                variant="outlined"
                onClick={() => dispatch(increaseQuantity(item._id))}
              >
                +
              </Button>
            </Box>
        </CardContent>
        <Button
  variant="outlined"
  color="error"
  onClick={() => dispatch(removeFromCart(item._id))}
  sx={{ mt: 2 }}
>
  Remove
</Button>
      </Card>
    </Grid>
  ))}
</Grid>
<Box sx={{ mt: 4, textAlign: "right" }}>
  <Typography variant="h5" fontWeight="bold">
    Total: ₹{totalPrice.toLocaleString("en-IN")}
  </Typography>

  <Button
  variant="contained"
  size="large"
  onClick={() => navigate("/checkout")}
>
  Checkout
</Button>
</Box>

      </Box>

    </Container>
  );
}