import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-4 mt-5 p-5 ">
          <h1 className="fs-3 mt-2 ">{productName}</h1>
          <p
            className="mt-4"
            style={{ fontSize: "1rem", lineHeight: "1.8", color: "#424242" }}
          >
            {productDescription}
          </p>
          <div>
            <a
              href={learnMore}
              className="mx-0"
              style={{ textDecoration: "none" }}
            >
              learnMore <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
        <div className="col-2 "></div>
        <div className="col-6 ">
          <img src={imageURL} alt="imageUrl" style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
