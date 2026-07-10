import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { Header } from '@/components/Header';

import { Toaster } from '@/components/ui/toaster';
import { SocialIcons } from '@/components/SocialIcons';
import { EmailIcon } from '@/components/EmailIcon';
import { BackgroundBlobs } from '@/components/BackgroundBlobs';
import { AIChatBot } from '@/components/AIChatBot';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Abdullah Al Faisal',
  description: 'The portfolio of Abdullah Al Faisal, a SQA Engineer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/portrait.jpg?v=1" type="image/jpeg" />
      </head>
      <body className={cn(inter.variable, outfit.variable, 'font-sans antialiased')}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <BackgroundBlobs />
          <div className="relative flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>

            <SocialIcons />
            <EmailIcon />
            <Toaster />
            <AIChatBot />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
