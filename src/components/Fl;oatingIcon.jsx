import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppChat() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <a
        href="https://wa.me/1234567890?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20products."
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center bg-green-500 py-2 pl-4 pr-2 rounded-full transition-all duration-300 ease-in-out"
      >
        {/* Icon stays the same */}
        <FaWhatsapp className="w-6 h-8 text-white md:w-10 md:h-12" />

        {/* Text smoothly transitions in and out */}
        <span className="ml-2 text-sm text-white overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out max-w-0 group-hover:max-w-[200px]">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}

export default WhatsAppChat;
