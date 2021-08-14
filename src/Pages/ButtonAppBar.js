import React from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';

import { Link } from "react-router-dom"
import Box from '@material-ui/core/Box';
import Font, { Text } from 'react-font';
import "./font.css";



const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    position: "sticky",
    top: "0",
    zIndex:"1000",
  },  

  appbar:{   
    color:"#000",
    backgroundColor:"rgba(250, 250, 250, 0.80)",
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // const handleProfileMenuOpen = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Link to="/LogoPage" style={{ textDecoration: 'none', color: "#000" }}>
                <Button color="inherit">BRANDING</Button>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/GraphicDesignPage" style={{ textDecoration: 'none', color: "#000" }}>
                <Button color="inherit">GRAPHIC DESIGN</Button>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/ModellingPage" style={{ textDecoration: 'none', color: "#000" }}>
                  <Button color="inherit">3D MODELLING</Button>
        </Link>
      </MenuItem>
       <MenuItem>
          <Link to="/WebDesignPage" style={{ textDecoration: 'none', color: "#000" }}>
                    <Button color="inherit">wEB DESIGN</Button>
          </Link>
      </MenuItem>
    </Menu>
  );  

  return (
    <div className={classes.grow}>
      <AppBar className={classes.appbar} position="static">
        <Toolbar>

           <Box className={classes.title} fontSize={30} fontFamily={"GothamProBlack"} color={"#0097A7"} m={1}>
              NNETE MOATE
          </Box>
         
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            
           <Link to="/LogoPage" style={{ textDecoration: 'none', color: "#000" }}>
                <Button color="inherit" > 
                  <Box className={classes.title} fontSize={15} fontFamily={"GothamProLight"} m={1}>
                    BRANDING
                  </Box>
                </Button>
            </Link>
            <Link to="/GraphicDesignPage" style={{ textDecoration: 'none', color: "#000" }}>
                <Button color="inherit" > 
                  <Box className={classes.title} fontSize={15} fontFamily={"GothamProLight"} m={1}>
                    GRAPHIC DESIGN
                  </Box>
                </Button>
            </Link>
            <Link to="/ModellingPage" style={{ textDecoration: 'none', color: "#000" }}>
                <Button color="inherit" > 
                  <Box className={classes.title} fontSize={15} fontFamily={"GothamProLight"} m={1}>
                   3D MODELLING
                  </Box>
                </Button>
            </Link>
            <Link to="/WebDesignPage" style={{ textDecoration: 'none', color: "#000" }}>
                <Button color="inherit" > 
                  <Box className={classes.title} fontSize={15} fontFamily={"GothamProLight"} m={1}>
                    WEB DESIGN
                  </Box>
                </Button>
            </Link>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
