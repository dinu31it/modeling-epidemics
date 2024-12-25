import './App.css';
import React, { useState } from 'react';
import SvgCustomLabel from './SvgCustomLabel';


function App() {

  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric"
  })
  const [I0, setI0] = useState(100);  // Default I0 = 100
  const [r, setR] = useState(0.2);    // Default r = 0.2
  const [B, setB] = useState(0.5);    // Default B = 0.5
  const [t, setT] = useState(5);      // Default t = 5
  const [result, setResult] = useState(null);

  // Formula calculation function
  const calculateInvestment = () => {
    const calculatedResult = I0 * Math.pow(1 + r * B, t);
    setResult(calculatedResult);
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
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8 p-4">
      {/* SVG Image as Background */}
      <div
        style={backgroundStyle}
        className="rounded-full border-4 border-gray-300 shadow-lg"
      ></div>

      {/* Text Section */}
      <div className="text-center sm:text-left">
        <h1 className="text-4xl font-bold rss-font-family mt-4 sm:mt-0">
          Mathematical Modeling of Epidemics
        </h1>
        <h2 className="text-2xl font-semibold rss-font-family mt-2">
          By Ashutosh Pandey & Arsh Kumar
        </h2>
      </div>
    </div>
      

       


      
      <div className="w-full max-w-5xl mx-auto p-4 border-b boarder-gray-300 my-4"/>
      <div className='flex items-center justify-center'>
        
      <div style={{ padding: '20px' }}>
      <h3>Calculator</h3>
      
      {/* Input fields for the user to change values */}
      <div className="flex items-center space-x-4 my-2">
        <label htmlFor="I0" className="text-gray-700 font-medium">Initial (I0): </label>
        <input
          type="number"
          id="I0"
          value={I0}
          onChange={(e) => setI0(Number(e.target.value))}
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="flex items-center space-x-4 my-2">
        <label htmlFor="r" className="text-gray-700 font-medium">
          Enter a Number:
        </label>
        <input
          type="number"
          id="r"
          step="0.01"
          value={r}
          onChange={(e) => setR(Number(e.target.value))}
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="flex items-center space-x-4 my-2">
        <label htmlFor="B" className="text-gray-700 font-medium">Multiplier (B): </label>
        <input
          type="number"
          id="B"
          step="0.01"
          value={B}
          onChange={(e) => setB(Number(e.target.value))}
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="flex items-center space-x-4 my-2">
        <label htmlFor="t" className="text-gray-700 font-medium">Time Period (t): </label>
        <input
          type="number"
          id="t"
          value={t}
          onChange={(e) => setT(Number(e.target.value))}
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Button to calculate the result */}
      <button 
        onClick={calculateInvestment} 
        className="px-6 py-2 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-1">
          Submit
      </button>

      {/* Output result */}
      {result !== null && (
        <div style={{ marginTop: '20px' }}>
          <h3>Result:</h3>
          <p><strong> {t} days (I_t):</strong> {result.toFixed(2)}</p>
        </div>
      )}
    </div>
    </div>
    </>
  );
}

export default App;