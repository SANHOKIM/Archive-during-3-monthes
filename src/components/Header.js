import React from "react";
import "./Header.scss";

function Header() {
  return (
    <>
      <section className="Header">
        {/* common.scss 일정크기 이상 늘어나지 않게 하기.  */}
        <div className="container-mw991px">
          {/* 3 h1과 div앱다운로드 형제요소 블록이라해도 평행해서 양쪽으로 찢기  */}
          <header className=" gnb d-flex j-content p-relative ">
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
            <ul className="navbar-menu d-flex j-content-center d-flex-flex-wrap">
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
            <div className="navbar-lang d-flex">
              <span>
                <a href="">KOR</a>
              </span>
              <span>|</span>
              <span>
                <a href="">ENG</a>
              </span>
            </div>
            <div className="drop-menus d-flex">
              <button className="button-app-download" onClick={<></>}>
                앱 다운로드
              </button>

              <button className="button-hamburger">
                <a href="/">
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

export default Header;
