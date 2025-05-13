import React from "react";

const testimonials = [
  {
    name: "Aarav S.",
    feedback: "SoftSell made it incredibly easy to sell my unused licenses. Totally hassle-free!",
    role: "Software Developer",
    company: "TechCorp",
  },
  {
    name: "Neha R.",
    feedback: "I bought a genuine license at half the price. This platform is a gem!",
    role: "IT Manager",
    company: "InnoTech Solutions",
  },
  {
    name: "Rahul M.",
    feedback: "Their verification process builds real trust. Loved the experience.",
    role: "Project Manager",
    company: "CreativeTech Ltd.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-8">
          What Our Users Say
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition dark:bg-gray-800"
            >
              <p className="text-gray-800 italic dark:text-gray-300">
                "{t.feedback}"
              </p>
              <p className="mt-4 font-semibold text-purple-700 dark:text-purple-400">
                — {t.name}
              </p>
              <p className="text-gray-600 text-sm dark:text-gray-400">
                {t.role} at {t.company}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
