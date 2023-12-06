import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
        setInput('');
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('0');
    } else if (value === 'CE') {
      setInput((prevInput) => prevInput.slice(0, -1));
    } else if (value === 'sqrt') {
      try {
        setResult(Math.sqrt(eval(input)).toString());
        setInput('');
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'pow') {
      setInput((prevInput) => prevInput + '**');
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };
  
  const handleInputBlur = () => {
    setInput('');
    setResult('0');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Evita que el formulario se envíe al presionar Enter
      handleButtonClick('=');
    } else if (event.key >= '0' && event.key <= '9') {
      handleButtonClick(event.key);
    } else if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
      handleButtonClick(event.key);
    }
    
  };

  const handleInputClick = () => {
    // Simulamos el evento onBlur al hacer clic en el input
    handleInputBlur();
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly style={{background:'aliceblue;', width:'-webkit-fill-available'}}
         onChange={(e) => setInput(e.target.value)}
         onBlur={handleInputBlur}
         onClick={handleInputClick}
         onKeyDown={handleKeyDown}
         className="form-control-plaintext" />

        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={() => handleButtonClick('=')}>=</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('CE')}>CE</button>
        <button onClick={() => handleButtonClick('sqrt')}>√</button>
        <button onClick={() => handleButtonClick('pow')}>x^2</button>
        <button onClick={() => handleButtonClick('(')}>(</button>
        <button onClick={() => handleButtonClick(')')}>)</button>
      </div>
    </div>
  );
};

export default App;
