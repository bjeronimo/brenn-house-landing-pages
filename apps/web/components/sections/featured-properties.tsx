"use client"

import { useEffect, useRef, useState } from "react"

type Property = {
  price: string
  type: string
  title: string
  location: string
  area: string
  rooms: string
  bathrooms: string
  badge: string
  gradient: string
}

const properties: Property[] = [
  {
    price: "€485.000",
    type: "T3",
    title: "Avenida da Liberdade",
    location: "Lisboa · Avenidas Novas",
    area: "120m²",
    rooms: "3 qtos",
    bathrooms: "2 wc",
    badge: "NOVO",
    gradient: "linear-gradient(159deg, #c9a57c 0%, #1b3a5c 73%)",
  },
  {
    price: "€720.000",
    type: "T4",
    title: "Quinta da Marinha",
    location: "Cascais · Quinta da Marinha",
    area: "120m²",
    rooms: "3 qtos",
    bathrooms: "2 wc",
    badge: "DESTAQUE",
    gradient: "linear-gradient(159deg, #a47d56 0%, #0a1e32 73%)",
  },
  {
    price: "€395.000",
    type: "T2",
    title: "Foz do Douro",
    location: "Porto · Foz do Douro",
    area: "120m²",
    rooms: "3 qtos",
    bathrooms: "2 wc",
    badge: "NOVO",
    gradient: "linear-gradient(159deg, #1b3a5c 0%, #a47d56 73%)",
  },
  {
    price: "€890.000",
    type: "T5",
    title: "Comporta Beach Villa",
    location: "Comporta · Carvalhal",
    area: "120m²",
    rooms: "3 qtos",
    bathrooms: "2 wc",
    badge: "PREMIUM",
    gradient: "linear-gradient(159deg, #c9a57c 0%, #7a5a3d 73%)",
  },
]

export function FeaturedProperties() {
  return (
    <section className="w-full bg-white">
      <MobileLayout />
      <DesktopLayout />
    </section>
  )
}

