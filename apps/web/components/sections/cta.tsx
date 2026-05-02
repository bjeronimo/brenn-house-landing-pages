const contacts = [
  { label: "EMAIL", value: "ola@brenn.house" },
  { label: "TELEFONE", value: "+351 912 345 678" },
  { label: "HORÁRIO", value: "Seg–Sáb · 9h–19h" },
]

export function Cta() {
  return (
    <section className="relative w-full overflow-hidden bg-navy-900">
      <div
        aria-hidden
        className="pointer-events-none absolute top-[200px] left-0 size-[380px] rounded-full bg-[radial-gradient(circle,rgba(201,165,124,0.22),transparent_70%)] blur-3xl lg:hidden"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[100px] left-[270px] hidden size-[900px] rounded-full bg-[radial-gradient(circle,rgba(201,165,124,0.15),transparent_70%)] blur-3xl lg:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[300px] -left-[150px] hidden size-[500px] rounded-full bg-[radial-gradient(circle,rgba(201,165,124,0.12),transparent_70%)] blur-3xl lg:block"
      />

      <MobileLayout />
      <DesktopLayout />
    </section>
  )
}

function MobileLayout() {
  return (
    <div className="relative z-10 mx-auto flex w-full max-w-[375px] flex-col gap-8 px-6 py-20 lg:hidden">
      <div className="flex items-center gap-2.5">
        <span aria-hidden className="h-px w-6 bg-gold-500" />
        <span className="text-[11px] font-semibold tracking-[0.16em] text-gold-500">
          PRÓXIMO PASSO
        </span>
      </div>
      <h2 className="text-[56px] leading-none font-semibold tracking-[-0.03em] text-white">
        Vamos
        <br />
        conversar?
      </h2>
      <p className="text-[16px] leading-[1.65] text-gold-300">
        30 minutos. Sem agenda comercial. Avaliamos juntos a melhor estratégia
        para o seu imóvel ou para a sua próxima compra.
      </p>

      <div className="mt-3 flex flex-col gap-4">
        <a
          href="#"
          className="flex h-14 items-center justify-center gap-2 rounded-full bg-gold-500 text-[16px] font-semibold text-navy-900 transition-colors hover:bg-gold-500/90"
        >
          Marcar consultoria
          <span aria-hidden className="text-[17px]">
            →
          </span>
        </a>
        <a
          href="#"
          className="flex h-14 items-center justify-center gap-2.5 rounded-full border border-navy-500 text-[15px] font-medium text-white transition-colors hover:bg-white/[0.05]"
        >
          <span aria-hidden className="text-[16px] text-gold-500">
            ◉
          </span>
          Falar no WhatsApp
        </a>
      </div>

      <ul className="mt-3 flex flex-col gap-2.5 border-t border-navy-700 py-5">
        {contacts.map((contact) => (
          <li
            key={contact.label}
            className="flex items-center justify-between"
          >
            <span className="text-[11px] font-semibold tracking-[0.12em] text-gold-500">
              {contact.label}
            </span>
            <span className="text-[14px] font-medium text-white">
              {contact.value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function DesktopLayout() {
  return (
    <div className="relative z-10 mx-auto hidden w-full max-w-[1440px] flex-col items-center gap-10 px-20 py-40 lg:flex">
      <div className="flex items-center gap-3">
        <span aria-hidden className="h-px w-8 bg-gold-500" />
        <span className="text-[11px] font-semibold tracking-[0.16em] text-gold-500">
          PRÓXIMO PASSO
        </span>
      </div>

      <h2 className="text-center text-[clamp(72px,9vw,120px)] leading-none font-semibold tracking-[-0.03em] text-white">
        Vamos conversar?
      </h2>

      <p className="max-w-[720px] text-center text-[19px] leading-[1.65] text-gold-300">
        30 minutos. Sem agenda comercial. Avaliamos juntos a melhor estratégia
        para o seu imóvel ou para a sua próxima compra.
      </p>

      <div className="mt-2 flex items-center gap-4">
        <a
          href="#"
          className="flex items-center justify-center gap-2 rounded-full bg-gold-500 px-9 py-4 text-[16px] font-semibold text-navy-900 transition-colors hover:bg-gold-500/90"
        >
          Marcar consultoria
          <span aria-hidden className="text-[17px]">
            →
          </span>
        </a>
        <a
          href="#"
          className="flex items-center justify-center gap-2.5 rounded-full border border-navy-500 px-9 py-4 text-[15px] font-medium text-white transition-colors hover:bg-white/[0.05]"
        >
          <span aria-hidden className="text-[16px] text-gold-500">
            ◉
          </span>
          Falar no WhatsApp
        </a>
      </div>

      <ul className="mt-6 flex w-full max-w-[1100px] items-center border-t border-navy-700 py-6">
        {contacts.map((contact, i) => (
          <li
            key={contact.label}
            className={
              i > 0
                ? "flex flex-1 items-center justify-center border-l border-navy-700"
                : "flex flex-1 items-center justify-center"
            }
          >
            <div className="flex flex-col items-center gap-1 text-center">
              <span className="text-[11px] font-semibold tracking-[0.12em] text-gold-500">
                {contact.label}
              </span>
              <span className="text-[16px] font-medium text-white">
                {contact.value}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
