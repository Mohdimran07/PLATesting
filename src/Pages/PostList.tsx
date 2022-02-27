import {Box, Pagination, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const PostList = ({
  data,
  setSelectedPage,
  selectedPage,
  erorr,
  isLoading,
}: any) => {
 
  const navigate = useNavigate();

  const handleOnSelect = (rawData: any) => {
    navigate("rawdata", { state: rawData });
  };


  return (
    <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
      <div className="pages">
      <div className="list title">
        <span>Author</span>
        <span>Created_At_I</span>
        <span>Title</span>
        <span>URL</span>
        <span>Raw Data</span>
      </div>
      {isLoading ? (
        <>loading...</>
      ) : (
        <div>
          {data.length > 0 &&
            data[selectedPage - 1].map((item: any) => {
              console.log(item);

              return (
                <div key={item?.objectID} className="list item">
                  <span> {item?.author}</span>
                  <span> {item?.created_at_i}</span>
                  <span> {item?.title}</span>
                  <span>{item?.url}</span>
                  <span>
                    <Button onClick={() => handleOnSelect(item)}>Select</Button>
                  </span>
                </div>
              );
            })}
        </div>
      )}
      <Pagination
        onChange={(e: any, value) => setSelectedPage(value)}
        count={data.length}
        page={selectedPage}
      ></Pagination>
    </div>

  </Box>
 
    
  );
};

export default PostList;