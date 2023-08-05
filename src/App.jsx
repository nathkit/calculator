import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-center h-screen">
        <div className="calculator-frame mt-20">
          <div className="formula-display">
            <h1>asddasd</h1>
          </div>
          <div className="output-display">
            <h1>sdfasf</h1>
          </div>
          <div className="btn-container">
            <div className="flex-wrap">
              <button id="clear" className="basis-2/3" value="AC">
                AC
              </button>
              <button id="divide" value="/">
                ÷
              </button>
              <button id="seven" className="" value="7">
                7
              </button>
              <button id="eight" className="" value="8">
                8
              </button>
              <button id="nine" className="" value="9">
                9
              </button>
              <button id="four" className="" value="4">
                4
              </button>
              <button id="five" className="" value="5">
                5
              </button>
              <button id="six" className="" value="6">
                6
              </button>
              <button id="one" className="" value="1">
                1
              </button>
              <button id="two" className="" value="2">
                2
              </button>
              <button id="three" className="" value="3">
                3
              </button>
              <button id="zero" className="basis-2/3" value="0">
                0
              </button>
              <button id="decimal" className="" value=".">
                .
              </button>
            </div>
            <div className="flex-col">
              <button id="multiply" className="" value="x">
                *
              </button>
              <button id="subtract" className="" value="-">
                -
              </button>
              <button id="add" className="" value="+">
                +
              </button>
              <button id="equals" className="grow" value="=">
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
