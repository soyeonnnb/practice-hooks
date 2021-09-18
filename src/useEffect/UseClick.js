import { useEffect, useRef } from "react";
/* reference 사용
    reference란? -> 기본적으로 우리의 component의 어떤 부분을 선택할 수 있는 방법(document.getElementById()와 동등함)
    react에 있는 모든 component는 reference element(reference props)를 가지고 있음
*/

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    // componentDidMount/componentDidUpdate 됐을 때 이 eventlistener를 불러옴
    // dependency가 있다면(현재 함수엔 없음) componentDidMount일때만 호출됨
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    // componentWillUnMount될 때 불러옴
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []); // dependency는 없음
  return element;
};

const UseClickApp = () => {
  // reference 설명
  const inputRef = useRef(); // reference사용
  setTimeout(() => console.log(inputRef.current), 5000);
  // setTimeout(() => inputRef.current.focus(), 5000); 5초 뒤에 해당 input에 focus가 감

  const sayHello = () => console.log("say Hello");
  const title = useClick(sayHello);
  return (
    <div className="UseClick">
      <h2>UseClick</h2>
      {/* reference 설명
      <input ref={inputRef} placeholder="useClick" />*/}
      <h3 ref={title}>Hi</h3>
    </div>
  );
};

export default UseClickApp;
