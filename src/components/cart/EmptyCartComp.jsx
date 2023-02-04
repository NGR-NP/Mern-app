import React from "react";
import { Link } from "react-router-dom";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import styled from "styled-components";
const Wrap = styled.div`
  margin: 4rem 0;
  flex-direction: column;
`;
const Links = styled(Link)`
  background-color: #fd6acb;
  box-shadow: var(--boxShadow);
  padding: 12px 20px;
  color: #ffffff;
  border-radius: 8px;
  margin: 1rem;
`;
const EmptyCart = styled(ProductionQuantityLimitsIcon)`
  font-size: 12vmax !important;
  color: lightslategray;
`;
const EmptyCartComp = () => {
  return (
    <Wrap className="centerADiv">
      <EmptyCart />
      <p> Empty Cart</p>
      <Links to="/shop">start Shoppig</Links>
    </Wrap>
  );
};

export default EmptyCartComp;
