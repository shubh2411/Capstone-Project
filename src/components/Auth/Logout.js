
   
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Button } from "@material-ui/core";

import { signOut } from "firebase/auth";
import {auth, db} from "../../fireBase"
import { cryptoState } from "../CryptoContext";


const useStyles = makeStyles({
    container: {
      width: 350,
      padding: 25,
      height: "100%",
      display: "flex",
      flexDirection: "column",
      fontFamily: "monospace",
    },
    logout: {
      height: "8%",
      width: "100%",
      backgroundColor: "#EEBC1D",
      marginTop: 20,
    }
    
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
    <div>
        <Button
                variant="contained"
                className={classes.logout}
                onClick={logOut}
              >
                Log Out
              </Button>
    </div>
  )
}

export default Logout