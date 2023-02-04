import CheckoutForm from "../components/checkout/CheckoutForm";
import { Title } from "./style/cartStyle";
const Checkout = () => {
  return (
    <div>
      <Title>Enter your shipping details</Title>
      <div className="centerADiv">
        <CheckoutForm />
      </div>
    </div>
  );
};

export default Checkout;
