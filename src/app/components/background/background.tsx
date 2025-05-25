import React from "react";
import "./fib.css";

const Background = React.memo(function Background(): React.ReactElement {
  return (
    <div className="container">
      <div className="fib5">
        <div className="spiral"></div>
        <div className="spiral"></div>
        <div className="spiral"></div>
        <div className="spiral"></div>
        <div className="spiral"></div>
      </div>
      {/* <div className="fib8">
        <div className="spiral"></div>
        <div className="spiral"></div>
        <div className="spiral"></div>
        <div className="spiral"></div>
        <div className="spiral"></div>
        <div className="spiral"></div>
        <div className="spiral"></div>
        <div className="spiral"></div>
      </div> */}
    </div>
  );
});

export default Background;
