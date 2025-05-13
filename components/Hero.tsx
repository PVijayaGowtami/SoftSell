'use client';

import ThemeToggle from './ThemeToggle';

export default function Hero() {
  return (
    <section className="bg-purple-700 dark:bg-gray-900 text-white py-20 px-4 sm:px-8 text-center relative transition-colors duration-300">

      {/* Theme Toggle Button - Top Right */}
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <h1 className="text-3xl sm:text-5xl font-bold mb-4">
        Unlock the Value of Your Unused Software Licenses
      </h1>

      <p className="text-base sm:text-xl mb-8 max-w-2xl mx-auto">
        SoftSell makes it easy to resell unused software licenses quickly, securely, and for cash.
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full max-w-xl mx-auto">
        <button className="w-full sm:w-auto bg-white text-violet-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100  dark:bg-purple-300 transition">
          Get a Quote
        </button>
        <button className="w-full sm:w-auto bg-purple-900 dark:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-purple-800 dark:hover:bg-purple-600 transition">
          Sell My Licenses
        </button>
      </div>
    </section>
  );
}
