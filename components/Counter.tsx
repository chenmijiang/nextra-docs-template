'use client';

import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        onClick={() => setCount(count + 1)}
        className="border border-gray-300 rounded px-2 py-1 mt-3"
      >
        Clicked {count} times
      </button>
    </div>
  );
};
