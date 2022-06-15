import React from "react";
import { useState } from "react";

const App = () => {
  let time = new Date().toLocaleTimeString();
  const [currTime, setCurrTimer] = useState(time);

  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    setCurrTimer(time);
  };

  setInterval(updateTime, 1000);

  return (
    <>
      <h1>{currTime}</h1>
    </>
  );
};

export default App;
