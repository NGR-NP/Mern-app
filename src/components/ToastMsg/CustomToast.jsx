import styled from "styled-components";
import { Check, Dangerous } from "@mui/icons-material";

const ToastMessage = styled.div`
  position: fixed;
  top: 1rem;
  right: 5px;
  padding: 15px;
  background-color: ${(props) =>
    props.bg === "success" ? "#5eda2f" : props.bg === "error" ? "red" : "blue"};
  color: #fff;
  font-size: 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  z-index: 99999999;
`;

const CustomToast = ({ message, type }) => {
  return (
    <ToastMessage bg={type}>
      {type === "success" ? <Check /> : type === "error" ? <Dangerous /> : "🤨"}
      {message}
    </ToastMessage>
  );
};

export default CustomToast;