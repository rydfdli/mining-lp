import React from "react";

export default function Stats({number, persentage = '', text}) {
  return (
    <div className="md:w-1/4 w-full md:text-start text-center text-sm md:text-md mb-7 md:mb-0">
      <h1 className="text-7xl md:mb-5 mb-2">{number}{persentage}</h1>
      <p className="max-w-[200px] mx-auto">{text}</p>
    </div>
  );
}
