import { notFound } from 'next/navigation';
import Image from 'next/image';
import {
  productTypes,
  getProductsByProductType,
  getProductTypeMeta,
} from '../../../data/mockData';
import BackButton from '../../../components/BackButton';
import ProductCardVendor from '../../../components/ProductCardVendor';

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

const bgClassBySlug: Record<string, string> = {
  apiculture: 'from-amber-900/20 via-fond to-palmier/15',
  terroir: 'from-palmier/20 via-fond to-amber-50/20',
  patisserie: 'from-rose-900/15 via-fond to-amber-100/20',
  elevage: 'from-stone-700/20 via-fond to-sable/15',
};

export function generateStaticParams() {
  return productTypes.map((t) => ({ slug: t.slug }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const meta = getProductTypeMeta(slug);
  if (!meta) notFound();

  const products = getProductsByProductType(slug);
  const bgClass = bgClassBySlug[slug] ?? 'from-palmier/20 via-fond to-sable/20';

  return (
    <main className="min-h-screen">
      <section
        className={`relative flex min-h-[220px] flex-col justify-end bg-gradient-to-br ${bgClass} p-6 md:min-h-[260px] md:p-10`}
      >
        <div className="absolute left-4 top-4 z-10 sm:left-6 sm:top-6 md:left-10 md:top-10">
          <BackButton />
        </div>
        <div className="absolute inset-0 opacity-30">
          <Image
            src={meta.image}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="relative">
          <h1 className="text-3xl font-bold text-palmier drop-shadow-sm md:text-4xl">
            {meta.label}
          </h1>
          {'description' in meta && meta.description && (
            <p className="mt-2 text-sm text-palmier/90 md:text-base">{meta.description}</p>
          )}
          <p className="mt-2 text-palmier/80">
            {products.length} produit{products.length > 1 ? 's' : ''} proposé
            {products.length > 1 ? 's' : ''} par nos coopératives
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 py-8 sm:px-6 lg:px-10">
        {products.length === 0 ? (
          <p className="rounded-xl border border-white/40 bg-white/60 p-6 text-center text-palmier/80">
            Aucun produit pour ce type pour le moment.
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3">
            {products.map((product, index) => (
              <ProductCardVendor
                key={product.id}
                product={product}
                index={index}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
