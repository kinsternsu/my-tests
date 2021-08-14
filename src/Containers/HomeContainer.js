import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './HomeContainer.css'
import { makeStyles } from '@material-ui/core/styles';
import Font from 'react-font'
import HomePage from '../4x/homepage.png'
import AboutUs from '../4x/about us.png'
import MediaCard from './MediaCard'
import Container from "@material-ui/core/Container"
import Footer from "./Footer"




const useStyles = makeStyles((theme) => ({
  hero1: {
    position: "relative",
    top:"10",
  },

   homepage: {
    height: "900px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",  
    [theme.breakpoints.down("sm")]: {
      height: 700,
      fontSize: "3em"
    }
  },

  aboutus: {
    backgroundImage: `url('${AboutUs}')`,
    height: "900px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",  
    [theme.breakpoints.down("sm")]: {
      height: 700,
      fontSize: "3em"
    }
  },

  Slogan: {
    fontSize:"70px",
    marginBottom:"20%",
  }
}));

function HomeContainer() {
  const classes = useStyles();
  return (

     <div>
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">

      <Font family='Roboto' weight={100}>
        <Box className={classes.homepage}>
          <MediaCard/>
        </Box>

        <Box className={classes.aboutus}>     
           
        </Box>
      </Font>
      </Container>

      <Container maxWidth="sm">
        <Footer/>

      </Container>
     
    </React.Fragment>
    </div>
  );
}

export default HomeContainer
