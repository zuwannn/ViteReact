import React from "react";
import "../assets/glassui.css";

function GlassUI() {
  return (
    <div className="container d-flex flex-row col-12">
        <div className="card">
          <div className="content">
            <h3>Card One</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <a href="/">Read More</a>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h3>Card Two</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <a href="/">Read More</a>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h3>Card Three</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <a href="/">Read More</a>
          </div>
        </div>
      </div>
  );
}

export default GlassUI;
