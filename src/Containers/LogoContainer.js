import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './HomeContainer.css'
import { makeStyles } from '@material-ui/core/styles';
import Font from 'react-font'
import Logo from '../4x/1logos.png'
import logos from '../4x/logos.png'




const useStyles = makeStyles((theme) => ({
  hero1: {
    position: "relative",
    top:"10",
  },

   logo: {
    backgroundImage: `url('${Logo}')`,
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

  logos: {
    backgroundImage: `url('${logos}')`,
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

function LogoContainer() {
  const classes = useStyles();
  return (

     <div>
    <React.Fragment>
      <CssBaseline />

      <Font family='Roboto' weight={100}>
        <Box className={classes.logo}>
          <Typography variant="h6" className={classes.Slogan}>
              <Font family='Roboto' weight={700}>
               
              </Font>
          </Typography> 
        </Box>

        <Box className={classes.logos}>
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

export default LogoContainer
