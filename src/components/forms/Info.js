import React from "react";
import { Link } from "react-router-dom";

const Info = ({ message, what, where }) => {
  return (
    <div className="infoCont">
      <p>{message}</p>
      <Link to={where}>{what}</Link>
    </div>
  );
};

export default Info;
