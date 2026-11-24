import Image from 'next/image';
import Link from 'next/link';
import { Award, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Product } from '@/types/menu';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: Product;
  variant?: 'grid' | 'featured';
}

export function ProductCard({ product, variant = 'grid' }: ProductCardProps) {
  const isAward = product.badgeVariant === 'award';
  const isVegetarian = product.badgeVariant === 'vegetarian';

  if (variant === 'featured') {
    return (
      <Link
        href={`/prato/${product.slug}`}
        className="group bg-light-surface-bright border-2 border-light-secondary rounded-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12 hover:border-light-primary transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-primary"
      >
        <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-auto lg:min-h-[280px] bg-light-surface-container overflow-hidden">
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            sizes="(max-width: 1023px) 100vw, 42vw"
            referrerPolicy="no-referrer"
            className="object-cover transition-transform duration-200 group-hover:scale-[1.02]"
          />
        </div>

        <div className="lg:col-span-7 p-5 md:p-8 flex flex-col justify-between gap-4">
          <div className="flex flex-col gap-2.5">
            {product.badge && (
              <Badge
                variant="outline"
                className={cn(
                  'self-start h-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-full border-light-outline-variant text-xs font-bold',
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

            <h2 className="font-headline text-2xl md:text-[28px] md:leading-[34px] font-bold text-light-on-surface group-hover:text-light-primary transition-colors">
              {product.name}
            </h2>

            <p className="text-base lg:text-[17px] leading-relaxed text-light-on-surface-variant text-pretty max-w-prose">
              {product.shortDescription}
            </p>
          </div>

          <div className="pt-4 border-t border-light-outline-variant flex items-center justify-between gap-4">
            <div className="flex flex-col">
              <span className="font-mono text-xs font-semibold tracking-wider text-light-on-surface-variant uppercase">
                VALOR
              </span>
              <span className="text-sm font-bold text-light-primary">
                {product.priceLabel}
              </span>
            </div>
            <ArrowRight
              className="size-5 text-light-primary shrink-0 group-hover:translate-x-0.5 transition-transform"
              aria-hidden="true"
            />
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/prato/${product.slug}`}
      className={cn(
        'group bg-light-surface-bright rounded-lg overflow-hidden flex flex-col h-full transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-primary',
        isAward
          ? 'border-2 border-light-secondary hover:border-light-primary'
          : 'border border-light-outline-variant hover:border-light-primary'
      )}
    >
      <div className="relative aspect-[4/3] w-full bg-light-surface-container overflow-hidden">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 25vw"
          referrerPolicy="no-referrer"
          className="object-cover transition-transform duration-200 group-hover:scale-[1.02]"
        />
      </div>

      <div className="p-4 md:p-5 flex flex-col justify-between gap-4 flex-1">
        <div className="flex flex-col gap-2">
          {product.badge && (
            <Badge
              variant="outline"
              className={cn(
                'self-start h-auto inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold',
                isAward
                  ? 'bg-light-secondary-container text-light-on-secondary-container border-light-outline-variant'
                  : isVegetarian
                    ? 'bg-light-tertiary-container text-light-on-tertiary-container border-0'
                    : 'bg-light-surface-container text-light-on-surface border-light-outline-variant'
              )}
            >
              {isAward && <Award className="size-3" aria-hidden="true" />}
              <span>{product.badge}</span>
            </Badge>
          )}

          <h2 className="font-headline text-xl font-bold text-light-on-surface group-hover:text-light-primary transition-colors leading-snug">
            {product.name}
          </h2>

          <p className="text-[15px] leading-relaxed text-light-on-surface-variant text-pretty">
            {product.shortDescription}
          </p>
        </div>

        <div className="pt-3 border-t border-light-outline-variant flex items-center justify-between gap-2">
          <span className="font-mono text-xs font-semibold tracking-wider text-light-on-surface-variant uppercase">
            VALOR
          </span>
          <span className="text-sm font-bold text-light-on-surface group-hover:text-light-primary transition-colors text-right">
            {product.priceLabel}
          </span>
        </div>
      </div>
    </Link>
  );
}
