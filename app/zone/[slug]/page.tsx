import { notFound } from 'next/navigation';
import Image from 'next/image';
import { cooperatives } from '../../../data/mockData';
import ZonePageContent from '../../../components/ZonePageContent';

type ZonePageProps = {
  params: Promise<{ slug: string }>;
};

const zoneImages: Record<string, string> = {
  AKNOUL:
    'https://images.pexels.com/photos/1268122/pexels-photo-1268122.jpeg?auto=compress&cs=tinysrgb&w=1600',
  TAINASTE:
    'https://images.pexels.com/photos/8540941/pexels-photo-8540941.jpeg?auto=compress&cs=tinysrgb&w=1600',
};

function slugifyZone(zone: string) {
  return zone
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-');
}

export function generateStaticParams() {
  const zones = Array.from(new Set(cooperatives.map((c) => c.zone)));
  return zones.map((zone) => ({ slug: slugifyZone(zone) }));
}

export default async function ZonePage({ params }: ZonePageProps) {
  const { slug } = await params;
  const zone = Array.from(new Set(cooperatives.map((c) => c.zone))).find(
    (z) => slugifyZone(z) === slug,
  );

  if (!zone) notFound();

  const zoneCooperatives = cooperatives.filter((c) => c.zone === zone);
  const allProducts = zoneCooperatives.flatMap((coop) =>
    coop.products.map((product) => ({
      ...product,
      cooperativeSlug: coop.slug,
      category: coop.category,
      cooperativeName: (() => {
        const short = coop.name.replace(/^Coopérative\s+/i, '');
        return short.length > 20 ? `${short.slice(0, 18)}…` : short;
      })(),
    })),
  );
  const bestSellerProducts = zoneCooperatives.flatMap((coop) => {
    const firstProduct = coop.products[0];
    if (!firstProduct) return [];
    return [{
      ...firstProduct,
      cooperativeSlug: coop.slug,
      category: coop.category,
      cooperativeName: (() => {
        const short = coop.name.replace(/^Coopérative\s+/i, '');
        return short.length > 20 ? `${short.slice(0, 18)}…` : short;
      })(),
    }];
  });

  const heroImage = zoneImages[zone] ?? zoneCooperatives[0]?.coverImage;
  const totalProducts = allProducts.length;
  const categories = Array.from(new Set(bestSellerProducts.map((p) => p.category)));

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[38vh] min-h-[260px] w-full overflow-hidden rounded-b-[2rem] md:h-[45vh] md:min-h-[360px]">
        <Image
          src={heroImage}
          alt={`Les trésors de ${zone}`}
          fill
          sizes="100vw"
          className="object-cover"
          priority
          unoptimized={heroImage?.startsWith('/')}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 md:p-10 lg:p-12">
          <h1 className="text-3xl font-bold tracking-tight text-white drop-shadow-lg md:text-4xl lg:text-5xl">
            Les Trésors de {zone}
          </h1>
          <p className="mt-3 max-w-2xl text-base text-white/90 md:text-lg">
            Découvrez les coopératives et produits phares de la région
          </p>
        </div>
      </section>

      <ZonePageContent
        zone={zone}
        zoneCooperatives={zoneCooperatives}
        bestSellerProducts={bestSellerProducts}
        totalProducts={totalProducts}
        categories={categories}
      />
    </main>
  );
}
