"use client"

const benefits = [
  "Avaliação técnica baseada em 5+ comparáveis na zona",
  "Análise de mercado da sua tipologia",
  "Estratégia de venda personalizada",
  "Plano de marketing orçamentado",
]

export function Lead() {
  return (
    <section className="relative w-full overflow-hidden bg-navy-900">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[100px] left-[80px] size-[380px] rounded-full bg-[radial-gradient(circle,rgba(201,165,124,0.22),transparent_70%)] blur-3xl lg:hidden"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[150px] left-[900px] hidden size-[700px] rounded-full bg-[radial-gradient(circle,rgba(201,165,124,0.2),transparent_70%)] blur-3xl lg:block"
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
    <div className="relative z-10 mx-auto flex w-full max-w-[375px] flex-col gap-7 px-6 py-16 lg:hidden">
      <div className="flex flex-col gap-3">
        <EyePill />
        <h2 className="text-[36px] leading-[1.05] font-semibold tracking-[-0.02em] text-white">
          Saiba quanto vale
          <br />
          o seu imóvel —
          <br />
          gratuitamente.
        </h2>
        <p className="text-[15px] leading-[1.6] text-gold-300">
          Avaliação técnica com análise comparativa de mercado, valor estimado e
          estratégia recomendada. Sem compromisso.
        </p>
      </div>

      <LeadForm
        title="Receba a avaliação"
        submitLabel="Receber avaliação"
        size="compact"
      />
    </div>
  )
}

function DesktopLayout() {
  return (
    <div className="relative z-10 mx-auto hidden w-full max-w-[1440px] px-20 py-30 lg:block">
      <div className="flex w-full items-start justify-center gap-20">
        <div className="flex w-[600px] shrink-0 flex-col gap-8">
          <EyePill wide />
          <h2 className="text-[64px] leading-none font-semibold tracking-[-0.03em] text-white">
            Saiba quanto vale
            <br />
            o seu imóvel —
            <br />
            gratuitamente.
          </h2>
          <p className="max-w-[540px] text-[17px] leading-[1.65] text-gold-300">
            Avaliação técnica com análise comparativa de mercado, valor estimado
            e estratégia recomendada. Sem compromisso.
          </p>
          <ul className="flex flex-col gap-3.5 py-2">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3.5">
                <span
                  aria-hidden
                  className="flex size-7 items-center justify-center rounded-full bg-navy-700 text-[13px] font-bold text-gold-500"
                >
                  ✓
                </span>
                <span className="text-[15px] font-medium text-white">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <LeadForm
          title="Receba a avaliação"
          subtitle="Resposta em 24h, por uma pessoa real."
          submitLabel="Receber avaliação gratuita"
          size="full"
        />
      </div>
    </div>
  )
}

function EyePill({ wide }: { wide?: boolean }) {
  return (
    <div className="inline-flex w-fit items-center gap-2 rounded-full border border-gold-500 bg-white/[0.08] px-3.5 py-2">
      <span aria-hidden className="size-1.5 rounded-full bg-gold-500" />
      <span
        className={`font-semibold text-white ${wide ? "text-[11px] tracking-[0.12em]" : "text-[10px] tracking-[0.12em]"}`}
      >
        RELATÓRIO EM 24 HORAS
      </span>
    </div>
  )
}

function LeadForm({
  title,
  subtitle,
  submitLabel,
  size,
}: {
  title: string
  subtitle?: string
  submitLabel: string
  size: "compact" | "full"
}) {
  const isFull = size === "full"
  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className={
        isFull
          ? "flex w-[480px] shrink-0 flex-col gap-5 rounded-[20px] bg-white px-9 py-10 shadow-[0_30px_60px_0_rgba(0,0,0,0.4)]"
          : "flex w-full flex-col gap-4 rounded-2xl bg-white px-6 py-7 shadow-[0_20px_40px_0_rgba(0,0,0,0.3)]"
      }
    >
      <div className="flex flex-col gap-1.5">
        <h3
          className={
            isFull
              ? "text-[24px] font-semibold tracking-[-0.01em] text-navy-900"
              : "text-[18px] font-semibold tracking-[-0.005em] text-navy-900"
          }
        >
          {title}
        </h3>
        {subtitle && (
          <p className="text-[14px] text-neutral-500">{subtitle}</p>
        )}
      </div>

      {isFull && <span aria-hidden className="h-px w-full bg-cream-300" />}

      <Field
        label="MORADA DO IMÓVEL"
        name="morada"
        placeholder="Rua das Flores 12, 1200-195"
        autoComplete="street-address"
      />

      <div className="flex gap-2.5">
        <SelectField
          label="TIPOLOGIA"
          name="tipologia"
          options={["T0", "T1", "T2", "T3", "T4", "T5+"]}
          defaultValue="T3"
        />
        <Field
          label="ÁREA (M²)"
          name="area"
          type="number"
          placeholder="120"
          inputMode="numeric"
        />
      </div>

      <Field
        label="EMAIL"
        name="email"
        type="email"
        placeholder="maria@exemplo.pt"
        autoComplete="email"
      />

      <Field
        label="TELEFONE"
        name="telefone"
        type="tel"
        placeholder="+351 ..."
        autoComplete="tel"
      />

      <button
        type="submit"
        className="mt-1 flex h-14 items-center justify-center gap-2 rounded-full bg-navy-700 text-[15px] font-semibold text-white transition-colors hover:bg-navy-700/90"
      >
        {submitLabel}
        <span aria-hidden className="text-[16px] text-gold-500">
          →
        </span>
      </button>

      <p className="text-center text-[11px] text-neutral-500">
        100% gratuito · Sem spam · Resposta em 24h
      </p>
    </form>
  )
}

type FieldProps = {
  label: string
  name: string
  placeholder: string
  type?: string
  autoComplete?: string
  inputMode?: "text" | "numeric" | "tel" | "email"
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  autoComplete,
  inputMode,
}: FieldProps) {
  const id = `lead-${name}`
  return (
    <div className="flex flex-col gap-1 rounded-[10px] border border-cream-300 px-4 py-3 focus-within:border-gold-500">
      <label
        htmlFor={id}
        className="text-[10px] font-semibold tracking-[0.12em] text-gold-700"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={inputMode}
        className="bg-transparent text-[15px] font-medium text-navy-900 placeholder:font-normal placeholder:text-neutral-500 focus:outline-none"
      />
    </div>
  )
}

function SelectField({
  label,
  name,
  options,
  defaultValue,
}: {
  label: string
  name: string
  options: string[]
  defaultValue: string
}) {
  const id = `lead-${name}`
  return (
    <div className="flex flex-1 flex-col gap-1 rounded-[10px] border border-cream-300 px-3.5 py-3 focus-within:border-gold-500">
      <label
        htmlFor={id}
        className="text-[10px] font-semibold tracking-[0.12em] text-gold-700"
      >
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          name={name}
          defaultValue={defaultValue}
          className="w-full appearance-none bg-transparent pr-5 text-[15px] font-medium text-navy-900 focus:outline-none"
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <span
          aria-hidden
          className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 text-[11px] text-neutral-500"
        >
          ▾
        </span>
      </div>
    </div>
  )
}
