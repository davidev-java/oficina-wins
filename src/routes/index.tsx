import { createFileRoute } from "@tanstack/react-router";

const WHATSAPP_URL =
  "https://wa.me/5531971521813?text=" +
  encodeURIComponent("Olá, David! Vi seu site e quero saber mais sobre um site para a minha empresa.");

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Sites para oficinas, autopeças e lojas de carro | David Oliveira",
      },
      {
        name: "description",
        content:
          "Site profissional e Perfil no Google para oficinas mecânicas, autopeças e lojas de carro. Seja encontrado por quem procura no Google, não só no Instagram. Belo Horizonte, MG.",
      },
      {
        property: "og:title",
        content: "Seu negócio automotivo no Google. Não só no Instagram.",
      },
      {
        property: "og:description",
        content:
          "Site profissional para oficinas, autopeças e lojas de carro. Quem procura no Google encontra você e chama no WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Seu negócio automotivo no Google. Não só no Instagram.",
      },
      {
        name: "twitter:description",
        content:
          "Site profissional para oficinas, autopeças e lojas de carro. Chama no WhatsApp.",
      },
    ],
  }),
  component: Index,
});

const segmentos = ["Oficinas", "Autopeças", "Lojas de carros", "Estética automotiva", "Som e acessórios"];

// resultados de busca simulados, usados na comparação "só Instagram" x "com site"
const concorrentes = ["Centro Automotivo Alfa", "Auto Peças Beta", "Mecânica Gama"];

const ofertas = [
  {
    icone: "◧",
    para: "Para todos",
    titulo: "Site profissional",
    texto:
      "Sua empresa com endereço próprio na internet: serviços ou produtos, fotos, horário, mapa e botão de WhatsApp. Abre rápido no celular.",
  },
  {
    icone: "◎",
    para: "Para todos",
    titulo: "Perfil no Google",
    texto:
      "Configuro o seu Perfil da Empresa no Google (o que aparece no mapa) com fotos, horário, link do site e WhatsApp.",
  },
  {
    icone: "▦",
    para: "Autopeças e lojas de carros",
    titulo: "Catálogo online",
    texto:
      "Peças ou carros com foto e botão “consultar no WhatsApp”. O cliente vê o que você tem antes de sair de casa.",
  },
  {
    icone: "◷",
    para: "Oficinas",
    titulo: "Sistema de ordens de serviço",
    texto:
      "Clientes, veículos e ordens de serviço em um só lugar. Sem caderno, sem serviço esquecido.",
  },
];

const pacote = [
  "Site profissional com a cara da sua empresa",
  "Perfil da Empresa no Google configurado",
  "Plaquinha de avaliação no balcão (aproximação + QR code)",
  "Botão de WhatsApp com mensagem pronta",
  "Entrega em até 15 dias",
];

const manutencao = [
  "Hospedagem do site",
  "Domínio próprio (.com.br)",
  "Pequenas alterações: horário, fotos, serviços",
  "Suporte pelo WhatsApp",
];

const passos = [
  { titulo: "Você me chama no WhatsApp", texto: "Conta sobre a sua empresa e o que você precisa." },
  { titulo: "Eu monto tudo", texto: "Você me manda fotos e informações, eu cuido do resto." },
  { titulo: "Você aparece no Google", texto: "Site no ar e cliente chegando direto no seu WhatsApp." },
];

