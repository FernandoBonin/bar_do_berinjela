import {
  Leaf,
  Award,
  Flame,
  Utensils,
  CookingPot,
  Beer,
  Citrus,
  CupSoda,
  Cake,
} from 'lucide-react';
import type { CategoryIconName } from '@/types/menu';

interface CategoryIconProps {
  icon: CategoryIconName;
  className?: string;
}

export function CategoryIcon({ icon, className }: CategoryIconProps) {
  switch (icon) {
    case 'leaf':
      return <Leaf className={className} aria-hidden="true" />;
    case 'award':
      return <Award className={className} aria-hidden="true" />;
    case 'flame':
      return <Flame className={className} aria-hidden="true" />;
    case 'utensils':
      return <Utensils className={className} aria-hidden="true" />;
    case 'cooking-pot':
      return <CookingPot className={className} aria-hidden="true" />;
    case 'beer':
      return <Beer className={className} aria-hidden="true" />;
    case 'citrus':
      return <Citrus className={className} aria-hidden="true" />;
    case 'cup-soda':
      return <CupSoda className={className} aria-hidden="true" />;
    case 'cake':
      return <Cake className={className} aria-hidden="true" />;
  }
}
