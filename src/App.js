import React from "react";
import "./styles.css";

const App = () => {
  const [display, setDisplay] = React.useState("0");
  // const [operations, setOperation] = React.useState([]);
  const [decimal, setDecimal] = React.useState(false);
  const [currOp, setOp] = React.useState("");

  // avoids 2 decimals in same number
  const addDecimal = () => {
    if (!decimal) setDisplay(`${display}.`);
    setDecimal(true);
  };

  const inputHandler = (input) => {
    // eslint-disable-next-line
    if (input == "-") {
      if (currOp != "") {
        setDisplay(`${display}${input}`);
        setOp("-");
      } else {
        setDecimal(false);
        setDisplay(`${display}${input}`);
      }
    } else {
      display == "0"
        ? setDisplay(`${input}`)
        : setDisplay(`${display}${input}`);
      setOp("");
    }
  };

  const operatorHandler = (operator) => {
    // let str = String(display).substr(0, display.length - 1);
    if (currOp != "") {
      if (currOp == "-") {
        let cut =
          display[String(display).indexOf(currOp) - 1] +
          display[String(display).indexOf(currOp)];
        console.log(cut);
        let currDisplay = display.replace(cut, operator);
        setDisplay(currDisplay);
        setOp(operator);
      } else {
        // replace display[currOp] with input
        let currDisplay = display.replace(currOp, operator);
        setDisplay(currDisplay);
        setOp(operator);
        setDecimal(false);
      }
    } else {
      display[display.length - 1] == "-"
        ? setDisplay(`${display}${operator}`)
        : isNaN(parseInt(display[display.length - 1]))
        ? setDisplay(
            `${String(display).substr(0, display.length - 1)}${operator}`
          )
        : setDisplay(`${display}${operator}`);

      setDecimal(false);
      setOp(operator);
    }
  };

  return (
    <div className="flex-container">
      <div className="container">
        <div className="display-screen">
          <div id="display">{display}</div>
        </div>
        <button id="one" onClick={() => inputHandler(1)}>
          1
        </button>
        <button id="two" onClick={() => inputHandler(2)}>
          2
        </button>
        <button id="three" onClick={() => inputHandler(3)}>
          3
        </button>
        <button id="four" onClick={() => inputHandler(4)}>
          4
        </button>
        <button id="five" onClick={() => inputHandler(5)}>
          5
        </button>
        <button id="six" onClick={() => inputHandler(6)}>
          6
        </button>
        <button id="seven" onClick={() => inputHandler(7)}>
          7
        </button>
        <button id="eight" onClick={() => inputHandler(8)}>
          8
        </button>
        <button id="nine" onClick={() => inputHandler(9)}>
          9
        </button>
        <button id="zero" onClick={() => inputHandler(0)}>
          0
        </button>
        <button id="decimal" onClick={() => addDecimal()}>
          .
        </button>
        <button id="add" onClick={() => operatorHandler("+")}>
          +
        </button>
        <button id="divide" onClick={() => operatorHandler("/")}>
          /
        </button>
        <button id="subtract" onClick={() => inputHandler("-")}>
          -
        </button>
        <button id="multiply" onClick={() => operatorHandler("*")}>
          x
        </button>
        <button
          id="equals"
          className="big-flex"
          onClick={() => {
            // eslint-disable-next-line
            setDisplay(`${eval(display)}`);
            setDecimal(false);
            setOp("");
          }}
        >
          =
        </button>
        <button
          id="clear"
          className="big-flex"
          onClick={() => {
            setDisplay(`0`);
            setDecimal(false);
            setOp("");
          }}
        >
          AC
        </button>
      </div>
    </div>
  );
};

export default App;
