import { Dangerous, InfoOutlined } from "@mui/icons-material";

const  UsernameComp = ({
  username,
  validUsername,
  setUsername,
  usernameFocus,
  setUsernameFocus,
}) => {
  return (
    <div className="registerInputCont inputCont bdrTop">
      <label htmlFor="userName" className="regLable"> 
        username
      </label>
      <div className="inputContM">
        <div className={validUsername || !username ? "hide" : "invalid"}>
          <Dangerous />
        </div>
        <input
          className="registerInput"
          type="text"
          autoComplete="off"
          autoFocus
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your Username"
          required
          aria-invalid={validUsername ? "false" : "true"}
          aria-describedby="uidnote"
          onFocus={() => setUsernameFocus(false)}
          onBlur={() => setUsernameFocus(true)}
          value={username}
        />
      </div>
      <p
        id="uidnote"
        className={
          usernameFocus && username && !validUsername ? "regGuide" : "offscreen"
        }
      >
        <InfoOutlined style={{ margin: "0 10px 0 0" }} />
        At list 3 characters. Must start with Letter
      </p>
    </div>
  );
};

export default UsernameComp;
