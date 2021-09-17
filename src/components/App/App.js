import React from "react";
import "./App.css";
import TimeBoard from "../TimeBoard/TimeBoard";
import StopWatch from "../StopWatch/StopWatch";
import ButtonBoard from "../ButtonBoard/ButtonBoard";

function App() {
  const [time, setTime] = React.useState(0);
  const [timerId, setTimerId] = React.useState("");
  const [timerActive, setTimerAvtive] = React.useState(false);
  const [rotateHand, setRotateHand] = React.useState(0);

  function onStartButtonClick() {
    if (timerActive === false) {
      setTimerAvtive(true);
      setTimerId(
        setInterval(() => {
          setTime((state) => (state += 1));
          setRotateHand((state) => (state += 6));
        }, 1000)
      );
    }
  }

  function onStopButtonClick() {
    clearInterval(timerId);
    setTimerAvtive(false);
  }

  function onResetButtonClick() {
    clearInterval(timerId);
    setTimerAvtive(false);
    setTime(0);
    setRotateHand(0);
  }
  return (
    <div className="page">
      <TimeBoard time={time}></TimeBoard>
      <StopWatch rotateHand={rotateHand}></StopWatch>
      <ButtonBoard
        onStart={onStartButtonClick}
        onStop={onStopButtonClick}
        onReset={onResetButtonClick}
        time={time}
      ></ButtonBoard>
    </div>
  );
}

export default App;
