// navigator가 online또는 offline이 되는 걸 막아줌 (현재 네트워크 상태를 알림)
import { useState, useEffect } from "react";

// network상태가 바뀔때마다 function을 불러줌
const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  // navigator.onLine은 true or false를 반환
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    // componentWillUnMount 일때 지금까지 한걸 정리함
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return status;
};

const UseNetworkApp = () => {
  const handleNetworkChange = (online) =>
    console.log(online ? "We just went online" : "We are offline");
  const onLine = useNetwork(handleNetworkChange);
  return (
    <div className="UseNetwork">
      <h2>UseNetwork</h2>
      <span>{onLine ? "Online" : "Offline"}</span>
    </div>
  );
};
export default UseNetworkApp;
