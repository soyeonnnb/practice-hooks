import useAxios from "./Axios";
const UseAxiosApp = () => {
  const { loading, data, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json",
  });
  return (
    <div className="UseAxios">
      <h2>UseAxios</h2>
      <h4>{data && data.status}</h4>
      <h5>{loading && "Loading"}</h5>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
};
export default UseAxiosApp;
