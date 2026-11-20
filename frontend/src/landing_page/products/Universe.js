import React from "react";

function Universe() {
  return (
    <div className="container p-5">
      <div className="row text-center">
        <h1 style={{ color: "#424242" }} className="fs-4  mt-5 mb-3">
          The Zerodha Universe
        </h1>
        <p style={{ color: "#424242", fontSize: "16px" }}>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img
            src="media\images\zerodhaFundhouse.png"
            alt="zerodhaFundhouse_image"
            style={{ width: "50%" }}
          />
          <p
            className="text-small text-muted mt-4"
            style={{ fontSize: "13px", lineHeight: "1.3rem" }}
          >
            Our asset management venture <br />
            that is creating simple and transparent index <br />
            funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4  p-3 mt-5">
          <img
            src="media\images\sensibullLogo.svg"
            alt="sensibullLogo_image"
            style={{ width: "50%" }}
          />
          <p
            className="text-small text-muted mt-4"
            style={{ fontSize: "13px", lineHeight: "1.3rem" }}
          >
            Options trading platform that lets you <br /> create strategies,
            analyze positions, and examine <br />
            data points like open interest, FII/DII, and more.
          </p>
        </div>
        <div className="col-4  p-3 mt-4">
          <img
            src="media\images\tijori.svg"
            alt="tijori_image"
            style={{ width: "50%" }}
          />
          <p
            className="text-small text-muted mt-4"
            style={{ fontSize: "13px", lineHeight: "1.3rem" }}
          >
            Investment research platform <br /> that offers detailed insights on
            stocks, <br /> sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4  p-3 mt-5">
          <img
            src="media\images\streakLogo.png"
            alt="streakLogo_image"
            style={{ width: "50%" }}
          />
          <p
            className="text-small text-muted mt-4 "
            style={{ fontSize: "13px", lineHeight: "1.3rem" }}
          >
            Systematic trading platform <br />
            that allows you to create and backtest <br />
            strategies without coding.
          </p>
        </div>
        <div className="col-4  p-3 mt-5">
          <img
            src="media\images\smallcaseLogo.png"
            alt="smallcaseLogo_image"
            style={{ width: "50%" }}
          />
          <p
            className="text-small text-muted mt-4"
            style={{ fontSize: "13px", lineHeight: "1.3rem" }}
          >
            Thematic investing platform <br /> that helps you invest in
            diversified <br />
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4  p-3 mt-5">
          <img
            src="media\images\dittoLogo.png"
            alt="dittoLogo_image"
            style={{ width: "50%" }}
          />
          <p
            className="text-small text-muted mt-4"
            style={{ fontSize: "13px", lineHeight: "1.3" }}
          >
            Personalized advice on life <br /> and health insurance. No spam{" "}
            <br /> and no mis-selling. Sign up for free
          </p>
        </div>
        <button
          className="p-3 btn btn-primary fs-5 mb-5 mt-5"
          style={{ width: "20%", margin: "0 auto " }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
