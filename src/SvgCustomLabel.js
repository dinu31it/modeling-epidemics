import React from "react";
import '@fontsource/merriweather';  // Ensure Merriweather is imported
import './App.css'; // Optional, for additional styling

const SvgWithCustomLabel = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <svg
        width="400"
        height="200"
        xmlns="http://www.w3.org/2000/svg"
        className="border border-gray-300 p-4"
      >
        {/* Custom Label with Merriweather Font */}
        <text
          x="50%" 
          y="50%" 
          textAnchor="middle" 
          dominantBaseline="middle"
          fontSize="24" 
          fontFamily="Merriweather" // Apply Merriweather font
          fill="black"
        >
          Custom Label
        </text>
      </svg>
    </div>
  );
};

export default SvgWithCustomLabel;