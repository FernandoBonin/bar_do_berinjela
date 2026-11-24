'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0.94, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, ease: [0.2, 0, 0, 1] }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center"
    >
      {/* Editorial Copy Column */}
      <div className="order-2 lg:order-1 lg:col-span-6 flex flex-col gap-4 lg:gap-6">
        <div className="hidden lg:flex flex-wrap items-center gap-3">
          <span className="font-mono text-xs font-semibold tracking-wider px-2.5 py-1 rounded bg-light-primary text-light-on-primary uppercase">
            DESDE 1964
          </span>
          <span className="text-xs font-bold tracking-wide text-light-secondary">
            A mesma família. No mesmo lugar.
          </span>
        </div>

        <h1 className="font-display text-[32px] leading-[38px] lg:text-[48px] lg:leading-[54px] font-bold tracking-tight text-light-on-surface text-balance">
          Tradição que atravessa gerações
        </h1>

        <p className="text-base lg:text-[17px] leading-relaxed text-light-on-surface-variant text-pretty max-w-prose">
          Desde 1964, os sabores que fazem parte da história do Tatuapé.
          Receitas autorais de berinjela, bolinhos premiados e a cozinha
          acolhedora de um boteco familiar paulistano.
        </p>

        <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 pt-1">
          <Button
            nativeButton={false}
            render={<Link href="/categorias" />}
            className="h-auto min-h-[46px] px-7 py-3 rounded bg-light-primary text-light-on-primary hover:bg-light-primary-container text-sm font-bold tracking-wide gap-2"
          >
            <BookOpen className="size-4" aria-hidden="true" />
            <span>Explorar Cardápio</span>
          </Button>

          <Button
            variant="outline"
            nativeButton={false}
            render={<Link href="/categoria/bolinhos" />}
            className="hidden sm:inline-flex h-auto min-h-[46px] px-6 py-3 rounded border-light-outline bg-light-surface-bright text-light-on-surface hover:bg-light-surface-container-low text-sm font-bold tracking-wide"
          >
            <span>Ver Bolinhos</span>
          </Button>
        </div>
      </div>

      {/* Framed Family Boteco Photo Column */}
      <div className="order-1 lg:order-2 lg:col-span-6">
        <div className="rounded-lg overflow-hidden border border-light-outline-variant bg-light-surface-container">
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/images/hero_boteco_tatuape_1795545732899.jpg"
              alt="Família reunida à mesa no salão tradicional do Bar do Berinjela no Tatuapé"
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 50vw"
              referrerPolicy="no-referrer"
              className="object-cover object-top"
            />
          </div>
          <div className="px-4 lg:px-6 py-2.5 lg:py-3.5 bg-light-primary text-light-on-primary flex items-center justify-between gap-3">
            <span className="text-xs lg:text-sm font-bold md:font-normal">
              <span className="lg:hidden">A mesma família. No mesmo lugar.</span>
              <span className="hidden lg:inline">
                Salão tradicional no Tatuapé · 60 anos de história
              </span>
            </span>
            <span className="font-mono text-xs font-semibold tracking-wider shrink-0">
              <span className="lg:hidden">1964</span>
              <span className="hidden lg:inline">1964 — HOJE</span>
            </span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
