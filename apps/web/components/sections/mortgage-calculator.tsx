"use client"

import { useMemo, useState } from "react"

const eur = new Intl.NumberFormat("pt-PT", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
})

function formatYears(years: number) {
  return years === 1 ? "1 ano" : `${years} anos`
}

function calculateMonthlyPayment(
  financed: number,
  annualRatePercent: number,
  years: number
) {
  const months = years * 12
  if (months === 0) return 0
  const monthlyRate = annualRatePercent / 100 / 12
  if (monthlyRate === 0) return financed / months
  const factor = Math.pow(1 + monthlyRate, months)
  return (financed * monthlyRate * factor) / (factor - 1)
}

export function MortgageCalculator() {
  const [price, setPrice] = useState(350_000)
  const [downPayment, setDownPayment] = useState(70_000)
  const [years, setYears] = useState(30)
  const [rate, setRate] = useState(3.5)

  const cappedDown = Math.min(downPayment, price)
  const downPercent = price > 0 ? Math.round((cappedDown / price) * 100) : 0

  const { monthly, financed, totalPaid, totalInterest } = useMemo(() => {
    const financed = price - cappedDown
    const monthly = calculateMonthlyPayment(financed, rate, years)
    const totalPaid = monthly * years * 12
    const totalInterest = totalPaid - financed
    return { monthly, financed, totalPaid, totalInterest }
  }, [price, cappedDown, rate, years])

  const sliders = (
    <div className="flex flex-col gap-5 lg:gap-7">
      <Slider
        label="VALOR DO IMÓVEL"
        value={price}
        min={50_000}
        max={1_500_000}
        step={5_000}
        onChange={(v) => setPrice(v)}
        formatted={eur.format(price)}
      />
      <Slider
        label="ENTRADA"
        value={cappedDown}
        min={0}
        max={price}
        step={5_000}
        onChange={(v) => setDownPayment(v)}
        formatted={`${eur.format(cappedDown)} · ${downPercent}%`}
        hint="Mínimo recomendado: 10%"
      />
      <Slider
        label="PRAZO"
        value={years}
        min={5}
        max={40}
        step={1}
        onChange={(v) => setYears(v)}
        formatted={formatYears(years)}
      />
      <Slider
        label="TAXA NOMINAL"
        value={rate}
        min={0.5}
        max={8}
        step={0.1}
        onChange={(v) => setRate(Number(v.toFixed(1)))}
        formatted={`${rate.toFixed(1).replace(".", ",")}%`}
        hint="Taxa de referência atual"
      />
    </div>
  )

  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-[375px] flex-col gap-7 px-6 py-16 lg:hidden">
        <Header compact />
        <div className="rounded-2xl border border-cream-300 bg-cream-100 px-6 py-7">
          {sliders}
        </div>
        <Output
          compact
          monthly={monthly}
          financed={financed}
          totalPaid={totalPaid}
          totalInterest={totalInterest}
        />
        <button
          type="button"
          className="flex h-14 items-center justify-center gap-2 rounded-full border border-navy-700 px-6 text-[14px] font-semibold text-navy-900 transition-colors hover:bg-navy-900/5"
        >
          Pedir simulação real
          <span aria-hidden className="text-[15px]">
            →
          </span>
        </button>
      </div>

      <div className="mx-auto hidden w-full max-w-[1440px] flex-col gap-14 px-20 py-30 lg:flex">
        <Header />
        <div className="flex items-start gap-8">
          <div className="flex w-[608px] shrink-0 rounded-[20px] border border-cream-300 bg-cream-100 p-10">
            {sliders}
          </div>
          <Output
            monthly={monthly}
            financed={financed}
            totalPaid={totalPaid}
            totalInterest={totalInterest}
          />
        </div>
      </div>
    </section>
  )
}

function Header({ compact }: { compact?: boolean }) {
  return (
    <div className="flex flex-col gap-3 lg:gap-4">
      <div className="flex items-center gap-2.5 lg:gap-3">
        <span aria-hidden className={`h-px bg-gold-700 ${compact ? "w-6" : "w-8"}`} />
        <span className="text-[11px] font-semibold tracking-[0.12em] text-gold-700">
          FERRAMENTA
        </span>
      </div>
      {compact ? (
        <h2 className="text-[26px] leading-[1.15] font-semibold tracking-[-0.01em] text-navy-900">
          Quanto vai pagar
          <br />
          por mês?
        </h2>
      ) : (
        <h2 className="text-[44px] leading-[1.1] font-semibold tracking-[-0.015em] text-navy-900">
          Quanto vai pagar por mês?
        </h2>
      )}
      <p
        className={
          compact
            ? "text-[14px] leading-[1.6] text-neutral-500"
            : "max-w-[820px] text-[17px] leading-[1.6] text-neutral-500"
        }
      >
        Simule a sua mensalidade em segundos. Resultado indicativo — para uma
        simulação oficial precisa de pré-aprovação bancária.
      </p>
    </div>
  )
}

