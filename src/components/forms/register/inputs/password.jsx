import { Dangerous, InfoOutlined } from "@mui/icons-material";

const PasswordComp = ({
  password,
  setPassword,
  validPwd,
  pwdFocus,
  setPwdFocus,
  matchPwd,
  setMatchPwd,
  validMatch,
  matchFocus,
  setMatchFocus,
}) => {
  return (
    <>
      <div className="registerInputCont inputCont ">
        <label htmlFor="password">Password:</label>
        <div className="inputContM">
          <div className={validPwd || !password ? "hide" : "invalid"}>
            <Dangerous />
          </div>

          <input
            className="registerInput"
            type="password"
            name="password"
            id="password"
            required
            value={password}
            placeholder="Set Password"
            aria-invalid={validPwd ? "false" : "true"}
            aria-describedby="pwdnote"
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)}
          />
        </div>
        <p
          id="pwdnote"
          className={pwdFocus && !validPwd ? "regGuide" : "offscreen"}
        >
          <InfoOutlined style={{ margin: "0 10px 0 0" }} />
          At list 8 to 24 characters.
          <br />
          Must have uppercase & lowercase letters, number and a special
          character: ! @ # $ %
        </p>
      </div>
      <div className="registerInputCont inputCont bdrBottom">
        <label htmlFor="cnfpassword">Conform Password:</label>
        <div className="inputContM">
          <div className={validMatch || !matchPwd ? "hide" : "invalid"}>
            <Dangerous />
          </div>

          <input
            className="registerInput"
            type="password"
            id="cnfpassword"
            value={matchPwd}
            required
            placeholder="Reinter your Password"
            aria-invalid={validMatch ? "false" : "true"}
            aria-describedby="cnfnote"
            onChange={(e) => setMatchPwd(e.target.value)}
            onFocus={() => setMatchFocus(true)}
            onBlur={() => setMatchFocus(false)}
          />
        </div>
        <p
          id="pwdnote"
          className={matchFocus && !validMatch ? "regGuide" : "offscreen"}
        >
          <InfoOutlined style={{ margin: "0 10px 0 0" }} />
          Password not match
        </p>
      </div>
    </>
  );
};

export default PasswordComp;
