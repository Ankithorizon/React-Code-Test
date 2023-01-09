/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const counter = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  const decrementCounter = () => {
    setCount(count - 1);
  };

  const resetCounter = () => {
    setCount(0);
  };
  return (
    <div>
      <h3>Counter Test</h3>
      <p></p>
      <Button
        className="btn btn-success"
        type="button"
        onClick={(e) => incrementCounter(e)}
      >
        Counter - Increment
      </Button>
      &nbsp;&nbsp;&nbsp;
      <Button
        className="btn btn-info"
        type="button"
        onClick={(e) => resetCounter(e)}
      >
        Counter - Reset
      </Button>
      &nbsp;&nbsp;&nbsp;
      <Button
        className="btn btn-warning"
        type="button"
        onClick={(e) => decrementCounter(e)}
      >
        Counter - Decrement
      </Button>
      <p></p>
      <div>
        <h2>{count}</h2>
      </div>
    </div>
  );
};

export default counter;
