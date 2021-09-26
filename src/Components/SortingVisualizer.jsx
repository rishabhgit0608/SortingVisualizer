import React, { useEffect, useState } from "react";
import "./SortingVisualizer.css";

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  useEffect(() => {
    resetArray();
  }, []);

  const resetArray = () => {
    const array = [];
    for (let i = 0; i < 310; i++) {
      array.push(randomNumberInIntervals(5, 800));
    }
    setArray(array);
  };
  const randomNumberInIntervals = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <div className="container">
      {array.map((num, idx) => (
        <div
          key={idx}
          style={{ height: `${num}px` }}
          className="array-bars"
        ></div>
      ))}
      <div style={{ marginBottom: "10px" }}>
        <button className="btn btn-outline-danger" onClick={resetArray}>
          Generate Numbers
        </button>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <button className="btn btn-outline-primary">MERGE SORT</button>
        <button className="btn btn-outline-primary">QUICK SORT</button>
        <button className="btn btn-outline-primary">INSERTION SORT</button>
        <button className="btn btn-outline-primary">SELECTION SORT</button>
        <button className="btn btn-outline-primary">HEAP SORT</button>
      </div>
    </div>
  );
};

export default SortingVisualizer;
