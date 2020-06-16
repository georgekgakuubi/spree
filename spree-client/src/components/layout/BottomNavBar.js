import React, { Fragment } from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
//import { Link } from "react-router-dom";
//import MyButton from "../../util/MyButton";
import PostScream from "../scream/PostScream";

// MUI stuff
//import Button from "@material-ui/core/Button";
// Icons

//import RedditIcon from "@material-ui/icons/Reddit";

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
               <PostScream />
            </Fragment>
          
     {/*       <Fragment>
              <Button tip="login" color="inherit" component={Link} to="/login">
                <RedditIcon style={{ fontSize: "45" }}></RedditIcon>
              </Button>

            </Fragment> */}
    
        </Toolbar>

      </AppBar>
    </React.Fragment>
  );
}