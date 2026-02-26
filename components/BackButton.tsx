'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

type BackButtonProps = {
  className?: string;
};

export default function BackButton({ className = '' }: BackButtonProps) {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className={`inline-flex items-center gap-2 rounded-xl border border-palmier/20 bg-white/90 px-4 py-2.5 text-sm font-medium text-palmier shadow-md backdrop-blur-sm transition hover:bg-white hover:border-palmier/40 hover:shadow-lg ${className}`}
    >
      <ArrowLeft size={18} />
      Retour
    </button>
  );
}
