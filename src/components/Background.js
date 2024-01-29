import React from "react";
import "./Background.scss";

// Background 컴포넌트가 자식 컴포넌트를 인자를 받고 반환출력해서  제대로 렌더링 해야 한다.  {children}을 사용함으로써 컴포넌트의 재사용성과 확장성을 높일 수 있다.
function Background({ children }) {
  return <div className="container-background">{children}</div>;
}

export default Background;
