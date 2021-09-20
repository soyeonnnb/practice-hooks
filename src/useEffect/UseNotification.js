// 알림만들기 --> notification API 사용 (mdn에서 옵션들 확인 가능)
const useNotification = (title, { body }) => {
  // 먼저 체크함 --> window notification에 접근해야만 하기 때문
  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      // 여기서 permission요구,then(permission --> 여기는 default/denied/granted 중 하나가 됨)
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, { body });
        } else {
          return;
        }
      });
    } else {
      new Notification(title, { body });
    }
  };
  return fireNotif;
};

const UseNotificationApp = () => {
  const triggerNotif = useNotification(
    "notification title부분",
    "notification body부분"
  );
  return (
    <div className="UseNotification">
      <h2>UseNotificationApp</h2>
      <button onClick={triggerNotif}>Click!</button>
    </div>
  );
};
export default UseNotificationApp;
