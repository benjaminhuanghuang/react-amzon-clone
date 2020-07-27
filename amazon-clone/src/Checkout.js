import React from "react";
//
import { useStateValue } from "./StateProvider";
//
import CheckoutProduct from "./CheckoutProduct";

import "./Checkout.css";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <img
        className="checkout__ad"
        src="https://www.publicdomainpictures.net/pictures/150000/velka/banner-header-tapete-145002399028x.jpg"
        alt=""
      />

      {basket?.length === 0 ? (
        <div>
          <h2>Your shopping basket is empty</h2>
          <p> You have no itmes in your basket.</p>
        </div>
      ) : (
        <div>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            ></CheckoutProduct>
          ))}
        </div>
      )}
    </div>
  );
}

export default Checkout;
