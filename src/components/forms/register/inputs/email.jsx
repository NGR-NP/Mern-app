import { Dangerous, InfoOutlined } from "@mui/icons-material";

const EmailComp = ({
  email,
  setEmail,
  validEmail,
  emailFocus,
  setEmailFocus,
}) => {
  return (
    <div className="registerInputCont inputCont ">
      <label htmlFor="email">Email</label>
      <div className="inputContM">
        <div className={validEmail || !email ? "hide" : "invalid"}>
          <Dangerous />
        </div>
        <input
          className="registerInput"
          type="email"
          name="email"
          id="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={validEmail ? "false" : "true"}
          aria-describedby="emailnote"
          onFocus={() => setEmailFocus(false)}
          onBlur={() => setEmailFocus(true)}
          placeholder="Enter you Email"
        />
      </div>

      <p
        id="emailnote"
        className={
          emailFocus && email && !validEmail ? "regGuide" : "offscreen"
        }
      >
        <InfoOutlined style={{ margin: "0 10px 0 0" }} />
        Invalid Email
      </p>
    </div>
  );
};

export default EmailComp;
