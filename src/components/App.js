// 이 폰트는 왜 적용이 안되는 걸까? 나한테 왜그러는걸까?
import "@fontsource/noto-sans-kr";
import "./common.scss";
import Background from "./Background";
import Header from "./Header";

import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "../others/reportWebVitals";

function App() {
  return (
    <Background>
      <Header></Header>
    </Background>
  );
}

export default App;
