import styled from "styled-components";
import Brands from "../sections/brands/Brands";
import Hero from "../sections/hero/Hero";
import Products from "../sections/Products/Products";
import LogoComp from "../components/Nav/top/LogoComp";
import SocialMedia from "../components/Nav/bottom/SocialMedia";
import { Send } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { showToastMessage } from "../new/custonToast/toastSlice";
import { useState } from "react";
const Footer = styled.footer`
  height: 40vh;
  padding: 2rem 1rem;
`;
const Cont = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Logo = styled.div`
  display: flex;
  margin-bottom: 3rem;
`;
const NewsLetter = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: auto
flex: 1;
`;
const InputCont = styled.div`
  padding: 1.5rem 3rem;
  box-shadow: var(--boxShadow1);
  border-radius: 15px;
  display: flex;
  gap: 2rem;
  max-width: 800px;
  position: relative;
  .icon {
    position: absolute;
    right: 55px;
    top: 30px;
    color: gray;
    z-index: 111;
    cursor: pointer;
  }
  @media screen and (max-width: ) {
    
  }
`;
const Title = styled.div`
  font-size: 4rem;
  color: #9a2799;
`;
const Input = styled.input`
  padding: 0.5rem 1rem;
  width: 460px;
  height: 20px;
  border-radius: 6px;
  outline: none;
  border: none;
`;

const Social = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;

  .column {
    gap: 1.5rem;
    margin-bottom: 1rem;
    @media screen and (max-width: 500px) {
      flex-direction: column;
    }
  }
  .footerUlLink {
    display: flex;
  }
`;
const Home = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const handleClick = () => {
    if (!email) {
      dispatch(
        showToastMessage({ message: "enter your email", type: "error" })
      );
    } else if (email) {
      dispatch(
        showToastMessage({
          message: `Suscribed to newsletter check your your ${email} for update`,
          type: "success",
        })
      );
    }
  };
  return (
    <>
      <Hero />
      <Brands />
      <Products />
      <Footer>
        <Logo>
          <LogoComp />
        </Logo>
        <Cont>
          <NewsLetter>
            <Title>NewsLetter</Title>

            <InputCont>
              <form>
                <Input
                  type="email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Send className="icon" onClick={handleClick} />
              </form>
            </InputCont>
          </NewsLetter>
          <Social>
            <SocialMedia />
          </Social>
        </Cont>
      </Footer>
    </>
  );
};

export default Home;
