import {useState} from 'react';
import './counter.css'

// D Structuring
export default function Counter({iniValue, name}) {
  const startValue = parseInt(iniValue) < 0 ? 0 : parseInt(iniValue)
  const [count, setCount] = useState(startValue)

  function increment() {
    setCount(count + 1);
  }
  
  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
    else {
      console.log('Not allow negate value')
    }
  }

  function reset() {
    setCount(0);
  }

  return (
  <div class='counter'>
    <div class='counter-button'>
      <h1>Counter App</h1>
    </div>
    <div class='counter-button'>
      <p>Hi! {name}, Let's start counting.</p>
    </div>

    <div class='counter-button'>
      <button onClick={decrement} class='btn inc-btn'>-</button>  
      <h1>{count}</h1>
      <button onClick={increment} class='btn dec-btn'>+</button>
    </div>
    <div class='counter-button'>
      <button onClick={reset} class='btn reset-btn'>Reset</button>
    </div>
  </div>);
}
