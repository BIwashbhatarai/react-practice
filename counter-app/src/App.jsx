// src/App.jsx
import { useState } from "react"

function App() {
  const [counter, setCounter] = useState(0)
  const [step, setStep] = useState(1)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">

      {/* Step input */}
      <div className="mb-6 flex gap-2">
        <input
          type="number"
          placeholder="Enter step value"
          className="px-5 py-2 border rounded shadow max-w-xs"
          value={step}
          onChange={(event) => setStep(Number(event.target.value) || 1)}
        />
      </div>

      {/* Display counter with color feedback */}
      <h1
        className={`text-4xl font-bold mb-6 ${
          counter > 0 ? "text-green-500" :
          counter < 0 ? "text-red-500" :
          "text-gray-800"
        }`}
      >
        Count: {counter}
      </h1>

      {/* Counter buttons */}
      <div className="flex gap-4">
        <button
          className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
          onClick={() => setCounter(counter + Number(step))}
        >
          Increment
        </button>

        <button
          className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition disabled:opacity-50"
          onClick={() => setCounter(counter - Number(step))}
          disabled={counter <= 0}
        >
          Decrement
        </button>

        <button
          className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
          onClick={() => setCounter(0)}
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default App
