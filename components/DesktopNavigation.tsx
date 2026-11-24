'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Início', match: (p: string) => p === '/' },
  {
    href: '/categorias',
    label: 'Categorias',
    match: (p: string) =>
      p === '/categorias' ||
      (p.startsWith('/categoria/') && p !== '/categoria/bolinhos'),
  },
  {
    href: '/categoria/bolinhos',
    label: 'Bolinhos',
    match: (p: string) =>
      p === '/categoria/bolinhos' || p.startsWith('/prato/'),
  },
];

export function DesktopNavigation() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navegação principal"
      className="hidden md:flex items-center gap-6 lg:gap-8"
    >
      {navItems.map((item) => {
        const isActive = item.match(pathname);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? 'page' : undefined}
            className={cn(
              'whitespace-nowrap shrink-0 py-1.5 text-sm font-bold tracking-wide transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-light-primary rounded-sm',
              isActive
                ? 'text-light-primary border-b-2 border-light-primary'
                : 'text-light-on-surface-variant hover:text-light-primary'
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
