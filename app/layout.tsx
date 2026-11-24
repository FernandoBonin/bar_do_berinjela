import type { Metadata, Viewport } from 'next';
import { Alegreya, Lato, Source_Code_Pro } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MobileNavigation } from '@/components/MobileNavigation';

const alegreya = Alegreya({
  subsets: ['latin'],
  weight: ['500', '700'],
  style: ['normal', 'italic'],
  variable: '--font-alegreya',
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
  display: 'swap',
});

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-source-code-pro',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Bar do Berinjela — Cardápio Digital',
    template: '%s — Bar do Berinjela',
  },
  description:
    'Cardápio digital de consulta do Bar do Berinjela no Tatuapé, São Paulo. Desde 1964, a mesma família no mesmo lugar.',
  openGraph: {
    title: 'Bar do Berinjela — Cardápio Digital',
    description:
      'Cardápio digital de consulta do Bar do Berinjela no Tatuapé, São Paulo. Desde 1964, a mesma família no mesmo lugar.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bar do Berinjela — Cardápio Digital',
    description:
      'Cardápio digital de consulta do Bar do Berinjela no Tatuapé, São Paulo. Desde 1964, a mesma família no mesmo lugar.',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={cn(
        alegreya.variable,
        lato.variable,
        sourceCodePro.variable
      )}
    >
      <body suppressHydrationWarning className="min-h-screen flex flex-col bg-light-surface text-light-on-surface">
        <Header />
        <div className="flex-1 flex flex-col pb-20 md:pb-0">{children}</div>
        <Footer />
        <MobileNavigation />
      </body>
    </html>
  );
}
