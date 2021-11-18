import axios from "axios";

import useSwr from "swr";
export function useData() {
  //   const fetcher = (...args) => axios.get(...args).then((res) => res.json);
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  function GetData() {
    const { data, mutate } = useSwr(
      "http://localhost:4000/api/textdata",
      fetcher
    );
    console.log("eiei", data);
    return { data, mutate };
  }
  return { GetData };
}

export default useData;
