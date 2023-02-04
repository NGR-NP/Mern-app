import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  calculateShipping,
  selectCurrentdiscount,
  selectCurrentPriceAfterDiscount,
  selectCurrentshippingCharge,
  selectCurrenttotal,
} from "../../new/cart/cartSlice";
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: fit-content;
  position: sticky;
  top: 8%;
  box-shadow: var(--boxShadow);
  display: flex;
  flex-direction: column;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 11px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
  gap: 3rem;
`;
const SummaryItemText = styled.div``;

const SummaryItemPrice = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: rgb(249 160 252);
  color: white;
  font-weight: 600;
  outline: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
const SummaryComp = () => {
  const total = useSelector(selectCurrenttotal);
  const shippingCharge = useSelector(selectCurrentshippingCharge);
  const discount = useSelector(selectCurrentdiscount);
  const PriceAfterDiscount = useSelector(selectCurrentPriceAfterDiscount);
  const [shipFee, setShipFee] = useState(0);
  const [shipDis, setShipDis] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (total > 7999) {
      setShipFee(total / 20);
      setShipDis(shipFee / 2);
    } else {
      setShipFee(total / 12);
      setShipDis(shipFee / 2);
    }
    dispatch(calculateShipping({ shipFee, shipDis }));
  }, [total, shipFee, shipDis, dispatch]);

  return (
    <Summary>
      <SummaryTitle>ORDER SUMMARY</SummaryTitle>
      <SummaryItem>
        <SummaryItemText>Subtotal</SummaryItemText>
        <SummaryItemPrice>Rs.{total}</SummaryItemPrice>
      </SummaryItem>
      <SummaryItem>
        <SummaryItemText>Estimated Shipping Fee</SummaryItemText>
        <SummaryItemPrice>Rs.{shippingCharge}</SummaryItemPrice>
      </SummaryItem>
      <SummaryItem>
        <SummaryItemText>Shipping Discount</SummaryItemText>
        <SummaryItemPrice>Rs.{discount}</SummaryItemPrice>
      </SummaryItem>
      <SummaryItem type="total">
        <SummaryItemText>Total</SummaryItemText>
        <SummaryItemPrice>Rs.{PriceAfterDiscount}</SummaryItemPrice>
      </SummaryItem>
      <Button onClick={() => navigate("/checkout")}>CHECKOUT NOW</Button>
    </Summary>
  );
};

export default SummaryComp;
