type Article = {
  category: string
  title: string
  date: string
  readingTime: string
  gradient: string
}

const articles: Article[] = [
  {
    category: "ANÁLISE DE MERCADO",
    title: "Como avaliar um imóvel em Lisboa em 2026: 7 fatores que ninguém te explica",
    date: "12 abril",
    readingTime: "8 min leitura",
    gradient: "linear-gradient(161deg, #0f2a44 0%, #a47d56 73%)",
  },
  {
    category: "GUIA PRÁTICO",
    title: "Comprador estrangeiro em Portugal: NIF, fiscalidade e burocracia explicados",
    date: "5 abril",
    readingTime: "12 min leitura",
    gradient: "linear-gradient(161deg, #a47d56 0%, #c9a57c 73%)",
  },
  {
    category: "INSIGHTS",
    title: "Off-market em Comporta: porque é que os melhores imóveis nunca são anunciados",
    date: "29 março",
    readingTime: "6 min leitura",
    gradient: "linear-gradient(161deg, #1b3a5c 0%, #0a1e32 73%)",
  },
]

export function Blog() {
  return (
    <section className="w-full bg-white">
      <MobileLayout />
      <DesktopLayout />
    </section>
  )
}

function MobileLayout() {
  return (
    <div className="mx-auto flex w-full max-w-[375px] flex-col gap-7 px-6 py-16 lg:hidden">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2.5">
          <span aria-hidden className="h-px w-6 bg-gold-700" />
          <span className="text-[11px] font-semibold tracking-[0.12em] text-gold-700">
            INSIGHTS
          </span>
        </div>
        <h2 className="text-[26px] leading-[1.15] font-semibold tracking-[-0.01em] text-navy-900">
          Para quem quer
          <br />
          decidir bem.
        </h2>
        <p className="text-[14px] leading-[1.6] text-neutral-500">
          Análises de mercado, guias práticos e tendências do imobiliário em
          Portugal — sem jargão.
        </p>
      </div>

      <ul className="flex flex-col gap-4">
        {articles.map((article) => (
          <li key={article.title}>
            <ArticleCard article={article} compact />
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-center py-2">
        <button
          type="button"
          className="flex items-center gap-2 rounded-full border border-navy-700 px-6 py-3.5 text-[13px] font-semibold text-navy-900 transition-colors hover:bg-navy-900/5"
        >
          Ver todos os artigos
          <span aria-hidden className="text-[14px]">
            →
          </span>
        </button>
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
              INSIGHTS
            </span>
          </div>
          <h2 className="text-[44px] leading-[1.1] font-semibold tracking-[-0.015em] text-navy-900">
            Para quem quer
            <br />
            decidir bem.
          </h2>
          <p className="max-w-[580px] text-[17px] leading-[1.6] text-neutral-500">
            Análises de mercado, guias práticos e tendências do imobiliário em
            Portugal — sem jargão.
          </p>
        </div>

        <button
          type="button"
          className="flex shrink-0 items-center gap-2 rounded-full border border-navy-700 px-6 py-3.5 text-[14px] font-semibold text-navy-900 transition-colors hover:bg-navy-900/5"
        >
          Ver todos os artigos
          <span aria-hidden className="text-[15px]">
            →
          </span>
        </button>
      </div>

      <ul className="grid grid-cols-3 gap-6">
        {articles.map((article) => (
          <li key={article.title} className="flex">
            <ArticleCard article={article} />
          </li>
        ))}
      </ul>
    </div>
  )
}

function ArticleCard({
  article,
  compact,
}: {
  article: Article
  compact?: boolean
}) {
  return (
    <article className="flex h-full w-full flex-col overflow-hidden rounded-2xl border border-cream-300 bg-cream-100">
      <div
        className={`relative w-full ${compact ? "h-[180px]" : "h-[240px]"}`}
        style={{ backgroundImage: article.gradient }}
        aria-hidden
      >
        <div className="absolute bottom-4 left-4 flex items-center rounded-full bg-white px-3 py-1.5">
          <span className="text-[10px] font-semibold tracking-[0.12em] text-navy-900">
            {article.category}
          </span>
        </div>
      </div>

      <div className={`flex flex-1 flex-col gap-4 ${compact ? "p-5" : "p-7"}`}>
        <h3
          className={`leading-[1.3] font-semibold tracking-[-0.005em] text-navy-900 ${compact ? "text-[16px]" : "text-[19px]"}`}
        >
          {article.title}
        </h3>
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-[12px] text-neutral-500 lg:text-[13px]">
            <span>{article.date}</span>
            <span aria-hidden className="size-0.5 rounded-full bg-neutral-500" />
            <span>{article.readingTime}</span>
          </div>
          <a
            href="#"
            className="text-[13px] font-semibold whitespace-nowrap text-gold-700 transition-opacity hover:opacity-80"
          >
            Ler →
          </a>
        </div>
      </div>
    </article>
  )
}
