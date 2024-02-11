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
        <div className="p-relative">
          <p>사기계좌 조회</p>
          <p>
            송금 전 사기 내역 조회로
            <br /> 피해를 미리 방지할 수 있어요{" "}
          </p>

          <p>
            송금 전 토스가 알아서 사기 내역 조회를 해드려요. <br />
            상대방의 연락처 또는 계좌가 사기 계좌인지 조회해 <br /> 안전하게
            송금할 수 있어요.
          </p>
          <div className="songgm-img1">
            <img src="./tossimg/section1_2_02.png" alt="" />
          </div>
        </div>
        <div className="p-relative">
          <p>자동이체 예약</p>
          <p>
            은행 점검 시간, <br /> 기다릴 필요 없어요{" "}
          </p>

          <p>
            은행 점검 시간에는 자동이체 예약을 이용해보세요. <br />
            점검 시간이 끝나면 토스가 알아서 송금해드릴게요.
          </p>
          <div className="songgm-img1">
            <img src="./tossimg/section1_2_03.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sectionsonggm;
