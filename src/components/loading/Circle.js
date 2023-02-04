import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
    0%{
        transform: rotate(0deg);
    }100%{
        transform: rotate(360deg)
    }
`;
const Loading = styled.div`
  border: 5px solid #f9a0fc;
  border-top: 5px solid white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  position: absolute;
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};

  animation: ${spin} 2s linear infinite;
`;
const Circle = ({ top, bottom, left, right }) => {
  return <Loading top={top} bottom={bottom} left={left} right={right} />;
};

export default Circle;
