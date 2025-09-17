import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import { SocialIcons } from '@/components/SocialIcons';
import { EmailIcon } from '@/components/EmailIcon';

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased')}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="relative flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
            <SocialIcons />
            <EmailIcon />
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
