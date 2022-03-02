import { Box, CircularProgress, TableContainer, Table, TableHead, TableCell, TableBody, TableRow, Button, Pagination } from "@mui/material";
import { color } from "@mui/system";
import React,{ChangeEvent} from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

import { postDataType } from "../App";

type listOfPost = {
  postData: postDataType;
  selectedPage: number;
  setSelectedPage: React.Dispatch<React.SetStateAction<number>>;
}

type dataType = {
  author: string;
  created_at: string;
  title: string;
  url: string;
  objectID: string;
}

const PostList = ({postData, selectedPage, setSelectedPage}: listOfPost): JSX.Element => {
   const navigate: NavigateFunction = useNavigate();

  const selectHandler = (jsonData: dataType): void => {
    navigate("rawdata", { state: jsonData})
  }
  return (
    <Box 
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop:"20px"
      }}
    >
       {postData.length === 0 ? (
         <>
         <CircularProgress></CircularProgress> Loading
         </>
       ): (
         <Box 
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent:"center",
            alignItems: "center"
          }}
         >
          <TableContainer sx={{ maxHeight: 500 }}>
            <Table stickyHeader>
              <TableHead>
                <TableCell 
                  sx={{
                    backgroundColor: "black",
                    border: "2px solid red",
                    color: "white"
                  }} align="center"
                >
                  Title
                </TableCell>
                <TableCell 
                  sx={{
                    backgroundColor: "black",
                    border: "2px solid red",
                    color: "white"
                  }} align="center"
                >
                  Author
                </TableCell>
                <TableCell 
                  sx={{
                    backgroundColor: "black",
                    border: "2px solid red",
                    color: "white"
                  }} align="center"
                >
                  Created-At
                </TableCell>
                <TableCell 
                  sx={{
                    backgroundColor: "black",
                    border: "2px solid red",
                    color: "white"
                  }} align="center"
                >
                  URL
                </TableCell>
                <TableCell 
                  sx={{
                    backgroundColor: "black",
                    border: "2px solid red",
                    color: "white"
                  }} align="center"
                >
                  Raw-Data
                </TableCell>
              </TableHead>
              <TableBody>
                {postData.length && postData[selectedPage - 1].map((items: dataType) => {
                  console.log(items)
                  const {author, created_at, title, url, objectID} = items;
                  return(
                    <TableRow key={objectID}>
                      <TableCell sx={{ maxWidth:250, overflow: "hidden"}}>{title}</TableCell>
                      <TableCell>{author}</TableCell>
                      <TableCell>{created_at}</TableCell>
                      <TableCell sx={{ maxWidth: 200, overflow: "hidden"}}>{url}</TableCell>
                      <TableCell>
                        <Button variant="contained" onClick={(): void => selectHandler(items)}>Select</Button>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <Box sx={{padding: "50px"}}>
            <Pagination count={postData.length} 
            onChange={(e: ChangeEvent<any>, value: number): void => setSelectedPage(value)}
            page={selectedPage}></Pagination>
          </Box>
         </Box>
       )}
    </Box>
  )
}

export default PostList;