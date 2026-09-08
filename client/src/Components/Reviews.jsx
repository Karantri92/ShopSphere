import * as React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";

const reviews = [
  {
    id: 1,
    name: "Rahul Sharma",
    rating: 2.5,
    comment: "Great products and very fast delivery!",
  },
  {
    id: 2,
    name: "Priya Patil",
    rating: 4.5,
    comment: "The products were exactly as described. Good experience.",
  },
  {
    id: 3,
    name: "Amit Kumar",
    rating: 5,
    comment: "Easy shopping experience and excellent quality.",
  },
];

export default function Reviews() {
  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">

        <Typography
          variant="h4"
          fontWeight="bold"
          align="center"
          gutterBottom
        >
          What Our Customers Say
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          align="center"
          sx={{ mb: 5 }}
        >
          See what our customers think about ShopSphere.
        </Typography>
        <Grid container spacing={3}>
  {reviews.map((review) => (
    <Grid
      key={review.id}
      size={{ xs: 12, sm: 6, md: 4 }}
    >
      <Card
        sx={{
          height: "100%",
          borderRadius: 3,
          boxShadow: 2,
          transition: "0.3s",

                    "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: 5,
                    },
                    }}
                >
                    <CardContent
                    sx={{
                        p: 3,
                        textAlign: "center",
                    }}
                    >

                    
                    <Avatar
                        sx={{
                        width: 60,
                        height: 60,
                        mx: "auto",
                        mb: 2,
                        }}
                    >
                        {review.name.charAt(0)}
                    </Avatar>

                    <Typography
                        variant="h6"
                        fontWeight="bold"
                    >
                        {review.name}
                    </Typography>

                    
                    <Rating
                        value={review.rating}
                        precision={0.5}
                        readOnly
                        sx={{ my: 1 }}
                    />

                    
                    <Typography
                        variant="body1"
                        color="text.secondary"
                    >
                        "{review.comment}"
                    </Typography>

                    </CardContent>
                </Card>
                </Grid>
            ))}
    </Grid>

      </Container>
    </Box>
  );
}