import React from "react";
import "./pay-style/subscribe.css";
import Navbar from "../Navbar/Navbar";
const Subscribe = () => {
  return (
    <section className="sub-con">
      <Navbar/>
      <h2>WELCOME</h2>
      <div className="sub-mid">
        <div className="sub-mid-one"><p>Pro Pack : 999rs</p></div>
        <div className="sub-mid-two">
          <p>Join pro program and get access to all exclusive content.</p>
          <h3>999rs Only</h3>
          <button>Buy Now</button>
        </div>
        <div className="sub-mid-three">100% REFUND ON CANCELLATION</div>
      </div>
    </section>
  );
};

export default Subscribe;
