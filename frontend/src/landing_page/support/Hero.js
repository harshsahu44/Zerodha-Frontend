
import React from "react";


function Hero() {
  return (
    <section className="support-hero" id="supportHero">
      <div className="support-container">

        {/* Header */}
        <div className="support-header" id="supportWrapper">
          <h3>Support Portal</h3>
          <a href="#">Track Tickets</a>
        </div>

        {/* Main Content */}
        <div className="support-row">

          {/* Left Section */}
          <div className="support-left">
            <h1>
              Search for an answer or browse help topics to create a ticket
            </h1>

            <input
              type="text"
              placeholder="Eg. How do I activate F&O?"
            />

            <div className="support-links">
              <a href="#">Track account opening</a>
              <a href="#">Track segment activation</a>
              <a href="#">Intraday margins</a>
              <a href="#">Kite user manual</a>
            </div>
          </div>

          {/* Right Section */}
          <div className="support-right">
            <h2>Featured</h2>

            <ol>
              <li>
                <a href="#">
                  Current Takeovers and Delisting - January 2024
                </a>
              </li>

              <li>
                <a href="#">
                  Latest Intraday leverages - MIS & CO
                </a>
              </li>
            </ol>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
