type Stat = {
  value: string
  label: string
  labelDesktop?: string
  description: string
}

const stats: Stat[] = [
  {
    value: "AMI 18472",
    label: "LICENÇA OFICIAL",
    description: "Registo no IMPIC",
  },
  {
    value: "12 anos",
    label: "NO MERCADO",
    description: "Especialista PT",
  },
  {
    value: "247",
    label: "VENDAS CONCLUÍDAS",
    labelDesktop: "VENDAS",
    description: "Últimos 5 anos",
  },
  {
    value: "€127M",
    label: "VOLUME TRANSACIONADO",
    labelDesktop: "VOLUME",
    description: "Lisboa · Porto · Algarve",
  },
  {
    value: "4.9★",
    label: "AVALIAÇÃO MÉDIA",
    description: "Google · Idealista",
  },
  {
    value: "11 dias",
    label: "TEMPO MÉDIO",
    description: "Mediana de venda",
  },
]

export function Trust() {
  return (
    <section className="w-full bg-cream-100">
      <MobileLayout />
      <DesktopLayout />
    </section>
  )
}

function MobileLayout() {
  return (
    <div className="mx-auto flex w-full max-w-[375px] flex-col gap-8 px-6 py-14 lg:hidden">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2.5">
          <span aria-hidden className="h-px w-6 bg-gold-700" />
          <span className="text-[11px] font-semibold tracking-[0.12em] text-gold-700">
            CREDENCIAIS
          </span>
        </div>
        <h2 className="text-[26px] leading-[1.15] font-semibold tracking-[-0.01em] text-navy-900">
          Trabalho com base em
          <br />
          resultados, não promessas.
        </h2>
      </div>

      <ul className="grid grid-cols-2 gap-4">
        {stats.map((stat) => (
          <li
            key={stat.value}
            className="flex flex-col gap-1.5 rounded-xl border border-cream-300 bg-white p-5"
          >
            <span className="text-[26px] leading-none font-semibold tracking-[-0.01em] text-navy-900">
              {stat.value}
            </span>
            <span className="text-[10px] font-semibold tracking-[0.12em] text-gold-700">
              {stat.label}
            </span>
            <span className="text-[12px] leading-[1.5] text-neutral-500">
              {stat.description}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function DesktopLayout() {
  return (
    <div className="mx-auto hidden w-full max-w-[1440px] flex-col gap-14 px-20 py-25 lg:flex">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span aria-hidden className="h-px w-8 bg-gold-700" />
          <span className="text-[11px] font-semibold tracking-[0.12em] text-gold-700">
            CREDENCIAIS
          </span>
        </div>
        <h2 className="text-[44px] leading-[1.1] font-semibold tracking-[-0.015em] text-navy-900">
          Trabalho com base em resultados, não promessas.
        </h2>
        <p className="max-w-[640px] text-[17px] leading-[1.6] text-neutral-500">
          Cinco anos de operação no mercado português, números verificáveis e
          licenças oficiais.
        </p>
      </div>

      <ul className="grid grid-cols-6 gap-4">
        {stats.map((stat) => (
          <li
            key={stat.value}
            className="flex flex-col gap-2 rounded-2xl border border-cream-300 bg-white px-7 py-8"
          >
            <span className="text-[36px] leading-none font-semibold tracking-[-0.01em] text-navy-900">
              {stat.value}
            </span>
            <span className="text-[11px] font-semibold tracking-[0.12em] text-gold-700">
              {stat.labelDesktop ?? stat.label}
            </span>
            <span className="text-[12px] leading-[1.5] text-neutral-500">
              {stat.description}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}