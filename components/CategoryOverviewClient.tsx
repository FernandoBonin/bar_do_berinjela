'use client';

import { useMemo, useState } from 'react';
import { categories } from '@/data/categories';
import { products, searchProducts } from '@/data/products';
import { CategoryCard } from '@/components/CategoryCard';
import { ProductCard } from '@/components/ProductCard';
import { SearchInput } from '@/components/SearchInput';

export function CategoryOverviewClient() {
  const [query, setQuery] = useState('');

  const trimmedQuery = query.trim().toLowerCase();

  const filteredCategories = useMemo(() => {
    if (!trimmedQuery) return categories;
    return categories.filter(
      (cat) =>
        cat.name.toLowerCase().includes(trimmedQuery) ||
        cat.shortDescription.toLowerCase().includes(trimmedQuery) ||
        cat.description.toLowerCase().includes(trimmedQuery)
    );
  }, [trimmedQuery]);

  const matchingProducts = useMemo(() => {
    if (!trimmedQuery) return [];
    return searchProducts(trimmedQuery);
  }, [trimmedQuery]);

  return (
    <div className="flex flex-col gap-8 lg:gap-10">
      {/* Search Bar */}
      <div className="max-w-md w-full">
        <SearchInput
          value={query}
          onChange={setQuery}
          placeholder="Buscar categoria, bolinho, prato ou bebida..."
          ariaLabel="Buscar categorias ou pratos no cardápio"
        />
      </div>

      {/* Category Grid */}
      {filteredCategories.length > 0 && (
        <section
          aria-label="Categorias do cardápio"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 items-stretch"
        >
          {filteredCategories.map((category) => {
            const count = products.filter(
              (p) => p.categorySlug === category.slug
            ).length;
            return (
              <CategoryCard
                key={category.slug}
                category={category}
                productCount={count}
              />
            );
          })}
        </section>
      )}

      {/* Matching Dishes When Searching */}
      {trimmedQuery && (
        <section
          aria-label="Itens encontrados na busca"
          className="border-t border-light-outline-variant pt-8 flex flex-col gap-5"
        >
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-headline text-2xl font-bold text-light-on-surface">
              Itens encontrados ({matchingProducts.length})
            </h2>
          </div>

          {matchingProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-stretch">
              {matchingProducts.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          ) : (
            filteredCategories.length === 0 && (
              <div className="bg-light-surface-container-low border border-light-outline-variant rounded-lg p-8 text-center flex flex-col items-center gap-2">
                <p className="font-headline text-xl font-bold text-light-on-surface">
                  Nenhum resultado encontrado
                </p>
                <p className="text-sm text-light-on-surface-variant">
                  Tente buscar por outro nome como &ldquo;berinjela&rdquo;,
                  &ldquo;bacalhau&rdquo; ou &ldquo;caipirinha&rdquo;.
                </p>
              </div>
            )
          )}
        </section>
      )}
    </div>
  );
}
