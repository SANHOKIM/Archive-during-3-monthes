import React from "react";
import "./Sectionhomesobi.scss";

function Sectionhomesobi() {
  return (
    <>
      <div className="homesobi">
        <p>
          토스에 계좌와 카드를 연결해 보세요.
          <br />
          계좌 잔액, 대출·투자 내역은 기본,
          <br />
          일자별 소비와 수입까지 한 번에 볼 수 있어요.
        </p>
        <h1>홈 · 소비</h1>
        <h2 className="">
          내 돈 관리,
          <br />
          지출부터 일정까지
          <br />
          똑똑하게
        </h2>
        <div className="phoneUi">
          <div className="phoneUiOne">
            <img src="./tossimg/section1_1_home_02.png" alt="" />

            <img src="./tossimg/iPhone12_Clay_Shadow_high.png" alt="" />
          </div>

          <div className="phoneUiTwo">
            <img src="./tossimg/section1_1_home_01.png" alt="" />
            <img src="./tossimg/iPhone12_Clay_Shadow_high.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sectionhomesobi;
