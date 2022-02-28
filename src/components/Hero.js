import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
// const image = require("../../crypto.jpg")
import Carousel from "./Carousel";

// import img from './file.png';

const useStyles = makeStyles(() => ({
  heading: {
    fontSize: "80px",
    color: "brown",
    textAlign: "center",
    paddingTop: "50px",
    fontWeight: "bold",
    color: "#fff",
    zIndex: "1",
  },

  info: {
    width: "75%",
    margin: "auto",
    marginTop: "50px",
    color: "#fff",
  },

  banner: {
    // backgroundImage: "url(../../crypto.jpg)",
    // backgroundImage: `url(${image})`,
    // backgroundColor: "pink",
    backgroundSize: "cover",
    opacity: "0.8",
    height: "100vh",
    zIndex: "1",
  },
}));
// console.log(image)

function Hero() {
  const classes = useStyles();
  return (
    <div className={classes.banner}>
      <Container>
        {/* <img src={image} alt="" /> */}
        <Typography variant="h2" className={classes.heading}>
          Crypto Tracker App
        </Typography>
        <Typography variant="h5" className={classes.info}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        </Typography>
        <Carousel />
      </Container>
    </div>
  );
}

export default Hero;
