import React from "react";
import "./StopWatch.css";
import clock from "../../images/clock.svg";

function StopWatch({ rotateHand }) {
  return (
    <div className="stopwatch">
      <img
        className="stopwatch__clock-image"
        src={clock}
        alt="Изображение циферблата"
      />
      <div
        className="stopwatch__hand"
        style={{ transform: `rotate(${rotateHand}deg)` }}
      ></div>
    </div>
  );
}

export default StopWatch;
