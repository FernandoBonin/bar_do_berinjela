'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, LayoutGrid, Flame } from 'lucide-react';
import { cn } from '@/lib/utils';

const mobileNavItems = [
  {
    href: '/',
    label: 'Início',
    icon: Home,
    match: (p: string) => p === '/',
  },
  {
    href: '/categorias',
    label: 'Categorias',
    icon: LayoutGrid,
    match: (p: string) =>
      p === '/categorias' ||
      (p.startsWith('/categoria/') && p !== '/categoria/bolinhos'),
  },
  {
    href: '/categoria/bolinhos',
    label: 'Bolinhos',
    icon: Flame,
    match: (p: string) =>
      p === '/categoria/bolinhos' || p.startsWith('/prato/'),
  },
];

export function MobileNavigation() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navegação principal móvel"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-light-surface-bright/95 backdrop-blur-sm border-t border-light-outline-variant pb-[env(safe-area-inset-bottom)]"
    >
      <div className="grid grid-cols-3 h-16">
        {mobileNavItems.map((item) => {
          const isActive = item.match(pathname);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? 'page' : undefined}
              className={cn(
                'min-h-[44px] flex flex-col items-center justify-center gap-1 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-light-primary',
                isActive
                  ? 'text-light-primary border-t-2 border-light-primary bg-light-surface-container-low/50'
                  : 'text-light-on-surface-variant hover:text-light-primary'
              )}
            >
              <Icon
                className={cn('size-5', isActive && 'stroke-[2.25]')}
                aria-hidden="true"
              />
              <span className="text-[12px] font-bold tracking-wide leading-none">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
