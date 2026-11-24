import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCategoryBySlug } from '@/data/categories';
import {
  getProductBySlug,
  getProductsByCategory,
  products,
} from '@/data/products';
import { ProductDetails } from '@/components/ProductDetails';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Prato não encontrado',
    };
  }

  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const category = getCategoryBySlug(product.categorySlug);

  if (!category) {
    notFound();
  }

  const relatedProducts = getProductsByCategory(category.slug)
    .filter((item) => item.slug !== product.slug)
    .slice(0, 4);

  return (
    <ProductDetails
      product={product}
      category={category}
      relatedProducts={relatedProducts}
    />
  );
}
