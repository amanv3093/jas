import React from "react";
import { DollarSign, ChartNoAxesCombined, Clock, Trophy } from "lucide-react"; // Icons from Lucide

function Section4() {
  const cards = [
    {
      icon: <DollarSign className="h-12 w-12 text-red-500" />,
      title: "800M+",
      description: "in Career Sales",
    },
    {
      icon: <Trophy className="h-12 w-12 text-red-500" />,
      title: "35+",
      description: "Real Estate Awards",
    },
    {
      icon: <Clock className="h-12 w-12 text-red-500" />,
      title: "8+",
      description: "Year of Experience",
    },
    {
      icon: <ChartNoAxesCombined className="h-12 w-12 text-red-500" />,
      title: "1K+",
      description: "Total Sales Volume",
    },
  ];

  return (
    <div className="bg-black py-16">
      <div className="container mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#111111] flex flex-col items-center text-center  p-8 rounded-2xl shadow-lg transform transition-transform duration-300 hover:-translate-y-2"
          >
            <div className="mb-8">{card.icon}</div>
            <h2 className="text-5xl font-bold text-white mb-6">{card.title}</h2>
            <p className="text-gray-400 text-base">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section4;
