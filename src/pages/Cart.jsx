import { useDispatch, useSelector } from "react-redux";
import {
  emptyCart,
  selectCurrentProduct,
  selectCurrentQty,
} from "../new/cart/cartSlice";
import { useState } from "react";
import TopBottons from "../components/cart/TopBottons";
import SummaryComp from "../components/cart/SummaryComp";
import ProductComp from "../components/cart/ProductComp";
import AreYouSure from "../dilogs/AreYouSure";
import EmptyCartComp from "../components/cart/EmptyCartComp";
import { showToastMessage } from "../new/custonToast/toastSlice";

import { Container, Info, Title, Wrapper, Bottom, Hr } from "./style/cartStyle";

const Cart = () => {
  const product = useSelector(selectCurrentProduct);
  const qty = useSelector(selectCurrentQty);
  const dispatch = useDispatch();
  const [showConf, setShowConf] = useState(false);

  const handleYes = () => {
    dispatch(emptyCart());
    dispatch(
      showToastMessage({
        message: "All Products removed Successfully!",
        type: "success",
      })
    );
    setShowConf(false);
  };

  return (
    <Container>
      {showConf && (
        <AreYouSure
          handleNo={setShowConf}
          message={"Are you Sure?"}
          handleYes={handleYes}
        />
      )}
      <Wrapper>
        <Title>YOUR BAG</Title>
        <TopBottons setShowConf={setShowConf} qty={qty} />
        <Bottom>
          <Info>
            {product.length === 0 ? (
              <EmptyCartComp />
            ) : (
              product.map((product, idx) => (
                <>
                  <ProductComp key={idx} product={product} />
                  <Hr />
                </>
              ))
            )}
          </Info>
          {qty >= 1 && <SummaryComp />}
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Cart;
