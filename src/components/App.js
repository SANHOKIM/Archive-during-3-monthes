// 이 폰트는 왜 적용이 안되는 걸까? 나한테 왜그러는걸까?
import "@fontsource/noto-sans-kr";

import React from "react";
import ReactDOM from "react-dom/client";
import "./common.scss";
import Navbar575 from "./Navbar575";
import reportWebVitals from "../others/reportWebVitals";

function App() {
  return (
    <div className="App">
      <Navbar575></Navbar575>
    </div>
  );
}

export default App;
