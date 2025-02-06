import React from "react";
import { PhoneCall, TrendingUp, Handshake, Key } from "lucide-react"; // Icons from Lucide

function Section2() {
  const cards = [
    {
      icon: <PhoneCall className="h-12 w-12 text-red-500" />,
      title: "Book a Free Strategy Call",
      description: "We analyze your investment goals.",
    },
    {
      icon: <Key className="h-12 w-12 text-red-500" />,
      title: "Get Exclusive Access",
      description: "Discover high-ROI investment properties.",
    },
    {
      icon: <Handshake className="h-12 w-12 text-red-500" />,
      title: "Secure the Best Deals",
      description: "We guide you through financing & structuring.",
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-red-500" />,
      title: "Earn Passive Income",
      description: "Start generating rental/Airbnb cash flow.",
    },
  ];

  return (
    <div className="bg-black py-16">
      <div className="container mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#111111] p-8 rounded-2xl shadow-lg transform transition-transform duration-300 hover:-translate-y-2"
          >
            <div className="mb-6 ">{card.icon}</div>
            <h2 className="text-2xl font-bold text-white mb-4">{card.title}</h2>
            <p className="text-gray-400">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section2;
