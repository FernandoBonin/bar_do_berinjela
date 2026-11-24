import type { Metadata } from 'next';
import { categories } from '@/data/categories';
import { CategoryOverviewClient } from '@/components/CategoryOverviewClient';

export const metadata: Metadata = {
  title: 'Categorias',
  description:
    'Explore todas as seções do cardápio do Bar do Berinjela: berinjelas, especiais, bolinhos, lasanhas, porções, cervejas, caipirinhas, sem álcool e sobremesas.',
};

export default function CategoriasPage() {
  return (
    <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10 lg:py-12 flex flex-col gap-8 lg:gap-10">
      <section className="flex flex-wrap items-end justify-between gap-4 border-b border-light-outline-variant pb-5 lg:pb-6">
        <div className="flex flex-col gap-1.5">
          <span className="font-mono text-xs font-semibold tracking-wider text-light-secondary uppercase">
            CARDÁPIO DIGITAL
          </span>
          <h1 className="font-headline text-[28px] leading-[34px] lg:text-[36px] lg:leading-[42px] font-bold text-light-on-surface">
            Categorias da Casa
          </h1>
          <p className="text-[15px] lg:text-[17px] leading-relaxed text-light-on-surface-variant text-pretty max-w-prose">
            Explore as seções do cardápio tradicional do Bar do Berinjela: dos
            bolinhos premiados às bebidas de boteco.
          </p>
        </div>

        <span className="font-mono text-xs font-semibold tracking-wider text-light-on-surface-variant uppercase tabular-nums">
          {categories.length} SEÇÕES
        </span>
      </section>

      <CategoryOverviewClient />
    </main>
  );
}
