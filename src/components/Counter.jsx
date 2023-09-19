// ./src/components/Counter.jsx

import { useState } from 'react';

function Counter() {
// Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
//Initialize the state using the function 
  //const [count, setCount] = useState(() => 0);
  
  return (
    <div className="Counter">
      <h2>Counter</h2>

      <p>You clicked {count} times! </p> {/* <-- use the "count" variable here */}
 
      {/* <button onClick = {() => setCount(count - 1)}> -</button>
      <button onClick = {() => setCount(count + 1)}> + </button> */}

      <button onClick = {() => setCount((prevCount) => prevCount - 1)}> - </button> {/*functional update*/} 
      <button onClick = {() => setCount((prevCount) => prevCount + 1)}> + </button>
    </div>
  );
}

export default Counter;
