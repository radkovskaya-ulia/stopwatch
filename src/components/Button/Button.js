import React from "react";
import "./Button.css";

function ButtonBoard({text, buttonAction}){
  return (
    <button className="buttonboard__button" onClick={buttonAction}>{text}</button>
  )
}

export default ButtonBoard