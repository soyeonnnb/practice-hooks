import { useState } from "react";

// useState => content를 바꿔줌 cf. setState는 모든걸 "새로고침" 해줌
// useInput -> 기본적으로 input을 업데이트함
const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue); // hook으로부터 받은 value사용
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      // validator === true 일때만 setValue 가능
      setValue(value);
    }
  };
  return { value, onChange };
};

function UseInputApp() {
  // 여기서 validator만듦 -> true or false. 원하는 식으로 사용 가능
  //const maxLen = (value) => !value.includes("@");  이렇게 하면 @ 사용 불가
  const maxLen = (value) => value.length <= 10; // 최대 10글자까지 사용 가능
  const name = useInput("Mr.", maxLen); // initialValue == "Mr."

  return (
    <div className="UseInput">
      <h2>UseInput</h2>
      <input placeholder="Name" {...name} />
      {/* {...name} === value = {name.value} 그리고 onChange = {name.onChange}
          이런식으로 name이 들어가는 모든걸 unpack 함 */}
    </div>
  );
}

export default UseInputApp;
