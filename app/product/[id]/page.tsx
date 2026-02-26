import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { cooperatives } from '../../../data/mockData';
import BackButton from '../../../components/BackButton';
import ProductGallery from '../../../components/ProductGallery';
import ZoneNavigator from '../../../components/ZoneNavigator';

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

function getProductWithCoop(productId: string) {
  for (const coop of cooperatives) {
    const product = coop.products.find((p) => p.id === productId);
    if (product) return { product, cooperative: coop };
  }
  return null;
}

export function generateStaticParams() {
  return cooperatives.flatMap((c) =>
    c.products.map((p) => ({ id: p.id })),
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const data = getProductWithCoop(id);
  if (!data) notFound();

  const { product, cooperative } = data;
  const whatsappMessage = encodeURIComponent(
    `Bonjour, je souhaite commander : ${product.name} (${product.price} MAD)`,
  );
  const whatsappUrl = `https://wa.me/212600000000?text=${whatsappMessage}`;

  return (
    <main className="mx-auto max-w-6xl space-y-12 px-4 py-8">
      <BackButton />

      <section className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
        <div>
          <ProductGallery images={product.images} alt={product.alt} />
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold tracking-tight text-palmier md:text-4xl">
            {product.name}
          </h1>
          <p className="mt-4 text-4xl font-bold text-terracotta md:text-5xl">
            {product.price} <span className="text-xl font-semibold text-palmier/80">MAD</span>
          </p>
          <p className="mt-4 text-palmier/90">{product.shortDescription}</p>

          <Link
            href={`/cooperative/${cooperative.slug}`}
            className="mt-6 inline-flex w-fit items-center gap-2 rounded-2xl border border-terracotta/40 bg-terracotta/5 px-4 py-2 text-sm font-medium text-palmier transition hover:bg-terracotta/10"
          >
            <Image
              src={cooperative.coverImage}
              alt=""
              width={32}
              height={32}
              className="rounded-full object-cover"
              unoptimized={cooperative.coverImage.startsWith('/')}
            />
            <span>{cooperative.name}</span>
            <span className="text-palmier/70">• {cooperative.zone}</span>
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#E2725B] px-6 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-[#d8654e] md:w-auto md:px-10"
          >
            <MessageCircle size={24} />
            Commander via WhatsApp
          </a>
        </div>
      </section>

      {product.longDescription && (
        <section className="rounded-2xl border border-white/40 bg-white/75 p-6 shadow-soft backdrop-blur-md">
          <h2 className="text-lg font-semibold text-palmier">Description</h2>
          <p className="mt-2 text-palmier/90">{product.longDescription}</p>
        </section>
      )}

      <section>
        <h2 className="mb-6 text-2xl font-semibold text-palmier">
          Explorer d&apos;autres merveilles
        </h2>
        <ZoneNavigator />
      </section>
    </main>
  );
}
