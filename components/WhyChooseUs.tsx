import React from "react";
import { Lock, ShieldCheck, CloudLightning } from "lucide-react"; // Icons from lucide-react

const reasons = [
  {
    title: "Secure Transactions",
    desc: "We use end-to-end encryption to keep your license data safe and secure.",
    icon: <Lock className="w-12 h-12 text-purple-600 mb-4" />,
  },
  {
    title: "Verified Buyers & Sellers",
    desc: "Every user is authenticated to prevent scams and fraud.",
    icon: <ShieldCheck className="w-12 h-12 text-purple-600 mb-4" />,
  },
  {
    title: "Instant Delivery",
    desc: "Once a license is sold, it's delivered instantly to the buyer.",
    icon: <CloudLightning className="w-12 h-12 text-purple-600 mb-4" />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-12">
          Why Choose SoftSell?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow rounded-xl dark:bg-gray-800 dark:text-white"
            >
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-400">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
