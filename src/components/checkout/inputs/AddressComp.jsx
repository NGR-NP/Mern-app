const AddressComp = ({ address, setAddress }) => {
    return (
      <div style={{paddingTop: "1rem"}} className="loginInputCont">
        <input
          type="text"
          className="loginInput"
          name="address"
          placeholder="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
    );
  };
  
  
  export default AddressComp;
  