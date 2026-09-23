import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Camera,
  CarFront,
  CircleGauge,
  Clock,
  Cog,
  Disc3,
  Droplets,
  FileCheck2,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Snowflake,
  Star,
  Wrench,
  X,
  Zap,
} from "lucide-react";

// Página de demonstração: site completo de uma oficina fictícia.
// Os botões de contato não levam a lugar nenhum de verdade — abrem um aviso
// explicando o que aconteceria no site real e chamam o David no WhatsApp.
const WHATSAPP_DAVID =
  "https://wa.me/5531971521813?text=" +
  encodeURIComponent(
    "Olá, David! Vi o site de exemplo da Oficina São Cristóvão e quero um site assim.",
  );

export const Route = createFileRoute("/exemplo")({
  head: () => ({
    meta: [
      { title: "Oficina São Cristóvão · Site de demonstração | David Oliveira" },
      {
        name: "description",
        content:
          "Exemplo de site profissional para oficina mecânica, criado por David Oliveira. Oficina fictícia, para demonstração.",
      },
      { name: "robots", content: "noindex" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Barlow:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Exemplo,
});

const servicos = [
  { icone: Droplets, nome: "Troca de óleo", texto: "Óleo e filtros no padrão do fabricante, com registro da próxima troca." },
  { icone: Disc3, nome: "Freios", texto: "Pastilhas, discos e fluido. Você vê a peça gasta antes de trocar." },
  { icone: CircleGauge, nome: "Suspensão", texto: "Amortecedores, bandejas e buchas. Fim do barulho e do carro puxando." },
  { icone: Zap, nome: "Injeção eletrônica", texto: "Scanner de última geração pra achar o defeito sem chute." },
  { icone: Cog, nome: "Motor e câmbio", texto: "Do diagnóstico à retífica, incluindo troca de óleo de câmbio automático." },
  { icone: Snowflake, nome: "Ar-condicionado", texto: "Higienização, carga de gás e conserto do sistema completo." },
  { icone: Wrench, nome: "Revisão completa", texto: "Checklist de mais de 40 itens seguindo o plano da montadora." },
  { icone: CarFront, nome: "Alinhamento e balanceamento", texto: "Equipamento computadorizado, pneu durando mais e direção firme." },
];

const motivos = [
  { icone: FileCheck2, titulo: "Orçamento antes de tudo", texto: "Você recebe o orçamento detalhado no WhatsApp e só aprova se quiser." },
  { icone: ShieldCheck, titulo: "Só mexemos com autorização", texto: "Nenhum serviço extra sem a sua confirmação. Sem susto na hora de pagar." },
  { icone: Camera, titulo: "Fotos do seu carro", texto: "Mandamos foto da peça trocada e do serviço feito. Transparência total." },
  { icone: BadgeCheck, titulo: "Garantia de 90 dias", texto: "Peça e mão de obra com garantia por escrito." },
];

const carros = [
  { foto: "polo", modelo: "VW Polo 2017", servico: "Revisão de 60 mil km" },
  { foto: "fiat500", modelo: "Fiat 500 2014", servico: "Embreagem completa" },
  { foto: "nissan", modelo: "Nissan Juke 2020", servico: "Suspensão dianteira" },
  { foto: "camry", modelo: "Toyota Camry 2021", servico: "Óleo de câmbio automático" },
  { foto: "bmw", modelo: "BMW M4 2018", servico: "Freios de alta performance" },
  { foto: "mustang", modelo: "Ford Mustang GT", servico: "Diagnóstico de injeção" },
];

const passos = [
  { titulo: "Você chama no WhatsApp", texto: "Conta o que o carro está fazendo. A gente responde em minutos." },
  { titulo: "Agendamos o horário", texto: "Você escolhe o melhor dia e traz o carro, sem fila." },
  { titulo: "Diagnóstico e orçamento", texto: "Avaliação gratuita e orçamento com fotos, direto no seu celular." },
  { titulo: "Carro pronto", texto: "Serviço feito, garantia por escrito e aviso da próxima revisão." },
];

const avaliacoes = [
  { nome: "Cliente 1", texto: "Mandaram foto de cada peça antes de trocar. Primeira oficina em que não me senti enganado." },
  { nome: "Cliente 2", texto: "Orçamento pelo WhatsApp em menos de uma hora e o carro ficou pronto no mesmo dia." },
  { nome: "Cliente 3", texto: "Resolveram um barulho na suspensão que outras duas oficinas não acharam." },
];

function Exemplo() {
  // guarda o texto do aviso aberto; null = fechado
  const [aviso, setAviso] = useState<string | null>(null);
  const abrirAviso = (acao: string) => setAviso(acao);

  return (
    <div className="min-h-screen bg-white font-['Barlow',sans-serif] text-[#15181d] antialiased">
      {/* FAIXA DE DEMONSTRAÇÃO */}
      <div className="bg-[#ff7a1a] px-4 py-2 text-center text-[13px] font-semibold text-[#14161a]">
        Site de demonstração · oficina fictícia.{" "}
        <a href={WHATSAPP_DAVID} target="_blank" rel="noreferrer" className="underline underline-offset-2">
          Quero um site assim →
        </a>
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-black/5 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <a href="#topo" className="flex items-center gap-2.5">
            <span className="grid size-10 place-items-center rounded-lg bg-[#d7263d] text-white">
              <Wrench className="size-5" />
            </span>
            <span className="leading-none">
              <span className="block font-['Barlow_Condensed',sans-serif] text-xl font-extrabold uppercase tracking-tight">
                São Cristóvão
              </span>
              <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6b717b]">
                Centro Automotivo
              </span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-semibold text-[#3a3f47] lg:flex">
            <a href="#servicos" className="hover:text-[#d7263d]">Serviços</a>
            <a href="#confianca" className="hover:text-[#d7263d]">Por que nós</a>
            <a href="#como-funciona" className="hover:text-[#d7263d]">Como funciona</a>
            <a href="#contato" className="hover:text-[#d7263d]">Contato</a>
          </nav>
          <div className="flex items-center gap-2">
            <button
              onClick={() => abrirAviso("ligar para a oficina")}
              className="hidden items-center gap-2 rounded-lg border border-black/10 px-4 py-2.5 text-sm font-bold sm:flex"
            >
              <Phone className="size-4" /> (31) 3000-0000
            </button>
            <button
              onClick={() => abrirAviso("agendar pelo WhatsApp")}
              className="flex items-center gap-2 rounded-lg bg-[#1faa53] px-4 py-2.5 text-sm font-bold text-white hover:bg-[#1a9147]"
            >
              <MessageCircle className="size-4" /> Agendar
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="topo" className="relative overflow-hidden bg-[#111418] text-white">
        <img
          src="/exemplo/hero.jpg"
          alt="Mecânico trabalhando no motor de um carro"
          className="absolute inset-0 size-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111418] via-[#111418]/85 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] ring-1 ring-white/20">
              <span className="size-2 rounded-full bg-[#1faa53]" /> Avaliação gratuita
            </span>
            <h1 className="mt-5 font-['Barlow_Condensed',sans-serif] text-[clamp(2.6rem,7vw,4.6rem)] font-extrabold uppercase leading-[0.95] tracking-tight">
              Seu carro de volta à estrada.{" "}
              <span className="text-[#ff4458]">Sem surpresa no orçamento.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/75">
              Mecânica completa para todas as marcas em Belo Horizonte. Diagnóstico
              com scanner, orçamento no WhatsApp e serviço só com a sua autorização.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => abrirAviso("agendar pelo WhatsApp")}
                className="flex items-center justify-center gap-2 rounded-lg bg-[#1faa53] px-7 py-4 text-lg font-bold hover:bg-[#1a9147]"
              >
                <MessageCircle className="size-5" /> Agendar pelo WhatsApp
              </button>
              <a
                href="#servicos"
                className="flex items-center justify-center gap-2 rounded-lg bg-white/10 px-7 py-4 text-lg font-bold ring-1 ring-white/25 hover:bg-white/15"
              >
                Ver serviços <ArrowRight className="size-5" />
              </a>
            </div>
            <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-white/15 pt-6">
              <Numero valor="4,9" legenda="nota no Google" icone={<Star className="size-4 fill-[#ffc53d] text-[#ffc53d]" />} />
              <Numero valor="12" legenda="anos de oficina" />
              <Numero valor="+3 mil" legenda="carros atendidos" />
            </div>
          </div>
        </div>
      </section>

      {/* MARCAS */}
      <div className="border-b border-black/5 bg-[#f4f5f7] px-4 py-4">
        <p className="text-center font-['Barlow_Condensed',sans-serif] text-lg font-bold uppercase tracking-[0.12em] text-[#6b717b]">
          Fiat ◆ Volkswagen ◆ Chevrolet ◆ Toyota ◆ Hyundai ◆ Renault ◆ Honda ◆ Jeep ◆ e todas as marcas
        </p>
      </div>

      {/* SERVIÇOS */}
      <section id="servicos" className="scroll-mt-20 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <Titulo rotulo="Serviços" titulo="Do óleo ao câmbio automático" texto="Tudo o que o seu carro precisa, em um lugar só." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {servicos.map((s) => (
              <div key={s.nome} className="group flex flex-col rounded-xl border border-black/10 p-6 transition hover:-translate-y-1 hover:border-[#d7263d]/40 hover:shadow-lg">
                <span className="grid size-12 place-items-center rounded-lg bg-[#d7263d]/10 text-[#d7263d]">
                  <s.icone className="size-6" />
                </span>
                <h3 className="mt-4 font-['Barlow_Condensed',sans-serif] text-2xl font-bold uppercase leading-tight">{s.nome}</h3>
                <p className="mt-2 flex-1 text-[15px] text-[#4a4f57]">{s.texto}</p>
                <button
                  onClick={() => abrirAviso(`agendar "${s.nome}"`)}
                  className="mt-5 flex items-center gap-1.5 text-sm font-bold text-[#d7263d]"
                >
                  Agendar este serviço <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUE CONFIAR */}
      <section id="confianca" className="scroll-mt-20 bg-[#111418] py-16 text-white md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2">
          <div className="relative">
            <img src="/exemplo/mecanico.jpg" alt="Mecânico da oficina trabalhando" className="aspect-[4/5] w-full rounded-2xl object-cover" loading="lazy" />
            <div className="absolute -bottom-5 left-5 rounded-xl bg-[#d7263d] px-5 py-4 shadow-xl">
              <div className="font-['Barlow_Condensed',sans-serif] text-4xl font-extrabold leading-none">90 dias</div>
              <div className="text-sm font-semibold text-white/85">de garantia por escrito</div>
            </div>
          </div>
          <div>
            <Titulo claro rotulo="Por que nós" titulo="Aqui a manutenção não é no escuro" texto="O medo de todo motorista é pagar por um serviço que não precisava. Por isso a gente trabalha assim:" />
            <div className="mt-8 space-y-5">
              {motivos.map((m) => (
                <div key={m.titulo} className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-white/10 text-[#ff4458]">
                    <m.icone className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold">{m.titulo}</h3>
                    <p className="text-white/65">{m.texto}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CARROS ATENDIDOS */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <Titulo rotulo="Na nossa oficina" titulo="Carros que já passaram por aqui" texto="Do popular ao importado, cada carro tratado como se fosse nosso." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {carros.map((c) => (
              <figure key={c.modelo} className="overflow-hidden rounded-xl border border-black/10">
                <img src={`/exemplo/${c.foto}.jpg`} alt={c.modelo} className="aspect-[4/3] w-full object-cover" loading="lazy" />
                <figcaption className="p-4">
                  <div className="font-['Barlow_Condensed',sans-serif] text-xl font-bold uppercase">{c.modelo}</div>
                  <div className="text-sm text-[#6b717b]">{c.servico}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="scroll-mt-20 bg-[#f4f5f7] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <Titulo rotulo="Como funciona" titulo="Do primeiro contato ao carro pronto" />
          <ol className="mt-10 grid gap-4 md:grid-cols-4">
            {passos.map((p, i) => (
              <li key={p.titulo} className="rounded-xl bg-white p-6 shadow-sm">
                <span className="font-['Barlow_Condensed',sans-serif] text-5xl font-extrabold text-[#d7263d]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-lg font-bold">{p.titulo}</h3>
                <p className="mt-1 text-[15px] text-[#4a4f57]">{p.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* AVALIAÇÕES */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <Titulo rotulo="Avaliações" titulo="Quem já confiou o carro pra gente" />
          <p className="mt-2 text-sm text-[#6b717b]">Avaliações ilustrativas: no site real entram as avaliações do Google da sua oficina.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {avaliacoes.map((a) => (
              <figure key={a.nome} className="rounded-xl border border-black/10 p-6">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-[#ffc53d] text-[#ffc53d]" />
                  ))}
                </div>
                <blockquote className="mt-3 text-[#2a2e35]">“{a.texto}”</blockquote>
                <figcaption className="mt-4 text-sm font-bold text-[#6b717b]">{a.nome}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CHAMADA FINAL */}
      <section className="relative overflow-hidden bg-[#d7263d] text-white">
        <img src="/exemplo/ferramentas.jpg" alt="" className="absolute inset-0 size-full object-cover opacity-15" loading="lazy" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-16 text-center">
          <h2 className="font-['Barlow_Condensed',sans-serif] text-[clamp(2rem,6vw,3.5rem)] font-extrabold uppercase leading-none">
            Traga seu carro. A gente diz o que ele precisa.
          </h2>
          <p className="max-w-xl text-lg text-white/85">Avaliação gratuita e orçamento sem compromisso.</p>
          <button
            onClick={() => abrirAviso("agendar pelo WhatsApp")}
            className="flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-lg font-bold text-[#d7263d]"
          >
            <MessageCircle className="size-5" /> Agendar avaliação gratuita
          </button>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="scroll-mt-20 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2">
          <div>
            <Titulo rotulo="Contato" titulo="Venha nos visitar" />
            <ul className="mt-8 space-y-5">
              <Info icone={<MapPin className="size-5" />} titulo="Endereço">Rua Exemplo, 123 · Belo Horizonte, MG</Info>
              <Info icone={<Clock className="size-5" />} titulo="Horário">Seg a sex: 8h às 18h · Sáb: 8h às 12h</Info>
              <Info icone={<Phone className="size-5" />} titulo="Telefone e WhatsApp">(31) 3000-0000</Info>
            </ul>
            <form
              className="mt-8 space-y-3 rounded-xl bg-[#f4f5f7] p-5"
              onSubmit={(e) => {
                e.preventDefault();
                abrirAviso("enviar o pedido de orçamento");
              }}
            >
              <div className="font-bold">Prefere deixar seus dados?</div>
              <input required placeholder="Seu nome" className="w-full rounded-lg border border-black/10 bg-white px-4 py-3" />
              <input required placeholder="Carro e ano (ex.: Onix 2020)" className="w-full rounded-lg border border-black/10 bg-white px-4 py-3" />
              <input placeholder="O que o carro está fazendo?" className="w-full rounded-lg border border-black/10 bg-white px-4 py-3" />
              <button className="w-full rounded-lg bg-[#d7263d] px-4 py-3 font-bold text-white">Pedir orçamento</button>
            </form>
          </div>
          <iframe
            title="Mapa"
            src="https://www.google.com/maps?q=Belo+Horizonte,+MG&output=embed"
            className="h-[420px] w-full rounded-xl border-0 md:h-full"
            loading="lazy"
          />
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-[#111418] pb-24 text-white/60 md:pb-0">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-center text-sm md:flex-row md:text-left">
          <span>© 2026 São Cristóvão Centro Automotivo · oficina fictícia</span>
          <Link to="/" className="font-semibold text-white hover:text-[#ff7a1a]">
            Site feito por David Oliveira →
          </Link>
        </div>
      </footer>

      {/* WHATSAPP FIXO */}
      <button
        onClick={() => abrirAviso("agendar pelo WhatsApp")}
        aria-label="Agendar pelo WhatsApp"
        className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-[#1faa53] text-white shadow-xl"
      >
        <MessageCircle className="size-7" />
      </button>

      {aviso && <AvisoDemonstracao acao={aviso} fechar={() => setAviso(null)} />}
    </div>
  );
}

function Numero({ valor, legenda, icone }: { valor: string; legenda: string; icone?: ReactNode }) {
  return (
    <div>
      <div className="flex items-center gap-1.5 font-['Barlow_Condensed',sans-serif] text-3xl font-extrabold">
        {valor} {icone}
      </div>
      <div className="text-xs font-semibold uppercase tracking-wide text-white/55">{legenda}</div>
    </div>
  );
}

function Titulo({ rotulo, titulo, texto, claro }: { rotulo: string; titulo: string; texto?: string; claro?: boolean }) {
  return (
    <div className="max-w-2xl">
      <div className="text-sm font-bold uppercase tracking-[0.18em] text-[#d7263d]">{rotulo}</div>
      <h2 className="mt-2 font-['Barlow_Condensed',sans-serif] text-[clamp(2rem,5vw,3.2rem)] font-extrabold uppercase leading-[0.95] tracking-tight">
        {titulo}
      </h2>
      {texto && <p className={`mt-3 text-lg ${claro ? "text-white/70" : "text-[#4a4f57]"}`}>{texto}</p>}
    </div>
  );
}

function Info({ icone, titulo, children }: { icone: ReactNode; titulo: string; children: ReactNode }) {
  return (
    <li className="flex gap-4">
      <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-[#d7263d]/10 text-[#d7263d]">{icone}</span>
      <div>
        <div className="font-bold">{titulo}</div>
        <div className="text-[#4a4f57]">{children}</div>
      </div>
    </li>
  );
}

function AvisoDemonstracao({ acao, fechar }: { acao: string; fechar: () => void }) {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4" onClick={fechar}>
      <div className="relative w-full max-w-md rounded-2xl bg-white p-7 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <button onClick={fechar} aria-label="Fechar" className="absolute right-4 top-4 text-[#6b717b]">
          <X className="size-5" />
        </button>
        <div className="text-sm font-bold uppercase tracking-[0.16em] text-[#ff7a1a]">Site de demonstração</div>
        <h3 className="mt-2 font-['Barlow_Condensed',sans-serif] text-3xl font-extrabold uppercase leading-none">
          Aqui o seu cliente ia {acao}
        </h3>
        <p className="mt-3 text-[#4a4f57]">
          No site da <strong>sua</strong> empresa, esse botão abre o <strong>seu</strong> WhatsApp com a
          mensagem já pronta. O cliente não precisa procurar número nem digitar nada.
        </p>
        <a
          href={WHATSAPP_DAVID}
          target="_blank"
          rel="noreferrer"
          className="mt-6 flex items-center justify-center gap-2 rounded-lg bg-[#1faa53] px-6 py-4 font-bold text-white"
        >
          <MessageCircle className="size-5" /> Quero um site assim
        </a>
        <button onClick={fechar} className="mt-3 w-full text-sm font-semibold text-[#6b717b]">
          Continuar vendo o exemplo
        </button>
      </div>
    </div>
  );
}
