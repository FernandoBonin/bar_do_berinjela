import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { categories, getCategoryBySlug } from '@/data/categories';
import { getProductsByCategory } from '@/data/products';
import { CategoryProductsClient } from '@/components/CategoryProductsClient';

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export function generateStaticParams() {
  return categories.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const categoryData = getCategoryBySlug(category);

  if (!categoryData) {
    return {
      title: 'Categoria não encontrada',
    };
  }

  return {
    title: categoryData.name,
    description: categoryData.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const categoryData = getCategoryBySlug(category);

  if (!categoryData) {
    notFound();
  }

  const items = getProductsByCategory(categoryData.slug);

  return (
    <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10 lg:py-12 flex flex-col gap-8 lg:gap-10">
      {/* Category Header */}
      <section className="flex flex-wrap items-end justify-between gap-4 border-b border-light-outline-variant pb-5 lg:pb-6">
        <div className="flex flex-col gap-1.5">
          <Link
            href="/categorias"
            className="inline-flex items-center gap-1.5 text-xs md:text-sm font-bold text-light-primary hover:underline underline-offset-4 mb-1 w-fit focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-primary rounded-sm"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            <span>Voltar para Categorias</span>
          </Link>

          <h1 className="font-headline text-[28px] leading-[34px] lg:text-[36px] lg:leading-[42px] font-bold text-light-on-surface">
            {categoryData.name}
          </h1>

          <p className="text-[15px] lg:text-[17px] leading-relaxed text-light-on-surface-variant text-pretty max-w-prose">
            {categoryData.description}
          </p>
        </div>

        <span className="font-mono text-xs font-semibold tracking-wider text-light-on-surface-variant uppercase tabular-nums">
          {items.length} {items.length === 1 ? 'ESPECIALIDADE' : 'ESPECIALIDADES'}
        </span>
      </section>

      <CategoryProductsClient category={categoryData} items={items} />
    </main>
  );
}
