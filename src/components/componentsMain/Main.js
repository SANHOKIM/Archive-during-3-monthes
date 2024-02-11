import React from "react";
import "./Main.scss";

import Sectionhomesobi from "./Sectionhomesobi";
import SectionIntro from "./SectionIntro";
import Sectionsonggm from "./Sectionsonggm";

function Main() {
  return (
    <>
      <SectionIntro></SectionIntro>
      <Sectionhomesobi></Sectionhomesobi>
      <Sectionsonggm></Sectionsonggm>
    </>
  );
}

export default Main;
