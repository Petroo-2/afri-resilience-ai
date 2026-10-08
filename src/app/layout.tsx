import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'AFRI-RESILIENCE AI | Resilience Intelligence Platform',
  description: 'AI-enabled intelligence for climate risk, food systems, water security and livelihoods',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-text font-sans">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
