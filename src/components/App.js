// 이 폰트는 왜 적용이 안되는 걸까? 나한테 왜그러는걸까?
import "@fontsource/noto-sans-kr";
import "./common.scss";
import Background from "./Background";
import Topbanner from "./Topbanner";
import Gnb from "./Gnb";
import Main from "./componentsMain/Main";

import React from "react";

function App() {
  return (
    <Background>
      <Topbanner></Topbanner>
      <Gnb></Gnb>
      <Main></Main>
    </Background>
  );
}

export default App;
