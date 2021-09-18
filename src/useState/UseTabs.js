import { useState } from "react";

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1",
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2",
  },
];

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    //allTabs가 true가 아니거나 allTabs가 array가 아니라면
    return;
  }
  return {
    currentItem: allTabs[currentIndex],
    // 여기에서 버튼 바꿀때마다 content바꿔주는 code 작성
    changeItem: setCurrentIndex,
  };
};

// 함수형으로 만들기 -> 이게 better
function UseTabsApp() {
  const { currentItem, changeItem } = useTabs(0, content); // 0번째 content를 초기값으로 설정

  return (
    <div className="App">
      <h2>UseTabs</h2>
      {/* 원하는 section의 content만 보여주기 */}
      {/* section 선택 버튼 생성 */}
      {content.map(
        (
          section,
          index // index 는 0 또는 1(이 코드에서는 content가 2개이니까)가 되어야 함
        ) => (
          <button
            onClick={
              () => changeItem(index) // 이 함수가 index를 0 또는 1로 바꿔줌
            }
          >
            {section.tab}
          </button>
        )
      )}
      <div>{currentItem.content}</div>
    </div>
  );
}

export default UseTabsApp;
