import React from "react";

function Navbar() {
  return (
    <>
      <div className="nav">
        <h1>
          {/* 
          1. <img src="/public/tossimg/logo-header.png" alt="toss" /> 상대경로,절대경로 못찾음. 
          2. react 는 ./이 public을 뜻함 ./tossimg/logo-header.png
          직접 써줘서 경로설정하기 
          */}

          <img src="./tossimg/logo-header.png" alt="toss" />
        </h1>
        <div className="app-download">
          <a href="">앱 다운로드</a>
        </div>
        <a href="">
          <img src="" alt="" />
        </a>
      </div>
    </>
  );
}

export default Navbar;
