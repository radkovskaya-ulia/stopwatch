import { Provider } from "react-redux";

import "./App.css";
import TimeBoard from "../TimeBoard/TimeBoard";
import StopWatch from "../StopWatch/StopWatch";
import ButtonBoard from "../ButtonBoard/ButtonBoard";
import store from "../../store";

function App() {
  return (
    <div className="page">
      <Provider store={store}>
        <TimeBoard />
        <StopWatch />
        <ButtonBoard />
      </Provider>
    </div>
  );
}

export default App;
