import React from "react";
import "./ButtonBoard.css";
import Button from "../Button/Button"

function ButtonBoard({onStart, onStop, onReset}){
  return (
    <div className="buttonboard">
      <Button text="Старт" buttonAction={onStart}></Button>
      <Button text="Стоп" buttonAction={onStop}></Button>
      <Button text="Сброс" buttonAction={onReset}></Button>
    </div>
  )
}

export default ButtonBoard