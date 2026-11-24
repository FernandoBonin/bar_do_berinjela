import Link from 'next/link';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <main className="flex-1 max-w-3xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 flex flex-col items-center justify-center text-center gap-6">
      <span className="font-mono text-xs font-semibold tracking-wider px-3 py-1 rounded-full bg-light-secondary-container text-light-on-secondary-container border border-light-outline-variant">
        PÁGINA NÃO ENCONTRADA
      </span>

      <h1 className="font-display text-3xl lg:text-5xl font-bold text-light-on-surface text-balance">
        Não encontramos esta página no cardápio
      </h1>

      <p className="text-base lg:text-[17px] text-light-on-surface-variant text-pretty max-w-md">
        A seção ou o item procurado pode não estar disponível neste endereço.
        Volte para o início ou explore todas as categorias da casa.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
        <Button
          nativeButton={false}
          render={<Link href="/categorias" />}
          className="h-auto min-h-[44px] px-6 py-2.5 rounded bg-light-primary text-light-on-primary hover:bg-light-primary-container text-sm font-bold gap-2"
        >
          <BookOpen className="size-4" aria-hidden="true" />
          <span>Explorar Cardápio</span>
        </Button>

        <Button
          variant="outline"
          nativeButton={false}
          render={<Link href="/" />}
          className="h-auto min-h-[44px] px-5 py-2.5 rounded border-light-outline bg-light-surface-bright text-light-on-surface hover:bg-light-surface-container-low text-sm font-bold gap-2"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          <span>Voltar ao Início</span>
        </Button>
      </div>
    </main>
  );
}
