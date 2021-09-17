import React from "react";
import "./TimeBoard.css";

function TimeBoard({time}){
  return (
    <div className="timeboard">Прошло {time} секунд</div>
  )
}

export default TimeBoard