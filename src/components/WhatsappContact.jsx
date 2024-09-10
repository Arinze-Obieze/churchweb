import React, { useState } from "react";

export default function WhatsAppForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const encodedName = encodeURIComponent(name);
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/2347062129563?text=Name:%20${encodedName}%0AMessage:%20${encodedMessage}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Send Me a Message
      </h2>
      <p className="text-gray-600  text-sm mb-6">
        Fill out the form below to send a message directly to my WhatsApp. I’ll
        get back to you as soon as possible!
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-medium mb-2"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-gray-700 text-sm font-medium mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-3 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
