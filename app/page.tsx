'use client';

import React, { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <main className="flex items-center justify-center min-h-screen bg-blue-50">
      <div className="relative flex items-center justify-center h-64 w-96 bg-gray-100 border rounded-lg shadow-lg">
        <div className="absolute top-4 text-xl font-semibold text-gray-700">
          Counter Component
        </div>
        <div className="text-3xl font-bold text-gray-800">{count}</div>
        <div className="absolute bottom-4 flex space-x-4">
          <button
            onClick={decrement}
            className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
          >
            Decrement
          </button>
          <button
            onClick={increment}
            className="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600"
          >
            Increment
          </button>
        </div>
      </div>
    </main>
  );
}
