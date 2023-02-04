import React from "react";

const Password = ({ password, setPassword }) => {
  // const handlePasswordInput = (e) => setPassword(e.traget.value);
  return (
    <div className="loginInputCont  bdrBottom">
      <label htmlFor="password">Passowrd</label>
      <input
        className="loginInput"
        name="password"
        id="password"
        required
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        placeholder="Enter your Password"
        autoComplete="current-password"
      />
    </div>
  );
};

export default Password;
