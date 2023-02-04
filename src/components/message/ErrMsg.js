import { Dangerous } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
const MSG = styled.div`
  position: fixed;
  top: 20px;
  right: 5px;
  padding: 15px;
  background-color: #dd0d0d;
  color: #ffffff;
  font-size: 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  z-index: 9999999;
`;
const ErrMsg = ({ errRef, errMsg }) => {
  
  
  return (
    <MSG ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>
      <Dangerous /> {errMsg}
    </MSG>
  );
};

export default ErrMsg;
