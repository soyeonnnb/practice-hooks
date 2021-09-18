import React, { useState } from "react";

// useState => content를 바꿔줌 cf. setState는 모든걸 "새로고침" 해줌

// 함수형으로 만들기 -> 이게 better
function AppBetter() {
  // useState는 초기에 state를 InitialState를 세팅할 수 있는 옵션제공
  const [item, setItem] = useState(1);
  //     여기에 이름을 주는 건 선택사항임(원하는 이름으로 설정 가능)
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);

  return (
    <div className="AppBetter">
      <h2>UseState</h2>
      <h3>Hello {item}</h3>
      <button onClick={incrementItem}>increment</button>
      <button onClick={decrementItem}>decrement</button>
    </div>
  );
}

// 클래스형으로 useState부분 만들기 -> 함수형보다 더 많은 코드 필요 == 비효율적
class AppUgly extends React.Component {
  state = {
    item: 1,
  };
  render() {
    const { item } = this.state;
    return (
      <div className="App">
        <h1>Hello {item}</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button onClick={this.incrementItem}>increment</button>
        <button onClick={this.decrementItem}>decrement</button>
      </div>
    );
  }
  incrementItem = () => {
    this.setState((state) => {
      return {
        item: state.item + 1,
      };
    });
  };
  decrementItem = () => {
    this.setState((state) => {
      return {
        item: state.item - 1,
      };
    });
  };
}
export default AppBetter;
