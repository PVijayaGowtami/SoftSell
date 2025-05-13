import '../styles/globals.css';
import { ThemeProvider } from '../components/ThemeProvider';

export const metadata = {
  metadataBase: new URL('https://example.com'), // Replace with your production URL
  title: 'SoftSell | Buy and Sell Unused Software Licenses',
  description: 'SoftSell allows you to securely buy and sell unused software licenses at competitive prices.',
  keywords: 'buy, sell, unused licenses, software, subscription, genuine',
  author: 'Vijaya Gowtami Pappu',
  openGraph: {
    title: 'SoftSell | Buy and Sell Unused Software Licenses',
    description: 'Securely buy and sell unused software licenses with our trusted platform.',
    images: ['/softsell.png'], // Replace with your actual image URL
    url: '/softsell.png', // Replace with your actual URL
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="transition-colors duration-300">
      <body className="bg-white dark:bg-gray-900 text-black dark:text-white">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
