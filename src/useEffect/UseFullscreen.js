import { useRef } from "react";
// 사진을 전체화면으로 만들기

const useFullscreen = (callback) => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      /* 
      firefox 는 mozRequestFullScreen()
      opera는 webkitRequestFullScreen()
      microsoft 는 msRequestFullScreen()
      */
      if (callback && typeof callback === "function") {
        callback(true);
      }
    }
  };
  const exitFull = () => {
    document.exitFullscreen(); // 빠져나올 때에는 document로 빠져나옴
    if (callback && typeof callback === "function") {
      callback(false);
    }
  };
  return { element, triggerFull, exitFull };
};

const UseFullscreenApp = () => {
  const onFullS = (isFull) => {
    console.log(isFull ? "we are full" : "we are small");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFullS);
  return (
    <div className="UseFullscreen">
      <h2>UseFullscreen</h2>
      <div ref={element}>
        <img src="https://images.unsplash.com/photo-1632073591050-e258e64fe1cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" />
        <button onClick={exitFull}>Exit Fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make Fullscreen</button>
    </div>
  );
};
export default UseFullscreenApp;
