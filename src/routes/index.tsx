import { createFileRoute } from "@tanstack/react-router";

// Placeholder — troque pelo número real de WhatsApp do David (formato: 55 + DDD + número).
const WHATSAPP_URL = "https://wa.me/5531990000000";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Sites & sistema de gerenciamento para oficinas | David Oliveira",
      },
      {
        name: "description",
        content:
          "Criação de sites profissionais para oficinas mecânicas e lojas de autopeças, com sistema de gerenciamento: agenda, orçamentos, controle de peças e histórico de clientes. Belo Horizonte, MG.",
      },
      {
        property: "og:title",
        content: "Sua oficina na internet. Sem dor de cabeça.",
      },
      {
        property: "og:description",
        content:
          "Site profissional + sistema de gestão para oficinas e autopeças. Agenda, orçamentos e clientes em um só lugar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Sua oficina na internet. Sem dor de cabeça.",
      },
      {
        name: "twitter:description",
        content:
          "Site profissional + sistema de gestão para oficinas e autopeças. Chama no WhatsApp.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-asphalt font-body text-frost antialiased selection:bg-amber selection:text-asphalt">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-asphalt/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <div className="flex items-center gap-2.5">
            <div className="grid size-8 place-items-center rounded-md bg-amber font-display text-lg leading-none text-asphalt">
              D
            </div>
            <div className="leading-none">
              <div className="font-display text-lg tracking-tight">
                DAVID OLIVEIRA
              </div>
              <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-frost/40">
                sites &amp; sistema para oficinas
              </div>
            </div>
          </div>
          <nav className="hidden items-center gap-7 font-mono text-[11px] uppercase tracking-[0.15em] text-frost/60 md:flex">
            <a href="#exemplo" className="transition-colors hover:text-frost">
              Exemplo
            </a>
            <a href="#sistema" className="transition-colors hover:text-frost">
              Sistema
            </a>
            <a href="#prova" className="transition-colors hover:text-frost">
              Prova
            </a>
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-md bg-amber px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-asphalt transition-colors hover:bg-amber-2"
          >
            <span className="size-1.5 rounded-full bg-asphalt" /> WhatsApp
          </a>
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
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-6">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-frost/70 backdrop-blur-md">
              <span className="size-1.5 rounded-full bg-amber" /> Minas Partes
              · Expo Minas · BH
            </div>
            <h1
              className="font-display text-[clamp(2.75rem,7vw,5.5rem)] leading-[1.02] tracking-tight text-frost"
              style={{ animation: "rise 0.7s var(--ease) both" }}
            >
              Sua oficina
              <br />
              na internet.
              <span
                className="mt-1 block text-amber"
                style={{ animation: "wipe 0.9s var(--ease) 0.25s both" }}
              >
                Sem dor de cabeça.
              </span>
            </h1>
            <p
              className="mt-6 max-w-[42ch] text-pretty text-lg text-frost/70"
              style={{ animation: "rise 0.7s var(--ease) 0.15s both" }}
            >
              Site profissional + sistema de gestão que organiza agenda,
              orçamentos e clientes. Menos papel, mais carro na rua.
            </p>
            <div
              className="mt-8 flex flex-wrap items-center gap-3"
              style={{ animation: "rise 0.7s var(--ease) 0.25s both" }}
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-md bg-amber px-6 py-3.5 font-semibold text-asphalt transition-colors hover:bg-amber-2"
                style={{ animation: "pulse-ring 2.4s var(--ease) 1.2s infinite" }}
              >
                <span className="text-lg">✆</span> Chamar no WhatsApp
              </a>
              <a
                href="#exemplo"
                className="rounded-md border border-white/15 bg-white/5 px-6 py-3.5 font-medium text-frost backdrop-blur-md transition-colors hover:bg-white/10"
              >
                Ver exemplo
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[11px] uppercase tracking-[0.12em] text-frost/45">
              <span>Entrega em 15 dias</span>
              <span>Domínio incluso</span>
              <span>Suporte por WhatsApp</span>
            </div>
          </div>
          {/* MOCKUP */}
          <div
            id="exemplo"
            className="scroll-mt-24 md:col-span-6"
            style={{ animation: "rise 0.8s var(--ease) 0.3s both" }}
          >
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-amber/10 blur-2xl"></div>
              <div className="relative rounded-2xl border border-white/15 bg-white/10 p-3 backdrop-blur-2xl ring-1 ring-white/10">
                <div className="mb-3 flex items-center gap-1.5 px-1">
                  <span className="size-2.5 rounded-full bg-tool-red/80"></span>
                  <span className="size-2.5 rounded-full bg-amber/80"></span>
                  <span className="size-2.5 rounded-full bg-frost/30"></span>
                  <span className="ml-3 font-mono text-[10px] text-frost/40">
                    oficinadomiguel.com.br
                  </span>
                </div>
                <div className="overflow-hidden rounded-xl bg-frost">
                  <div className="flex items-center justify-between bg-asphalt px-4 py-2.5">
                    <span className="font-display text-sm tracking-tight text-frost">
                      OFICINA DO MIGUEL
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-amber">
                      Agendar
                    </span>
                  </div>
                  <div className="p-4">
                    <div className="mb-3 h-2 w-2/3 rounded bg-steel-2/40"></div>
                    <div className="mb-3 h-2 w-1/2 rounded bg-steel-2/30"></div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="rounded-md bg-amber/90 p-2">
                        <div className="mb-1 h-1.5 w-6 rounded bg-asphalt/40"></div>
                        <div className="h-1.5 w-8 rounded bg-asphalt/25"></div>
                      </div>
                      <div className="rounded-md bg-steel p-2">
                        <div className="mb-1 h-1.5 w-6 rounded bg-frost/40"></div>
                        <div className="h-1.5 w-8 rounded bg-frost/25"></div>
                      </div>
                      <div className="rounded-md bg-steel p-2">
                        <div className="mb-1 h-1.5 w-6 rounded bg-frost/40"></div>
                        <div className="h-1.5 w-8 rounded bg-frost/25"></div>
                      </div>
                    </div>
                    <div className="mt-3 rounded-md border border-line bg-white p-2.5">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="font-mono text-[9px] uppercase tracking-widest text-ink-soft">
                          Agenda de hoje
                        </span>
                        <span className="font-mono text-[9px] text-amber">
                          3 serviços
                        </span>
                      </div>
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between rounded bg-frost-2/60 px-2 py-1">
                          <span className="font-mono text-[9px] text-ink">
                            09:00 · Troca de óleo
                          </span>
                          <span className="size-1.5 rounded-full bg-amber"></span>
                        </div>
                        <div className="flex items-center justify-between rounded bg-frost-2/60 px-2 py-1">
                          <span className="font-mono text-[9px] text-ink">
                            11:30 · Freios
                          </span>
                          <span className="size-1.5 rounded-full bg-amber"></span>
                        </div>
                        <div className="flex items-center justify-between rounded bg-frost-2/60 px-2 py-1">
                          <span className="font-mono text-[9px] text-ink">
                            15:00 · Revisão
                          </span>
                          <span className="size-1.5 rounded-full bg-frost-2"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SISTEMA */}
      <section id="sistema" className="scroll-mt-16 border-t border-white/10 bg-asphalt-2">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="mb-12 max-w-[46ch]">
            <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
              (a) O sistema
            </div>
            <h2 className="font-display text-4xl tracking-tight text-frost md:text-5xl">
              Tudo no lugar, como na sua bancada.
            </h2>
            <p className="mt-4 text-pretty text-frost/60">
              Quatro módulos que tiram o caos do dia a dia da oficina.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-colors hover:border-amber/40">
              <div className="mb-4 grid size-11 place-items-center rounded-lg bg-amber/15 text-amber">
                ◷
              </div>
              <h3 className="font-display text-xl tracking-tight text-frost">
                Agenda de serviços
              </h3>
              <p className="mt-2 text-sm text-pretty text-frost/60">
                Veja o dia inteiro em uma tela. Sem caderno, sem esquecido, sem
                cliente esperando no balcão.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-colors hover:border-amber/40">
              <div className="mb-4 grid size-11 place-items-center rounded-lg bg-amber/15 text-amber">
                ▤
              </div>
              <h3 className="font-display text-xl tracking-tight text-frost">
                Orçamentos rápidos
              </h3>
              <p className="mt-2 text-sm text-pretty text-frost/60">
                Monte o orçamento em minutos e envie pelo WhatsApp. O cliente
                aprova sem sair da loja.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-colors hover:border-amber/40">
              <div className="mb-4 grid size-11 place-items-center rounded-lg bg-amber/15 text-amber">
                ⬡
              </div>
              <h3 className="font-display text-xl tracking-tight text-frost">
                Controle de peças
              </h3>
              <p className="mt-2 text-sm text-pretty text-frost/60">
                Estoque visível, sem peça sobrando nem faltando na hora do
                serviço.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-colors hover:border-amber/40">
              <div className="mb-4 grid size-11 place-items-center rounded-lg bg-amber/15 text-amber">
                ◈
              </div>
              <h3 className="font-display text-xl tracking-tight text-frost">
                Histórico de clientes
              </h3>
              <p className="mt-2 text-sm text-pretty text-frost/60">
                Cada carro, cada serviço, cada peça. O cliente volta sabendo que
                você lembra de tudo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROVA */}
      <section id="prova" className="scroll-mt-16 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
                (b) Prova
              </div>
              <h2 className="font-display text-4xl tracking-tight text-frost md:text-5xl">
                Oficinas que já rodaram.
              </h2>
            </div>
            <div className="hidden font-mono text-[11px] uppercase tracking-[0.15em] text-frost/40 md:block">
              +40 oficinas
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <figure className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.15em] text-frost/40">
                Oficina do Miguel
              </div>
              <blockquote className="text-pretty text-frost/80">
                “Parei de perder cliente pro concorrente. O orçamento sai na
                hora e o cara fecha na hora.”
              </blockquote>
            </figure>
            <figure className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.15em] text-frost/40">
                Autopeças Rocha
              </div>
              <blockquote className="text-pretty text-frost/80">
                “O site trouxe cliente novo todos os dias. O estoque parou de
                sumir no fim do mês.”
              </blockquote>
            </figure>
            <figure className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.15em] text-frost/40">
                Mecânica da Esquina
              </div>
              <blockquote className="text-pretty text-frost/80">
                “A agenda organizada mudou o turno. Ninguém mais briga por quem
                atende primeiro.”
              </blockquote>
            </figure>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section
        id="contato"
        className="relative overflow-hidden border-t border-white/10"
      >
        <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-amber/20 blur-[120px]"></div>
        <div className="relative mx-auto max-w-3xl px-5 py-24 text-center">
          <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
            (c) Vamos falar
          </div>
          <h2 className="font-display text-[clamp(2.5rem,7vw,4.5rem)] leading-[0.95] tracking-tight text-frost">
            Seu carro novo começa
            <br />
            com um site novo.
          </h2>
          <p className="mx-auto mt-5 max-w-[40ch] text-pretty text-frost/60">
            Me chama no WhatsApp. A gente monta seu site e o sistema, e te
            entrega pronto para receber cliente.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-lg bg-amber px-8 py-4 text-lg font-semibold text-asphalt transition-colors hover:bg-amber-2"
            style={{ animation: "pulse-ring 2.4s var(--ease) infinite" }}
          >
            <span className="text-2xl">✆</span> Chamar no WhatsApp
          </a>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.15em] text-frost/40">
            Resposta em minutos · sem compromisso
          </p>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 font-mono text-[10px] uppercase tracking-[0.15em] text-frost/40 md:flex-row">
          <span>David Oliveira · Sites &amp; sistema para oficinas</span>
          <span>© 2026 · Belo Horizonte, MG</span>
        </div>
      </footer>
    </div>
  );
}
