import "./styles.css";
import React, { useState, useEffect } from "react";

const Counter = (): React.ReactElement => {
  const [seconds, setSeconds] = useState<number>(0);
  const [run, setRun] = useState<boolean>(false);
  const startCounter = () => {
    setRun(true);
  };
  const pauseCounter = () => {
    setRun(false);
  };
  const stopCounter = () => {
    setRun(false);
    setSeconds(0);
  };

  useEffect(() => {
    let interval: number;
    if (run === true) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [run]);

  return (
    <div className="wrapper">
      <h2>Counter</h2>
      <h3>{seconds}</h3>
      <div>
        <button onClick={run?pauseCounter:startCounter}>{run?'Pause':'Start'}</button>
        <button onClick={stopCounter}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
