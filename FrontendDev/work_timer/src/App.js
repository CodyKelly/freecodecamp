import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { useDispatch } from 'react-redux';
import { toggleEnable } from './features/counter/counterSlice';
import './App.css';
import { Timer } from './features/timer/Timer';

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div>
        <h2>Break Length</h2>
        <Counter id={"break"}/>
      </div>
      <div>
        <h2>Session Length</h2>
        <Counter id={"session"}/>
      </div>
      <button onClick={() => dispatch(toggleEnable())}>toggle</button>
      <Timer />
    </div>
  );
}

export default App;
