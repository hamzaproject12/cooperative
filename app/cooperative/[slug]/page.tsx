import { notFound } from 'next/navigation';
import { MapPin, Package } from 'lucide-react';
import CooperativeHeroCarousel from '../../../components/CooperativeHeroCarousel';
import ProductCardVendor from '../../../components/ProductCardVendor';
import TestimonialsSection from '../../../components/TestimonialsSection';
import ReassuranceBanner from '../../../components/ReassuranceBanner';
import Map from '../../../components/Map';
import { cooperatives } from '../../../data/mockData';
import type { Cooperative } from '../../../data/mockData';

function hasValidLocation(coop: Cooperative) {
  return (
    Number.isFinite(coop.location?.lat) && Number.isFinite(coop.location?.lng)
  );
}

type CooperativePageProps = {
  params: Promise<{ slug: string }>;
};

function getHeroImages(cooperative: Cooperative): string[] {
  const images: string[] = [];
  if (typeof cooperative.coverImage === 'string' && cooperative.coverImage) {
    images.push(cooperative.coverImage);
  }
  cooperative.products.forEach((p) => {
    const first = p.images?.[0];
    if (typeof first === 'string' && first && !images.includes(first)) {
      images.push(first);
    }
  });
  return images.slice(0, 3);
}

function getBadges(cooperative: Cooperative): string[] {
  if (cooperative.category === 'Cosmétique') {
    const location = cooperative.slug.includes('damaskina')
      ? "Kelâat M'Gouna"
      : cooperative.zone;
    return ['100% Naturel', `Fait main à ${location}`, 'Commerce Équitable'];
  }
  if (cooperative.category === 'Agriculture') {
    return ['100% Bio', 'Producteurs locaux', 'Commerce Équitable'];
  }
  if (cooperative.category === 'Artisanat') {
    return ['Fait main', 'Savoir-faire traditionnel', 'Commerce Équitable'];
  }
  return ['100% Naturel', 'Producteurs locaux', 'Commerce Équitable'];
}

export function generateStaticParams() {
  return cooperatives.map((cooperative) => ({ slug: cooperative.slug }));
}

export default async function CooperativePage({ params }: CooperativePageProps) {
  const { slug } = await params;
  const cooperative = cooperatives.find((item) => item.slug === slug);

  if (!cooperative) {
    notFound();
  }

  const heroImages = getHeroImages(cooperative);
  const badges = getBadges(cooperative);

  return (
    <main className="space-y-8">
      {/* 1. Hero - Split layout / Carousel + Social proof + Badges */}
      <CooperativeHeroCarousel
        name={cooperative.name}
        category={cooperative.category}
        descriptionShort={cooperative.descriptionShort}
        images={heroImages}
        rating={4.8}
        reviewCount={120}
        badges={badges}
      />

      {/* 2. Practical info - compact */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/40 bg-white/70 p-5 shadow-soft backdrop-blur-sm">
          <h2 className="text-lg font-semibold text-palmier">Notre histoire</h2>
          <p className="mt-3 text-palmier/85">{cooperative.descriptionLong}</p>
        </div>
        <div className="rounded-2xl border border-white/40 bg-white/70 p-5 shadow-soft backdrop-blur-sm">
          <h2 className="text-lg font-semibold text-palmier">Informations pratiques</h2>
          <ul className="mt-4 space-y-3 text-sm text-palmier/85">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-terracotta" />
              {cooperative.location.address}
            </li>
            <li className="flex items-start gap-2">
              <Package size={16} className="mt-0.5 shrink-0 text-terracotta" />
              {cooperative.products.length} produit{cooperative.products.length > 1 ? 's' : ''}{' '}
              disponible{cooperative.products.length > 1 ? 's' : ''}
            </li>
            {(cooperative.circle ?? cooperative.commune ?? cooperative.douar) && (
              <>
                {cooperative.circle && (
                  <li><span className="font-medium text-palmier">Cercle :</span> {cooperative.circle}</li>
                )}
                {cooperative.commune && (
                  <li><span className="font-medium text-palmier">Commune :</span> {cooperative.commune}</li>
                )}
                {cooperative.douar && (
                  <li><span className="font-medium text-palmier">Douar :</span> {cooperative.douar}</li>
                )}
              </>
            )}
          </ul>
        </div>
      </section>

      {/* 3. Carte - localisation de la coopérative */}
      {hasValidLocation(cooperative) && (
        <section className="rounded-2xl border border-white/40 bg-white/70 p-4 shadow-soft backdrop-blur-sm">
          <h2 className="mb-3 text-lg font-semibold text-palmier">Localisation</h2>
          <div className="h-[280px] w-full overflow-hidden rounded-xl">
            <Map cooperatives={[cooperative]} hideSpotlight className="h-full w-full" />
          </div>
        </section>
      )}

      {/* 4. Product Grid - CTA Acheter, pricing, tags, Quick View */}
      <section>
        <h2 className="mb-6 text-2xl font-semibold text-palmier">Nos produits</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cooperative.products.map((product, index) => (
            <ProductCardVendor
              key={product.id}
              product={product}
              index={index}
              tag={index === 0 ? 'best-seller' : index === cooperative.products.length - 1 ? 'new' : null}
              originalPrice={index === 1 ? 42 : undefined}
              stockCount={index === 2 ? 3 : undefined}
            />
          ))}
        </div>
      </section>

      {/* 5. Testimonials */}
      <TestimonialsSection />

      {/* 6. Reassurance Banner */}
      <ReassuranceBanner />
    </main>
  );
}
