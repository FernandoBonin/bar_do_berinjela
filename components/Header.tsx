import Link from 'next/link';
import { BookOpen } from 'lucide-react';
import { DesktopNavigation } from '@/components/DesktopNavigation';
import { Badge } from '@/components/ui/badge';

export function Header() {
  return (
    <header className="w-full border-b border-light-outline-variant bg-light-surface/95 backdrop-blur-sm sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 md:py-4 flex items-center justify-between gap-4 md:gap-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 md:gap-3.5 shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-primary rounded-sm"
        >
          <div className="w-9 h-9 md:w-10 md:h-10 rounded bg-light-primary text-light-on-primary flex items-center justify-center shrink-0">
            <span className="font-headline text-xl md:text-2xl font-bold leading-none">
              B
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-headline text-base md:text-xl font-bold text-light-on-surface leading-tight whitespace-nowrap">
              Bar do Berinjela
            </span>
            <span className="font-mono text-[11px] md:text-xs font-semibold tracking-wider text-light-on-surface-variant uppercase whitespace-nowrap">
              <span className="md:hidden">Tatuapé · SP</span>
              <span className="hidden md:inline">
                Tatuapé, São Paulo · Desde 1964
              </span>
            </span>
          </div>
        </Link>

        <DesktopNavigation />

        <div className="flex items-center shrink-0">
          <Badge
            variant="outline"
            className="md:hidden h-auto px-2.5 py-1 rounded-full bg-light-tertiary-container text-light-on-tertiary-container border-light-outline-variant font-mono text-[11px] font-semibold tracking-wider"
          >
            DESDE 1964
          </Badge>

          <Badge
            variant="outline"
            className="hidden lg:inline-flex h-auto items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-light-tertiary-container text-light-on-tertiary-container border-light-outline-variant text-xs font-bold tracking-wide"
          >
            <BookOpen className="size-3.5" aria-hidden="true" />
            <span>Cardápio de Consulta</span>
          </Badge>
        </div>
      </div>
    </header>
  );
}
