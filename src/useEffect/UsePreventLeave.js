// window 창을 닫을 때 "아직 저장하지 않았다!" 이런식으로 말해주는거

const UsePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  // beforeunload 는 window가 닫히기 전에(페이지를 떠날 때) function이 실행되는 것을 허락함
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);
  return { enablePrevent, disablePrevent };
};

const UsePreventLeaveApp = () => {
  const { enablePrevent, disablePrevent } = UsePreventLeave();
  // 이건 enable:enable, disablePrevent:disablePrevent의 축약형이기 때문에 이름이 동일해야 함.
  return (
    <div className="usePreventLeave">
      <h2>UsePreventLeave</h2>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>UnProtect</button>
    </div>
  );
};
export default UsePreventLeaveApp;
