import { Box, Button, TextField } from "@material-ui/core";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { cryptoState } from "../CryptoContext";
import {auth} from "../../fireBase"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAlert } = cryptoState();

  const handleSubmit = async () => {
    // console.log("submit")
    if (!email || !password) {
      setAlert({
        open: true,
        message: `Please fill all the details`,
        type: "error"
      })
      return 
    }

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      setAlert({
        open: true,
        message: `Login successful. Welcome ${result.user.email}`,
        type: "success"
      })

    } catch(error) {
      setAlert({
        open: true,
        message: error.message,
        type: "error"
      })
    }
  };

  return (
    <Box
      p={3}
      style={{ display: "flex", flexDirection: "column", gap: "20px" }}
    >
      {/* login id */}
      <TextField
        variant="outlined"
        type="email"
        label="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {/* password */}
      <TextField
        variant="outlined"
        type="password"
        label="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* Sumbit Button */}
      <Button
        variant="contained"
        size="large"
        style={{ backgourndColor: "#EEBC1D" }}
        onClick={handleSubmit}
      >
        Login
      </Button>
    </Box>
  );
}

export default Login;
