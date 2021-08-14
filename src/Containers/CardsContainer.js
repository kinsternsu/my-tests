import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './HomeContainer.css'
import { makeStyles } from '@material-ui/core/styles';
import Font from 'react-font'
import MediaCard from './MediaCard'




const useStyles = makeStyles((theme) => ({
  hero1: {
    position: "relative",
    top:"10",
  },

   logo: {
    // backgroundImage: `url('${Logo}')`,
    height: "1200px",
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
      height: 1600,
      fontSize: "3em"
    }
  },

  Slogan: {
    fontSize:"70px",
    marginBottom:"20%",
  }
}));

function CardsContainer() {
  const classes = useStyles();
  return (

     <div>
    <React.Fragment>
      <CssBaseline />
     
      <Font family='Roboto' weight={100}>
        <Box className={classes.logo}>
           <MediaCard/>
          <Typography variant="h6" className={classes.Slogan}>
              <Font family='Roboto' weight={700}>
               
              </Font>
          </Typography> 
        </Box>

          
      </Font>
     
    </React.Fragment>
    </div>
  );
}

export default CardsContainer
