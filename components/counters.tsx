'use client';

// Example from https://beta.reactjs.org/learn

import { useState } from 'react';

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={handleClick} className="border border-gray-300 rounded px-2 py-1 mt-3">
        Clicked {count} times
      </button>
    </div>
  );
}

export default function MyApp() {
  return <MyButton />;
}
