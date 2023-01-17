import React, {useState} from 'react';
import './App.css';

const App = () => {

  const [count, setCount] = useState(0);

  const increase = () =>{
    setCount(
      count + 1
    )
  }

  return (
      <div>
        <span className="value">{count}</span>
        <button id="inc" onClick={increase}>Incrementa</button>
      </div>
    );
  }

export default App;
