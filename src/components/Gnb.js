import React, { useEffect } from "react";
import "./Gnb.scss";

function Gnb() {
  useEffect(() => {
    document
      .querySelector(".button-hamburger")
      .addEventListener("click", () => {
        document.querySelector(".navbar-menu").classList.toggle("show");
      });
  }, []);
  return (
    <>
      <section className="gnb">
        {/* common.scss 일정크기 이상 늘어나지 않게 하기.  */}
        <div className="container-mw991px">
          {/* 3 h1과 div앱다운로드 형제요소 블록이라해도 평행해서 양쪽으로 찢기  */}
          <header className="header display-flex p-relative">
            {/* 1 상단 네비바에 로고만듬 */}
            <h1>
              <a className="a-header-logo" href="/" target="_blank ">
                <img src="./tossimg/logo-header.png" alt="toss" />
              </a>
            </h1>
            {/* <div className="when-drop-menus "> */}
            <ul className="navbar-menu d-flex-flex-wrap">
              <li>
                {/* <Link to="/">회사 소개</Link> */}
                <a href="/">회사 소개</a>
              </li>
              <li>
                <a href="/">고객센터</a>
              </li>
              <li>
                <a href="/">자주 묻는 질문</a>
              </li>
              <li>
                <a href="/">토스인증서</a>
              </li>
              <li>
                <a href="/">채용</a>
              </li>
            </ul>
            <div className="navbar-lang display-flex">
              <span>
                <a href="/">KOR</a>
              </span>
              <span>|</span>
              <span>
                <a href="/">ENG</a>
              </span>
            </div>
            {/* </div> */}

            <div className="drop-menus display-flex">
              <button className="button-app-download" onClick={<></>}>
                앱 다운로드
              </button>

              <button className="button-hamburger">
                <a href="#none">
                  <img src="./tossimg/hamburger.svg" alt="" />
                </a>
              </button>
            </div>
          </header>
        </div>
      </section>
    </>
  );
}
export default Gnb;
