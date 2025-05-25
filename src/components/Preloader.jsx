import React from "react";

const Preloader = () => {
  return (
    <div id="preloader" className="preloader">
      <div className="animation-preloader">
        <div className="spinner"></div>
        <div className="txt-loading">
          {["S", "H", "O", "P", "A", "N", "T", "I", "K"].map(
            (letter, index) => (
              <span
                key={index}
                data-text-preloader={letter}
                className="letters-loading"
              >
                {letter}
              </span>
            )
          )}
        </div>
        <p className="text-center">Loading</p>
      </div>
      <div className="loader">
        <div className="row">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`col-3 loader-section ${
                i < 2 ? "section-left" : "section-right"
              }`}
            >
              <div className="bg"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Preloader;
