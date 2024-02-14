import React from "react";
import "./Main.scss";

import Sectionhomesobi from "./Sectionhomesobi";
import SectionIntro from "./SectionIntro";
import SectionComment from "./SectionComment";
import Sectionsonggm from "./Sectionsonggm";

function Main() {
  return (
    <>
      <SectionIntro></SectionIntro>
      <SectionComment></SectionComment>
      <Sectionhomesobi></Sectionhomesobi>
      <Sectionsonggm></Sectionsonggm>
    </>
  );
}

export default Main;
