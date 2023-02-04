import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUserId } from "../../new/auth/authSlice";
import { useOrderMutation } from "../../new/orders/orderApiSlice";
import Circle from "../loading/Circle";
import {
  selectCurrentProduct,
  selectCurrenttotal,
  emptyCart,
} from "../../new/cart/cartSlice";
import { showToastMessage } from "../../new/custonToast/toastSlice";
import { useNavigate } from "react-router-dom";
import AddressComp from "./inputs/AddressComp";
import NumberComp from "./inputs/NumberComp";
import { useState } from "react";
import styled from "styled-components";
const Wrap = styled.div`
  width: inherit;
`;
const CheckoutForm = () => {
  const product = useSelector(selectCurrentProduct);
  const id = useSelector(selectCurrentUserId);
  const total = useSelector(selectCurrenttotal);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");

  const [order, { isLoading }] = useOrderMutation();

  const ordersData = [];
  product.forEach((product) => {
    ordersData.push({
      productId: product._id,
      color: product.color,
      size: product.size,
    });
  });
  if (ordersData.length === 0) {
    dispatch(
      showToastMessage({ message: "Your Cart is empty", type: "error" })
    );
  }
  const handleOrder = async (e) => {
    e.preventDefault();
    try {
      if (ordersData.length === 0) {
        dispatch(
          showToastMessage({ message: "Your Cart is empty", type: "error" })
        );
      } else if (!address) {
        dispatch(
          showToastMessage({
            message: "please enter your shipping address",
            type: "error",
          })
        );
      } else if (!number) {
        dispatch(
          showToastMessage({
            message: "please enter contact NUMBER",
            type: "error",
          })
        );
      } else {
        await order({
          id: id,
          products: ordersData,
          amount: total,
          address: address,
          number: number,
        }).unwrap();
        dispatch(emptyCart());
        dispatch(
          showToastMessage({
            message: "your order is submited successfully",
            type: "success",
          })
        );
        navigate("/", { replace: true });
      }
    } catch (err) {
      if (!err) {
        dispatch(
          showToastMessage({
            message: "server is not responding!",
            type: "error",
          })
        );
      } else {
        // dispatch(
        //   showToastMessage({ message: "Orders Failed!", type: "error" })
        // );
        console.error(err);
      }
    }
  };
  return (
    <form onSubmit={handleOrder} className="loginMain centerADiv">
      <Wrap>
        <AddressComp setAddress={setAddress} number={number} />
        <NumberComp setNumber={setNumber} number={number} />
        <div className="centerADiv">
          <button className="loginBtn" disabled={isLoading ? true : false}>
            {isLoading ? <Circle top={"19%"} right={"45%"} /> : `Checkout`}
          </button>
        </div>
      </Wrap>
    </form>
  );
};

export default CheckoutForm;
