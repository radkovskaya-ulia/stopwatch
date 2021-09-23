import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./StopWatch.css";
import clock from "../../images/clock.svg";
import hand from "../../images/hand.png";

StopWatch.propTypes = {
  time: PropTypes.number,
};

function StopWatch({ time }) {
  const rotateHand = time * 6;

  return (
    <div className="stopwatch">
      <img
        className="stopwatch__clock-image"
        src={clock}
        alt="Изображение циферблата"
      />
      <div
        className="stopwatch__hand"
        src={hand}
        style={{ transform: `rotate(${rotateHand}deg)` }}
      ></div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    time: state.time,
  };
};

export default connect(mapStateToProps)(StopWatch);
