import type { CategorySlug, Product } from '@/types/menu';

const CONSULTATION_NOTE =
  'Os valores atualizados e a disponibilidade do dia são informados diretamente no cardápio físico do Bar do Berinjela.';

export const products: Product[] = [
  // Bolinhos (Authentic Stitch items)
  {
    slug: 'surpresa-do-berinjela',
    name: 'Surpresa do Berinjela',
    categorySlug: 'bolinhos',
    shortDescription:
      'Massa de berinjela com calabresa e recheio de parmesão. Receita premiada da casa.',
    description:
      'Massa de berinjela com calabresa e recheio de parmesão. Preparado na cozinha da família e servido quente à mesa, acompanhado da tradicional pimenta da casa.',
    image: '/images/surpresa_berinjela_1795545731882.jpg',
    imageAlt:
      'Surpresa do Berinjela servida no prato branco com pimenta biquinho e guaraná ao fundo',
    badge: 'Comida di Buteco 2013',
    badgeVariant: 'award',
    featured: true,
    servingLabel: 'Porção ou unidade',
    priceLabel: 'Consulte no balcão',
    consultationNote: CONSULTATION_NOTE,
    heritageTitle: 'Premiado no Comida di Buteco 2013',
    heritageNote:
      'Criada para celebrar a berinjela como protagonista do boteco, a Surpresa do Berinjela levou a casa ao pódio do Comida di Buteco 2013, mantendo o mesmo preparo artesanal de família.',
  },
  {
    slug: 'surpresa-vegetariana',
    name: 'Surpresa Vegetariana',
    categorySlug: 'bolinhos',
    shortDescription:
      'Versão vegetariana preparada com massa temperada de berinjela e recheio de queijo.',
    description:
      'Versão vegetariana da receita clássica da casa, preparada com massa temperada de berinjela, ervas frescas e recheio cremoso de queijo derretido, frita na hora.',
    image: '/images/surpresa_vegetariana_1795545732525.jpg',
    imageAlt:
      'Surpresa Vegetariana dourada servida em prato rústico com folhas de manjericão e pimenta',
    badge: 'Sem carne',
    badgeVariant: 'vegetarian',
    servingLabel: 'Porção ou unidade',
    priceLabel: 'Consulte no cardápio da casa',
    consultationNote: CONSULTATION_NOTE,
    heritageTitle: 'Opção vegetariana da casa',
    heritageNote:
      'Mantém a crocância por fora e a cremosidade da berinjela com queijo por dentro, sem adição de carnes.',
  },
  {
    slug: 'kiberinjela',
    name: 'Kiberinjela',
    categorySlug: 'bolinhos',
    shortDescription:
      'Bolinho inspirado no quibe tradicional, elaborado com berinjela e temperos da casa.',
    description:
      'Bolinho inspirado no quibe tradicional, elaborado com berinjela temperada, hortelã e especiarias da cozinha da família, servido bem quente com limão.',
    image: '/images/kiberinjela_dish_1795545732914.jpg',
    imageAlt:
      'Porção de Kiberinjela servida em travessa branca com limão e folhas de hortelã fresca',
    servingLabel: 'Porção ou unidade',
    priceLabel: 'Consulte no cardápio da casa',
    consultationNote: CONSULTATION_NOTE,
  },
  {
    slug: 'bolinho-de-bacalhau',
    name: 'Bolinho de Bacalhau',
    categorySlug: 'bolinhos',
    shortDescription:
      'Clássico de boteco dourado por fora e macio por dentro, servido com limão.',
    description:
      'Clássico tradicional de boteco paulistano, dourado por fora e macio por dentro, finalizado com salsinha fresca e servido acompanhado de limão.',
    image: '/images/bolinho_bacalhau_1795545733897.jpg',
    imageAlt:
      'Bolinhos de Bacalhau dourados empilhados no prato com gomos de limão e salsinha',
    badge: 'Clássico de Boteco',
    badgeVariant: 'classic',
    servingLabel: 'Porção ou unidade',
    priceLabel: 'Consulte no cardápio da casa',
    consultationNote: CONSULTATION_NOTE,
  },
  {
    slug: 'arrozito',
    name: 'Arrozito',
    categorySlug: 'bolinhos',
    shortDescription:
      'Bolinho tradicional de arroz temperado e frito até ficar crocante.',
    description:
      'Bolinho tradicional de arroz temperado com ervas da casa e frito na hora até ficar dourado e crocante por fora, ideal para abrir os trabalhos na mesa.',
    image: '/images/arrozito_dish_1795545734790.jpg',
    imageAlt:
      'Bolinhos Arrozito dourados e crocantes servidos com salsinha e vinagrete',
    servingLabel: 'Porção ou unidade',
    priceLabel: 'Consulte no cardápio da casa',
    consultationNote: CONSULTATION_NOTE,
  },

  // Berinjelas
  {
    slug: 'berinjela-a-parmegiana',
    name: 'Berinjela à Parmegiana',
    categorySlug: 'berinjelas',
    shortDescription:
      'Fatias tradicionais de berinjela gratinadas ao forno com molho artesanal e queijo.',
    description:
      'Receita clássica que dá identidade ao Bar do Berinjela: fatias preparadas com molho de tomate caseiro e queijo derretido gratinado na hora.',
    image: '/images/berinjela_lasanha_1795545734572.jpg',
    imageAlt:
      'Berinjela à Parmegiana gratinada na travessa de barro com molho de tomate e manjericão',
    badge: 'Receita Original',
    badgeVariant: 'classic',
    featured: true,
    servingLabel: 'Travessa da casa',
    priceLabel: 'Consulte no cardápio da casa',
    consultationNote: CONSULTATION_NOTE,
    heritageTitle: 'Identidade do Bar do Berinjela',
    heritageNote:
      'Preparo de forno que consagrou o nome da casa no Tatuapé ao longo de gerações.',
  },
  {
    slug: 'berinjela-tradicional-da-casa',
    name: 'Berinjela ao Forno da Família',
    categorySlug: 'berinjelas',
    shortDescription:
      'Preparo tradicional ao forno com tempero caseiro e cobertura gratinada.',
    description:
      'Preparo tradicional da cozinha da família, assado lentamente com temperos selecionados e finalizado com queijo gratinado para compartilhar à mesa.',
    image: '/images/berinjela_lasanha_1795545734572.jpg',
    imageAlt:
      'Berinjela ao forno servida em travessa rústica na mesa de madeira',
    badge: 'Sem carne',
    badgeVariant: 'vegetarian',
    servingLabel: 'Travessa da casa',
    priceLabel: 'Consulte no cardápio da casa',
    consultationNote: CONSULTATION_NOTE,
  },

  // Especiais
  {
    slug: 'especial-da-familia',
    name: 'Especial da Cozinha da Família',
    categorySlug: 'especiais',
    shortDescription:
      'Prato tradicional servido quente com acompanhamentos clássicos de boteco.',
    description:
      'Seleção especial preparada pela cozinha familiar do Bar do Berinjela, reunindo receitas preservadas desde 1964 no Tatuapé.',
    image: '/images/hero_boteco_tatuape_1795545732899.jpg',
    imageAlt:
      'Mesa farta no salão tradicional do Bar do Berinjela com pratos da família',
    badge: 'Desde 1964',
    badgeVariant: 'classic',
    servingLabel: 'Prato especial',
    priceLabel: 'Consulte no cardápio da casa',
    consultationNote: CONSULTATION_NOTE,
  },
  {
    slug: 'degustacao-de-berinjelas',
    name: 'Combinado Clássico da Casa',
    categorySlug: 'especiais',
    shortDescription:
      'Reunião de preparos tradicionais da casa com berinjela e bolinhos fritos na hora.',
    description:
      'Sugestão especial da casa para conhecer os sabores tradicionais preparados pela família no Tatuapé.',
    image: '/images/surpresa_berinjela_1795545731882.jpg',
    imageAlt: 'Combinado de petiscos tradicionais servidos no Bar do Berinjela',
    servingLabel: 'Sugestão para a mesa',
    priceLabel: 'Consulte no cardápio da casa',
    consultationNote: CONSULTATION_NOTE,
  },

  // Lasanhas
  {
    slug: 'lasanha-de-berinjela',
    name: 'Lasanha de Berinjela',
    categorySlug: 'lasanhas',
    shortDescription:
      'Camadas artesanais de berinjela gratinadas na hora com molho de tomate da casa.',
    description:
      'Camadas artesanais intercaladas com molho de tomate preparado na casa e queijo gratinado no forno, servida fumegante à mesa.',
    image: '/images/berinjela_lasanha_1795545734572.jpg',
    imageAlt:
      'Lasanha de Berinjela gratinada em travessa de cerâmica com folhas frescas de manjericão',
    badge: 'Receita de Família',
    badgeVariant: 'classic',
    featured: true,
    servingLabel: 'Travessa gratinada',
    priceLabel: 'Consulte no cardápio da casa',
    consultationNote: CONSULTATION_NOTE,
  },
  {
    slug: 'lasanha-tradicional-da-casa',
    name: 'Lasanha Tradicional da Casa',
    categorySlug: 'lasanhas',
    shortDescription:
      'Massa artesanal gratinada com molho caseiro e tempero tradicional de família.',
    description:
      'Camadas de massa artesanal preparadas com molho de tomate cozido lentamente e cobertura de queijo gratinado.',
    image: '/images/berinjela_lasanha_1795545734572.jpg',
    imageAlt: 'Lasanha artesanal gratinada servida em travessa rústica',
    servingLabel: 'Travessa gratinada',
    priceLabel: 'Consulte no cardápio da casa',
    consultationNote: CONSULTATION_NOTE,
  },

  // Porções
  {
    slug: 'porcao-mista-de-boteco',
    name: 'Porção Clássica de Bolinhos',
    categorySlug: 'porcoes',
    shortDescription:
      'Seleção de bolinhos fritos na hora preparada para compartilhar à mesa.',
    description:
      'Clássicos de boteco fritos na hora para dividir na mesa, acompanhados da pimenta tradicional e limão fresco.',
    image: '/images/bolinho_bacalhau_1795545733897.jpg',
    imageAlt: 'Porção de bolinhos clássicos de boteco servida para compartilhar',
    badge: 'Para compartilhar',
    badgeVariant: 'classic',
    servingLabel: 'Porção para mesa',
    priceLabel: 'Consulte no cardápio da casa',
    consultationNote: CONSULTATION_NOTE,
  },
  {
    slug: 'porcao-de-arrozito',
    name: 'Porção de Arrozito',
    categorySlug: 'porcoes',
    shortDescription:
      'Porção generosa do bolinho tradicional de arroz temperado e crocante.',
    description:
      'Porção preparada para compartilhar na mesa do boteco, com casquinha crocante e miolo macio temperado na hora.',
    image: '/images/arrozito_dish_1795545734790.jpg',
    imageAlt: 'Porção de bolinhos Arrozito servida em prato clássico de boteco',
    servingLabel: 'Porção para mesa',
    priceLabel: 'Consulte no cardápio da casa',
    consultationNote: CONSULTATION_NOTE,
  },

  // Cervejas
  {
    slug: 'cerveja-garrafa-tradicional',
    name: 'Cervejas de Garrafa (600ml)',
    categorySlug: 'cervejas',
    shortDescription:
      'Rótulos tradicionais de boteco servidos bem gelados na mesa.',
    description:
      'Seleção de cervejas tradicionais em garrafa de 600ml servidas com copo americano bem gelado para acompanhar os petiscos da casa.',
    image: '/images/boteco_drinks_porcoes_1795545735094.jpg',
    imageAlt: 'Cerveja gelada servida em copo americano na mesa de madeira do boteco',
    badge: 'Bem gelada',
    badgeVariant: 'classic',
    servingLabel: 'Garrafa 600ml',
    priceLabel: 'Consulte rótulos no balcão',
    consultationNote: CONSULTATION_NOTE,
  },
  {
    slug: 'cerveja-long-neck',
    name: 'Cervejas Long Neck',
    categorySlug: 'cervejas',
    shortDescription:
      'Opções individuais servidas na temperatura ideal de boteco.',
    description:
      'Rótulos clássicos em garrafa long neck servidos trincando na mesa.',
    image: '/images/boteco_drinks_porcoes_1795545735094.jpg',
    imageAlt: 'Cerveja gelada servida na mesa tradicional do boteco',
    servingLabel: 'Unidade',
    priceLabel: 'Consulte rótulos no balcão',
    consultationNote: CONSULTATION_NOTE,
  },

  // Caipirinhas
  {
    slug: 'caipirinha-de-limao',
    name: 'Caipirinha Clássica de Limão',
    categorySlug: 'caipirinhas',
    shortDescription:
      'Clássica de boteco preparada na hora com limão fresco e gelo.',
    description:
      'Preparada na hora com limões frescos selecionados, açúcar na medida e cachaça tradicional ou destilado de sua preferência.',
    image: '/images/boteco_drinks_porcoes_1795545735094.jpg',
    imageAlt:
      'Caipirinha clássica de limão com gelo e socador de madeira na mesa do bar',
    badge: 'Preparada na hora',
    badgeVariant: 'classic',
    servingLabel: 'Copo tradicional',
    priceLabel: 'Consulte opções no balcão',
    consultationNote: CONSULTATION_NOTE,
  },
  {
    slug: 'caipirinha-frutas-frescas',
    name: 'Caipirinha de Frutas Frescas',
    categorySlug: 'caipirinhas',
    shortDescription:
      'Versões preparadas na hora conforme as frutas frescas do dia.',
    description:
      'Caipirinhas preparadas na hora no balcão com frutas frescas da estação.',
    image: '/images/boteco_drinks_porcoes_1795545735094.jpg',
    imageAlt: 'Caipirinha preparada com frutas frescas no balcão do boteco',
    servingLabel: 'Copo tradicional',
    priceLabel: 'Consulte opções no balcão',
    consultationNote: CONSULTATION_NOTE,
  },

  // Sem Álcool
  {
    slug: 'refrigerantes-e-aguas',
    name: 'Refrigerantes e Águas',
    categorySlug: 'sem-alcool',
    shortDescription:
      'Refrigerantes tradicionais, água com e sem gás bem gelados.',
    description:
      'Seleção clássica de refrigerantes tradicionais em garrafa ou lata e águas minerais servidas bem geladas com limão e gelo.',
    image: '/images/surpresa_berinjela_1795545731882.jpg',
    imageAlt: 'Garrafa gelada de guaraná tradicional acompanhando petisco de boteco',
    servingLabel: 'Garrafa ou lata',
    priceLabel: 'Consulte no cardápio da casa',
    consultationNote: CONSULTATION_NOTE,
  },
  {
    slug: 'sucos-naturais',
    name: 'Sucos Naturais',
    categorySlug: 'sem-alcool',
    shortDescription:
      'Sucos naturais preparados na hora com frutas selecionadas.',
    description:
      'Sucos naturais preparados na hora para acompanhar os bolinhos, porções e pratos da família.',
    image: '/images/boteco_drinks_porcoes_1795545735094.jpg',
    imageAlt: 'Bebidas refrescantes servidas na mesa tradicional de madeira',
    servingLabel: 'Copo',
    priceLabel: 'Consulte sabores no balcão',
    consultationNote: CONSULTATION_NOTE,
  },

  // Sobremesas
  {
    slug: 'doces-caseiros-da-casa',
    name: 'Doces Caseiros Tradicionais',
    categorySlug: 'sobremesas',
    shortDescription:
      'Doces caseiros preparados na casa para encerrar a refeição.',
    description:
      'Sobremesas tradicionais preparadas com receitas caseiras da família para fechar o almoço ou o encontro de boteco.',
    image: '/images/hero_boteco_tatuape_1795545732899.jpg',
    imageAlt: 'Mesa acolhedora de família no salão do Bar do Berinjela no Tatuapé',
    badge: 'Receita Caseira',
    badgeVariant: 'classic',
    servingLabel: 'Porção individual',
    priceLabel: 'Consulte opções do dia no balcão',
    consultationNote: CONSULTATION_NOTE,
  },
];

export function getProductsByCategory(categorySlug: CategorySlug): Product[] {
  return products.filter((product) => product.categorySlug === categorySlug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured);
}

export function searchProducts(query: string): Product[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return products;
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(normalized) ||
      product.shortDescription.toLowerCase().includes(normalized) ||
      product.description.toLowerCase().includes(normalized)
  );
}
