import React, { useState } from "react";

const useFlip = (intitialState = false) => {
  const [state, setState] = useState(intitialState);
  const flipCard = () => {
    setState(state => !state);
  };
  return [state, flipCard];
};

export default useFlip;
