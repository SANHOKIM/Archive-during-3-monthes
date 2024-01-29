import React from "react";
import "./Navbar575.scss";

function Navbar() {
  return (
    <>
      {/* 3 h1과 div앱다운로드 형제요소 블록이라해도 평행해서 양쪽으로 찢기  */}
      <header className="gnb d-flex j-content p-relative">
        {/* 1 상단 네비바에 로고만듬 */}
        <h1>
          <a
            className="a-header-logo"
            href="http://www.toss.im"
            target="_blank "
          >
            <img src="./tossimg/logo-header.png" alt="toss" />
          </a>
        </h1>
        <p>소요시간4시간이게맞음?</p>
        {/* 4 576부터 나타나는 ul li 만들기  */}

        {/* 2 상단 우측에 a 인라인:앱다운로드 적고,  */}
        <button className="button-app-download">앱 다운로드</button>
      </header>
    </>
  );
}

export default Navbar;
