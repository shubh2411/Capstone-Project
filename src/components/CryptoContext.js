import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../fireBase";

const Crypto = createContext();

function CryptoContext({ children }) {
  const [currency, setCurrency] = useState([]);
  const [symbol, setSymbol] = useState("INR");
  const [selectedValue, setSelectedValue] = useState("inr");
  const [user, setUser] = useState(null);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    type: "success",
  });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  const fetchCurrencies = async () => {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/simple/supported_vs_currencies`
    );
    const data = await response.data;
    setCurrency(data);
  };
  // console.log(currency);
  useEffect(() => {
    fetchCurrencies();
  }, []);

  return (
    <Crypto.Provider
      value={{
        currency,
        symbol,
        setSymbol,
        selectedValue,
        setSelectedValue,
        setCurrency,
        alert,
        setAlert,
        user,
      }}
    >
      {children}
    </Crypto.Provider>
  );
}

export default CryptoContext;

export const cryptoState = () => {
  return useContext(Crypto);
};
