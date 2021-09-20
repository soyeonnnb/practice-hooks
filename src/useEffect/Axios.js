// npm i axios 로 먼저 axios 를 다운받아줌
import defaultAxios from "axios";
import { useEffect, useState } from "react";
// axios --> HTTP request를 만들어줌

// axios는 약간의 customization과 configuration을 허용
const useAxios = (options, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });
  const [trigger, setTrigger] = useState(0);
  const refetch = () => {
    setState({
      ...state,
      loading: true,
    });
    setTrigger(Date.now()); // setTrigger에 랜덤한 숫자 삽입
  };
  useEffect(() => {
    axiosInstance(options)
      .then((data) => {
        setState({ ...state, loading: false, data });
      })
      // 만약 여기에서 error가 발생한다면 여기서 처리해줌
      .catch((error) => {
        setState({ ...state, loading: false, error });
      });
    // useEffect 는 trigger를 지켜보고 있음. trigger가 바뀌면 useEffect 다시 실행
  }, [trigger]);
  // 만약 해당 url이 존재하지 않는다면 return;
  if (!options.url) {
    return;
  }
  return { ...state, refetch };
};
export default useAxios;
