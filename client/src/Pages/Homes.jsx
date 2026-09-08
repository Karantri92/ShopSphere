import { useEffect, useState } from "react";

import ProductCard from "../Components/ProductCard";
import Hero from "../Components/Hero";
import Category from "../Components/Category";
import WhyChooseUs from "../Components/WhyChooseUs";
import Reviews from "../Components/Reviews";
import Footer from "../Components/Footer";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
   fetch(`${import.meta.env.VITE_API_URL}/api/products`)
      .then((res) => res.json())
      .then((data) => {
        console.log("HOME PRODUCTS:", data);
        setProducts(data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  return (
    <>
      <Hero />

      <Category />

      <Container sx={{ py: 5 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ mb: 4 }}
        >
          Featured Products
        </Typography>

        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid
              key={product._id}
              size={{ xs: 12, sm: 6, md: 3 }}
            >
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>

      <WhyChooseUs />
      <Reviews />
      <Footer />
    </>
  );
}

export default Home;