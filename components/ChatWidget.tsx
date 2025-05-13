"use client";
import React, { useState } from "react";
import { MessageSquare, X } from "lucide-react";

const MOCK_RESPONSES: Record<string, string> = {
  "How do I sell my license?": "You can sell your license by filling out the contact form. We’ll get back to you with a quote.",
  "What is SoftSell?": "SoftSell is a secure platform that helps individuals and businesses sell their unused or surplus software licenses. We connect sellers with verified buyers, manage the legal transfer process, and ensure smooth, compliant transactions.",
  "How does the process work?": "Submit Your License Details ,Get a Quote ,License Verification,Payment.",
  "Is it safe to sell software licenses?": "Yes! We ensure secure transfers and verified buyers.",
  "How long does it take to get paid?": "Typically, payments are processed within 2–3 business days.",
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [chat, setChat] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    const question = input.trim();
    const response = MOCK_RESPONSES[question] || "I'm not sure, but feel free to contact us!";
    setChat([...chat, { sender: "user", text: question }, { sender: "bot", text: response }]);
    setInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="w-80 bg-white dark:bg-gray-950 shadow-xl border rounded-lg flex flex-col">
          <div className="bg-purple-700 dark:bg-purple-800 text-white px-4 py-2 flex justify-between items-center rounded-t-lg">
            <h4 className="font-semibold">Chat with us</h4>
            <button onClick={() => setIsOpen(false)}>
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="flex-1 p-3 overflow-y-auto max-h-60 space-y-2 text-sm">
            {chat.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-md ${msg.sender === "user"
                  ? "bg-purple-100 dark:bg-purple-600 dark:text-white text-right ml-auto max-w-[75%]"
                  : "bg-gray-100 dark:bg-gray-700 dark:text-white text-left mr-auto max-w-[75%]"
                  }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="p-2 border-t flex items-center gap-2">
            <input
              type="text"
              placeholder="Ask something..."
              className="flex-1 px-3 py-2 border rounded-md text-sm focus:outline-none dark:bg-gray-800 dark:text-white dark:border-gray-700"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              className="bg-purple-700 text-white px-3 py-2 rounded-md text-sm hover:bg-purple-800 transition dark:bg-purple-600 dark:hover:bg-purple-500"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          className="bg-purple-700 text-white p-3 rounded-full shadow-lg hover:bg-purple-800 transition dark:bg-purple-600 dark:hover:bg-purple-500"
          onClick={() => setIsOpen(true)}
        >
          <MessageSquare />
        </button>
      )}
    </div>
  );
}
