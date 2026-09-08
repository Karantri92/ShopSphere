import * as React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

import { addToCart } from "../Redux/cartSlice";

export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("PRODUCT DETAILS:", data);
        setProduct(data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, [id]);

  if (!product) {
    return (
      <Container sx={{ mt: 5 }}>
        <Typography variant="h5">
          Loading product...
        </Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 7 }}>
      <Grid container spacing={5}>

        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            component="img"
            src={product.image}
            alt={product.name}
            sx={{
              width: "100%",
              height: 450,
              objectFit: "cover",
              borderRadius: 3,
            }}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>

          <Typography
            variant="h3"
            fontWeight="bold"
          >
            {product.name}
          </Typography>

          <Rating
            value={product.rating}
            precision={0.1}
            readOnly
            sx={{ mt: 1 }}
          />

          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              mt: 2,
              color: "#1976d2",
            }}
          >
            ₹{product.price.toLocaleString("en-IN")}
          </Typography>

          <Typography
            color="text.secondary"
            sx={{ mt: 2 }}
          >
            Category: {product.category}
          </Typography>

          <Typography sx={{ mt: 3 }}>
            Discover high-quality products at great prices.
            Shop confidently with ShopSphere.
          </Typography>

          <Box sx={{ mt: 3 }}>
            <Typography>
              Quantity: {quantity}
            </Typography>

            <Button
              onClick={() => setQuantity(quantity - 1)}
              disabled={quantity === 1}
            >
              -
            </Button>

            <Button
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </Button>
          </Box>

          <Stack
            direction="row"
            spacing={2}
            sx={{ mt: 3 }}
          >

            <Button
              variant="contained"
              startIcon={<AddShoppingCartIcon />}
              onClick={() => {
                dispatch(
                  addToCart({
                    ...product,
                    quantity,
                  })
                );
              }}
            >
              Add to Cart
            </Button>

            <Button
              variant="outlined"
              size="large"
              startIcon={<ShoppingBagIcon />}
            >
              Buy Now
            </Button>

          </Stack>

        </Grid>
      </Grid>
    </Container>
  );
}