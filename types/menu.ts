export type CategorySlug =
  | 'berinjelas'
  | 'especiais'
  | 'bolinhos'
  | 'lasanhas'
  | 'porcoes'
  | 'cervejas'
  | 'caipirinhas'
  | 'sem-alcool'
  | 'sobremesas';

export type CategoryIconName =
  | 'leaf'
  | 'award'
  | 'flame'
  | 'utensils'
  | 'cooking-pot'
  | 'beer'
  | 'citrus'
  | 'cup-soda'
  | 'cake';

export interface Category {
  slug: CategorySlug;
  name: string;
  shortDescription: string;
  description: string;
  icon: CategoryIconName;
  featured?: boolean;
  tone: 'primary' | 'secondary' | 'tertiary' | 'neutral';
}

export interface Product {
  slug: string;
  name: string;
  categorySlug: CategorySlug;
  shortDescription: string;
  description: string;
  image: string;
  imageAlt: string;
  badge?: string;
  badgeVariant?: 'award' | 'vegetarian' | 'classic';
  featured?: boolean;
  servingLabel: string;
  priceLabel: string;
  consultationNote: string;
  heritageTitle?: string;
  heritageNote?: string;
}

export interface HeritageMilestone {
  year: string;
  title: string;
  description: string;
  tone: 'primary' | 'secondary' | 'tertiary';
}
