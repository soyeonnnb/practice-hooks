import { useEffect, useRef } from "react";

/* element가 서서히 나타나는 기능
    css로도 만들 수 있지만 animation을 hooks에 포함시키는 법도 알면 좋음

*/
const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []); // componentDidMount일때만 동작
  // 이렇게 return 할 때에 opacity:0을 미리 설정해놓음
  return { ref: element, style: { opacity: 0 } };
};
const UseFadeInApp = () => {
  const fadeInH2 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(5, 4);
  return (
    <div className="UseFadeIn">
      {/* default opacity:0으로 설정 
      <h2 ref={el} style={{ opacity: 0 }}>
      근데 이렇게 하면 이걸 사용하는 모든 곳에서 이렇게 설정을 해야하기 때문에 위에서 설정*/}
      <h2 {...fadeInH2}>UseFadeIn</h2>
      <p {...fadeInP}>fadeIn p</p>
    </div>
  );
};
export default UseFadeInApp;
