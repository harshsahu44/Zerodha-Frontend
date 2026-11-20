import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src={imageURL} alt="imageUrl" style={{ width: "90%" }} />
        </div>

        <div className="col-6 mt-5 p-5">
          <h1 className="fs-3">{productName}</h1>
          <p style={{color : "#424242" , lineHeight: "1.8" }}>{productDescription}</p>
          <div className="mb-3">
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try Demo <i class="fa-solid fa-arrow-right-long"></i>
            </a>
            <a
              href={learnMore}
              style={{ marginLeft: "50px", textDecoration: "none" }}
            >
              learnMore <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
          <div className="mt-5 ">
            <a href={googlePlay}>
              <img
                src="media\images\googlePlayBadge.svg"
                alt="googlePlayBadge_image"
              />
            </a>
            <a href={appStore} style={{ marginLeft: "50px" }}>
              <img
                src="media\images\appstoreBadge.svg"
                alt="appstoreBadge_image"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
