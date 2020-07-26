import React from "react";
//
import Product from "./Product";

import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://www.amazon.com/images/G/01/kindle/journeys/ZjFjMDMxZmIt/ZjFjMDMxZmIt-OGVmOTM1ZDYt-w1500._CB431004437_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="1111"
          title="dddddddddd"
          price={11.1}
          rating={5}
          image="https://www.amazon.com/images/G/01/xba/GD_US_E_July_2020_379x304._SY304_CB429362087_.jpg"
        ></Product>
        <Product
          id="1111"
          title="dddd"
          price={11.1}
          rating={5}
          image="https://www.amazon.com/images/G/01/xba/GD_US_E_July_2020_379x304._SY304_CB429362087_.jpg"
        ></Product>
      </div>

      <div className="home__row">
        <Product
          id="1111"
          title="dddd"
          price={11.1}
          rating={5}
          image="https://www.amazon.com/images/G/01/xba/GD_US_E_July_2020_379x304._SY304_CB429362087_.jpg"
        ></Product>
        <Product
          id="1111"
          title="dddd"
          price={11.1}
          rating={5}
          image="https://www.amazon.com/images/G/01/xba/GD_US_E_July_2020_379x304._SY304_CB429362087_.jpg"
        ></Product>
      </div>
    </div>
  );
}

export default Home;
