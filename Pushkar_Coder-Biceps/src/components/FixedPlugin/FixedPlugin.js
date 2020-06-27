import React, { useState } from "react";

const FixedPlugin = ({ handleBgClick, bgColor }) => {


  const [classes, setclasses] = useState("dropdown show-dropdown")

  const handleClick = () => {
    if (classes === "dropdown show-dropdown") {
      setclasses("dropdown show-dropdown show");
    } else {
      setclasses("dropdown show-dropdown");
    }
  };
  const activateMode = mode => {
    switch (mode) {
      case "light":
        document.body.classList.add("white-content");
        break;
      default:
        document.body.classList.remove("white-content");
        break;
    }
  };
  return (
    <div className="fixed-plugin">
      <div className={classes}>
        <div onClick={handleClick}>
          <i className="fa fa-cog fa-2x" />
        </div>
        <ul className="dropdown-menu show">
          <li className="header-title">SIDEBAR BACKGROUND</li>
          <li className="adjustments-line">
            <div className="badge-colors text-center">
              <span
                className={
                  bgColor === "primary"
                    ? "badge filter badge-primary active"
                    : "badge filter badge-primary"
                }
                data-color="primary"
                onClick={() => {
                  handleBgClick("primary");
                }}
              />{" "}
              <span
                className={
                  bgColor === "blue"
                    ? "badge filter badge-info active"
                    : "badge filter badge-info"
                }
                data-color="blue"
                onClick={() => {
                  handleBgClick("blue");
                }}
              />{" "}
              <span
                className={
                  bgColor === "green"
                    ? "badge filter badge-success active"
                    : "badge filter badge-success"
                }
                data-color="green"
                onClick={() => {
                  handleBgClick("green");
                }}
              />{" "}
            </div>
          </li>
          <li className="adjustments-line text-center color-change">
            <span className="color-label">LIGHT MODE</span>{" "}
            <span
              className="badge light-badge mr-2"
              onClick={() => activateMode("light")}
            />{" "}
            <span
              className="badge dark-badge ml-2"
              onClick={() => activateMode("dark")}
            />{" "}
            <span className="color-label">DARK MODE</span>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}


export default FixedPlugin;
