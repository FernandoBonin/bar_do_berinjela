'use client';

import { useMemo, useState } from 'react';
import type { Category, Product } from '@/types/menu';
import { ProductCard } from '@/components/ProductCard';
import { SearchInput } from '@/components/SearchInput';

interface CategoryProductsClientProps {
  category: Category;
  items: Product[];
}

export function CategoryProductsClient({
  category,
  items,
}: CategoryProductsClientProps) {
  const [query, setQuery] = useState('');

  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.shortDescription.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q)
    );
  }, [items, query]);

  const featuredItem =
    !query.trim() && category.slug === 'bolinhos'
      ? filteredItems.find((item) => item.featured)
      : undefined;

  const remainingItems = featuredItem
    ? filteredItems.filter((item) => item.slug !== featuredItem.slug)
    : filteredItems;

  return (
    <div className="flex flex-col gap-8">
      {/* Search within category */}
      <div className="max-w-md w-full">
        <SearchInput
          value={query}
          onChange={setQuery}
          placeholder={`Filtrar em ${category.name}...`}
          ariaLabel={`Buscar itens em ${category.name}`}
        />
      </div>

      {/* Featured Award Dish Highlight (on Desktop/Mobile Bolinhos when unfiltered) */}
      {featuredItem && (
        <section aria-label="Destaque premiado">
          <div className="hidden md:block">
            <ProductCard product={featuredItem} variant="featured" />
          </div>
          <div className="md:hidden">
            <ProductCard product={featuredItem} variant="grid" />
          </div>
        </section>
      )}

      {/* Responsive Product Grid */}
      {remainingItems.length > 0 ? (
        <section
          aria-label={`Itens de ${category.name}`}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-stretch"
        >
          {remainingItems.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </section>
      ) : (
        !featuredItem && (
          <div className="bg-light-surface-container-low border border-light-outline-variant rounded-lg p-8 text-center flex flex-col items-center gap-2">
            <p className="font-headline text-xl font-bold text-light-on-surface">
              Nenhum item encontrado em {category.name}
            </p>
            <p className="text-sm text-light-on-surface-variant">
              Limpe o campo de busca para visualizar todos os itens desta seção.
            </p>
          </div>
        )
      )}
    </div>
  );
}
