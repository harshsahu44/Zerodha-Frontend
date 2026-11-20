import React from "react";

function OpenAccount() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5 fs-3">Open a Zerodha account</h1>
        <p className="text-muted mt-4 mb-5 fs-5">
          Simple and intuitive apps · ₹0 for investments · ₹20 for intraday and
          F&O trades.
        </p>
        <button
          className="p-3 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto " }}
        >
          Signup For Now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
