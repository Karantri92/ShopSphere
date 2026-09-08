import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import "../styles/Category.css";

import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import WatchIcon from "@mui/icons-material/Watch";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import ChairIcon from "@mui/icons-material/Chair";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";

export default function Category() {
    const categorys=[{id: 1, name: "Electronics", icon: <PhoneIphoneIcon />},
            {id: 2, name: "Laptops", icon: <LaptopMacIcon />},
            {id: 3, name: "Fashion", icon: <CheckroomIcon />},
            {id: 4, name: "Shoes", icon: <SportsSoccerIcon />},
            {id: 5, name: "Watch", icon: <WatchIcon />},
            {id: 6, name: "Audio", icon: <HeadphonesIcon />},
            {id: 7, name: "Furniture", icon: <ChairIcon />},
            {id: 8, name: "Beauty", icon: <FaceRetouchingNaturalIcon />}]
  return (
    <React.Fragment>
   
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: '#cfe8fc' }} >
              <Typography variant="h4" fontWeight="bold"  align="center"  gutterBottom>
                 Shop by Category
              </Typography>
              <Box sx={{ bgcolor: 'white'}} >
                <Grid container spacing={3}>
                        {categorys.map((category) => (
                            <Grid key={category.id} size={{ xs: 12, sm: 6, md: 3 }}>
                            <Card className='Card'>
                                <CardActionArea>
                                <CardContent className='cardContent'>
                                    {category.icon}

                                    <Typography variant="h6">
                                    {category.name}
                                    </Typography>
                                </CardContent>
                                </CardActionArea>
                            </Card>
                            </Grid>
                        ))}
                        </Grid>
             </Box>
        </Box>
      </Container>
    </React.Fragment>  
  );
}