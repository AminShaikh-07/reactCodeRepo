//Hooks in React starts with 'use' keyword

import React from 'react';
import './style.css';
import { useState, useEffect } from 'react';
import Child from './Child.jsx';

export default function App() {
  const [name, setName] = useState('kc'); // Hooks are function which is called here and it returns array with two element
  // first element is the actual value
  // second element is setName kinda function which changes a value of the state

  const age = 20;
  const address = "Mumbai"
  useEffect(() => {
    console.log('effect called');
  }, [name]);

  return (
    <div>
      <h1>Hello {name}</h1>
      <button onClick={() => setName('VJTI')}>Change College</button>
      <button onClick={()=> setName('KC')}>Reset</button>
      <Child age={age} address={address}/>
    </div>
  );
}
