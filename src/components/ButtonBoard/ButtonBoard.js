import { connect } from "react-redux";
import { useRef } from "react";
import PropTypes from "prop-types";

import "./ButtonBoard.css";
import Button from "../Button/Button";

ButtonBoard.propTypes = {
  timerActive: PropTypes.bool,
  inc: PropTypes.func,
  zero: PropTypes.func,
  active: PropTypes.func,
  deactive: PropTypes.func,
};

function ButtonBoard({ timerActive, inc, zero, active, deactive }) {
  const timerId = useRef("");

  const onStartButtonClick = () => {
    if (timerActive) return;
    active({ type: "ACTIVE" });
    timerId.current = setInterval(() => {
      inc({ type: "INC" });
    }, 1000);
  };

  const onStopButtonClick = () => {
    clearInterval(timerId.current);
    deactive({ type: "DEACTIVE" });
  };

  const onResetButtonClick = () => {
    clearInterval(timerId.current);
    deactive({ type: "DEACTIVE" });
    zero({ type: "ZERO" });
  };

  return (
    <div className="buttonboard">
      <Button text="Старт" buttonAction={onStartButtonClick} />
      <Button text="Стоп" buttonAction={onStopButtonClick} />
      <Button text="Сброс" buttonAction={onResetButtonClick} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    timerActive: state.timerActive,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    inc: () => dispatch({ type: "INC" }),
    zero: () => dispatch({ type: "ZERO" }),
    active: () => dispatch({ type: "ACTIVE" }),
    deactive: () => dispatch({ type: "DEACTIVE" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonBoard);
