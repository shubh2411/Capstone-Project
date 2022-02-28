import React from "react";
import {
  AppBar,
  Container,
  InputLabel,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import { cryptoState } from "./CryptoContext";
import AuthModal from "./Auth/AuthModal"
import Logout from "./Auth/Logout";

const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});

function Navbar() {
  const classes = useStyles();
  const { currency, setCurrency, selectedValue, setSelectedValue, user } = cryptoState();

  const navigate = useNavigate();
  const handleChange = (e) => {
    // setCurrency(e.target.value)
    setSelectedValue(e.target.value)
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
      <Container>
          <Toolbar>
            <Typography onClick={() => navigate("/")} className={classes.title}>
              Crypto Tracker
            </Typography>

            <InputLabel
              color="secondary"
              id="demo-simple-select-outlined-label"
            >
              Currency
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={selectedValue.length === 0 ? "" : selectedValue}
              onChange={handleChange}
              label="Currency"
              color="secondary"
              style={{ width: 100, height: 40, marginLeft: 15,  }}
              defaultValue = "inr"
            >
              {currency &&
                currency.map((curr, index) => (
                  <MenuItem  key={index} value={curr} style={{color: "white"}}>
                    {curr.toUpperCase()}
                  </MenuItem>
                ))}
            </Select>

            {user ? <Logout/> : <AuthModal />}
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Navbar;
