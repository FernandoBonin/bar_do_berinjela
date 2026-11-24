import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full border-t border-light-outline-variant bg-light-surface-container-low">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div className="flex flex-col gap-1">
          <p className="text-sm text-light-on-surface-variant">
            Bar do Berinjela · Desde 1964. A mesma família. No mesmo lugar. ·
            Cardápio digital exclusivo para consulta.
          </p>
          <p className="text-xs font-bold text-light-on-surface-variant/90">
            Projeto de demonstração independente e não oficial. As informações e
            valores do cardápio requerem confirmação presencial antes do uso
            oficial.
          </p>
        </div>

        <nav
          aria-label="Links do rodapé"
          className="hidden md:flex items-center gap-6 shrink-0 text-xs font-bold text-light-on-surface-variant"
        >
          <Link
            href="/"
            className="hover:text-light-primary transition-colors whitespace-nowrap"
          >
            Início
          </Link>
          <Link
            href="/categorias"
            className="hover:text-light-primary transition-colors whitespace-nowrap"
          >
            Categorias
          </Link>
          <Link
            href="/categoria/bolinhos"
            className="hover:text-light-primary transition-colors whitespace-nowrap"
          >
            Bolinhos
          </Link>
        </nav>
      </div>
    </footer>
  );
}
