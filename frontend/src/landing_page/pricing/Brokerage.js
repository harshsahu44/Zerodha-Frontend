import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-8 p-4">
          {" "}
          <a href="#" style={{ textDecoration: "none" }}>
            <h3 className="fs-5 mb-3">Brokerage calculator</h3>{" "}
          </a>
          <ul
            style={{ textAlign: "left", lineHeight: "1.8", fontSize: "14px" }}
            className="text-muted"
          >
            <li>
              Call & Trade and Rms auto -squareoff:Additional charges of ₹50 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail</li>
            <li>
              Physical copies of contract notes if required shall be charged ₹20
              per contract note. Courier charges apply.{" "}
            </li>
            <li>
              For NRI account (non-PIS) , 0.5% OR ₹100 per executed order for
              equity (whichrever is lower).
            </li>
            <li>
              For NRI account (non-PIS) , 0.5% OR ₹200 per executed order for
              equity (whichrever is lower).
            </li>
            <li>
              If NRI Account is debit balance any order placed will be charged
              ₹40 per executed instead of ₹20 per excuted order.
            </li>
          </ul>
        </div>
        <div className="col-4 p-4">
          <a href="#" style={{ textDecoration: "none" }}>
            <h3 className="fs-5 mb-3">List Of Charge</h3>{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
