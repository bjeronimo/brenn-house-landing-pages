type Step = {
  number: string
  title: string
  description: string
}

const steps: Step[] = [
  {
    number: "01",
    title: "Conversa inicial",
    description:
      "Conversamos sobre o imóvel, expectativas de valor, prazo e objetivos. Sem compromisso.",
  },
  {
    number: "02",
    title: "Avaliação técnica",
    description:
      "Visitamos o imóvel, comparamos com transações recentes na zona e definimos o preço de mercado realista.",
  },
  {
    number: "03",
    title: "Estratégia & marketing",
    description:
      "Fotografia profissional, vídeo drone, anúncios em portais premium e campanhas pagas direcionadas.",
  },
  {
    number: "04",
    title: "Negociação & escritura",
    description:
      "Filtramos propostas, negociamos as melhores condições e acompanhamos até à escritura.",
  },
]

export function HowItWorks() {
  return (
    <section className="w-full bg-cream-100">
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
            COMO TRABALHAMOS
          </span>
        </div>
        <h2 className="text-[26px] leading-[1.15] font-semibold tracking-[-0.01em] text-navy-900">
          Um processo simples,
          <br />
          resultados acima da média.
        </h2>
        <p className="text-[14px] leading-[1.6] text-neutral-500">
          Quatro passos que transformam a venda da sua casa numa decisão sem
          stress.
        </p>
      </div>

      <ol className="flex flex-col gap-2">
        {steps.map((step, i) => (
          <li key={step.number} className="flex items-start gap-4">
            <div className="flex flex-col items-center gap-2">
              <div className="flex size-12 items-center justify-center rounded-full bg-navy-700">
                <span className="text-[18px] font-semibold tracking-[-0.005em] text-gold-500">
                  {step.number}
                </span>
              </div>
              {i < steps.length - 1 && (
                <span aria-hidden className="h-14 w-0.5 bg-cream-300" />
              )}
            </div>
            <div className="flex flex-1 flex-col gap-2 py-2">
              <h3 className="text-[20px] leading-[1.25] font-semibold tracking-[-0.005em] text-navy-900">
                {step.title}
              </h3>
              <p className="text-[14px] leading-[1.65] text-neutral-500">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

function DesktopLayout() {
  return (
    <div className="mx-auto hidden w-full max-w-[1440px] flex-col gap-20 px-20 py-30 lg:flex">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-3">
          <span aria-hidden className="h-px w-8 bg-gold-700" />
          <span className="text-[11px] font-semibold tracking-[0.12em] text-gold-700">
            COMO TRABALHAMOS
          </span>
        </div>
        <h2 className="text-center text-[44px] leading-[1.1] font-semibold tracking-[-0.015em] text-navy-900">
          Um processo simples,
          <br />
          resultados acima da média.
        </h2>
        <p className="max-w-[720px] text-center text-[17px] leading-[1.6] text-neutral-500">
          Quatro passos que transformam a venda da sua casa numa decisão sem
          stress.
        </p>
      </div>

      <div className="relative w-full">
        <span
          aria-hidden
          className="absolute top-[31px] right-8 left-8 h-0.5 bg-cream-300"
        />
        <ol className="relative grid grid-cols-4 gap-8">
          {steps.map((step) => (
            <li key={step.number} className="flex flex-col items-start gap-6">
              <div className="relative flex size-16 items-center justify-center rounded-full bg-navy-700">
                <span className="text-[22px] font-semibold tracking-[-0.005em] text-gold-500">
                  {step.number}
                </span>
              </div>
              <h3 className="text-[22px] leading-[1.25] font-semibold tracking-[-0.005em] text-navy-900">
                {step.title}
              </h3>
              <p className="text-[14px] leading-[1.65] text-neutral-500">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
