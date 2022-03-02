import { Box, Button } from "@mui/material";
import React from "react";
import { NavigateFunction, useLocation, useNavigate } from "react-router-dom";

const RawJson = (): JSX.Element => {
  const localState: unknown = useLocation().state;
  const navigate: NavigateFunction = useNavigate();

  const backButtonHandler = (): void => {
    navigate(-1);
  }

  if(!localState){
    return(
      <>
        <Box component={"h1"}>No Data Found</Box>
        <Button onClick={backButtonHandler} variant="contained">Go Back</Button>
      </>
    )
  }

  return (
    <Box>
      <Box component={"h1"}>Selected Raw jason</Box>
      <Box component={"p"}>{JSON.stringify(localState)}</Box>
      <Button variant="contained" onClick={backButtonHandler}>Back</Button>
    </Box>
  );
};

export default RawJson;
