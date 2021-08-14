import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './HomeContainer.css'
import { makeStyles } from '@material-ui/core/styles';
import Font from 'react-font'
import GraphicDesign from '../4x/18GraphicDesign.png';
import Modelling from '../4x/3dmodelling.png';
import Album from '../4x/album.png';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';




const useStyles = makeStyles((theme) => ({
  hero1: {
    position: "relative",
    top:"10",
  },

  roots: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "500px",
     height: "1900px",
  },

  

   homepage: {
    backgroundImage: `url('${GraphicDesign}')`,
    height: "700px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",  
    marginTop: "20px",
    marginLeft: "1%",
    marginRight: "1%",
    [theme.breakpoints.down("sm")]: {
      height: 700,
      fontSize: "3em"
    }
  },

  Album: {
    backgroundImage: `url('${Album}')`,
    height: "400px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",  
    marginTop: "0%",
    marginLeft: "0%",
    marginRight: "0%",
    paddingRight: "0%",
    objectFit: "contain",
    [theme.breakpoints.down("sm")]: {
      height: 400,
      fontSize: "3em"
    }
  },

  Modelling: {
    backgroundImage: `url('${Modelling}')`,
    height: "400px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",  
    marginTop: "0%",
    marginLeft: "0%",
    marginRight: "0%",
    [theme.breakpoints.down("sm")]: {
      height: 400,
      fontSize: "3em"
    }
  },

   paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginTop: "2%",
    marginLeft: "2%",
    marginRight: "2%",
  },

  Slogan: {
    fontSize:"70px",
    marginBottom:"20%",
  }
}));

function HomeContainer() {
  const classes = useStyles();
  return (

     <div className={classes.root}>
    <React.Fragment>
      <CssBaseline />

      <Box className={classes.homepage}>
          
        </Box>

      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}> 
            <Box className={classes.Album}> 
            </Box>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}> 
            <Box className={classes.Modelling}>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      
     
    </React.Fragment>
    </div>
  );
}

export default HomeContainer