function Index() {
  return (
    <div className="min-h-screen bg-asphalt font-body text-frost antialiased selection:bg-amber selection:text-asphalt">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-asphalt/70 backdrop-blur-xl">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-5">
          <div className="flex min-w-0 items-center gap-2.5">
            <img src="/logo.png" alt="Logo David Oliveira" className="size-8 shrink-0 rounded-md" />
            <div className="min-w-0 leading-none">
              <div className="truncate font-display text-base tracking-tight sm:text-lg">
                DAVID OLIVEIRA
              </div>
              <div className="truncate font-mono text-[9px] uppercase tracking-[0.2em] text-frost/40">
                sites para o setor automotivo
              </div>
            </div>
          </div>
          <div className="flex items-center gap-7">
            <nav className="hidden items-center gap-7 font-mono text-[11px] uppercase tracking-[0.15em] text-frost/60 md:flex">
              <a href="#google" className="transition-colors hover:text-frost">
                Google
              </a>
              <a href="#servicos" className="transition-colors hover:text-frost">
                Serviços
              </a>
              <a href="#preco" className="transition-colors hover:text-frost">
                Preço
              </a>
              <a href="/exemplo" className="transition-colors hover:text-frost">
                Exemplo
              </a>
            </nav>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="flex shrink-0 items-center gap-2 rounded-md bg-amber px-3 py-2 font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-asphalt transition-colors hover:bg-amber-2 sm:px-4 sm:text-[11px]"
            >
              <span className="size-1.5 rounded-full bg-asphalt" /> WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-amber/15 blur-[120px]"></div>
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        ></div>
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-5 md:grid-cols-12 md:gap-12 md:py-24">
          <div className="md:col-span-6">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-frost/70 backdrop-blur-md">
              <span className="size-1.5 rounded-full bg-amber" /> Minas Partes
              · Expo Minas · BH
            </div>
            <h1
              className="font-display text-[clamp(2.6rem,6.5vw,5rem)] leading-[1.02] tracking-tight text-frost"
              style={{ animation: "rise 0.7s var(--ease) both" }}
            >
              Seu negócio automotivo no Google.
              <span
                className="mt-1 block text-amber"
                style={{ animation: "wipe 0.9s var(--ease) 0.25s both" }}
              >
                Não só no Instagram.
              </span>
            </h1>
            <p
              className="mt-6 max-w-[44ch] text-pretty text-lg text-frost/70"
              style={{ animation: "rise 0.7s var(--ease) 0.15s both" }}
            >
              Site profissional para oficinas, autopeças e lojas de carro. Quem
              procura no Google encontra você e chama direto no seu WhatsApp.
            </p>
            <div
              className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center"
              style={{ animation: "rise 0.7s var(--ease) 0.25s both" }}
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-md bg-amber px-6 py-3.5 font-semibold text-asphalt transition-colors hover:bg-amber-2"
                style={{ animation: "pulse-ring 2.4s var(--ease) 1.2s infinite" }}
              >
                <span className="text-lg">✆</span> Chamar no WhatsApp
              </a>
              <a
                href="/exemplo"
                className="rounded-md border border-white/15 bg-white/5 px-6 py-3.5 text-center font-medium text-frost backdrop-blur-md transition-colors hover:bg-white/10"
              >
                Ver exemplo
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2" style={{ animation: "rise 0.7s var(--ease) 0.35s both" }}>
              {segmentos.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-frost/70"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.12em] text-frost/45 sm:gap-x-8 sm:gap-y-3 sm:text-[11px]">
              <span>Entrega em 15 dias</span>
              <span>Domínio incluso</span>
              <span>Suporte por WhatsApp</span>
            </div>
          </div>

          {/* EXEMPLO REAL */}
          <a
            href="/exemplo"
            className="group block md:col-span-6"
            style={{ animation: "rise 0.8s var(--ease) 0.3s both" }}
          >
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-amber/10 blur-2xl"></div>
              <div className="relative rounded-2xl border border-white/15 bg-white/10 p-3 backdrop-blur-2xl ring-1 ring-white/10 transition-transform duration-300 group-hover:-translate-y-1">
                <div className="mb-3 flex items-center gap-1.5 px-1">
                  <span className="size-2.5 rounded-full bg-tool-red/80"></span>
                  <span className="size-2.5 rounded-full bg-amber/80"></span>
                  <span className="size-2.5 rounded-full bg-frost/30"></span>
                  <span className="ml-3 truncate font-mono text-[10px] text-frost/40">
                    oficinasaocristovao.com.br
                  </span>
                </div>
                <img
                  src="/exemplo-print.jpg"
                  alt="Site de exemplo da Oficina São Cristóvão"
                  className="w-full rounded-xl"
                />
              </div>
              <div className="relative mt-4 text-center font-mono text-[11px] uppercase tracking-[0.15em] text-frost/50 transition-colors group-hover:text-amber">
                Exemplo pronto · toque para navegar →
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* GOOGLE */}
      <section id="google" className="scroll-mt-16 border-t border-white/10 bg-asphalt-2">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-5 md:py-20">
          <div className="mb-8 max-w-[52ch] md:mb-12">
            <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
              (a) O problema
            </div>
            <h2 className="font-display text-3xl tracking-tight text-frost sm:text-4xl md:text-5xl">
              Seu cliente procura no Google. E não te acha.
            </h2>
            <p className="mt-4 text-pretty text-frost/60">
              Quem está com o carro parado não abre o Instagram: digita “oficina
              perto de mim” ou “autopeças BH” no Google e chama o primeiro que
              aparece. Perfil só no Instagram não entra nessa busca.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Busca titulo="Só com Instagram" destaque={false} />
            <Busca titulo="Com site e Perfil no Google" destaque />
          </div>

          <p className="mt-10 text-center font-display text-[clamp(1.6rem,4.5vw,2.75rem)] leading-tight tracking-tight text-frost">
            Sua empresa aparece no Google com{" "}
            <span className="text-amber">site, mapa e WhatsApp.</span>
          </p>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="scroll-mt-16 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-5 md:py-20">
          <div className="mb-8 max-w-[46ch] md:mb-12">
            <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
              (b) O que eu faço
            </div>
            <h2 className="font-display text-3xl tracking-tight text-frost sm:text-4xl md:text-5xl">
              Do jeito que o seu negócio precisa.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {ofertas.map((o) => (
              <div
                key={o.titulo}
                className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-colors hover:border-amber/40"
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div className="grid size-11 place-items-center rounded-lg bg-amber/15 text-amber">
                    {o.icone}
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-frost/40">
                    {o.para}
                  </span>
                </div>
                <h3 className="font-display text-xl tracking-tight text-frost">{o.titulo}</h3>
                <p className="mt-2 text-sm text-pretty text-frost/60">{o.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREÇO */}
      <section id="preco" className="scroll-mt-16 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-5 md:py-20">
          <div className="mb-8 max-w-[46ch] md:mb-12">
            <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
              (c) Preço
            </div>
            <h2 className="font-display text-3xl tracking-tight text-frost sm:text-4xl md:text-5xl">
              Preço de lançamento na Minas Parts.
            </h2>
            <p className="mt-4 text-pretty text-frost/60">
              Válido só para os 3 primeiros clientes. Depois volta ao preço normal.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-5">
            <div className="relative rounded-2xl border border-amber/50 bg-amber/5 p-6 sm:p-8 md:col-span-3">
              <span className="absolute -top-3 left-6 rounded-full bg-amber px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.15em] text-asphalt">
                Só 3 vagas
              </span>
              <h3 className="font-display text-2xl tracking-tight text-frost">Pacote completo</h3>
              <div className="mt-4 flex flex-wrap items-end gap-x-4 gap-y-1">
                <span className="font-display text-5xl text-amber sm:text-6xl">R$ 600</span>
                <span className="pb-2 text-lg text-frost/40 line-through">R$ 1.200</span>
              </div>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.15em] text-frost/50">
                pagamento único
              </div>
              <ul className="mt-6 space-y-2.5 text-frost/80">
                {pacote.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-amber">✓</span> {item}
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-8 flex items-center justify-center gap-2 rounded-lg bg-amber px-6 py-3.5 font-semibold text-asphalt transition-colors hover:bg-amber-2"
              >
                <span className="text-lg">✆</span> Quero uma das 3 vagas
              </a>
            </div>

            <div className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 md:col-span-2">
              <h3 className="font-display text-2xl tracking-tight text-frost">Manutenção mensal</h3>
              <div className="mt-4 flex flex-wrap items-end gap-x-4 gap-y-1">
                <span className="font-display text-5xl text-frost sm:text-6xl">R$ 49</span>
                <span className="pb-2 text-lg text-frost/40 line-through">R$ 79</span>
              </div>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.15em] text-frost/50">
                por mês
              </div>
              <ul className="mt-6 space-y-2.5 text-frost/80">
                {manutencao.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-amber">✓</span> {item}
                  </li>
                ))}
              </ul>
              <p className="mt-auto pt-6 text-sm text-frost/45">
                Catálogo online e sistema de ordens de serviço: valor sob consulta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="border-t border-white/10 bg-asphalt-2">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-5 md:py-20">
          <div className="mb-8 max-w-[46ch] md:mb-12">
            <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
              (d) Como funciona
            </div>
            <h2 className="font-display text-3xl tracking-tight text-frost sm:text-4xl md:text-5xl">
              Você cuida dos carros. Eu cuido da internet.
            </h2>
          </div>
          <ol className="grid gap-4 md:grid-cols-3">
            {passos.map((p, i) => (
              <li key={p.titulo} className="rounded-xl border border-white/10 bg-white/5 p-6">
                <div className="font-display text-4xl text-amber">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="mt-3 font-display text-xl tracking-tight text-frost">{p.titulo}</h3>
                <p className="mt-2 text-sm text-pretty text-frost/60">{p.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA FINAL */}
      <section
        id="contato"
        className="relative overflow-hidden border-t border-white/10"
      >
        <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-amber/20 blur-[120px]"></div>
        <div className="relative mx-auto max-w-3xl px-4 py-16 text-center sm:px-5 md:py-24">
          <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
            (e) Vamos falar
          </div>
          <h2 className="font-display text-[clamp(2rem,8vw,4.5rem)] leading-[1.02] tracking-tight text-frost">
            Seu cliente está procurando
            <br />
            no Google agora.
          </h2>
          <p className="mx-auto mt-5 max-w-[40ch] text-pretty text-frost/60">
            Me chama no WhatsApp. Eu monto o seu site e te entrego pronto para
            receber cliente.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-lg bg-amber px-8 py-4 text-lg font-semibold text-asphalt transition-colors hover:bg-amber-2 sm:w-auto"
            style={{ animation: "pulse-ring 2.4s var(--ease) infinite" }}
          >
            <span className="text-2xl">✆</span> Chamar no WhatsApp
          </a>

          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.15em] text-frost/40">
            Resposta em minutos · sem compromisso
          </p>
        </div>
      </section>

      <footer className="border-t border-white/10 pb-24 md:pb-0">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-center font-mono text-[10px] uppercase tracking-[0.15em] text-frost/40 sm:px-5 md:flex-row md:text-left">
          <span>David Oliveira · Sites para o setor automotivo</span>
          <span>© 2026 · Belo Horizonte, MG</span>
        </div>
      </footer>

      {/* BARRA FIXA MOBILE */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-asphalt/90 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-xl md:hidden">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-amber px-6 py-3.5 font-semibold text-asphalt"
        >
          <span className="text-lg">✆</span> Chamar no WhatsApp
        </a>
      </div>
    </div>
  );
}

// Simulação de uma busca no Google: sem site a empresa não aparece; com site ela
// aparece com nota, site, rota e WhatsApp.
function Busca({ titulo, destaque }: { titulo: string; destaque: boolean }) {
  return (
    <div
      className={`rounded-xl border p-5 ${destaque ? "border-amber/50 bg-amber/5" : "border-white/10 bg-white/5"}`}
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className={`font-display text-lg tracking-tight ${destaque ? "text-amber" : "text-frost/70"}`}>
          {titulo}
        </span>
        <span className={`font-mono text-[10px] uppercase tracking-[0.15em] ${destaque ? "text-amber" : "text-tool-red"}`}>
          {destaque ? "✓ encontrado" : "✕ invisível"}
        </span>
      </div>
      <div className="overflow-hidden rounded-lg bg-white text-ink">
        <div className="flex items-center gap-2 border-b border-line px-4 py-3">
          <span className="text-sm text-ink-soft">⌕</span>
          <span className="text-sm">autopeças bh</span>
        </div>
        <div className="space-y-2 p-3">
          {destaque && (
            <div className="rounded-md border-2 border-amber bg-amber/10 p-3">
              <div className="flex items-center justify-between gap-2">
                <span className="font-semibold">Sua Empresa</span>
                <span className="text-xs text-ink-soft">★ 4,9 (120)</span>
              </div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {["Site", "Rota", "WhatsApp"].map((b) => (
                  <span key={b} className="rounded-full bg-asphalt px-2.5 py-0.5 text-[11px] font-medium text-frost">
                    {b}
                  </span>
                ))}
              </div>
            </div>
          )}
          {concorrentes.map((c) => (
            <div key={c} className="rounded-md bg-frost p-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-medium">{c}</span>
                <span className="text-xs text-ink-soft">★ 4,6</span>
              </div>
              <div className="mt-1.5 h-1.5 w-2/3 rounded bg-line"></div>
            </div>
          ))}
          {!destaque && (
            <div className="rounded-md border border-dashed border-tool-red/50 p-3 text-center text-sm text-tool-red">
              Sua empresa não aparece aqui
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
