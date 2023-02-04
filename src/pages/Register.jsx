import React from "react";
import RegisterComp from "../components/Forms/register/RegisterComp";
import GoToHome from "../components/Icons/GoToHome";
import "../style/Register.css";
const Register = () => {
  return (
    <div className="registerSec">
      <RegisterComp />
      <GoToHome />
    </div>
  );
};

export default Register;
 