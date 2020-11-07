import React from "react";
import "./styles.css";

const App = () => {
  const [display, setDisplay] = React.useState("0");
  // const [operations, setOperation] = React.useState([]);

  const inputHandler = (input) => {
    // eslint-disable-next-line
    display == "0" ? setDisplay(input) : setDisplay(`${display}${input}`);
  };
  const operatorHandler = (operator) => {
    // let str = String(display).substr(0, display.length - 1);

    isNaN(parseInt(display[display.length - 1]))
      ? setDisplay(
          `${String(display).substr(0, display.length - 1)}${operator}`
        )
      : setDisplay(`${display}${operator}`);
  };

  return (
    <div className="flex-container">
      <div className="container">
        <div className="display">{display}</div>
        <button onClick={() => inputHandler(1)}>1</button>
        <button onClick={() => inputHandler(2)}>2</button>
        <button onClick={() => inputHandler(3)}>3</button>
        <button onClick={() => inputHandler(4)}>4</button>
        <button onClick={() => inputHandler(5)}>5</button>
        <button onClick={() => inputHandler(6)}>6</button>
        <button onClick={() => inputHandler(7)}>7</button>
        <button onClick={() => inputHandler(8)}>8</button>
        <button onClick={() => inputHandler(9)}>9</button>
        <button onClick={() => inputHandler(0)}>0</button>
        <button onClick={() => inputHandler(".")}>.</button>
        <button onClick={() => operatorHandler("+")}>+</button>
        <button onClick={() => operatorHandler("/")}>/</button>
        <button onClick={() => operatorHandler("-")}>-</button>
        <button onClick={() => operatorHandler("*")}>x</button>
        <button
          className="big-flex"
          onClick={() => {
            // eslint-disable-next-line
            setDisplay(`${eval(display)}`);
          }}
        >
          =
        </button>
        <button className="big-flex" onClick={() => setDisplay(0)}>
          AC
        </button>
      </div>
    </div>
  );
};

export default App;
