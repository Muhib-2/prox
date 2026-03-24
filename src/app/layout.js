import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-primary' });

export const metadata = {
  title: 'ProEx | Premium Consulting & Business Development',
  description: 'ProEx offers integrated global expertise and hands-on business experience.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  );
}
