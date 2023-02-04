const NumberComp = ({number, setNumber}) => {
    return (
      <div className="loginInputCont" >
        <input
          type="tel"
          className="loginInput"
          name="tel"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Number"
        />
      </div>
    );
  };
  
  export default NumberComp;
  