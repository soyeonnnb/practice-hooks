// 기본적으로 탭을 닫을 때 실행되는 함수
//--> 예를 들어 팝업이나 비슷한 걸 실행시키고 싶을 때 "정말로 떠나시겠습니끼?"이런식으로 말하는 거

import { useEffect } from "react";

const UseBeforeLeave = (onBefore) => {
  const handle = (event) => {
    // clientY는 window에서의 y좌표값인데, 0보다 작다는 것은 즐겨찾기 쪽으로 마우스가 이동했다는 뜻
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []); // 마지막에 [] 이걸 붙여주는 이유는 단 한번만 함수를 실행할 것이기 때문임
  if (typeof onBefore !== "function") {
    return;
  }
};
const UseBeforeLeaveApp = () => {
  const begForLife = () => console.log("Please don't leave");
  UseBeforeLeave(begForLife);
  return (
    <div className="UseBeforeLeave">
      <h2>UseBeforeLeave</h2>
    </div>
  );
};
export default UseBeforeLeaveApp;
