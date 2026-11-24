import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function FeaturedProducts() {
  return (
    <section className="border-t border-light-outline-variant pt-8 lg:pt-12 flex flex-col gap-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-col gap-1">
          <span className="hidden md:inline font-mono text-xs font-semibold tracking-wider text-light-secondary uppercase">
            ESPECIALIDADES DA CASA
          </span>
          <h2 className="font-headline text-[28px] leading-[34px] lg:text-4xl lg:leading-[42px] font-bold text-light-on-surface">
            <span className="md:hidden">Especialidades da Casa</span>
            <span className="hidden md:inline">
              Sabores que Marcaram Época
            </span>
          </h2>
        </div>

        <Link
          href="/categoria/bolinhos"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-light-primary hover:underline underline-offset-4 shrink-0"
        >
          <span className="md:hidden">Ver bolinhos</span>
          <span className="hidden md:inline">Explorar todos os bolinhos</span>
          <ArrowRight className="size-4 hidden md:inline" aria-hidden="true" />
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
        {/* Highlight 1: Surpresa do Berinjela */}
        <Link
          href="/prato/surpresa-do-berinjela"
          className="group bg-light-surface-bright border border-light-outline-variant rounded-lg overflow-hidden grid grid-cols-1 sm:grid-cols-12 hover:border-light-primary transition-colors duration-150 h-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-primary"
        >
          <div className="sm:col-span-6 relative aspect-[4/3] sm:aspect-auto sm:min-h-[240px] bg-light-surface-container overflow-hidden">
            <Image
              src="/images/surpresa_berinjela_1795545731882.jpg"
              alt="Surpresa do Berinjela servida no prato tradicional"
              fill
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
              referrerPolicy="no-referrer"
              className="object-cover transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </div>

          <div className="sm:col-span-6 p-4 md:p-6 flex flex-col justify-between gap-4">
            <div className="flex flex-col gap-2">
              <Badge
                variant="outline"
                className="self-start h-auto inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-light-secondary-container text-light-on-secondary-container border-light-outline-variant text-xs font-bold"
              >
                <Award className="size-3.5" aria-hidden="true" />
                <span>Comida di Buteco 2013</span>
              </Badge>

              <h3 className="font-headline text-xl md:text-[22px] font-bold text-light-on-surface group-hover:text-light-primary transition-colors">
                Surpresa do Berinjela
              </h3>

              <p className="text-[15px] leading-relaxed text-light-on-surface-variant text-pretty">
                Massa de berinjela com calabresa e recheio de parmesão. Receita
                premiada da casa.
              </p>
            </div>

            <div className="pt-3 border-t border-light-outline-variant flex items-center justify-between text-light-primary">
              <span className="text-xs font-bold tracking-wide">
                Ver detalhes do prato
              </span>
              <ArrowRight
                className="size-4 group-hover:translate-x-0.5 transition-transform"
                aria-hidden="true"
              />
            </div>
          </div>
        </Link>

        {/* Highlight 2: Berinjelas & Lasanhas */}
        <Link
          href="/categoria/berinjelas"
          className="group bg-light-surface-bright border border-light-outline-variant rounded-lg overflow-hidden grid grid-cols-1 sm:grid-cols-12 hover:border-light-primary transition-colors duration-150 h-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-primary"
        >
          <div className="sm:col-span-6 relative aspect-[4/3] sm:aspect-auto sm:min-h-[240px] bg-light-surface-container overflow-hidden">
            <Image
              src="/images/berinjela_lasanha_1795545734572.jpg"
              alt="Berinjelas e lasanhas artesanais gratinadas ao forno"
              fill
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
              referrerPolicy="no-referrer"
              className="object-cover transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </div>

          <div className="sm:col-span-6 p-4 md:p-6 flex flex-col justify-between gap-4">
            <div className="flex flex-col gap-2">
              <Badge
                variant="outline"
                className="self-start h-auto px-2.5 py-0.5 rounded-full bg-light-tertiary-container text-light-on-tertiary-container border-light-outline-variant text-xs font-bold"
              >
                Receitas de Família
              </Badge>

              <h3 className="font-headline text-xl md:text-[22px] font-bold text-light-on-surface group-hover:text-light-primary transition-colors">
                Berinjelas &amp; Lasanhas
              </h3>

              <p className="text-[15px] leading-relaxed text-light-on-surface-variant text-pretty">
                Preparos clássicos ao forno com molho artesanal, queijo
                gratinado e tempero tradicional.
              </p>
            </div>

            <div className="pt-3 border-t border-light-outline-variant flex items-center justify-between text-light-primary">
              <span className="text-xs font-bold tracking-wide">
                Ver receitas da casa
              </span>
              <ArrowRight
                className="size-4 group-hover:translate-x-0.5 transition-transform"
                aria-hidden="true"
              />
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
