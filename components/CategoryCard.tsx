import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Category } from '@/types/menu';
import { CategoryIcon } from '@/components/CategoryIcon';
import { Badge } from '@/components/ui/badge';

interface CategoryCardProps {
  category: Category;
  productCount: number;
}

const iconToneClasses: Record<Category['tone'], string> = {
  primary: 'bg-light-primary-container text-light-on-primary-container',
  secondary: 'bg-light-secondary-container text-light-on-secondary-container',
  tertiary: 'bg-light-tertiary-container text-light-on-tertiary-container',
  neutral: 'bg-light-surface-container text-light-on-surface',
};

export function CategoryCard({ category, productCount }: CategoryCardProps) {
  const isFeatured = Boolean(category.featured);

  return (
    <Link
      href={`/categoria/${category.slug}`}
      className={cn(
        'group bg-light-surface-bright rounded-lg p-4 md:p-6 flex md:flex-col items-center md:items-stretch justify-between gap-4 md:gap-6 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-primary h-full',
        isFeatured
          ? 'border-2 border-light-primary hover:border-light-secondary'
          : 'border border-light-outline-variant hover:border-light-primary'
      )}
    >
      {/* Top row (Desktop) / Left icon (Mobile) */}
      <div className="flex items-center md:items-start justify-between gap-4 min-w-0 flex-1 md:flex-initial">
        <div className="flex items-center gap-3.5 md:contents min-w-0">
          <div
            className={cn(
              'w-12 h-12 rounded flex items-center justify-center shrink-0',
              isFeatured
                ? 'bg-light-primary text-light-on-primary'
                : iconToneClasses[category.tone]
            )}
          >
            <CategoryIcon icon={category.icon} className="size-6" />
          </div>

          {/* Mobile Title + Description */}
          <div className="flex flex-col gap-0.5 md:hidden min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="font-headline text-xl font-bold text-light-on-surface leading-snug">
                {category.name}
              </h2>
              {isFeatured && (
                <Badge className="h-auto px-2 py-0.5 rounded-full bg-light-secondary-container text-light-on-secondary-container border-0 text-[11px] font-bold">
                  Destaque
                </Badge>
              )}
            </div>
            <p className="text-sm text-light-on-surface-variant line-clamp-2">
              {category.shortDescription}
            </p>
          </div>
        </div>

        {/* Desktop right indicator */}
        <div className="hidden md:flex items-center gap-2 shrink-0">
          {isFeatured ? (
            <Badge className="h-auto px-2.5 py-0.5 rounded-full bg-light-secondary-container text-light-on-secondary-container border-0 text-xs font-bold">
              Destaque
            </Badge>
          ) : (
            <ArrowRight
              className="size-4 text-light-outline group-hover:text-light-primary group-hover:translate-x-0.5 transition-all duration-150"
              aria-hidden="true"
            />
          )}
        </div>
      </div>

      {/* Desktop Title + Description */}
      <div className="hidden md:flex flex-col justify-between gap-3 flex-1">
        <div className="flex flex-col gap-1.5">
          <h2 className="font-headline text-[22px] leading-7 font-bold text-light-on-surface group-hover:text-light-primary transition-colors">
            {category.name}
          </h2>
          <p className="text-[15px] leading-relaxed text-light-on-surface-variant text-pretty">
            {category.description}
          </p>
        </div>

        <div className="pt-3 border-t border-light-outline-variant flex items-center justify-between text-xs font-mono font-semibold tracking-wider text-light-on-surface-variant uppercase">
          <span className="tabular-nums">
            {productCount} {productCount === 1 ? 'ITEM' : 'ITENS'}
          </span>
          <span className="font-sans font-bold tracking-normal normal-case text-light-primary group-hover:underline underline-offset-4">
            Ver seção
          </span>
        </div>
      </div>

      {/* Mobile Chevron */}
      <span className="md:hidden shrink-0">
        {isFeatured ? (
          <ArrowRight className="size-5 text-light-primary" aria-hidden="true" />
        ) : (
          <ChevronRight
            className="size-5 text-light-outline"
            aria-hidden="true"
          />
        )}
      </span>
    </Link>
  );
}
