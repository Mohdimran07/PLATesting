import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import RawData from "./Pages/RawJson";
import NotFound from "./Pages/NotFound";
import PostList from "./Pages/PostList";
import axios from "axios";
function App() {
  const [postData, setPostData] = useState<any>([]);
  const [selectedPage, setSelectedPage] = useState<number>(1);

  let count = 0;
  const [isLoading, setisLoading] = useState<boolean>(false);
  const [error, setErro] = useState<any>({ type: 0, message: "" });

  const fetchApi = async () => {
    try {
      if (count === 0) {
        setisLoading(true);
      }

      const responce = await axios.get(
        "http://hn.algolia.com/api/v1/search?query=bar&page=" + count
      );

      if (responce) {
        console.log(responce);
        setPostData((prev: any) => [...prev, responce?.data?.hits]);
      }
    } catch (e) {
      if (count === 0) {
        setErro({ type: 200, message: "somthing went worng" });
      } else {
        setErro({ type: 0, message: "" });
      }
    } finally {
      setisLoading(false);
    }
    count += 1;
  };

  useEffect(() => {
    fetchApi();
    setInterval(fetchApi, 10000);
  }, []);

  useMemo(() => {
    console.log(postData);
  }, [postData]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <PostList
              data={postData}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              isLoading={isLoading}
              error={error}
            ></PostList>
          }
        ></Route>
        <Route path="rawdata" element={<RawData></RawData>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
