import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { hot } from "react-hot-loader/root";

import "react-alice-carousel/lib/alice-carousel.css";
import CryptoContext from "./components/CryptoContext";

const render = (Component) =>
  ReactDOM.render(
    
    <CryptoContext>
      <Component />
    </CryptoContext>,
    document.getElementById("root")
  );

render(hot(App));

// ReactDOM.render(<h1>Hello world</h1>, document.getElementById("root"));

// const Index = () => {
//   return <div>Hello React!</div>;
// };

// ReactDOM.render(<Index />, document.getElementById("root"));