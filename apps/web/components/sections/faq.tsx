"use client"

import { useState } from "react"

type FaqItem = {
  question: string
  answer: string
}

const faqs: FaqItem[] = [
  {
    question: "Como funciona o serviço de avaliação gratuita?",
    answer:
      "Recolhemos os dados do imóvel, agendamos visita técnica em 48h e entregamos o relatório de avaliação com análise comparativa de mercado e estratégia de venda — sem custos e sem compromisso.",
  },
  {
    question: "Qual é a comissão cobrada na venda do imóvel?",
    answer:
      "Trabalhamos com uma comissão de sucesso transparente, definida na primeira reunião com base nas características do imóvel e estratégia de marketing acordada.",
  },
  {
    question: "Trabalham com compradores estrangeiros?",
    answer:
      "Sim. Acompanhamos compradores internacionais em todo o processo: NIF, abertura de conta bancária, fiscalidade, financiamento e escritura.",
  },
  {
    question: "Quanto tempo demora a vender um imóvel?",
    answer:
      "O nosso tempo médio é de 11 dias, contra uma mediana de mercado de 64 dias. O prazo depende do segmento, zona e correção do preço pedido.",
  },
  {
    question: "Cobram alguma taxa para mostrar imóveis?",
    answer:
      "Não. Visitas a imóveis e a curadoria personalizada para compradores são sempre gratuitas.",
  },
  {
    question: "O que acontece se o imóvel não vender no prazo previsto?",
    answer:
      "Reavaliamos a estratégia em conjunto: ajustes de preço, reforço de marketing ou rever o posicionamento. A nossa única remuneração é a comissão de sucesso.",
  },
  {
    question: "Acompanham todo o processo até à escritura?",
    answer:
      "Sim. Desde a primeira conversa até à assinatura na notária — incluindo negociação, due diligence e coordenação com advogado e banco.",
  },
]

export function Faq() {
  return (
    <section className="w-full bg-cream-100">
      <MobileLayout />
      <DesktopLayout />
    </section>
  )
}

function MobileLayout() {
  return (
    <div className="mx-auto flex w-full max-w-[375px] flex-col gap-7 px-6 py-16 lg:hidden">
      <div className="flex flex-col gap-3">
        <Eyebrow />
        <h2 className="text-[26px] leading-[1.15] font-semibold tracking-[-0.01em] text-navy-900">
          Tudo o que precisa
          <br />
          de saber.
        </h2>
        <p className="text-[14px] leading-[1.6] text-neutral-500">
          As perguntas mais comuns de quem está a comprar, vender ou avaliar
          imóveis em Portugal.
        </p>
      </div>

      <FaqList items={faqs.slice(0, 6)} compact />

      <HelpCard compact />
    </div>
  )
}

function DesktopLayout() {
  return (
    <div className="mx-auto hidden w-full max-w-[1440px] px-20 py-30 lg:block">
      <div className="flex w-full items-start gap-20">
        <div className="flex w-[460px] shrink-0 flex-col gap-8">
          <Eyebrow wide />
          <h2 className="text-[56px] leading-[1.05] font-semibold tracking-[-0.02em] text-navy-900">
            Tudo o que
            <br />
            precisa de saber.
          </h2>
          <p className="max-w-[420px] text-[17px] leading-[1.65] text-neutral-500">
            As perguntas mais comuns de quem está a comprar, vender ou avaliar
            imóveis em Portugal.
          </p>
          <HelpCard />
        </div>

        <div className="flex-1">
          <FaqList items={faqs} />
        </div>
      </div>
    </div>
  )
}

function Eyebrow({ wide }: { wide?: boolean }) {
  return (
    <div className="flex items-center gap-2.5 lg:gap-3">
      <span aria-hidden className={`h-px bg-gold-700 ${wide ? "w-8" : "w-6"}`} />
      <span className="text-[11px] font-semibold tracking-[0.12em] text-gold-700">
        DÚVIDAS FREQUENTES
      </span>
    </div>
  )
}

function FaqList({
  items,
  compact,
}: {
  items: FaqItem[]
  compact?: boolean
}) {
  const [openIndex, setOpenIndex] = useState(0)
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <li
            key={item.question}
            className={
              isOpen
                ? "rounded-xl border-2 border-gold-500 bg-white"
                : "rounded-xl border border-neutral-200 bg-white"
            }
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className={`flex w-full items-center justify-between gap-4 text-left ${compact ? "p-5" : "px-7 py-6"}`}
            >
              <span
                className={
                  compact
                    ? "text-[15px] leading-[1.3] font-semibold text-navy-900"
                    : "text-[17px] leading-[1.3] font-semibold text-navy-900"
                }
              >
                {item.question}
              </span>
              <span
                aria-hidden
                className={
                  isOpen
                    ? `flex shrink-0 items-center justify-center rounded-full bg-cream-200 ${compact ? "size-8 text-[16px]" : "size-9 text-[18px]"} font-semibold text-gold-700`
                    : `flex shrink-0 items-center justify-center rounded-full bg-neutral-100 ${compact ? "size-8 text-[16px]" : "size-9 text-[18px]"} font-semibold text-navy-900`
                }
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen && (
              <p
                className={
                  compact
                    ? "px-5 pt-0 pb-5 text-[14px] leading-[1.65] text-neutral-500"
                    : "px-7 pt-0 pb-6 text-[15px] leading-[1.65] text-neutral-500"
                }
              >
                {item.answer}
              </p>
            )}
          </li>
        )
      })}
    </ul>
  )
}

function HelpCard({ compact }: { compact?: boolean }) {
  return (
    <div
      className={
        compact
          ? "flex flex-col gap-3 rounded-xl bg-cream-200 p-6"
          : "flex flex-col gap-4 rounded-2xl bg-cream-200 p-7"
      }
    >
      <p
        className={
          compact
            ? "text-[16px] font-semibold text-navy-900"
            : "text-[18px] font-semibold tracking-[-0.005em] text-navy-900"
        }
      >
        Não encontrou a resposta?
      </p>
      <p
        className={
          compact
            ? "text-[13px] leading-[1.6] text-neutral-500"
            : "text-[14px] leading-[1.65] text-neutral-500"
        }
      >
        Falamos consigo diretamente, sem formulários intermediários.
      </p>
      <div className="flex gap-3 pt-1">
        <a
          href="#"
          className={
            compact
              ? "inline-flex items-center gap-2 rounded-full bg-navy-700 px-4 py-3 text-[13px] font-semibold text-white transition-colors hover:bg-navy-700/90"
              : "inline-flex items-center gap-2 rounded-full bg-navy-700 px-5 py-3 text-[13px] font-semibold text-white transition-colors hover:bg-navy-700/90"
          }
        >
          <span aria-hidden className="text-[14px] text-gold-500">
            ◉
          </span>
          WhatsApp
        </a>
        {!compact && (
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-navy-700 px-5 py-3 text-[13px] font-semibold text-navy-900 transition-colors hover:bg-navy-900/5"
          >
            <span aria-hidden>✉</span>
            Email
          </a>
        )}
      </div>
    </div>
  )
}
