import React from "react";

function Hero() {
  return (
    <div className="container border-bottom mt-5 mb-5">
      <div className=" text-center  mt-5">
        <h1 className="fs-3" style={{ color: " rgb(76, 67, 67)" }}>
          Investments
        </h1>
        <h3 style={{ fontWeight: "4px" , color : "#424242" }} className="fs-5 mt-3">
          Everything from equities and derivatives to mutual funds and fixed
          income
        </h3>
        <p className="mt-4 text-muted mb-5">
          Check out our{" "}
          <a href="#" style={{ textDecoration: "none" }}>
            {" "}
            technology offerings <i class="fa-solid fa-arrow-right-long"></i>
          </a>{" "}
        </p>
      </div>
    </div>
  );
}

export default Hero;
