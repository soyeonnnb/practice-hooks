import { useEffect, useState } from "react";

// 제목을 변경시켜줌.
const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title"); // <title> 이렇게 된거
    htmlTitle.innerText = title;
  };
  // useEffect는 componentMount될 때 updateTitle을 실행함.
  // 그리고 title이 업데이트 되면 updateTitle을 다시 부름.
  useEffect(updateTitle, [title]);

  return setTitle;
};

const UseTitleApp = () => {
  const titleUpdater = useTitle("Loading....");
  // time 지연시간 주기
  setTimeout(() => titleUpdater("Home"), 5000);
  return (
    <div className="UseTitle">
      <h2>UseTitle</h2>
      <span>title 확인하기</span>
    </div>
  );
};

export default UseTitleApp;
