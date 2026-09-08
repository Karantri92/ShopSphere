
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartSlice";

export default function ProductCard({ product }) {
      const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Card>
      <CardActionArea
        onClick={() => navigate(`/products/${product._id}`)}
      >
        <CardMedia
          component="img"
          height="200"
          image={product.image}
          alt={product.name}
        />

        <CardContent>
          <Typography variant="h6">
            {product.name}
          </Typography>

          <Typography>
            Price: ₹{product.price.toLocaleString("en-IN")}
          </Typography>

          <Typography>
            Rating: {product.rating}
          </Typography>

          <Typography>
            Category: {product.category}
          </Typography>
        </CardContent>
      </CardActionArea>

      <Box sx={{ p: 1 }}>
        <Button
          variant="contained"
          fullWidth
          startIcon={<AddShoppingCartIcon />}
          sx={{
            borderRadius: 2,
            py: 1,
            fontWeight: "bold",
            textTransform: "none",
          }}
          onClick={() => {
            dispatch(
              addToCart({
                ...product,
                quantity: 1,
              })
            );
          }}
        >
          Add to Cart
        </Button>
      </Box>
    </Card>
  );
}