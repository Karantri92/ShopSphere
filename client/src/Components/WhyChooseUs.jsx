import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SecurityIcon from "@mui/icons-material/Security";
import PaymentIcon from "@mui/icons-material/Payment";
import ReplayIcon from "@mui/icons-material/Replay";

export default function WhyChooseUs() {
  return (
    <Box
      sx={{
        py: 6,
        backgroundColor: "#f8fafc",
      }}
    >
      <Container maxWidth="lg">

     
        <Typography
          variant="h4"
          fontWeight="bold"
          align="center"
          gutterBottom
        >
          Why ShopSphere?
        </Typography>

        <Typography
          variant="body1"
          align="center"
          color="text.secondary"
          sx={{ mb: 5 }}
        >
          Shopping made simple, secure and convenient.
        </Typography>

        
        <Grid
          container
          spacing={4}
        >

          
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Box
              sx={{
                textAlign: "center",
                p: 3,
                borderRadius: 3,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  backgroundColor: "white",
                  boxShadow: 3,
                },
              }}
            >
              <LocalShippingIcon
                sx={{
                  fontSize: 50,
                  color: "#1976d2",
                  mb: 1,
                }}
              />

              <Typography
                variant="h6"
                fontWeight="bold"
              >
                Fast Delivery
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
              >
                Quick & reliable delivery
              </Typography>
            </Box>
          </Grid>

        
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Box
              sx={{
                textAlign: "center",
                p: 3,
                borderRadius: 3,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  backgroundColor: "white",
                  boxShadow: 3,
                },
              }}
            >
              <SecurityIcon
                sx={{
                  fontSize: 50,
                  color: "#1976d2",
                  mb: 1,
                }}
              />

              <Typography
                variant="h6"
                fontWeight="bold"
              >
                Secure Payment
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
              >
                Safe and secure checkout
              </Typography>
            </Box>
          </Grid>

         
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Box
              sx={{
                textAlign: "center",
                p: 3,
                borderRadius: 3,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  backgroundColor: "white",
                  boxShadow: 3,
                },
              }}
            >
              <PaymentIcon
                sx={{
                  fontSize: 50,
                  color: "#1976d2",
                  mb: 1,
                }}
              />

              <Typography
                variant="h6"
                fontWeight="bold"
              >
                Easy Payment
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
              >
                Multiple payment options
              </Typography>
            </Box>
          </Grid>

          
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Box
              sx={{
                textAlign: "center",
                p: 3,
                borderRadius: 3,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  backgroundColor: "white",
                  boxShadow: 3,
                },
              }}
            >
              <ReplayIcon
                sx={{
                  fontSize: 50,
                  color: "#1976d2",
                  mb: 1,
                }}
              />

              <Typography
                variant="h6"
                fontWeight="bold"
              >
                Easy Returns
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
              >
                Hassle-free returns
              </Typography>
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}