function MobileLayout() {
  const visible = properties.slice(0, 3)
  const scrollRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const [active, setActive] = useState(0)

  useEffect(() => {
    const container = scrollRef.current
    const cards = cardRefs.current.filter(
      (el): el is HTMLDivElement => el !== null
    )
    if (!container || cards.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (!mostVisible) return
        const index = cards.indexOf(mostVisible.target as HTMLDivElement)
        if (index !== -1) setActive(index)
      },
      { root: container, threshold: [0.5, 0.75, 1] }
    )
    cards.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  const goTo = (index: number) => {
    const container = scrollRef.current
    const card = cardRefs.current[index]
    if (!container || !card) return
    container.scrollTo({ left: card.offsetLeft - 24, behavior: "smooth" })
  }

  return (
    <div className="flex w-full flex-col gap-7 py-14 lg:hidden">
      <div className="flex flex-col gap-3 px-6">
        <div className="flex items-center gap-2.5">
          <span aria-hidden className="h-px w-6 bg-gold-700" />
          <span className="text-[11px] font-semibold tracking-[0.12em] text-gold-700">
            DESTAQUES DA SEMANA
          </span>
        </div>
        <h2 className="text-[26px] leading-[1.15] font-semibold tracking-[-0.01em] text-navy-900">
          Imóveis selecionados para si.
        </h2>
        <p className="text-[14px] leading-[1.6] text-neutral-500">
          Curadoria atualizada semanalmente — apenas imóveis verificados, com
          avaliação técnica e dossier completo.
        </p>
      </div>

      <div
        ref={scrollRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-pl-6 px-6 py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {visible.map((property, i) => (
          <div
            key={property.title}
            ref={(el) => {
              cardRefs.current[i] = el
            }}
            className="w-[calc(100vw-72px)] max-w-[335px] shrink-0 snap-start"
          >
            <PropertyCard property={property} imageHeight="h-[220px]" />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 py-2">
        {visible.map((property, i) => (
          <button
            key={property.title}
            type="button"
            aria-label={`Ir para imóvel ${i + 1} de ${visible.length}`}
            aria-current={i === active}
            onClick={() => goTo(i)}
            className={
              i === active
                ? "h-2 w-6 rounded-full bg-navy-700 transition-all"
                : "size-2 rounded-full bg-cream-300 transition-all"
            }
          />
        ))}
      </div>

      <div className="flex items-center justify-center px-6 py-3">
        <button
          type="button"
          className="flex items-center gap-2 rounded-full border border-navy-700 px-7 py-3.5 text-[14px] font-semibold text-navy-900 transition-colors hover:bg-navy-900/5"
        >
          Ver todos os 247 imóveis
          <span aria-hidden>→</span>
        </button>
      </div>
    </div>
  )
}

function DesktopLayout() {
  return (
    <div className="mx-auto hidden w-full max-w-[1440px] flex-col gap-14 px-20 py-25 lg:flex">
      <div className="flex items-end justify-between gap-10">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-px w-8 bg-gold-700" />
            <span className="text-[11px] font-semibold tracking-[0.12em] text-gold-700">
              DESTAQUES DA SEMANA
            </span>
          </div>
          <h2 className="max-w-[720px] text-[44px] leading-[1.1] font-semibold tracking-[-0.015em] text-navy-900">
            Imóveis selecionados
            <br />
            para si.
          </h2>
          <p className="max-w-[580px] text-[17px] leading-[1.6] text-neutral-500">
            Curadoria atualizada semanalmente — apenas imóveis verificados, com
            avaliação técnica e dossier completo.
          </p>
        </div>

        <div className="flex flex-col items-end gap-4">
          <div className="flex items-baseline gap-2">
            <span className="text-[56px] leading-none font-semibold tracking-[-0.02em] text-navy-900">
              247
            </span>
            <span className="text-[16px] font-medium text-neutral-500">
              imóveis ativos
            </span>
          </div>
          <button
            type="button"
            className="flex items-center gap-2 rounded-full border border-navy-700 px-6 py-3.5 text-[14px] font-semibold text-navy-900 transition-colors hover:bg-navy-900/5"
          >
            Ver todos os imóveis
            <span aria-hidden className="text-[15px]">
              →
            </span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-5">
        {properties.map((property) => (
          <PropertyCard
            key={property.title}
            property={property}
            imageHeight="h-[200px]"
          />
        ))}
      </div>
    </div>
  )
}

function PropertyCard({
  property,
  className,
  imageHeight,
}: {
  property: Property
  className?: string
  imageHeight: string
}) {
  return (
    <article
      className={`flex w-full flex-col overflow-hidden rounded-2xl border border-cream-300 bg-white ${className ?? ""}`}
    >
      <div
        className={`relative w-full ${imageHeight}`}
        style={{ backgroundImage: property.gradient }}
        aria-hidden
      >
        <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1.5">
          <span className="size-1.5 rounded-full bg-success" aria-hidden />
          <span className="text-[10px] font-semibold tracking-[0.08em] text-navy-900">
            {property.badge}
          </span>
        </div>
        <button
          type="button"
          aria-label={`Guardar ${property.title}`}
          className="absolute top-4 right-4 flex size-9 items-center justify-center rounded-full bg-white text-[16px] text-navy-900"
        >
          ♡
        </button>
      </div>

      <div className="flex flex-col gap-3 p-5">
        <div className="flex items-center justify-between">
          <span className="text-[22px] font-semibold tracking-[-0.005em] text-navy-900 lg:text-[22px]">
            {property.price}
          </span>
          <span className="rounded-md bg-neutral-100 px-2.5 py-1 text-[12px] font-semibold text-navy-900">
            {property.type}
          </span>
        </div>
        <p className="text-[15px] font-medium text-navy-900">
          {property.title}
        </p>
        <p className="text-[13px] text-neutral-500">{property.location}</p>

        <ul className="flex items-center gap-4 border-t border-cream-300 pt-3 text-[13px] whitespace-nowrap">
          <Spec icon="◧" value={property.area} />
          <Spec icon="⌂" value={property.rooms} />
          <Spec icon="◊" value={property.bathrooms} />
        </ul>
      </div>
    </article>
  )
}

function Spec({ icon, value }: { icon: string; value: string }) {
  return (
    <li className="flex items-center gap-1.5">
      <span aria-hidden className="text-neutral-500">
        {icon}
      </span>
      <span className="text-[12px] font-semibold text-navy-900">{value}</span>
    </li>
  )
}