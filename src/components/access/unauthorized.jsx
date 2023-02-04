import { useEffect, useState } from "react";
import styled from "styled-components";
const ImgCont = styled.div`
  display: grid;
  place-items: center;
`;
const Img = styled.img`
  max-width: 898px;
  width: 100%;
  border-radius: 50px;
  box-shadow: 0px -1px 13px rgb(255 255 255);
  margin: 1rem 0.5rem 3rem 0.5rem;
`;

const Desc = styled.h1`
  font-family: var(--font5);
  color: gray;
  font-size: 4vw;
`;

const UnauthData = {
  images: [
    {
      img: "/images/not-allowed/not-allowed.gif",
    },
    {
      img: "/images/not-allowed/not-allowed1.gif",
    },
    {
      img: "/images/not-allowed/not-allowed2.gif",
    },
    {
      img: "/images/not-allowed/not-allowed3.gif",
    },
    {
      img: "/images/not-allowed/not-allowed4.gif",
    },
    {
      img: "/images/not-allowed/not-allowed5.gif",
    },
    {
      img: "/images/not-allowed/not-allowed6.gif",
    },
    {
      img: "/images/not-allowed/not-allowed7.gif",
    },
  ],
};

const Unauthorized = () => {
  const [unauthIdx, setUnauthIdx] = useState(
    Math.floor(Math.random() * UnauthData.images.length)
  );
  useEffect(() => {
    setUnauthIdx(Math.floor(Math.random() * UnauthData.images.length));
  }, []);

  return (
    <ImgCont>
      <Desc>you are not authorized</Desc>
      <Img
        src={UnauthData.images[unauthIdx].img}
        alt="you are not authorized"
      />
    </ImgCont>
  );
};

export default Unauthorized;
