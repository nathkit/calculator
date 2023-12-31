import { useState, useEffect, useCallback } from "react";
import "./App.css";

function App() {
  const [inputVal, setInput] = useState("0");
  const [outputVal, setOutput] = useState("");
  const [formula, setFormula] = useState("0");

  const formulaLastChar = formula[formula.length - 1];
  const lastCharWithOperator =
    formulaLastChar === "+" ||
    formulaLastChar === "-" ||
    formulaLastChar === "x" ||
    formulaLastChar === "÷";

  const handleOperator = (event) => {
    const currentOperator = event.target.value;

    if (!inputVal.includes("Limit")) {
      const updatedFormula = lastCharWithOperator
        ? formula.slice(0, -1) + currentOperator
        : formula + currentOperator;
      setFormula(updatedFormula);
    }
    setInput(() => "0");
    setOutput("");
  };

  const handleNumber = (event) => {
    const currentValue =
      inputVal === "0" ? event.target.value : inputVal + event.target.value;
    const prevFormula = formula;

    const testIncludesOperator =
      formula.includes("+") ||
      formula.includes("-") ||
      formula.includes("x") ||
      formula.includes("÷");

    inputVal.length + 1 > 21 && maxDigiWarning(inputVal);
    if (inputVal.length < 21 && !inputVal.includes("Limit")) {
      setInput(currentValue);
      if (formula === "" || !testIncludesOperator) {
        setFormula(currentValue);
      } else if (lastCharWithOperator) {
        setFormula(prevFormula + currentValue);
      } else {
        setFormula(prevFormula + event.target.value);
      }
    }
  };

  const evaluateStringExpression = (expression) => {
    try {
      const newString = expression.replace("÷", "/").replace("x", "*");
      const result = new Function(`return ${newString}`);
      return result;
    } catch (error) {
      return null;
    }
  };

  const handleEquals = () => {
    const result = evaluateStringExpression(formula);
    if (result) {
      setOutput(result().toString());
      setFormula(result().toString());
      setInput(() => "0");
    } else {
      setOutput("Error");
    }
  };

  const maxDigiWarning = (inputVal) => {
    const prevValue = inputVal;
    setInput("Digit Limit Met");
    setTimeout(() => {
      setInput(prevValue);
    }, 1000);
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="calculator-frame mt-20">
          <div className="formula-display">
            <h1>{formula}</h1>
          </div>
          <div className="output-display">
            <h1>{inputVal}</h1>
          </div>
          <div className="btn-container">
            <div className="flex-wrap">
              <button
                id="clear"
                className="basis-2/3"
                value="AC"
                onClick={() => {
                  setInput("0");
                  setFormula("");
                  setOutput("");
                }}>
                AC
              </button>
              <button
                id="divide"
                className=""
                value="÷"
                onClick={(e) => handleOperator(e)}>
                ÷
              </button>
              <button
                id="seven"
                className=""
                value="7"
                onClick={(e) => handleNumber(e)}>
                7
              </button>
              <button
                id="eight"
                className=""
                value="8"
                onClick={(e) => handleNumber(e)}>
                8
              </button>
              <button
                id="nine"
                className=""
                value="9"
                onClick={(e) => handleNumber(e)}>
                9
              </button>
              <button
                id="four"
                className=""
                value="4"
                onClick={(e) => handleNumber(e)}>
                4
              </button>
              <button
                id="five"
                className=""
                value="5"
                onClick={(e) => handleNumber(e)}>
                5
              </button>
              <button
                id="six"
                className=""
                value="6"
                onClick={(e) => handleNumber(e)}>
                6
              </button>
              <button
                id="one"
                className=""
                value="1"
                onClick={(e) => handleNumber(e)}>
                1
              </button>
              <button
                id="two"
                className=""
                value="2"
                onClick={(e) => handleNumber(e)}>
                2
              </button>
              <button
                id="three"
                className=""
                value="3"
                onClick={(e) => handleNumber(e)}>
                3
              </button>
              <button
                id="zero"
                className="basis-2/3"
                value="0"
                onClick={(e) => handleNumber(e)}>
                0
              </button>
              <button
                id="decimal"
                className=""
                value="."
                onClick={(e) => {
                  !outputVal.includes(".") && handleNumber(e);
                }}>
                .
              </button>
            </div>
            <div className="flex-col">
              <button
                id="multiply"
                className=""
                value="x"
                onClick={(e) => handleOperator(e)}>
                x
              </button>
              <button
                id="subtract"
                className=""
                value="-"
                onClick={(e) => handleOperator(e)}>
                -
              </button>
              <button
                id="add"
                className=""
                value="+"
                onClick={(e) => handleOperator(e)}>
                +
              </button>
              <button
                id="equals"
                className="grow"
                value="="
                onClick={handleEquals}>
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
