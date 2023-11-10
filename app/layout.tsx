import Navigation from '@/components/global/navigation';
import './globals.css';
import { Inter } from 'next/font/google';
import AuthContext from './context/AuthContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next JS Open Table',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main className='bg-gray-100 min-h-screen w-screen'>
          <AuthContext>
            <main className='max-w-screen-2xl m-auto bg-white'>
              <Navigation />
              {children}
            </main>
          </AuthContext>
        </main>
      </body>
    </html>
  );
}
