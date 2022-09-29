import PropTypes from "prop-types";
import { useState } from "react";

export const CounterApp = ({ value }) => {

  const [ counter, setCounter ] = useState( value );

  const addNumber = () => {
    setCounter(counter + 1);
  };

  const substract = () => {
    setCounter(counter - 1);
  }

  const restore = () =>{
    setCounter(value);
  }

  return (
    <div>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>

      <button onClick={substract}> -1 </button>
      <button onClick={restore}> 0 </button>
      <button onClick={addNumber}> +1 </button>
    </div>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};
