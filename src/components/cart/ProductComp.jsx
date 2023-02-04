import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow: var(--boxShadow);
  border-radius: 14px;
  @media screen and (max-width: 675px) {
    flex-direction: column;
  }
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  padding: 12px;
  @media screen and (max-width: 520px) {
    display: grid;
    justify-content: center;
    justify-items: center;
    font-size: 6vw;
  }
`;

const Image = styled.img`
  width: 200px;
  border-radius: calc(14px + 1px);
  @media screen and (max-width: 520px) {
    width: calc(100vw - 40%);
  }
`;
const ImageBg = styled.img`
  width: 200px;
  position: absolute;
  height: 154px;
  object-fit: cover;
  z-index: -1;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 1rem;
`;

const ProductName = styled.div``;

const ProductId = styled.div``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.div``;

const PriceDetail = styled.div`
  flex: 0.2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 2rem;
  @media screen and (max-width: 675px) {
    flex-direction: row;
    justify-content: space-between;

    margin-top: 0.1rem;
    margin-right: 2rem;
    margin-bottom: 1.1rem;
    margin-left: 4rem;
    gap: 2rem;
  }
  @media screen and (max-width: 500px) {
    margin-left: 2rem;
  }
  
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  .icon {
    box-shadow: var(--boxShadow);
    border-radius: 50px;
    padding: 4px;
    cursor: pointer;
    font-size: 1rem;
  }
`;

const ProductAmount = styled.div`
  background: transparent;
  color: black;
  padding: 8px 14px;
  font-size: 1.47rem;
  border-radius: 9px;
  box-shadow: var(--boxShadow);
  margin: 6px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and(max-width: 400px) {
    margin: "5px 15px";
  }
`;

const ProductPrice = styled.div`
  text-transform: capitalize;
  font-size: 1.4rem;
  font-weight: 200;
  font-family: var(--font6);
  @media screen and(max-width: 400px) {
    marginbottom: "20px";
  }
`;
const ProductComp = ({ product }) => {
  return (
    <Product>
      <ProductDetail>
        <Image src={product?.img || "./image/colors.png"} />
        <ImageBg src="./images/clothes.png" />
        <Details>
          <ProductName>
            <b>Product:</b> {product?.title}
          </ProductName>
          <ProductId>
            <b>ID:</b> {product?._id}
          </ProductId>
          <ProductColor color={product?.color} />
          <ProductSize>
            <b>Size:</b> {product?.size}
          </ProductSize>
        </Details>
      </ProductDetail>
      <PriceDetail>
        <ProductAmountContainer>
          <Remove className="icon" />
          <ProductAmount>{product?.qty}</ProductAmount>
          <Add className="icon" />
        </ProductAmountContainer>
        <ProductPrice>Rs.{product?.price * product?.qty}</ProductPrice>
      </PriceDetail>
    </Product>
  );
};

export default ProductComp;
