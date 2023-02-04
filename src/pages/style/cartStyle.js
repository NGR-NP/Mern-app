import styled from "styled-components";

export const Container = styled.div``;

export const Wrapper = styled.div`
  padding: 2rem 1.5rem;
  max-width: 1300px;
  box-shadow: 0px 6px 20px 5px rgb(0 0 0 / 9%);
  margin: 4rem auto;
  border-radius: 51px;
  @media screen and(max-width: 400px) {
    padding: "10px";
  }
  @media screen and (max-width: 360px) {
    padding: 2rem 0;
    border-radius: 0;
  }
`;
export const Title = styled.h1`
font-weight: 300;
text-align: center;
`;

export const Bottom = styled.div`
display: flex;
justify-content: center;
gap: 2rem;
flex-wrap: wrap;
`;

export const Info = styled.div`
flex: 3;
`;

export const Hr = styled.hr`
background-color: #eee;
border: none;
height: 1px;
width: 98%;
`;