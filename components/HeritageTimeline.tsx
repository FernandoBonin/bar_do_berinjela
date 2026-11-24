import { heritageMilestones } from '@/data/categories';
import { cn } from '@/lib/utils';

const badgeToneMap = {
  primary: 'bg-light-primary text-light-on-primary',
  secondary: 'bg-light-secondary text-light-on-secondary',
  tertiary: 'bg-light-tertiary text-light-on-tertiary',
};

export function HeritageTimeline() {
  return (
    <section
      aria-label="História da família"
      className="bg-light-surface-container-low border border-light-outline-variant rounded-lg p-5 lg:p-8 flex flex-col gap-5 lg:gap-6"
    >
      <div className="flex flex-wrap items-end justify-between gap-2 border-b border-light-outline-variant pb-4">
        <div className="flex flex-col gap-1">
          <span className="font-mono text-xs font-semibold tracking-wider text-light-secondary uppercase">
            <span className="md:hidden">MEMÓRIA DO TATUAPÉ</span>
            <span className="hidden md:inline">LINHA DO TEMPO</span>
          </span>
          <h2 className="font-headline text-[26px] leading-[32px] lg:text-[28px] lg:leading-[34px] font-bold text-light-on-surface">
            <span className="md:hidden">História em Família</span>
            <span className="hidden md:inline">
              Desde 1964. A mesma família. No mesmo lugar.
            </span>
          </h2>
          <p className="md:hidden text-[15px] leading-relaxed text-light-on-surface-variant text-pretty pt-1">
            Desde 1964. A mesma família. No mesmo lugar. Um ponto de encontro
            preservado no Tatuapé com receitas autorais de berinjela e petiscos
            clássicos de boteco.
          </p>
        </div>

        <span className="hidden md:inline text-xs text-light-on-surface-variant">
          Tatuapé · São Paulo
        </span>
      </div>

      <ol className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-8">
        {heritageMilestones.map((milestone, idx) => (
          <li
            key={milestone.year}
            className={cn(
              'flex flex-row lg:flex-col items-start gap-4 lg:gap-2.5',
              idx < heritageMilestones.length - 1 &&
                'lg:border-r lg:border-light-outline-variant lg:pr-8'
            )}
          >
            <span
              className={cn(
                'font-mono text-xs font-semibold tracking-wider px-2.5 py-1 rounded shrink-0 tabular-nums',
                badgeToneMap[milestone.tone]
              )}
            >
              {milestone.year}
            </span>
            <div className="flex flex-col gap-1">
              <h3 className="font-headline lg:font-headline text-sm lg:text-xl font-bold text-light-on-surface">
                {milestone.title}
              </h3>
              <p className="text-[13px] lg:text-[15px] leading-relaxed text-light-on-surface-variant text-pretty">
                {milestone.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
