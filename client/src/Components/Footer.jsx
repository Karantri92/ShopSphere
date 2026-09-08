import * as React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";

import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: "#17202A",
                color: "white",
                mt: 6,
                pt: 6,
                pb: 3,
            }}
        >
            <Container>

                
                <Box sx={{ textAlign: "center", mb: 5 }}>
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        gutterBottom
                    >
                        ShopSphere
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{ color: "rgba(255,255,255,0.7)" }}
                    >
                        Your trusted online shopping destination.
                    </Typography>
                </Box>

                
                <Grid
                    container
                    spacing={4}
                    justifyContent="center"
                >

                    
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <Box sx={{ textAlign: "center" }}>
                            <Typography
                                variant="h6"
                                fontWeight="bold"
                                gutterBottom
                            >
                                Shop
                            </Typography>
               <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: 1,                                  
                
                                }}
                            >
                            <Link
                                href="#"
                                color="white"
                                underline="hover"
                                
                                sx={{ display:"block",mb: 1 }}
                            >
                                Electronics
                            </Link>
          </Box>
          <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    // gap: 1,
                                    // mb: 1.5,
                                }}
                            >
                                <Link
                                href="#"
                                color="white"
                                underline="hover"
                                display="block"
                                sx={{ mb: 1 }}
                            >
                                Fashion
                            </Link>
             </Box>
             <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    // gap: 1,
                                    // mb: 1.5,
                                }}
                            >
                                 <Link
                                href="#"
                                color="white"
                                underline="hover"
                                display="block"
                                sx={{ mb: 1 }}
                            >
                                Shoes
                            </Link>
             </Box>               

                           

                            <Link
                                href="#"
                                color="white"
                                underline="hover"
                                display="block"
                            >
                                Furniture
                            </Link>
                        </Box>
                    </Grid>

                  
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <Box sx={{ textAlign: "center" }}>
                            <Typography
                                variant="h6"
                                fontWeight="bold"
                                gutterBottom
                            >
                                Customer
                            </Typography>
                               <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: 1,                                
                                    }}> 

                                        <Link href="#"
                                            color="inherit"
                                            underline="hover"
                                            display="block"
                                            sx={{ mb: 1 }}>
                                            My Account
                                        </Link>
                                </Box>
                                <Box
                                 sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: 1,                                
                                    }}>

                                        <Link
                                            href="#"
                                            color="inherit"
                                            underline="hover"
                                            display="block"
                                            sx={{ mb: 1 }}
                                        >
                                            My Orders
                                        </Link>
                                </Box>
                                <Box
                                   sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: 1,                                
                                    }}>
                                        <Link
                                            href="#"
                                            color="inherit"
                                            underline="hover"
                                            display="block"
                                            sx={{ mb: 1 }}
                                        >
                                            Returns
                                        </Link>
                                </Box>
                                <Box
                                   sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: 1,                                
                                    }}>                           
                                        <Link
                                            href="#"
                                            color="inherit"
                                            underline="hover"
                                            display="block"
                                        >
                                            Help & Support
                                        </Link>
                                 </Box>        
                        </Box>
                    </Grid>

                   
                    <Grid size={{ xs: 12, sm: 12, md: 4 }}>
                        <Box sx={{ textAlign: "center" }}>
                            <Typography
                                variant="h6"
                                fontWeight="bold"
                                gutterBottom
                            >
                                Contact Us
                            </Typography>

                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: 1,
                                    mb: 1.5,
                                }}
                            >
                                <EmailIcon fontSize="small" />

                                <Typography variant="body2">
                                    support@shopsphere.com
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: 1,
                                    mb: 1.5,
                                }}
                            >
                                <PhoneIcon fontSize="small" />

                                <Typography variant="body2">
                                    +91 98765 43210
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: 1,
                                }}
                            >
                                <LocationOnIcon fontSize="small" />

                                <Typography variant="body2">
                                    Maharashtra, India
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                </Grid>

             
                <Divider
                    sx={{
                        my: 4,
                        borderColor: "rgba(255,255,255,0.2)",
                    }}
                />

               
                <Typography
                    variant="body2"
                    align="center"
                    sx={{
                        color: "rgba(255,255,255,0.6)",
                    }}
                >
                    © 2026 ShopSphere. All rights reserved.
                </Typography>

            </Container>
        </Box>
    );
}