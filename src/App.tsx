import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import RawData from "./Pages/RawJson";
import NotFound from "./Pages/NotFound";
import PostList from "./Pages/PostList";
import axios from "axios";

import NavigationBar from "./components/NavigationBar";

export type postDataType = any[];

function App(): JSX.Element {
  const [postData, setPostData] = useState<postDataType>([]);
  const [selectedPage, setSelectedPage] = useState<number>(1);

  let count: number = 0;

  const fetchApi = async (): Promise<void> => {
    const response = await axios.get(
      `http://hn.algolia.com/api/v1/search?query=bar&page=${count}`
    );

    if (response) {
      console.log(response);
      setPostData(
        (prev: postDataType): postDataType => [...prev, response?.data?.hits]
      );
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
      <NavigationBar />
      <Routes>
        <Route
          path="/"
          element={
            <PostList
              postData={postData}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
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
