import { Button } from "@workspace/ui/components/button"

const navLinks = ["Imóveis", "Vender", "Como Funciona", "Sobre", "Contacto"]

const desktopTrustItems = [
  "Imóveis verificados",
  "Sem taxas escondidas",
  "Resposta em < 2h",
  "AMI 18472 · 12 anos no mercado",
]

export function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden bg-gradient-to-b from-navy-900 via-navy-900 via-[60%] to-navy-700 lg:bg-[linear-gradient(148deg,#0a1e32_0%,#0a1e32_50%,#0f2a44_71.4%)]">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[120px] left-[80px] size-[450px] rounded-full bg-[radial-gradient(circle,rgba(201,165,124,0.2),transparent_70%)] blur-3xl lg:hidden"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[200px] left-[950px] hidden size-[700px] rounded-full bg-[radial-gradient(circle,rgba(201,165,124,0.2),transparent_70%)] blur-3xl lg:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[500px] -left-[100px] hidden size-[500px] rounded-full bg-[radial-gradient(circle,rgba(201,165,124,0.15),transparent_70%)] blur-3xl lg:block"
      />

      <MobileLayout />
      <DesktopLayout />
    </section>
  )
}

function MobileLayout() {
  return (
    <div className="relative z-10 mx-auto flex w-full max-w-[375px] flex-col lg:hidden">
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

      <div className="mt-12 flex flex-col gap-5 px-6">
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

      <div className="mt-20 flex flex-col gap-4 border-t border-navy-700 p-6">
        <span className="text-[10px] font-semibold tracking-[0.12em] text-gold-500">
          CREDENCIAIS
        </span>
        <div className="flex items-center justify-between">
          <MobileTrustItem value="AMI 18472" label="LICENÇA" />
          <MobileTrustDivider />
          <MobileTrustItem value="12 anos" label="MERCADO" />
          <MobileTrustDivider />
          <MobileTrustItem value="4.9★" label="AVALIAÇÃO" />
        </div>
      </div>
    </div>
  )
}

function DesktopLayout() {
  return (
    <div className="relative z-10 hidden w-full flex-col lg:flex">
      <header className="mx-auto flex h-[88px] w-full max-w-[1440px] items-center justify-between px-20">
        <div className="flex items-center gap-2.5">
          <div className="size-7 rounded-md bg-gold-500" aria-hidden />
          <span className="text-[18px] font-semibold tracking-[-0.01em] text-white">
            brenn.house
          </span>
        </div>
        <nav className="flex items-center gap-9">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-[14px] font-medium text-white transition-opacity hover:opacity-80"
            >
              {link}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="text-[14px] font-medium text-white transition-opacity hover:opacity-80"
          >
            Entrar
          </a>
          <button
            type="button"
            className="rounded-full bg-gold-500 px-5 py-3 text-[14px] font-semibold text-navy-900 transition-colors hover:bg-gold-500/90"
          >
            Avaliar imóvel
          </button>
        </div>
      </header>

      <div className="mx-auto mt-20 flex w-full max-w-[1280px] flex-col gap-8 px-20">
        <div className="inline-flex w-fit items-center gap-2.5 rounded-full border border-gold-500 bg-white/[0.08] px-4 py-2">
          <span className="size-1.5 rounded-full bg-gold-500" aria-hidden />
          <span className="text-[11px] font-semibold tracking-[0.12em] text-white">
            MAIS DE 12.000 IMÓVEIS VERIFICADOS EM PORTUGAL
          </span>
        </div>

        <h1 className="max-w-[1120px] text-[76px] leading-none font-semibold tracking-[-0.03em] text-white">
          Encontre a casa certa em
          <br />
          minutos, não em meses.
        </h1>

        <p className="max-w-[720px] text-[18px] leading-[1.65] text-gold-300">
          Imóveis verificados em Lisboa, Porto e Algarve — com avaliação
          técnica, contacto direto com o consultor e visita agendada em 24
          horas.
        </p>

        <div className="pt-2">
          <SearchCard />
        </div>

        <ul className="flex flex-wrap items-center gap-8 py-4">
          {desktopTrustItems.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="size-1 rounded-full bg-gold-500" aria-hidden />
              <span className="text-[13px] text-gold-300">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function SearchCard() {
  return (
    <div className="flex w-full max-w-[920px] flex-col overflow-hidden rounded-[20px] bg-white shadow-[0_30px_60px_0_rgba(0,0,0,0.3)]">
      <div className="flex bg-cream-100 p-2">
        <SearchTab active>Comprar</SearchTab>
        <SearchTab>Arrendar</SearchTab>
        <SearchTab>Vender</SearchTab>
      </div>

      <div className="flex items-center p-4">
        <SearchField
          label="LOCALIZAÇÃO"
          value="Lisboa, Cascais..."
          width="w-[230px]"
        />
        <SearchFieldDivider />
        <SearchField label="TIPOLOGIA" value="T2 / T3" width="w-[180px]" />
        <SearchFieldDivider />
        <SearchField label="PREÇO MÁX." value="€450.000" width="w-[180px]" />
        <button
          type="button"
          className="ml-auto flex items-center gap-2.5 rounded-[14px] bg-navy-700 px-7 py-4 text-[15px] font-semibold text-white transition-colors hover:bg-navy-700/90"
        >
          Procurar imóveis
          <span aria-hidden className="text-[16px] text-gold-500">
            →
          </span>
        </button>
      </div>
    </div>
  )
}

function SearchTab({
  children,
  active,
}: {
  children: React.ReactNode
  active?: boolean
}) {
  return (
    <button
      type="button"
      className={
        active
          ? "rounded-[12px] bg-white px-6 py-3.5 text-[14px] font-semibold text-navy-900 shadow-[0_2px_8px_0_rgba(0,0,0,0.06)]"
          : "rounded-[12px] px-6 py-3.5 text-[14px] font-medium text-neutral-500"
      }
    >
      {children}
    </button>
  )
}

function SearchField({
  label,
  value,
  width,
}: {
  label: string
  value: string
  width: string
}) {
  return (
    <div className={`${width} flex flex-col gap-1 truncate px-4 py-3`}>
      <span className="text-[11px] font-semibold tracking-[0.12em] text-gold-700">
        {label}
      </span>
      <span className="text-[15px] font-medium text-navy-900">{value}</span>
    </div>
  )
}

function SearchFieldDivider() {
  return <span aria-hidden className="h-10 w-px bg-cream-300" />
}

function MobileTrustItem({ value, label }: { value: string; label: string }) {
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

function MobileTrustDivider() {
  return <span aria-hidden className="h-7 w-px bg-navy-700" />
}
