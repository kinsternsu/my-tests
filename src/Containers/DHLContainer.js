import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import DHLCover from '../images/SAIA/dhl.png';
import Container from "@material-ui/core/Container";
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles((theme) => ({
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
 
}));

export default function DHLContainer() {
   const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="false" disableGutters="true">

       <Box className={classes.DHLCover}></Box>

       </Container>
       </React.Fragment>

       
       
  ); 
}
