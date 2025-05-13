'use client';

import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
  onClick={toggleTheme}
  className="p-2 rounded-full shadow transition bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
  aria-label="Toggle Theme"
>
  {theme === 'light' ? '🌙' : '🌞'}
</button>

  );
}
