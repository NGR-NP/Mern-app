import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import UsernameComp from "./inputs/username";
import { useDispatch } from "react-redux";
import PasswordComp from "./inputs/password";
import EmailComp from "./inputs/email";
import Info from "../Info";
import Button from "../Button";
import axios from "../../../api/axios";
import ErrMsg from "../ErrMsg";
import { showToastMessage } from "../../../new/custonToast/toastSlice";

const isValidUsername = /^[A-z][A-z0-9-_]{2,15}$/;
const isValidEmail =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const isValidPwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const REGISTER_URL = "/auth/register";
const RegisterComp = () => {
  const [username, setUsername] = useState("");
  const [validUsername, setValidUsername] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [isErr, setIsErr] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const errRef = useRef();

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setValidUsername(isValidUsername.test(username));
  }, [username]);

  useEffect(() => {
    setValidEmail(isValidEmail.test(email));
  }, [email]);

  useEffect(() => {
    setValidPwd(isValidPwd.test(password));
    setValidMatch(password === matchPwd);
  }, [password, matchPwd]);

  useEffect(() => {
    setErrMsg("");
    setIsErr(false);
  }, [username, email, password, matchPwd]);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const nameI = isValidUsername.test(username);
    const emailI = isValidEmail.test(email);
    const passwordI = isValidPwd.test(password);
    const MpasswordI = isValidPwd.test(matchPwd);
    if (!nameI || !emailI || !passwordI) {
      setErrMsg("Nice try");
      setIsErr(true);
    } else if (!MpasswordI) {
      setIsErr(true);
      setErrMsg("please comform your password, it will help you");
    } else if (errMsg) {
      setIsErr(true);
      setLoading(false);
      return;
    }
    try {
      const res = await axios.post(REGISTER_URL, { username, email, password });
      dispatch(
        showToastMessage({
          message: res?.data?.message,
          type: "success",
        })
      );
      setUsername("");
      setEmail("");
      setPassword("");
      setMatchPwd("");
      navigate("/login", {
        replace: true,
      });
    } catch (err) {
      const resp = err?.response?.data;
      if (!resp) {
        isErr(true);
        setErrMsg("server is not responding, Reload and try again");
      } else if (resp?.status === 400) {
        setErrMsg(resp?.message);
      } else if (resp?.status === 409) {
        setErrMsg(resp?.message);
      } else if (resp) {
        setErrMsg(resp?.message);
      } else {
        setErrMsg("register failed! 😔");
      }
    }
    setLoading(false);
  };

  return (
    <>
      {errMsg && <ErrMsg errMsg={errMsg} errRef={errRef} />}
      <form onSubmit={handleSubmit} className="registerForm">
        <div className="registerTitle title">Register</div>
        <Info
          message={"Alredy have an Account"}
          what={"Login"}
          where={"/login"}
        />
        <UsernameComp
          username={username}
          validUsername={validUsername}
          setUsername={setUsername}
          usernameFocus={usernameFocus}
          setUsernameFocus={setUsernameFocus}
        />
        <EmailComp
          email={email}
          setEmail={setEmail}
          validEmail={validEmail}
          emailFocus={emailFocus}
          setEmailFocus={setEmailFocus}
        />
        <PasswordComp
          password={password}
          setPassword={setPassword}
          validPwd={validPwd}
          pwdFocus={pwdFocus}
          setPwdFocus={setPwdFocus}
          matchPwd={matchPwd}
          setMatchPwd={setMatchPwd}
          validMatch={validMatch}
          matchFocus={matchFocus}
          setMatchFocus={setMatchFocus}
        />
        <Button
          lets={"Register"}
          validUsername={validUsername}
          validEmail={validEmail}
          validPwd={validPwd}
          validMatch={validMatch}
          loading={loading}
          isErr={isErr}
        />
      </form>
    </>
  );
};
export default RegisterComp;

// const [state, setState] = useState({
//   username: "",
//   validUsername: false,
//   usernameFocus: false,
//   email: "",
//   validEmail: false,
//   emailFocus: false,
//   password: "",
//   validPwd: false,
//   pwdFocus: false,
//   matchPwd: "",
//   validMatch: false,
//   matchFocus: false,
//   isErr: false,
//   errMsg: "",
// });

// const {
//   username,
//   validUsername,
//   usernameFocus,
//   email,
//   validEmail,
//   emailFocus,
//   password,
//   validPwd,
//   pwdFocus,
//   matchPwd,
//   validMatch,
//   matchFocus,
//   isErr,
//   errMsg,
// } = state;