function Slider({
  label,
  value,
  min,
  max,
  step,
  onChange,
  formatted,
  hint,
}: {
  label: string
  value: number
  min: number
  max: number
  step: number
  onChange: (value: number) => void
  formatted: string
  hint?: string
}) {
  const percent = max > min ? ((value - min) / (max - min)) * 100 : 0
  const id = `slider-${label.toLowerCase().replace(/\s+/g, "-")}`
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <label
          htmlFor={id}
          className="text-[11px] font-semibold tracking-[0.12em] text-gold-700"
        >
          {label}
        </label>
        <span className="text-[16px] font-semibold tracking-[-0.005em] text-navy-900 lg:text-[18px]">
          {formatted}
        </span>
      </div>
      <div className="relative h-5">
        <span
          aria-hidden
          className="absolute top-1/2 h-1.5 w-full -translate-y-1/2 rounded-full bg-cream-300"
        />
        <span
          aria-hidden
          className="absolute top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-navy-700"
          style={{ width: `${percent}%` }}
        />
        <input
          id={id}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(event) => onChange(Number(event.target.value))}
          className="absolute inset-0 h-full w-full cursor-pointer appearance-none bg-transparent focus:outline-none [&::-moz-range-thumb]:size-5 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-[3px] [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:bg-navy-700 [&::-webkit-slider-thumb]:size-5 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-[3px] [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:bg-navy-700"
        />
      </div>
      {hint && (
        <p className="text-[11px] text-neutral-500 lg:text-[12px]">{hint}</p>
      )}
    </div>
  )
}

function Output({
  monthly,
  financed,
  totalPaid,
  totalInterest,
  compact,
}: {
  monthly: number
  financed: number
  totalPaid: number
  totalInterest: number
  compact?: boolean
}) {
  return (
    <div
      className={
        compact
          ? "flex flex-col gap-4 rounded-2xl bg-navy-700 px-6 py-8"
          : "relative flex w-[640px] shrink-0 flex-col gap-7 overflow-hidden rounded-[20px] bg-navy-700 p-12"
      }
    >
      {!compact && (
        <div
          aria-hidden
          className="pointer-events-none absolute -top-[100px] left-[350px] size-[400px] rounded-full bg-[radial-gradient(circle,rgba(201,165,124,0.22),transparent_70%)] blur-3xl"
        />
      )}
      <div className="relative flex items-center gap-2">
        <span aria-hidden className="size-1.5 rounded-full bg-gold-500" />
        <span
          className={
            compact
              ? "text-[10px] font-semibold tracking-[0.12em] text-gold-500"
              : "text-[11px] font-semibold tracking-[0.12em] text-gold-500"
          }
        >
          MENSALIDADE ESTIMADA
        </span>
      </div>
      <div className="relative flex items-baseline gap-2 lg:gap-3">
        <span
          className={
            compact
              ? "text-[56px] leading-none font-semibold tracking-[-0.03em] text-white"
              : "text-[96px] leading-none font-semibold tracking-[-0.04em] text-white"
          }
        >
          {eur.format(Math.round(monthly))}
        </span>
        <span
          className={
            compact
              ? "text-[16px] font-medium text-gold-300"
              : "text-[20px] font-medium text-gold-300"
          }
        >
          /mês
        </span>
      </div>
      <div className="relative flex flex-col gap-2 border-t border-navy-500 py-4 lg:gap-2.5 lg:py-6">
        <OutputRow label="Valor financiado" value={eur.format(Math.round(financed))} compact={compact} />
        <OutputRow label="Total a pagar" value={eur.format(Math.round(totalPaid))} compact={compact} />
        <OutputRow label="Juros totais" value={eur.format(Math.round(totalInterest))} compact={compact} />
      </div>
      {!compact && (
        <button
          type="button"
          className="relative flex h-14 items-center justify-center gap-2 rounded-full bg-gold-500 text-[15px] font-semibold text-navy-900 transition-colors hover:bg-gold-500/90"
        >
          Pedir simulação real
          <span aria-hidden className="text-[16px]">
            →
          </span>
        </button>
      )}
    </div>
  )
}

function OutputRow({
  label,
  value,
  compact,
}: {
  label: string
  value: string
  compact?: boolean
}) {
  return (
    <div className="flex items-center justify-between">
      <span
        className={
          compact
            ? "text-[13px] text-gold-300"
            : "text-[14px] text-gold-300"
        }
      >
        {label}
      </span>
      <span
        className={
          compact
            ? "text-[14px] font-semibold text-white"
            : "text-[16px] font-semibold text-white"
        }
      >
        {value}
      </span>
    </div>
  )
}
