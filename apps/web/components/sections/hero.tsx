import { Button } from "@workspace/ui/components/button"

export function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden bg-gradient-to-b from-navy-900 via-navy-900 via-[60%] to-navy-700">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[120px] left-[80px] size-[450px] rounded-full bg-[radial-gradient(circle,rgba(201,165,124,0.2),transparent_70%)] blur-3xl"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[375px] flex-col">
        <header className="flex h-16 items-center justify-between px-5">
          <div className="flex items-center gap-2">
            <div className="size-6 rounded-[5px] bg-gold-500" aria-hidden />
            <span className="text-[16px] font-semibold tracking-[-0.01em] text-white">
              brenn.house
            </span>
          </div>
          <button
            type="button"
            aria-label="Abrir menu"
            className="flex size-10 items-center justify-center rounded-[10px] bg-navy-700 text-white"
          >
            <span className="text-xl font-semibold leading-none">≡</span>
          </button>
        </header>

        <div className="mt-8 flex flex-col gap-5 px-6">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-gold-500 bg-white/[0.08] px-3.5 py-2">
            <span className="size-1.5 rounded-full bg-gold-500" aria-hidden />
            <span className="text-[10px] font-semibold tracking-[0.12em] text-white">
              AVALIAÇÃO GRÁTIS EM 24H
            </span>
          </div>

          <h1 className="text-[40px] leading-[1.05] font-semibold tracking-[-0.02em] text-white">
            Encontre a casa
            <br />
            certa em minutos,
            <br />
            não em meses.
          </h1>

          <p className="text-[15px] leading-[1.6] text-gold-300">
            Imóveis verificados em Lisboa, Porto e Algarve. Avaliação técnica e
            visita agendada em 24 horas.
          </p>

          <div className="flex flex-col gap-5 pt-2">
            <Button
              size="lg"
              className="h-14 rounded-full bg-gold-500 text-base font-semibold text-navy-900 hover:bg-gold-500/90"
            >
              Procurar imóveis
              <span aria-hidden className="text-[17px]">
                →
              </span>
            </Button>
            <Button
              variant="outline"
              className="h-14 rounded-full border-navy-500 bg-transparent text-[15px] font-medium text-white hover:bg-white/[0.05] hover:text-white"
            >
              Avaliar o meu imóvel
            </Button>
          </div>
        </div>

        <div className="mt-auto flex flex-col gap-4 border-t border-navy-700 p-6 pt-10">
          <span className="text-[10px] font-semibold tracking-[0.12em] text-gold-500">
            CREDENCIAIS
          </span>
          <div className="flex items-center justify-between">
            <TrustItem value="AMI 18472" label="LICENÇA" />
            <TrustDivider />
            <TrustItem value="12 anos" label="MERCADO" />
            <TrustDivider />
            <TrustItem value="4.9★" label="AVALIAÇÃO" />
          </div>
        </div>
      </div>
    </section>
  )
}

function TrustItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-[18px] font-semibold tracking-[-0.005em] text-white">
        {value}
      </span>
      <span className="text-[9px] font-semibold tracking-[0.08em] text-gold-300">
        {label}
      </span>
    </div>
  )
}

function TrustDivider() {
  return <span aria-hidden className="h-7 w-px bg-navy-700" />
}
