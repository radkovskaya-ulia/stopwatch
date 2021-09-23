import { combineReducers } from "redux";
import time from "./time";
import timerActive from "./timerActive";

export default combineReducers({
  time,
  timerActive,
});
