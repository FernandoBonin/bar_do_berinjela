import type { Category, CategorySlug, HeritageMilestone } from '@/types/menu';

export const categories: Category[] = [
  {
    slug: 'berinjelas',
    name: 'Berinjelas',
    shortDescription: 'Receitas clássicas que dão nome à casa',
    description:
      'Receitas clássicas de berinjela que dão nome e identidade à casa, preparadas no forno e servidas quentes à mesa.',
    icon: 'leaf',
    tone: 'primary',
  },
  {
    slug: 'especiais',
    name: 'Especiais',
    shortDescription: 'Pratos tradicionais e criações da família',
    description:
      'Pratos tradicionais e criações especiais da cozinha da família, preservando o tempero paulistano desde 1964.',
    icon: 'award',
    tone: 'secondary',
  },
  {
    slug: 'bolinhos',
    name: 'Bolinhos',
    shortDescription: 'Surpresa do Berinjela, Kiberinjela, Bacalhau e mais',
    description:
      'Clássicos de boteco fritos na hora e receitas autorais com berinjela preparadas pela família.',
    icon: 'flame',
    featured: true,
    tone: 'primary',
  },
  {
    slug: 'lasanhas',
    name: 'Lasanhas',
    shortDescription: 'Camadas artesanais gratinadas na hora',
    description:
      'Camadas artesanais gratinadas na hora com molho de tomate da casa e preparo tradicional de família.',
    icon: 'utensils',
    tone: 'neutral',
  },
  {
    slug: 'porcoes',
    name: 'Porções',
    shortDescription: 'Para compartilhar na mesa do boteco',
    description:
      'Clássicos de boteco preparados para compartilhar à mesa com os amigos e a família.',
    icon: 'cooking-pot',
    tone: 'neutral',
  },
  {
    slug: 'cervejas',
    name: 'Cervejas',
    shortDescription: 'Geladas de garrafa para acompanhar',
    description:
      'Rótulos tradicionais servidos bem gelados na mesa, no ponto certo de boteco.',
    icon: 'beer',
    tone: 'tertiary',
  },
  {
    slug: 'caipirinhas',
    name: 'Caipirinhas',
    shortDescription: 'Clássicas de boteco preparadas na hora',
    description:
      'Clássicas de boteco preparadas na hora com frutas frescas.',
    icon: 'citrus',
    tone: 'tertiary',
  },
  {
    slug: 'sem-alcool',
    name: 'Sem Álcool',
    shortDescription: 'Refrigerantes, sucos e águas',
    description:
      'Refrigerantes tradicionais, sucos naturais preparados na hora e águas para acompanhar os petiscos.',
    icon: 'cup-soda',
    tone: 'neutral',
  },
  {
    slug: 'sobremesas',
    name: 'Sobremesas',
    shortDescription: 'Doces caseiros para fechar a mesa',
    description:
      'Doces caseiros tradicionais preparados na casa para encerrar a refeição.',
    icon: 'cake',
    tone: 'neutral',
  },
];

export const heritageMilestones: HeritageMilestone[] = [
  {
    year: '1964',
    title: 'Fundação no Tatuapé',
    description:
      'Abertura das portas no bairro com cozinha familiar, atendimento próximo e receitas caseiras de boteco no mesmo endereço.',
    tone: 'primary',
  },
  {
    year: '2013',
    title: 'Comida di Buteco',
    description:
      'Consagração da receita Surpresa do Berinjela entre os grandes petiscos tradicionais de São Paulo.',
    tone: 'secondary',
  },
  {
    year: 'HOJE',
    title: 'Mais de 60 anos de mesa posta',
    description:
      'Tradição mantida viva pela mesma família, preservando o espírito autêntico de boteco no Tatuapé.',
    tone: 'tertiary',
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((cat) => cat.slug === (slug as CategorySlug));
}
