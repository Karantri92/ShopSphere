import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ProductCard from "../Components/ProductCard";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>
        Products
      </Typography>

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid key={product._id} size={{ xs: 12, sm: 6, md: 3 }}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}