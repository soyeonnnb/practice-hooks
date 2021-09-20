import { useState, useEffect } from "react";
const useScroll = () => {
  // default x, y 좌표
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });
  const onScroll = () => {
    setState({ y: window.scrollY, x: window.scrollX }); // x좌표 y좌표 설정
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return state;
};

const UseScrollApp = () => {
  const { y } = useScroll();
  return (
    <div className="UseScroll">
      <h2>UseScroll</h2>
      <h4 style={{ color: y > 800 ? "red" : "blue" }}>Hi</h4>
    </div>
  );
};
export default UseScrollApp;
