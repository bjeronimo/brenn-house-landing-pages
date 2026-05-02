type LinkColumn = {
  title: string
  links: string[]
}

const empresa: LinkColumn = {
  title: "EMPRESA",
  links: ["Sobre nós", "Como funciona", "Casos de sucesso", "Contacto"],
}

const servicos: LinkColumn = {
  title: "SERVIÇOS",
  links: [
    "Comprar imóvel",
    "Vender imóvel",
    "Avaliação gratuita",
    "Investimento",
  ],
}

const recursos: LinkColumn = {
  title: "RECURSOS",
  links: ["Blog & Insights", "Calculadora crédito", "Guia comprador", "Newsletter"],
}

const socials = [
  { label: "IG", href: "#" },
  { label: "LI", href: "#" },
  { label: "FB", href: "#" },
  { label: "WA", href: "#" },
]

const legalLinks = [
  "Livro de Reclamações",
  "Política de Privacidade",
  "Termos & Condições",
  "Cookies",
]

export function Footer() {
  return (
    <footer className="w-full bg-navy-900">
      <MobileLayout />
      <DesktopLayout />
    </footer>
  )
}

function MobileLayout() {
  return (
    <div className="flex w-full flex-col lg:hidden">
      <div className="flex flex-col gap-8 px-6 py-12">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2.5">
            <span aria-hidden className="size-7 rounded-md bg-gold-500" />
            <span className="text-[18px] font-semibold tracking-[-0.01em] text-white">
              brenn.house
            </span>
          </div>
          <p className="text-[14px] leading-[1.6] text-gold-300">
            Acompanhamos compradores e proprietários no mercado imobiliário
            português com transparência e resultados.
          </p>
        </div>

        <LinkColumnView column={empresa} />
        <LinkColumnView column={servicos} />
        <LinkColumnView column={recursos} />

        <div className="flex flex-col gap-3">
          <h3 className="text-[11px] font-semibold tracking-[0.12em] text-gold-500">
            CONTACTO
          </h3>
          <p className="text-[16px] font-medium text-white">+351 912 345 678</p>
          <p className="text-[14px] text-white">ola@brenn.house</p>
          <p className="text-[14px] text-white">Av. da Liberdade 200, Lisboa</p>
          <SocialIcons />
        </div>
      </div>

      <div className="flex flex-col gap-3 border-t border-navy-700 p-6">
        <ComplianceBadge />
        <ul className="flex flex-col gap-2 text-[12px] text-white">
          {legalLinks.map((link) => (
            <li key={link}>
              <a href="#" className="transition-opacity hover:opacity-80">
                {link}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-[11px] text-white">
          © 2026 brenn.house — Todos os direitos reservados
        </p>
      </div>
    </div>
  )
}

function DesktopLayout() {
  return (
    <div className="mx-auto hidden w-full max-w-[1440px] flex-col lg:flex">
      <div className="flex w-full items-start gap-20 px-20 py-20">
        <div className="flex w-[320px] shrink-0 flex-col gap-5">
          <div className="flex items-center gap-2.5">
            <span aria-hidden className="size-7 rounded-md bg-gold-500" />
            <span className="text-[18px] font-semibold tracking-[-0.01em] text-white">
              brenn.house
            </span>
          </div>
          <p className="text-[14px] leading-[1.6] text-gold-300">
            Consultoria imobiliária boutique para compradores e proprietários
            exigentes em Portugal.
          </p>
          <SocialIcons />
        </div>

        <div className="flex w-[200px] shrink-0">
          <LinkColumnView column={empresa} desktop />
        </div>
        <div className="flex w-[200px] shrink-0">
          <LinkColumnView column={servicos} desktop />
        </div>

        <div className="flex w-[280px] shrink-0 flex-col gap-5">
          <h3 className="text-[11px] font-semibold tracking-[0.12em] text-gold-500">
            CONTACTO
          </h3>
          <div className="flex flex-col gap-3 text-white">
            <p className="text-[16px] font-medium">+351 912 345 678</p>
            <p className="text-[14px]">ola@brenn.house</p>
            <p className="text-[14px] leading-[1.6]">
              Av. da Liberdade 200
              <br />
              1250-147 Lisboa
            </p>
          </div>
        </div>
      </div>

      <div className="flex w-full items-center justify-between border-t border-navy-700 px-20 py-6">
        <div className="flex items-center gap-6">
          <ComplianceBadge />
          <a
            href="#"
            className="inline-flex items-center gap-1.5 rounded-md border border-navy-500 px-2.5 py-1 text-[11px] font-medium text-white transition-colors hover:bg-white/[0.05]"
          >
            <span aria-hidden>📖</span>
            Livro de Reclamações
          </a>
        </div>
        <div className="flex items-center gap-6 text-[12px] text-white">
          <a href="#" className="transition-opacity hover:opacity-80">
            Privacidade
          </a>
          <a href="#" className="transition-opacity hover:opacity-80">
            Termos
          </a>
          <a href="#" className="transition-opacity hover:opacity-80">
            Cookies
          </a>
          <span aria-hidden className="h-3 w-px bg-navy-500" />
          <span>© 2026 brenn.house</span>
        </div>
      </div>
    </div>
  )
}

function LinkColumnView({
  column,
  desktop,
}: {
  column: LinkColumn
  desktop?: boolean
}) {
  return (
    <div className="flex w-full flex-col gap-4 lg:gap-5">
      <h3 className="text-[11px] font-semibold tracking-[0.12em] text-gold-500">
        {column.title}
      </h3>
      <ul
        className={
          desktop
            ? "flex flex-col gap-3.5 text-[14px] text-white"
            : "flex flex-col gap-3 text-[14px] text-white"
        }
      >
        {column.links.map((link) => (
          <li key={link}>
            <a href="#" className="transition-opacity hover:opacity-80">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function SocialIcons() {
  return (
    <ul className="flex gap-2 py-2">
      {socials.map((social) => (
        <li key={social.label}>
          <a
            href={social.href}
            aria-label={social.label}
            className="flex size-10 items-center justify-center rounded-full bg-navy-700 text-[11px] font-semibold text-gold-500 transition-colors hover:bg-navy-700/70"
          >
            {social.label}
          </a>
        </li>
      ))}
    </ul>
  )
}

function ComplianceBadge() {
  return (
    <div className="flex items-center gap-2">
      <span className="text-[12px] font-semibold text-gold-500">AMI 18472</span>
      <span aria-hidden className="h-3 w-px bg-navy-500" />
      <span className="text-[10px] font-semibold tracking-[0.08em] text-gold-300">
        LICENÇA OFICIAL
      </span>
    </div>
  )
}
