// 이 폰트는 왜 적용이 안되는 걸까? 나한테 왜그러는걸까?
import "@fontsource/noto-sans-kr";
import "./common.scss";
import Background from "./Background";
import Topbanner from "./Topbanner";
import Header from "./Header";
import Main from "./componentsMain/Main";

import React from "react";

function App() {
  return (
    <Background>
      <Topbanner></Topbanner>
      <Header></Header>
      <Main></Main>
    </Background>
  );
}

export default App;
