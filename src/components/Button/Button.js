import PropTypes from "prop-types";

import "./Button.css";

Button.propTypes = {
  text: PropTypes.string,
  buttonAction: PropTypes.func,
};

function Button({ text, buttonAction }) {
  return (
    <button className="buttonboard__button" onClick={buttonAction}>
      {text}
    </button>
  );
}

export default Button;
