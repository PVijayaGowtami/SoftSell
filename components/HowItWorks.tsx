import { List, ShieldCheck, ShoppingCart } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="py-16 bg-white dark:bg-gray-950">
      <h2 className="text-3xl font-bold text-center text-purple-600 dark:text-purple-400 mb-12">
        How It Works
      </h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        
        <div className="p-6 rounded-xl shadow hover:shadow-md transition bg-gray-100 dark:bg-gray-800">
          <div className="flex justify-center mb-4">
            <List className="w-10 h-10 text-purple-600 dark:text-purple-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            List Licenses
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Post your unused software licenses securely.
          </p>
        </div>

        <div className="p-6 rounded-xl shadow hover:shadow-md transition bg-gray-100 dark:bg-gray-800">
          <div className="flex justify-center mb-4">
            <ShieldCheck className="w-10 h-10 text-purple-600 dark:text-purple-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            Get Verified
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            We verify license legitimacy to ensure trust.
          </p>
        </div>

        <div className="p-6 rounded-xl shadow hover:shadow-md transition bg-gray-100 dark:bg-gray-800">
          <div className="flex justify-center mb-4">
            <ShoppingCart className="w-10 h-10 text-purple-600 dark:text-purple-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            Sell or Buy
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Connect with buyers and sellers in minutes.
          </p>
        </div>

      </div>
    </section>
  );
}
