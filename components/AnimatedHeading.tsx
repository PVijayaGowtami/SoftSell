'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AnimatedHeading() {
  return (
    <motion.div
      className="flex items-center justify-center pt-1 pb-1 bg-white dark:bg-gray-800" // Background change in dark mode
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex items-center">
        <Image
          src="/softsell_logo_no_bg.png"
          alt="SoftSell Logo"
          width={70}
          height={50}
          className="p-0"
        />
      </div>
      <h1 className="text-4xl font-bold text-violet-600">
        Welcome to SoftSell
      </h1>
    </motion.div>
  );
}
