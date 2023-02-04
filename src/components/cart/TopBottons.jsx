import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Cont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const Btn = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) =>
    (props.type === "filled" && "none") || (props.type === "red" && "none")};
  background-color: ${(props) =>
    props.type === "filled"
      ? "rgb(249 160 252)"
      : props.type === "red"
      ? "red"
      : "transparent"};
  color: ${(props) =>
    props.type === "filled" || props.type === "red" ? "white" : "black"};
  box-shadow: var(--boxShadow1);
  border-radius: 3px;
`;
const TopTexts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 9px;
  @media screen and (max-width: 460px) {
    display: none;
  }
`;
const TopText = styled.div`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
const TopBottons = ({ setShowConf, qty }) => {
  return (
    <Cont>
      <Link to="/shop">
        {qty <= 0 ? (
          <Btn>Start Shopping</Btn>
        ) : (
          <Btn type="filled">Continue Shopping</Btn>
        )}
      </Link>
      <TopTexts>
        <TopText>Shopping Bag({qty})</TopText>
        <TopText>Your Wishlist (0)</TopText>
      </TopTexts>
      {qty >= 1 && (
        <Btn type="red" onClick={() => setShowConf(true)}>
          Clear Cart
        </Btn>
      )}
    </Cont>
  );
};

export default TopBottons;
