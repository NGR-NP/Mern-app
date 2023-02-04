import { Link } from "react-router-dom";
import { Home } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const HomeIcon = styled(Home)`
  position: fixed;
  bottom: 10px;
  left: 10px;
  padding: 2px;
  background-color: #ffffff70;
  box-shadow: 8px 9px 20px 0px rgb(91 91 91 / 29%);
  cursor: pointer;
  border-radius: 4px;
  color: black;
  margin: 10px 0 1rem 1rem;
`;
const GoToHome = () => {
  return (
    <Link to="/">
      <HomeIcon />
    </Link>
  );
};

export default GoToHome;
