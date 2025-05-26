import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-12 intro-text">
                <div className="header-content">
                  <h1 className="header-title">
                    <span className="welcome-text">Welcome to </span>
                    <span className="matka-text">milaan matka</span>
                    <span className="number-text">777</span>
                  </h1>
                  <p className="header-paragraph">{props.data ? props.data.paragraph : "Loading"}</p>
                  <div className="header-buttons">
                    <a
                      href="https://drive.google.com/file/d/11xEpiaOCwmHYE_V_Hnb-cYXr9U2lx1NN/view?usp=sharing"
                      className="btn btn-custom btn-lg page-scroll"
                    >
                    download app
                    </a>
                    <a
                      href="#features"
                      className="btn btn-outline btn-lg page-scroll"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
                {props.data && props.data.image && (
                  <img 
                    src={props.data.image} 
                    alt="Header Image" 
                    className="header-image"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
