import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./TimeBoard.css";

TimeBoard.propTypes = {
  time: PropTypes.number,
};

function TimeBoard({ time }) {
  return <div className="timeboard">Прошло {time} секунд</div>;
}

const mapStateToProps = (state) => {
  return {
    time: state.time,
  };
};

export default connect(mapStateToProps)(TimeBoard);
