type Service = {
  icon: string
  title: string
  description: string
}

const services: Service[] = [
  {
    icon: "⌂",
    title: "Comprar imóvel",
    description:
      "Curadoria personalizada de imóveis verificados, com avaliação técnica e visita agendada em 24h.",
  },
  {
    icon: "✦",
    title: "Vender imóvel",
    description:
      "Marketing premium e negociação direta. Tempo médio de venda: 11 dias, valor médio acima do preço pedido.",
  },
  {
    icon: "◐",
    title: "Avaliação gratuita",
    description:
      "Relatório técnico em 24h com análise comparativa de mercado e estratégia recomendada — sem custos.",
  },
  {
    icon: "⊞",
    title: "Investimento",
    description:
      "Análise de rentabilidade, gestão de arrendamento e oportunidades off-market para investidores nacionais e internacionais.",
  },
]

export function Services() {
  return (
    <section className="w-full bg-white">
      <MobileLayout />
      <DesktopLayout />
    </section>
  )
}

function MobileLayout() {
  return (
    <div className="mx-auto flex w-full max-w-[375px] flex-col gap-8 px-6 py-16 lg:hidden">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2.5">
          <span aria-hidden className="h-px w-6 bg-gold-700" />
          <span className="text-[11px] font-semibold tracking-[0.12em] text-gold-700">
            O QUE FAZEMOS
          </span>
        </div>
        <h2 className="text-[26px] leading-[1.15] font-semibold tracking-[-0.01em] text-navy-900">
          Quatro serviços, um único compromisso.
        </h2>
        <p className="text-[14px] leading-[1.6] text-neutral-500">
          Acompanhamento técnico em todas as fases — da primeira conversa à
          escritura.
        </p>
      </div>

      <ul className="flex flex-col gap-3">
        {services.map((service) => (
          <li key={service.title}>
            <ServiceCard service={service} iconSize="size-13" iconText="text-[26px]" iconRadius="rounded-[14px]" titleSize="text-[20px]" gap="gap-[18px]" padding="px-6 py-7" />
          </li>
        ))}
      </ul>
    </div>
  )
}

function DesktopLayout() {
  return (
    <div className="mx-auto hidden w-full max-w-[1440px] flex-col gap-16 px-20 py-30 lg:flex">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-3">
          <span aria-hidden className="h-px w-8 bg-gold-700" />
          <span className="text-[11px] font-semibold tracking-[0.12em] text-gold-700">
            O QUE FAZEMOS
          </span>
        </div>
        <h2 className="text-center text-[44px] leading-[1.1] font-semibold tracking-[-0.015em] text-navy-900">
          Quatro serviços, um único compromisso.
        </h2>
        <p className="max-w-[720px] text-center text-[17px] leading-[1.6] text-neutral-500">
          Acompanhamento técnico em todas as fases — da primeira conversa à
          escritura.
        </p>
      </div>

      <ul className="grid grid-cols-4 gap-5">
        {services.map((service) => (
          <li key={service.title} className="flex">
            <ServiceCard service={service} iconSize="size-16" iconText="text-[32px]" iconRadius="rounded-2xl" titleSize="text-[22px]" gap="gap-6" padding="px-8 py-9" stretchLink />
          </li>
        ))}
      </ul>
    </div>
  )
}

function ServiceCard({
  service,
  iconSize,
  iconText,
  iconRadius,
  titleSize,
  gap,
  padding,
  stretchLink,
}: {
  service: Service
  iconSize: string
  iconText: string
  iconRadius: string
  titleSize: string
  gap: string
  padding: string
  stretchLink?: boolean
}) {
  return (
    <article
      className={`flex h-full w-full flex-col rounded-2xl border border-cream-300 bg-cream-100 ${gap} ${padding}`}
    >
      <div
        aria-hidden
        className={`flex items-center justify-center bg-cream-200 ${iconSize} ${iconRadius}`}
      >
        <span className={`font-semibold text-gold-700 ${iconText}`}>
          {service.icon}
        </span>
      </div>
      <h3
        className={`leading-[1.25] font-semibold tracking-[-0.005em] text-navy-900 ${titleSize}`}
      >
        {service.title}
      </h3>
      <p className="text-[14px] leading-[1.65] text-neutral-500">
        {service.description}
      </p>
      {stretchLink && <div className="flex-1" />}
      <a
        href="#"
        className="flex items-center gap-1.5 text-[13px] font-semibold text-gold-700 transition-opacity hover:opacity-80"
      >
        Saber mais
        <span aria-hidden className="text-[14px]">
          →
        </span>
      </a>
    </article>
  )
}