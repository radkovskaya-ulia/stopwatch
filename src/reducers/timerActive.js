const timerActive = (state = false, action) => {
  switch (action.type) {
    case "ACTIVE":
      return true;
    case "DEACTIVE":
      return false;
    default:
      return state;
  }
};

export default timerActive;
