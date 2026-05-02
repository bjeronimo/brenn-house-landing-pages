type Pillar = {
  icon: string
  title: string
  description: string
}

const pillars: Pillar[] = [
  {
    icon: "⊕",
    title: "Avaliação técnica gratuita",
    description: "Relatório com base em transações comparáveis na zona.",
  },
  {
    icon: "✓",
    title: "Marketing premium incluído",
    description: "Fotografia, vídeo drone e anúncios em portais premium.",
  },
  {
    icon: "⌖",
    title: "Negociação direta",
    description: "Sem subagentes. Falas diretamente com quem decide.",
  },
  {
    icon: "⏱",
    title: "Resposta em < 2h",
    description: "Em horário comercial. Comunicação previsível e disponível.",
  },
]

const portraitGradient =
  "linear-gradient(146deg, #c9a57c 0%, #1b3a5c 73%)"

export function About() {
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
        <Eyebrow label="QUEM SOMOS" />
        <h2 className="text-[26px] leading-[1.15] font-semibold tracking-[-0.01em] text-navy-900">
          Conhecimento técnico,
          <br />
          presença local.
        </h2>
      </div>

      <div
        className="relative h-[380px] w-full overflow-hidden rounded-2xl"
        style={{ backgroundImage: portraitGradient }}
        aria-hidden
      >
        <div className="absolute right-0 bottom-0 left-0 flex flex-col gap-1.5 p-6">
          <p className="text-[22px] font-semibold tracking-[-0.005em] text-white">
            Maria Antunes
          </p>
          <p className="text-[12px] font-medium tracking-[0.04em] text-gold-300">
            AMI 18472 · Lisboa & Algarve
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 text-[15px] leading-[1.65]">
        <p className="text-navy-900">
          12 anos a acompanhar compradores e proprietários no mercado português.
          Formação em arquitetura e especialização em valorização imobiliária —
          uma combinação rara que se traduz em decisões mais precisas para os
          meus clientes.
        </p>
        <p className="text-neutral-500 italic">
          Trabalho com poucos clientes em simultâneo. Cada imóvel recebe atenção
          dedicada — não há &ldquo;carteira ativa&rdquo; de centenas de
          propriedades.
        </p>
      </div>

      <Eyebrow label="PORQUÊ TRABALHAR COMIGO" />

      <ul className="grid grid-cols-2 gap-3">
        {pillars.map((pillar) => (
          <li key={pillar.title}>
            <PillarCard pillar={pillar} compact />
          </li>
        ))}
      </ul>
    </div>
  )
}

function DesktopLayout() {
  return (
    <div className="mx-auto hidden w-full max-w-[1440px] px-20 py-30 lg:block">
      <div className="flex w-full items-start gap-20">
        <div className="relative shrink-0">
          <div
            className="relative h-[640px] w-[520px] overflow-hidden rounded-[20px]"
            style={{ backgroundImage: portraitGradient }}
            aria-hidden
          >
            <div className="absolute right-0 bottom-0 left-0 flex flex-col gap-1.5 p-9">
              <p className="text-[32px] leading-none font-semibold tracking-[-0.01em] text-white">
                Maria Antunes
              </p>
              <p className="text-[13px] font-medium tracking-[0.04em] text-gold-300">
                Consultora Imobiliária · AMI 18472
              </p>
            </div>
          </div>
          <div className="absolute top-[280px] -left-[60px] flex w-[320px] flex-col gap-3 rounded-2xl bg-white p-7 shadow-[0_16px_32px_0_rgba(10,31,51,0.18)]">
            <p className="text-[15px] leading-[1.6] text-navy-900 italic">
              &ldquo;Trabalho com poucos clientes em simultâneo. Cada imóvel
              recebe atenção dedicada.&rdquo;
            </p>
            <div className="flex items-center gap-2">
              <span aria-hidden className="h-px w-5 bg-gold-700" />
              <span className="text-[10px] font-semibold tracking-[0.12em] text-gold-700">
                PRINCÍPIO DE TRABALHO
              </span>
            </div>
          </div>
        </div>

        <div className="flex w-[600px] shrink-0 flex-col gap-8">
          <Eyebrow label="QUEM SOMOS" wide />
          <h2 className="text-[56px] leading-[1.05] font-semibold tracking-[-0.02em] text-navy-900">
            Conhecimento técnico,
            <br />
            presença local.
          </h2>
          <p className="max-w-[580px] text-[17px] leading-[1.65] text-navy-900">
            12 anos a acompanhar compradores e proprietários no mercado
            português. Formação em arquitetura e especialização em valorização
            imobiliária — uma combinação rara que se traduz em decisões mais
            precisas para os meus clientes.
          </p>
          <ul className="grid grid-cols-2 gap-4 py-4">
            {pillars.map((pillar) => (
              <li key={pillar.title}>
                <PillarCard pillar={pillar} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function Eyebrow({ label, wide }: { label: string; wide?: boolean }) {
  return (
    <div className="flex items-center gap-2.5 lg:gap-3">
      <span
        aria-hidden
        className={`h-px bg-gold-700 ${wide ? "w-8" : "w-6"}`}
      />
      <span className="text-[11px] font-semibold tracking-[0.12em] text-gold-700">
        {label}
      </span>
    </div>
  )
}

function PillarCard({
  pillar,
  compact,
}: {
  pillar: Pillar
  compact?: boolean
}) {
  return (
    <article
      className={`flex h-full flex-col rounded-xl border border-cream-300 bg-white ${compact ? "gap-3 px-[18px] py-5" : "gap-3 p-6"}`}
    >
      <div
        aria-hidden
        className={`flex items-center justify-center rounded-[10px] bg-cream-200 ${compact ? "size-9" : "size-10"}`}
      >
        <span
          className={`font-semibold text-gold-700 ${compact ? "text-[18px]" : "text-[20px]"}`}
        >
          {pillar.icon}
        </span>
      </div>
      <h3
        className={`leading-[1.3] font-semibold tracking-[-0.005em] text-navy-900 ${compact ? "text-[14px]" : "text-[16px]"}`}
      >
        {pillar.title}
      </h3>
      <p
        className={`text-neutral-500 ${compact ? "text-[12px] leading-[1.55]" : "text-[13px] leading-[1.6]"}`}
      >
        {pillar.description}
      </p>
    </article>
  )
}
