import { Box, Button, TextField } from "@material-ui/core";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../fireBase";
import { cryptoState } from "../CryptoContext";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const {setAlert} = cryptoState()

    const handleSubmit = async () => {
        // console.log("submit")   
        if(password !== confirmPassword)    {
          setAlert({
            open: true,
            message:"Passwords do not match",
            type: "error",
          })
          return
        }

        try{
          const result = await createUserWithEmailAndPassword(
            auth,
            email,
            password
            )
            
            console.log(result)
          setAlert({
            open: true,
            message: `Sign up successful. Welcome ${result.user.email}`,
            type: "success"
          })

        } catch(error){
          setAlert({
            open: true,
            message: error.message,
            type: "error"
          })
        }
    }

  return (
    <Box
      p={3}
      style={{ display: "flex", flexDirection: "column", gap: "20px" }}
    >
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
      {/* Confirm password */}
      <TextField
        variant="outlined"
        type="password"
        label="Confirm password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      {/* Buttons */}
      <Button
        variant="contained"
        size="large"
        style={{backgourndColor: "#EEBC1D"}}
        onClick={handleSubmit}
      >
          Sign Up
      </Button>
    </Box>
  );
}

export default SignUp;
