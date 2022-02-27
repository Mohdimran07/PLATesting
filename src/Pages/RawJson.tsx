import { Button } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const RawJson = () => {
  const localState = useLocation().state;
  const navigate = useNavigate();

  return (
    <div>
      {JSON.stringify(localState)}
      <br></br>
      <Button
        variant="contained"
        onClick={() => {
          navigate("/");
        }}
      >
        Back
      </Button>
    </div>
  );
};

export default RawJson;
