// App.jsx

import './App.css';
import Counter from './components/Counter';
import { useState } from 'react';

function App() {
  //declaring a new state variable name theme
  const [theme, setTheme] = useState ('light');

  //takes event as an argument
  const toggleTheme = event => {
    setTheme(event.target.value);
  };
  
  return (
    
    <div className = { 'App ' + theme }>
      <h1>React - state and events</h1>
       <Counter />

       {/* Adding the "select" dropdown*/}
       <select onChange = {event => {/*
        console.log(event, event.target, event.target.value)*/
        setTheme(event.target.value) //Correct way
        // theme = event.target.value; //Wrong way 
         }}>
        <option value="light">Light Theme</option>
        <option value="dark">Dark Theme </option>
       </select>
    </div>
  );
}
export default App;

