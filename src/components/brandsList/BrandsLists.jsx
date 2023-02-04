import Chanel from "../../images/brands/chanel.png";
import adidas from "../../images/brands/adidas.png";
import gucci from "../../images/brands/gucci.png";
import tommy from "../../images/brands/tommy.png";
import puma from "../../images/brands/puma.png";

import styled from "styled-components";
// const List = styled.div`
//   /* border-radius: 50%; */
//   /* min-width: 105px; */
//   width: 200px;
//   height: 100px;
//
//   background-image: url(${(props) => props.brand});
//   cursor: pointer;
//   background-repeat: no-repeat;
//   box-shadow: 3px 2px 20px 0px #48484896;

// `;
const List = styled.img`
  height: inherit;
  object-fit: contain;
  mix-blend-mode: multiply;
  -webkit-user-drag: none;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0, -0.04, 0.27, 0.43);
  &:hover {
    transform: scale(1.05);
  }
  aspect-ratio: 4/3;
`;
const BrandsLists = () => {
  return (
    <>
      <List src={Chanel} title="Chanel" alt="img" />
      <List src={gucci} title="GUCCi" alt="img" />
      <List src={tommy} title="TOMMY HILFIGER" alt="img" />
      <List src={adidas} title="adidas" alt="img" />
      <List src={puma} title="PUMA" alt="img" />
      <List src={tommy} title="TOMMY HILFIGER" alt="img" />
      <List src={gucci} title="GUCCi" alt="img" />
      <List src={adidas} title="adidas" alt="img" />
      <List src={puma} title="PUMA" alt="img" />
      <List src={adidas} title="adidas" alt="img" />
      <List src={gucci} title="GUCCi" alt="img" />
      <List src={tommy} title="TOMMY HILFIGER" alt="img" />
      <List src={puma} title="PUMA" alt="img" />
      <List src={Chanel} title="Chanel" alt="img" />
      <List src={adidas} title="adidas" alt="img" />
      <List src={tommy} title="TOMMY HILFIGER" alt="img" />
      <List src={gucci} title="GUCCi" alt="img" />
      <List src={puma} title="PUMA" alt="img" />
      <List src={Chanel} title="Chanel" alt="img" />
    </>
  );
};

export default BrandsLists;
