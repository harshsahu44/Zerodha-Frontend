import React from "react";

function Hero() {
  return (
    <h1>
      <div className="container">
        <div className="row p-5 mt-5 border-bottom text-center text-muted">
          <h1 style={{ color: "#424242", fontSize: "28px" }} className="mb-4">
            Charges
          </h1>
          <h3 style={{ color: "#9b9b9b", fontSize: "20px" }}>
            List of all charges and taxes
          </h3>
        </div>

        <div className=" row p-4  mt-5 text-center">
          <div className="col-4 ">
            <img
              src="media\images\pricingEquity.svg"
              alt="pricingEquity_image" style={{width:"80%"}}
            />
            <h1 className="fs-3" style={{ color: "#424242" }}>
              Free equity delivery
            </h1>
            <p
              className="text-muted fs-6 mt-4"
              style={{ lineHeight: "1.8rem" }}
            >
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>
          <div className="col-4 ">
            <img
              src="media\images\intradayTrades.svg"
              alt="intradayTrades_image" style={{width:"80%"}}
            />
            <h1 className="fs-3" style={{ color: "#424242" }}>
              Intraday and F&O trades
            </h1>
            <p
              className="text-muted fs-6 mt-4"
              style={{ lineHeight: "1.8rem" }}
            >
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>
          <div className="col-4 ">
            <img
              src="media\images\pricingEquity.svg"
              alt="pricingEquity_image" style={{width:"80%"}}
            />
            <h1 className="fs-3" style={{ color: "#424242" }}>
              Free direct MF
            </h1>
            <p
              className="text-muted fs-6 mt-4"
              style={{ lineHeight: "1.8rem" }}
            >
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </h1>
  );
}

export default Hero;
