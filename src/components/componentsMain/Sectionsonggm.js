import React from "react";
import "./Sectionsonggm.scss";

function Sectionsonggm() {
  return (
    <>
      <div className="songgm">
        <div className="h1h2">
          <h1>송금</h1>
          <h2>
            간편하고 안전하게 <br />
            수수료는 평생 무료로, <br />
            이런 송금 써보셨나요?{" "}
          </h2>
        </div>
        <div className="p-relative">
          <p>평생 무료 송금</p>
          <p>
            토스 평생 무료송금으로 <br />
            모두의 금융에 자유를{" "}
          </p>

          <p>
            누구에게 보내든 은행 상관 없이,
            <br /> 이제 토스와 함께 수수료 걱정 없이 송금하세요.
          </p>
          <div className="songgm-img1">
            <img src="./tossimg/section1_2_01.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sectionsonggm;
