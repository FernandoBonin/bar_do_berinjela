'use client';

import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  ariaLabel?: string;
  className?: string;
}

export function SearchInput({
  value,
  onChange,
  placeholder = 'Buscar prato, bolinho ou bebida...',
  ariaLabel = 'Buscar no cardápio',
  className,
}: SearchInputProps) {
  return (
    <div className={cn('relative w-full', className)}>
      <Search
        className="size-4 text-light-on-surface-variant absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
        aria-hidden="true"
      />
      <Input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label={ariaLabel}
        className="h-11 pl-10 pr-10 rounded-lg border-light-outline-variant bg-light-surface-bright text-light-on-surface placeholder:text-light-on-surface-variant/70 text-sm focus-visible:border-light-primary focus-visible:ring-light-primary/20 [&::-webkit-search-cancel-button]:hidden"
      />
      {value && (
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          onClick={() => onChange('')}
          aria-label="Limpar busca"
          className="absolute right-1.5 top-1/2 -translate-y-1/2 text-light-on-surface-variant hover:text-light-primary"
        >
          <X className="size-4" aria-hidden="true" />
        </Button>
      )}
    </div>
  );
}
