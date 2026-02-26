'use client';

import { Star, Quote } from 'lucide-react';

type Testimonial = {
  author: string;
  text: string;
  rating: number;
};

const defaultTestimonials: Testimonial[] = [
  {
    author: 'Amira M.',
    text: "L'eau de rose est exceptionnelle. Parfum délicat, qualité irréprochable. Je recommande Damaskina les yeux fermés.",
    rating: 5,
  },
  {
    author: 'Sophie L.',
    text: 'Un vrai coup de cœur pour le savon rose & argile. Ma peau n\'a jamais été aussi douce. Produits authentiques et livraison soignée.',
    rating: 5,
  },
  {
    author: 'Karim B.',
    text: "J'ai offert l'huile essentielle de rose à ma mère. Elle adore. On sent que c'est fait avec passion à Kelâat M'Gouna.",
    rating: 5,
  },
];

type TestimonialsSectionProps = {
  testimonials?: Testimonial[];
};

export default function TestimonialsSection({ testimonials = defaultTestimonials }: TestimonialsSectionProps) {
  return (
    <section className="rounded-2xl border border-white/40 bg-white/80 p-6 shadow-soft backdrop-blur-sm">
      <h2 className="mb-6 text-xl font-semibold text-palmier">Ce qu&apos;en pensent nos clients</h2>
      <div className="grid gap-6 sm:grid-cols-3">
        {testimonials.map((t) => (
          <blockquote
            key={t.author}
            className="relative rounded-xl border border-sage/20 bg-sage/5 p-5"
          >
            <Quote className="absolute right-3 top-3 h-8 w-8 text-sage/30" />
            <div className="mb-3 flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={i < t.rating ? 'fill-sable text-sable' : 'fill-sable/30 text-sable/30'}
                />
              ))}
            </div>
            <p className="text-sm text-palmier/90">« {t.text} »</p>
            <cite className="mt-3 block text-xs font-medium not-italic text-palmier/70">
              — {t.author}
            </cite>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
