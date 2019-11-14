import React, { useState } from 'react';

function Counter() {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »
  // Déclare une fonction setCount qui permet de modifier la valeur de count
  const [count, setCount] = useState();

  const handleInitCount = (e) => {
      setCount(parseInt(e.target.value))
  }

  return (
    <div>
      <p>Le compteur est  à : {count} </p>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
      <button onClick={() => setCount(count - 1)}>
        -1
      </button>
      <div>
        <input onChange={handleInitCount} placeholder='write a number' type='number'></input>
      </div>
    </div>
  );
}

export default Counter;