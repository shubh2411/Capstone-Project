import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { hot } from "react-hot-loader/root";
import CryptoContext from "./components/CryptoContext";
import "react-alice-carousel/lib/alice-carousel.css";

const render = (Component) =>
  ReactDOM.render(
    <CryptoContext>
      <Component />
    </CryptoContext>,
    document.getElementById("root")
  );

render(hot(App));
