/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import MyButton from "../../util/MyButton";
// MUI
import MuiLink from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
// Icons
import MyLocationIcon from "@material-ui/icons/MyLocation";
import LinkIcon from "@material-ui/icons/Link";
import TodayIcon from "@material-ui/icons/Today";
import DirectionsIcon from "@material-ui/icons/Directions";
import QuestionAnswerOutlinedIcon from "@material-ui/icons/QuestionAnswerOutlined";

const styles = (theme) => ({
  button: {
    float: "right",
  },
  image: {
    margin: "20px auto 20px auto",
  },
  paper: {
    padding: 20,
  },
  profile: {
    margin: "20px auto 20px auto",
    "& .image-wrapper": {
      textAlign: "center",
      position: "relative",
      "& button": {
        position: "absolute",
        top: "80%",
        left: "70%",
      },
    },
    "& .profile-image": {
      width: 200,
      height: 200,
      objectFit: "cover",
      maxWidth: "100%",
      borderRadius: "50%",
    },
    "& .profile-details": {
      textAlign: "center",
      "& span, svg": {
        verticalAlign: "middle",
      },
      "& a": {
        color: "#00bcd4",
      },
    },
    "& hr": {
      border: "none",
      margin: "0 0 10px 0",
    },
    "& svg.button": {
      "&:hover": {
        cursor: "pointer",
      },
    },
  },
  buttons: {
    textAlign: "center",
    "& a": {
      margin: "20px 10px",
    },
  },
});

const StaticProfile = (props) => {
  const {
    classes,
    profile: { handle, createdAt, imageUrl, bio, website, location },
  } = props;

  return (
    <Paper className={classes.paper}>
      <div className={classes.profile}>
        <div className="image-wrapper">
          <img src={imageUrl} alt="profile" className="profile-image" />
        </div>
        <hr />
        <div className="profile-details">
          <MuiLink
            component={Link}
            to={`/users/${handle}`}
            color="primary"
            variant="h5"
          >
            @{handle}
          </MuiLink>
          <hr />
          {bio && <Typography variant="body2">{bio}</Typography>}
          <hr />
          {location && (
            <Fragment>
              <MyLocationIcon color="primary" /> <span>{location}</span>
              <hr />
            </Fragment>
          )}
          {website && (
            <Fragment>
              <LinkIcon color="primary" />
              <a href={website} target="_blank" rel="noopener noreferrer">
                {" "}
                {website}
              </a>
              <hr />
            </Fragment>
          )}
          <TodayIcon color="primary" />{" "}
          <span> 👉 {dayjs(createdAt).format("DD MMM YYYY")}</span>
          <br></br>
          <Fragment>
            <Link to="/">
              <MyButton tip="DM">
                <QuestionAnswerOutlinedIcon
                  color="secondary"
                  style={{ fontSize: "30" }}
                />
              </MyButton>
            </Link>
          </Fragment>
          <Fragment>
            <Link to="/">
              <MyButton tip="Back">
                <DirectionsIcon color="inherit" style={{ fontSize: "30" }} />
              </MyButton>
            </Link>
          </Fragment>
        </div>
      </div>
    </Paper>
  );
};

StaticProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StaticProfile);
