import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Footer from '../Containers/Footer';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { AccountCircle, Email, PhoneAndroid, Facebook } from '@material-ui/icons';

import { Link } from "react-router-dom"

import IRCover from '../images/SAIA/3d Modelling(saiaIR2).png';
import MogakolodiCover from '../images/SAIA/Mogakolodi.png';
import PoneloCover from '../images/SAIA/3d Modelling(ponelo).png';
import NdebeCover from '../images/SAIA/NDEBE GROUP (LOGO3) final copy.png';
import SpringstepCover from '../images/SAIA/Springstep.png';
import DHLCover from '../images/SAIA/dhl.png';
import Spring3dCover from '../images/SAIA/Spring step 3d.png';
import Container from "@material-ui/core/Container";
import CssBaseline from '@material-ui/core/CssBaseline';

import Mail from "../icons/Mail@4x.png";
import Cell from "../icons/Cell@4x.png";
import Name from "../icons/Name@4x.png";
// import Facebook from "../icons/Facebook@4x.png";
// import Instagram from "../icons/Instagram@4x.png";
// import Watsapp from "../icons/Watsap@4x.png";

const useStyles = makeStyles((theme) => ({
  // root: {
  //   flexGrow: 1,
  //   marginTop: "50px",
  // },

  Container: {
   position: "relative",
  //  bottom: "0",
  },

  Spring3dCover: {
    padding: theme.spacing(0),
    textAlign: 'center',

    backgroundImage: `url('${Spring3dCover}')`,
    height: "840px",
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
      height: 420,
      fontSize: "3em"
    }
  },

  IRCover: {
    padding: theme.spacing(0),
    textAlign: 'center',

    backgroundImage: `url('${IRCover}')`,
    height: "1200px",
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
      height: 600,
      fontSize: "3em"
    }
  },

  PoneloCover: {
    padding: theme.spacing(0),
    textAlign: 'center',

    backgroundImage: `url('${PoneloCover}')`,
    height: "490px",
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
      height: 245,
      fontSize: "3em"
    }
  },

   MogakolodiCover: {
    padding: theme.spacing(0),
    textAlign: 'center',

    backgroundImage: `url('${MogakolodiCover}')`,
    height: "470px",
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
      height: 245,
      fontSize: "3em"
    }
  },

  NdebeCover: {
    padding: theme.spacing(0),
    textAlign: 'center',

    backgroundImage: `url('${NdebeCover}')`,
    height: "1200px",
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
      height: 600,
      fontSize: "3em"
    }
  },

   SpringstepCover: {
    padding: theme.spacing(0),
    textAlign: 'center',

    backgroundImage: `url('${SpringstepCover}')`,
    height: "600px",
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
      height: 300,
      fontSize: "3em"
    }
  },

  DHLCover: {
    padding: theme.spacing(0),
    textAlign: 'center',

    backgroundImage: `url('${DHLCover}')`,
    height: "490px",
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
      height: 245,
      fontSize: "3em"
    }
  },

    root: {
    display: 'flex',
    height: '70px',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    height: 50,
    width: 50,
    marginTop: 10,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
 
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="false" disableGutters="true">
      <Grid container spacing={1}>
        <Grid item xs>
          <Link to="/dhlPage" style={{ textDecoration: 'none', color: "#000" }}>
          <Box className={classes.DHLCover}></Box>
          </Link>
          <Box className={classes.Spring3dCover}></Box>
          <Box className={classes.IRCover}></Box>
          <Box className={classes.SpringstepCover}></Box>
        </Grid>
        <Grid item xs>
          <Box className={classes.PoneloCover}></Box>
          <Box className={classes.MogakolodiCover}></Box>
          <Box className={classes.NdebeCover}></Box>
        </Grid>
       </Grid>
     
       
        <Grid container spacing={1}>
        <Grid item xs>
          <Card className={classes.root} variant="outlined">

              <AccountCircle fontSize="small" className={classes.cover} color="action"/>
           
            <CardContent>
              <Typography variant="subtitle2">
                Name
              </Typography>

              <Typography color="textSecondary" variant="caption">
                Nnete Moate
              </Typography>
            </CardContent>

          </Card> 
        </Grid>  

        <Grid item xs>
          <Card className={classes.root} variant="outlined">

           <Email fontSize="small" className={classes.cover} color="action" />
            <CardContent>
              <Grid item xs>
                <Typography variant="subtitle2">
                  Email
                </Typography>
              </Grid>
              <Grid item xs>
                <Typography color="textSecondary" variant="caption">
                  kinsternsu@gmail.com
                </Typography>
              </Grid>
            </CardContent>

          </Card> 
        </Grid>

        <Grid item xs>
          <Card className={classes.root} variant="outlined">
            <PhoneAndroid fontSize="small" className={classes.cover} color="action"/>
            <CardContent>
              <Typography variant="subtitle2">
                Cellphone
              </Typography>

              <Typography variant="Caption" color="textSecondary">
                +267 7755 6642
              </Typography>
            </CardContent>

          
          </Card> 
        </Grid>

        <Grid item xs>
          <Card className={classes.root} variant="outlined">
            <Facebook fontSize="small" className={classes.cover} color="action" />
            <CardContent>
              <Typography variant="subtitle2">
                Facebook
              </Typography>

              <Typography color="textSecondary" variant="caption">
                Link here
              </Typography>
            </CardContent>

           
          </Card> 
        </Grid>

      </Grid>

       </Container>
       </React.Fragment>

       
       
  );
}
