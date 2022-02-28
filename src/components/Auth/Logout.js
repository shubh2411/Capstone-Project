import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Button } from "@material-ui/core";

import { signOut } from "firebase/auth";
import { auth, db } from "../../fireBase";
import { cryptoState } from "../CryptoContext";

const useStyles = makeStyles({
  logout: {
    width: 150,
    height: 40,
    marginLeft: 15,
    backgroundColor: "#FEBC1D",
  },
});

function Logout() {
  const classes = useStyles();
  const { setAlert } = cryptoState();
  const logOut = () => {
    signOut(auth);
    setAlert({
      open: true,
      type: "success",
      message: "Logout Successfull !",
    });

    toggleDrawer();
  };
  return (

      <Button variant="contained" className={classes.logout} onClick={logOut}>
        Log Out
      </Button>

  );
}

export default Logout;
