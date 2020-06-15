import React, { Fragment } from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MyButton from "../../util/MyButton";
import PostScream from "../scream/PostScream";
import Notifications from "./Notifications";

// MUI stuff
import Button from "@material-ui/core/Button";
// Icons
import HouseIcon from "@material-ui/icons/House";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import RedditIcon from "@material-ui/icons/Reddit";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import RefreshIcon from "@material-ui/icons/Refresh";

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}));

export default function BottomAppBar()  {
  const classes = useStyles();
  

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar className="nav-container">        
            <Fragment>
              <MyButton tip="Refresh" >
                <RefreshIcon color ="inherit"
                  onClick={() => window.location.reload(false)}
                  style={{ fontSize: "30" }}
                ></RefreshIcon>
              </MyButton>
              <PostScream />

              <Link to="/">
                <MyButton tip="Home">
                  <HouseIcon style={{ fontSize: "45" }} />
                </MyButton>
              </Link>
              <MyButton tip="Post an Image">
                <CloudUploadIcon style={{ fontSize: "45" }}></CloudUploadIcon>
              </MyButton>

              <Notifications />
            </Fragment>
          
            <Fragment>
              <Button tip="login" color="inherit" component={Link} to="/login">
                <RedditIcon style={{ fontSize: "45" }}></RedditIcon>
              </Button>
              <Button tip="Home" color="inherit" component={Link} to="/">
                <HouseIcon style={{ fontSize: "45" }} />
              </Button>
              <Button
                tip="Signup"
                color="inherit"
                component={Link}
                to="/signup"
              >
                <BorderColorIcon/>
              </Button>
            </Fragment>
    
        </Toolbar>

      </AppBar>
    </React.Fragment>
  );
}