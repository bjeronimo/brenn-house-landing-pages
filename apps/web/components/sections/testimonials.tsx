type Testimonial = {
  quote: string
  name: string
  role: string
  avatarGradient: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Vendeu a moradia em apenas 9 dias e por valor acima do esperado. Profissionalismo raro no mercado.",
    name: "João Pereira",
    role: "Proprietário · Lagoa",
    avatarGradient: "linear-gradient(135deg, #c9a57c 0%, #a47d56 71%)",
  },
  {
    quote:
      "Acompanhamento incrível desde a primeira visita até à escritura. Sentimo-nos sempre informados e com poder de decisão.",
    name: "Sofia Marques",
    role: "Compradora · Cascais",
    avatarGradient: "linear-gradient(135deg, #e2c9a8 0%, #c9a57c 71%)",
  },
  {
    quote:
      "Como investidor estrangeiro, encontrei aqui um nível de serviço que não tinha visto em outras agências. Recomendo sem hesitar.",
    name: "Klaus Müller",
    role: "Investidor · Comporta",
    avatarGradient: "linear-gradient(135deg, #c9a57c 0%, #7a5a3d 71%)",
  },
]

export function Testimonials() {
  return (
    <section className="w-full bg-cream-100">
      <MobileLayout />
      <DesktopLayout />
    </section>
  )
}

function MobileLayout() {
  return (
    <div className="flex w-full flex-col gap-7 py-16 lg:hidden">
      <div className="flex flex-col gap-3 px-6">
        <div className="flex items-center gap-2.5">
          <span aria-hidden className="h-px w-6 bg-gold-700" />
          <span className="text-[11px] font-semibold tracking-[0.12em] text-gold-700">
            DEPOIMENTOS
          </span>
        </div>
        <h2 className="text-[26px] leading-[1.15] font-semibold tracking-[-0.01em] text-navy-900">
          Histórias reais
          <br />
          de quem confiou.
        </h2>
        <p className="text-[14px] leading-[1.6] text-neutral-500">
          +89 avaliações verificadas em Google e Idealista — média 4.9
          estrelas.
        </p>
      </div>

      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-pl-6 px-6 py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            className="w-[calc(100vw-72px)] max-w-[360px] shrink-0 snap-start"
          >
            <TestimonialCard testimonial={testimonial} compact />
          </div>
        ))}
      </div>

      <div className="px-6 py-3">
        <AggregateRatingCard caption="Baseado em 89 avaliações verificadas — Google · Idealista · Casa Sapo" />
      </div>
    </div>
  )
}

function DesktopLayout() {
  return (
    <div className="mx-auto hidden w-full max-w-[1440px] flex-col gap-16 px-20 py-30 lg:flex">
      <div className="flex items-end justify-between gap-10">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-px w-8 bg-gold-700" />
            <span className="text-[11px] font-semibold tracking-[0.12em] text-gold-700">
              DEPOIMENTOS
            </span>
          </div>
          <h2 className="text-[44px] leading-[1.1] font-semibold tracking-[-0.015em] text-navy-900">
            Histórias reais
            <br />
            de quem confiou.
          </h2>
          <p className="max-w-[580px] text-[17px] leading-[1.6] text-neutral-500">
            +89 avaliações verificadas em Google e Idealista — média 4.9
            estrelas.
          </p>
        </div>

        <div className="w-[280px] shrink-0">
          <AggregateRatingCard caption="Baseado em 89 avaliações verificadas" wide />
        </div>
      </div>

      <ul className="grid grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <li key={testimonial.name} className="flex">
            <TestimonialCard testimonial={testimonial} />
          </li>
        ))}
      </ul>
    </div>
  )
}

function TestimonialCard({
  testimonial,
  compact,
}: {
  testimonial: Testimonial
  compact?: boolean
}) {
  return (
    <article
      className={
        compact
          ? "flex h-full w-full flex-col gap-6 rounded-2xl border border-cream-300 bg-white px-7 py-8"
          : "flex h-full w-full flex-col gap-6 rounded-2xl border border-cream-300 bg-white px-9 py-10"
      }
    >
      <span
        aria-hidden
        className={
          compact
            ? "text-[56px] leading-[0.8] font-semibold text-gold-500"
            : "text-[64px] leading-[0.8] font-semibold text-gold-500"
        }
      >
        “
      </span>
      <p
        className={
          compact
            ? "text-[16px] leading-[1.6] text-navy-900"
            : "text-[17px] leading-[1.6] text-navy-900"
        }
      >
        {testimonial.quote}
      </p>
      <Stars />
      <div className="flex-1" />
      <div className="flex items-center gap-3 border-t border-cream-300 pt-5 lg:pt-6">
        <span
          aria-hidden
          className={
            compact
              ? "size-11 shrink-0 rounded-full"
              : "size-12 shrink-0 rounded-full"
          }
          style={{ backgroundImage: testimonial.avatarGradient }}
        />
        <div className="flex flex-col gap-0.5">
          <p
            className={
              compact
                ? "text-[14px] font-semibold text-navy-900"
                : "text-[15px] font-semibold text-navy-900"
            }
          >
            {testimonial.name}
          </p>
          <p
            className={
              compact
                ? "text-[12px] text-neutral-500"
                : "text-[13px] text-neutral-500"
            }
          >
            {testimonial.role}
          </p>
        </div>
      </div>
    </article>
  )
}

function AggregateRatingCard({
  caption,
  wide,
}: {
  caption: string
  wide?: boolean
}) {
  return (
    <div
      className={
        wide
          ? "flex flex-col items-center justify-center gap-2 rounded-2xl border border-cream-300 bg-white p-8"
          : "flex flex-col items-center justify-center gap-2 rounded-xl border border-cream-300 bg-white p-6"
      }
    >
      <Stars size={wide ? "lg" : "md"} />
      <div className="flex items-baseline gap-2">
        <span
          className={
            wide
              ? "text-[56px] leading-none font-semibold tracking-[-0.02em] text-navy-900"
              : "text-[36px] leading-none font-semibold tracking-[-0.02em] text-navy-900"
          }
        >
          4.9
        </span>
        <span
          className={
            wide
              ? "text-[18px] font-medium text-neutral-500"
              : "text-[16px] font-medium text-neutral-500"
          }
        >
          / 5
        </span>
      </div>
      <p
        className={
          wide
            ? "max-w-[216px] text-center text-[12px] leading-[1.6] text-neutral-500"
            : "text-center text-[12px] leading-[1.6] text-neutral-500"
        }
      >
        {caption}
      </p>
    </div>
  )
}

function Stars({ size }: { size?: "md" | "lg" }) {
  const className =
    size === "lg"
      ? "flex gap-0.5 text-[22px] text-gold-500"
      : size === "md"
        ? "flex gap-0.5 text-[18px] text-gold-500"
        : "flex gap-0.5 text-[14px] text-gold-500"
  return (
    <div aria-label="5 de 5 estrelas" className={className}>
      <span aria-hidden>★</span>
      <span aria-hidden>★</span>
      <span aria-hidden>★</span>
      <span aria-hidden>★</span>
      <span aria-hidden>★</span>
    </div>
  )
}
