import './App.css';
import React, { useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

function App() {
  const [I0, setI0] = useState(100); // Default Initial Value
  const [r, setR] = useState(0.2);   // Default Growth Rate
  const [B, setB] = useState(0.5);   // Default Multiplier
  const [t, setT] = useState(5);     // Default Time Period
  const [result, setResult] = useState(null);
  const [data, setData] = useState([]); // Data for the Graph
  

  const calculateInvestment = () => {
    const resultData = [];
    for (let day = 1; day <= t; day++) {
      const value = I0 * Math.pow(1 + r * B, day);
      const roundedResult = Math.round(value);
      setResult(roundedResult);
      resultData.push({ day, result: roundedResult });
    }
    setData(resultData);
  };

  const backgroundStyle = {
    backgroundImage: "url('/lionville_middle_new.svg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "200px",
    height: "200px",
  };

  return (
    <>
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8 p-4">
        <div
          style={backgroundStyle}
          className="rounded-full border-4 border-gray-300 shadow-lg"
        ></div>
        <div className="text-center sm:text-left">
          <h1 className="text-4xl font-bold rss-font-family mt-4 sm:mt-0">
            Mathematical Modeling of Epidemics
          </h1>
          <h2 className="text-2xl font-semibold rss-font-family mt-2">
            By Ashutosh Pandey & Arsh Kumar
          </h2>
        </div>
      </div>

      {/* Predictor Section */}
      <div className="w-full max-w-4xl mx-auto p-4 border-t border-gray-300 my-4">
        <h3 className="text-xl font-semibold text-center mb-4">Predictor Inputs</h3>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <div className="flex items-center space-x-4">
            <label htmlFor="I0" className="text-gray-700 font-medium">Initial (I0):</label>
            <input
              type="number"
              id="I0"
              value={I0}
              onChange={(e) => setI0(Number(e.target.value))}
              className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center space-x-4">
            <label htmlFor="r" className="text-gray-700 font-medium">Reproduction Rate (r):</label>
            <input
              type="number"
              id="r"
              step="0.01"
              value={r}
              onChange={(e) => setR(Number(e.target.value))}
              className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center space-x-4">
            <label htmlFor="B" className="text-gray-700 font-medium">Behavior Factor(B):</label>
            <input
              type="number"
              id="B"
              step="0.01"
              value={B}
              onChange={(e) => setB(Number(e.target.value))}
              className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center space-x-4">
            <label htmlFor="t" className="text-gray-700 font-medium">Time (t):</label>
            <input
              type="number"
              id="t"
              value={t}
              onChange={(e) => setT(Number(e.target.value))}
              className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <button
          onClick={calculateInvestment}
          className="mt-4 px-6 py-2 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Generate Result
        </button>
      </div>

       {/* Display Result */}
       {result !== null && (
          <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Result:</h3>
            <p className="text-gray-700">
              <strong>{t} days (I_t):</strong> {result.toFixed(2)}
            </p>
          </div>
        )}

      {/* Graph Section */}
      {data.length > 0 && (
        <div className="w-full max-w-5xl mx-auto p-4">
          <h3 className="text-xl font-semibold text-center mb-4">Days vs. Results</h3>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data} margin={{ top: 10, right: 30, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-gray-300" />
              <XAxis dataKey="day" label={{ value: "Days", position: "insideBottom", offset: -5 }} />
              <YAxis label={{ value: "Result", angle: -90, position: "insideLeft" }} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="result"
                stroke="#4f46e5"
                strokeWidth={2}
                dot={{ r: 6, fill: "#4f46e5" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </>
  );
}

export default App;
