import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MyButton from "../../util/MyButton";
import PostScream from "../scream/PostScream";
import Notifications from "./Notifications";
// MUI stuff
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
// Icons
import HouseIcon from "@material-ui/icons/House";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import RedditIcon from "@material-ui/icons/Reddit";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import RefreshIcon from "@material-ui/icons/Refresh";

class Navbar extends Component {
  render() {
    const { authenticated } = this.props;
    return (
      <AppBar>
        <Toolbar className="nav-container">
          {authenticated ? (
            <Fragment>
              <MyButton tip="Refresh">
                <RefreshIcon
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
                <CloudUploadIcon style={{ fontSize: "30" }}></CloudUploadIcon>
              </MyButton>

              <Notifications />
            </Fragment>
          ) : (
            <Fragment>
              <Button tip="login" color="inherit" component={Link} to="/login">
                <RedditIcon style={{ fontSize: "30" }}></RedditIcon>
              </Button>
              <Button tip="Home" color="inherit" component={Link} to="/">
                <HouseIcon style={{ fontSize: "30" }} />
              </Button>
              <Button
                tip="Signup"
                color="inherit"
                component={Link}
                to="/signup"
              >
                <BorderColorIcon></BorderColorIcon>
              </Button>
            </Fragment>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

Navbar.propTypes = {
  authenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
});

export default connect(mapStateToProps)(Navbar);
