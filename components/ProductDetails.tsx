import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Award, ScrollText } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Category, Product } from '@/types/menu';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';

interface ProductDetailsProps {
  product: Product;
  category: Category;
  relatedProducts: Product[];
}

export function ProductDetails({
  product,
  category,
  relatedProducts,
}: ProductDetailsProps) {
  const isAward = product.badgeVariant === 'award';
  const isVegetarian = product.badgeVariant === 'vegetarian';

  return (
    <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-12 flex flex-col gap-8 lg:gap-10">
      {/* Contextual Back Navigation */}
      <div className="flex items-center justify-between gap-4">
        <Button
          variant="outline"
          nativeButton={false}
          render={<Link href={`/categoria/${category.slug}`} />}
          className="h-auto min-h-[42px] px-3.5 py-2 rounded border-light-outline-variant bg-light-surface-bright text-light-on-surface hover:border-light-primary text-sm font-bold gap-2"
        >
          <ArrowLeft className="size-4 text-light-primary" aria-hidden="true" />
          <span>Voltar para {category.name}</span>
        </Button>

        <span className="font-mono text-xs font-semibold tracking-wider text-light-on-surface-variant uppercase">
          DETALHE DO PRATO
        </span>
      </div>

      {/* Two-Column Desktop Split / Stacked Mobile */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Photo Column */}
        <div className="lg:col-span-7 rounded-lg overflow-hidden border border-light-outline-variant bg-light-surface-container">
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src={product.image}
              alt={product.imageAlt}
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 58vw"
              referrerPolicy="no-referrer"
              className="object-cover"
            />
          </div>
        </div>

        {/* Information Column */}
        <div className="lg:col-span-5 flex flex-col gap-5 lg:gap-6">
          <div className="flex flex-wrap items-center gap-2.5">
            {product.badge && (
              <Badge
                variant="outline"
                className={cn(
                  'h-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-full border-light-outline-variant text-xs font-bold',
                  isAward
                    ? 'bg-light-secondary-container text-light-on-secondary-container'
                    : isVegetarian
                      ? 'bg-light-tertiary-container text-light-on-tertiary-container'
                      : 'bg-light-surface-container text-light-on-surface'
                )}
              >
                {isAward && <Award className="size-3.5" aria-hidden="true" />}
                <span>{product.badge}</span>
              </Badge>
            )}

            <Link
              href={`/categoria/${category.slug}`}
              className="font-mono text-xs font-semibold tracking-wider text-light-tertiary uppercase hover:underline underline-offset-4"
            >
              {category.name} DA CASA
            </Link>
          </div>

          <h1 className="font-display text-[32px] leading-[38px] lg:text-[44px] lg:leading-[50px] font-bold tracking-tight text-light-on-surface text-balance">
            {product.name}
          </h1>

          <p className="text-base lg:text-[17px] leading-relaxed text-light-on-surface-variant text-pretty">
            {product.description}
          </p>

          {/* Clearly Structured Price Area (No Invented Prices) */}
          <div className="bg-light-surface-bright border border-light-outline-variant rounded-lg p-5 lg:p-6 flex flex-col gap-3">
            <div className="flex items-center justify-between gap-2 border-b border-light-outline-variant pb-2.5">
              <span className="font-mono text-xs font-semibold tracking-wider text-light-on-surface-variant uppercase">
                ÁREA DE PREÇO
              </span>
              <span className="text-xs font-bold text-light-tertiary">
                Consulta presencial
              </span>
            </div>

            <div className="flex flex-wrap items-baseline justify-between gap-2 pt-1">
              <span className="text-[15px] text-light-on-surface">
                {product.servingLabel}
              </span>
              <span className="font-headline text-xl font-bold text-light-primary tabular-nums">
                {product.priceLabel}
              </span>
            </div>

            <p className="text-[13px] leading-relaxed text-light-on-surface-variant">
              {product.consultationNote}
            </p>
          </div>

          {/* Discreet Heritage / Kitchen Reference */}
          <div className="bg-light-surface-container-low border border-light-outline-variant rounded-lg p-4 md:p-5 flex items-start gap-3.5">
            <ScrollText
              className="size-5 text-light-secondary shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <div className="flex flex-col gap-1">
              <h2 className="text-sm font-bold text-light-on-surface">
                {product.heritageTitle ?? 'Cozinha familiar desde 1964'}
              </h2>
              <p className="text-[13px] leading-relaxed text-light-on-surface-variant text-pretty">
                {product.heritageNote ??
                  'Preparado seguindo as receitas tradicionais preservadas pela mesma família no Tatuapé, São Paulo.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Dishes in Same Category */}
      {relatedProducts.length > 0 && (
        <section
          aria-label={`Mais opções em ${category.name}`}
          className="border-t border-light-outline-variant pt-8 lg:pt-10 flex flex-col gap-5"
        >
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-headline text-2xl font-bold text-light-on-surface">
              Mais em {category.name}
            </h2>
            <Link
              href={`/categoria/${category.slug}`}
              className="text-sm font-bold text-light-primary hover:underline underline-offset-4 whitespace-nowrap"
            >
              Ver toda a seção
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-stretch">
            {relatedProducts.map((related) => (
              <ProductCard key={related.slug} product={related} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
