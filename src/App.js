import React, { createContext } from 'react'

import CounterClassBased from './Components/CounterClassBased';
import CounterHooks from './Components/CounterHooks';

export const C = createContext(); //creating context and exporting it

function App() {
  return (
    <>
      <C.Provider value={
        {
          msg1: 'shiva', msg2: 'shambho'
        }
      }>
        <h1>Component class based</h1>
        <CounterClassBased initCount={0} />


        <h1>Component Function based</h1>
        <CounterHooks initCount={100} />
      </C.Provider>

    </>
  )
}

export default App;
