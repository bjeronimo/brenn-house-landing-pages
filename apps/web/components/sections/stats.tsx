import { Fragment } from "react"

type Stat = {
  value: string
  label: string
  description: string
}

const stats: Stat[] = [
  {
    value: "€127M",
    label: "VOLUME TRANSACIONADO",
    description: "Em 247 transações concluídas",
  },
  {
    value: "11 dias",
    label: "TEMPO MÉDIO DE VENDA",
    description: "Mediana de mercado: 64 dias",
  },
  {
    value: "96%",
    label: "VALOR MÉDIO ATINGIDO",
    description: "Vs. preço pedido inicial",
  },
  {
    value: "4.9★",
    label: "AVALIAÇÃO MÉDIA",
    description: "Baseado em 89 avaliações",
  },
]

export function Stats() {
  return (
    <section className="relative w-full overflow-hidden bg-navy-900">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[80px] -left-[80px] size-[320px] rounded-full bg-[radial-gradient(circle,rgba(201,165,124,0.2),transparent_70%)] blur-3xl lg:hidden"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[100px] -left-[100px] hidden size-[600px] rounded-full bg-[radial-gradient(circle,rgba(201,165,124,0.18),transparent_70%)] blur-3xl lg:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[200px] left-[1100px] hidden size-[500px] rounded-full bg-[radial-gradient(circle,rgba(201,165,124,0.15),transparent_70%)] blur-3xl lg:block"
      />

      <MobileLayout />
      <DesktopLayout />
    </section>
  )
}

function MobileLayout() {
  return (
    <div className="relative z-10 mx-auto flex w-full max-w-[375px] flex-col gap-10 px-6 py-18 lg:hidden">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2.5">
          <span aria-hidden className="h-px w-6 bg-gold-500" />
          <span className="text-[11px] font-semibold tracking-[0.12em] text-gold-500">
            OS NÚMEROS
          </span>
        </div>
        <h2 className="text-[26px] leading-[1.15] font-semibold tracking-[-0.01em] text-white">
          Resultados que falam
          <br />
          por si.
        </h2>
        <p className="text-[14px] leading-[1.6] text-gold-300">
          Cinco anos a transformar mercado em decisões — números atualizados em
          janeiro 2026.
        </p>
      </div>

      <ul className="flex flex-col gap-6">
        {stats.map((stat) => (
          <li
            key={stat.label}
            className="flex flex-col gap-1.5 border-b border-navy-500 py-6"
          >
            <span className="text-[64px] leading-none font-semibold tracking-[-0.03em] text-white">
              {stat.value}
            </span>
            <span className="text-[11px] font-semibold tracking-[0.12em] text-gold-500">
              {stat.label}
            </span>
            <span className="text-[13px] leading-[1.6] text-gold-300">
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
    <div className="relative z-10 mx-auto hidden w-full max-w-[1440px] flex-col gap-20 px-20 py-35 lg:flex">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-3">
          <span aria-hidden className="h-px w-8 bg-gold-500" />
          <span className="text-[11px] font-semibold tracking-[0.12em] text-gold-500">
            OS NÚMEROS
          </span>
        </div>
        <h2 className="text-center text-[56px] leading-[1.1] font-semibold tracking-[-0.015em] text-white">
          Resultados que falam
          <br />
          por si.
        </h2>
        <p className="max-w-[720px] text-center text-[17px] leading-[1.6] text-gold-300">
          Cinco anos a transformar mercado em decisões — números atualizados em
          janeiro 2026.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-x-8 gap-y-12 xl:flex xl:items-start xl:justify-between xl:gap-0">
        {stats.map((stat, i) => (
          <Fragment key={stat.label}>
            {i > 0 && (
              <span
                aria-hidden
                className="hidden h-[100px] w-px shrink-0 bg-navy-500 xl:block"
              />
            )}
            <div className="flex min-w-0 flex-col gap-2.5 xl:flex-1">
              <span className="text-[64px] leading-none font-semibold tracking-[-0.03em] whitespace-nowrap text-white xl:text-[clamp(56px,5.5vw,80px)]">
                {stat.value}
              </span>
              <span className="text-[12px] font-semibold tracking-[0.12em] text-gold-500">
                {stat.label}
              </span>
              <span className="text-[13px] leading-[1.6] text-gold-300">
                {stat.description}
              </span>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  )
}
