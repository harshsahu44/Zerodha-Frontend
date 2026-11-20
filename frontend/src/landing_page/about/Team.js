import React from "react";

function Team() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row border-top mt-5 p-5">
        <h1 className="fs-4 text-center mb-5" style={{ color: "#424242" }}>
          People
        </h1>
        <div className="col-6   text-center mt-4 text-muted">
          <img
            src="media\images\nithinKamath.jpg"
            alt="nithinKamath"
            style={{ borderRadius: "100%", width: "70%" }}
            className="mx-5"
          />
          <h4 className="mt-4 fs-5">Nithin Kamath</h4>
          <h6 className=" fs-6 mt-3" style={{ color: "#666" }}>
            Founder, CEO
          </h6>
        </div>
        <div className="col-6 p-5 ">
          <p style={{ fontSize: "17px" }}>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry
          </p>

          <p style={{ fontSize: "17px" }}>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).{" "}
          </p>
          <p>Playing basketball is his zen. </p>
          <p>
            Connect on{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              Homepage
            </a>{" "}
            /{" "}
            <a style={{ textDecoration: "none" }} href="#">
              TradingQnA
            </a>{" "}
            
            <a style={{ textDecoration: "none" }} href="#">
              {" "}
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
