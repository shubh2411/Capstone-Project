import { Snackbar } from "@material-ui/core";
import React from "react";
import MuiAlert from "@material-ui/lab/Alert"
import { cryptoState } from "../CryptoContext";

function Alert() {
//   const classes = useStyles();
  const {alert, setAlert}  = cryptoState()
  const [open, setOpen] = React.useState(false);

  // const handleClick = () => {
  //   setOpen(true);
  // };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    // setOpen(false);
    setAlert({open:false})
  };


  return (
    <Snackbar open={alert.open} autoHideDuration={3000} onClose={handleClose}>
      <MuiAlert 
        onClose={handleClose} 
        severity={alert.type}
        variant="filled"
        serverity={alert.type}
        elevation={10}     
      >
        {alert.message}
      </MuiAlert>
    </Snackbar>
  );
}

export default Alert;
