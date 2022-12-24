import React, { useState } from "react";
import "./GenerateRequestPage.css";

const GenerateRequestPage = () => {

    const [amount, setAmount] = useState(0.0);
    const [decimalStatus, setDecimalStatus] = useState(false);

    const add = (val) => {
        setAmount(amount * 10 + val);
    }
  return (
    <div className="GenerateRequestPage-wrapper">
      <div className="GenerateRequestPage-row1">
        <svg
          className="icon"
          width="30"
          height="30"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z"
            fill="currentColor"
            fill-rule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>

      <div class="generate-request-row-2">
        <small class="generate-request-label">requesting from </small>
        <h3 class="generate-request-name">Subham Sahu</h3>

        <br/><br/>

        <h1>{amount}</h1>
        <div class="generate-request-currency-wrapper">
            <small><b>INR</b></small>
        </div>
      </div>

      <div class="generate-request-row-3">
        <input class="generate-request-input" placeholder="Add note"></input>
        <button class="generate-request-button">Send</button>
      </div>

      <div class="generate-request-numpad-wrapper">
        <div class="generate-request-numpad-row-1">
            <button onClick={() => {add(1)}} class="generate-request-numpad-1 key">1</button>
            <button onClick={() => {add(2)}} class="generate-request-numpad-2 key">2</button>
            <button onClick={() => {add(3)}} class="generate-request-numpad-3 key">3</button>
        </div>
        <div class="generate-request-numpad-row-1">
            <button onClick={() => {add(4)}}  class="generate-request-numpad-1 key">4</button>
            <button onClick={() => {add(5)}}  class="generate-request-numpad-2 key">5</button>
            <button onClick={() => {add(6)}}  class="generate-request-numpad-3 key">6</button>
        </div>
        <div class="generate-request-numpad-row-1">
            <button onClick={() => {add(7)}} class="generate-request-numpad-1 key">7</button>
            <button  onClick={() => {add(8)}} class="generate-request-numpad-2 key">8</button>
            <button onClick={() => {add(9)}} class="generate-request-numpad-3 key">9</button>
        </div>
        <div class="generate-request-numpad-row-1">
            <button onClick={() => {setDecimalStatus(true)}} class="generate-request"className="generate-request-numpad-dot key" disabled={true}>.</button>
            <button class="generate-request-numpad-2 key">0</button>
            <button class="generate-request-numpad-3 key">{`${"<"}`}</button>
        </div>
      </div>
    </div>
  );
};

export default GenerateRequestPage;
