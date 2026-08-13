import Image from "next/image";
import { CheckCircle2, Flower2 } from "lucide-react";
import { hero, heroMobile, whatsappLink } from "@/data/content";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden">
      {/* Mobile / tablet: foto de corpo inteiro com o texto sobreposto na faixa
          clara inferior. O fundo #F9F3EE é a cor para a qual a própria imagem
          esmaece, então a emenda entre foto e seção fica invisível. */}
      <div className="bg-[#F9F3EE] lg:hidden">
        <Image
          src={heroMobile.image.src}
          alt={heroMobile.image.alt}
          width={941}
          height={1672}
          priority
          sizes="100vw"
          className="h-auto w-full"
        />

        {/* -30% da largura sobe o texto até ~83% da altura da foto, já na área
            esmaecida; como a margem é proporcional à largura (assim como a
            altura da imagem), o alinhamento se mantém em qualquer tela. */}
        <Reveal
          direction="up"
          className="relative -mt-[66%] px-2 pb-5 text-center"
        >
          <p className="font-lato text-[13px] font-semibold uppercase tracking-[2.3px] text-muted">
            {heroMobile.eyebrow}
          </p>
          <h1 className="mt-3 font-playfair text-4xl font-semibold text-ink">
            {heroMobile.title}
          </h1>

          <div className="mx-auto mt-5 flex w-full max-w-[220px] items-center justify-center gap-3">
            <span className="h-px flex-1 bg-gold-bright/40" />
            <Flower2 size={18} className="shrink-0 text-gold-bright" />
            <span className="h-px flex-1 bg-gold-bright/40" />
          </div>

          {/* Como o bloco é puxado para cima pela margem negativa, crescer
              aqui embaixo não desalinha o topo sobre a foto. */}
          <p className="mx-auto mt-5 max-w-sm font-heebo text-[15px] font-light leading-relaxed text-ink/75">
            {heroMobile.description}
          </p>

          <div className="mt-7 flex justify-center">
            <Button href={whatsappLink()}>{heroMobile.ctaLabel}</Button>
          </div>
        </Reveal>
      </div>

      {/* Desktop: foto de fundo em tela cheia com texto sobreposto. */}
      <div className="relative hidden bg-white lg:block">
        <div className="absolute inset-0">
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[75%_30%]"
          />
        </div>

        <div className="relative mx-auto flex max-w-[1140px] flex-col gap-6 px-6 pb-[380px] pt-28">
          <Reveal direction="up">
            <p className="font-lato text-[15px] font-semibold uppercase tracking-[2.3px] text-gold">
              {hero.eyebrow}
            </p>
          </Reveal>

          <Reveal direction="up" delay={100}>
            {/* Saudação e nome em linhas próprias. Inline, "Olá, sou Andreza
                Costa" não cabe em 56px na largura da coluna e quebrava no meio
                do nome, deixando só "Costa" na segunda linha. */}
            <h1 className="max-w-2xl font-mosseta text-[56px] leading-[1.15] text-ink">
              <span className="block">{hero.greeting}</span>
              <span className="block text-gold-bright">{hero.name}</span>
            </h1>
          </Reveal>

          <Reveal direction="up" delay={200}>
            <p className="max-w-md font-heebo text-base font-normal leading-relaxed text-ink">
              {hero.subtitle}
            </p>
          </Reveal>

          <Reveal direction="up" delay={300}>
            <ul className="flex flex-col gap-3">
              {hero.checklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-gold-bright"
                  />
                  <span className="font-heebo text-[15px] font-medium text-ink">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Só o respiro lateral encolhe (px-8 -> px-5); o corpo do texto
              continua em 15px. */}
          <Reveal direction="up" delay={400} className="flex flex-wrap gap-4">
            <Button href={whatsappLink()} variant="outline" className="!px-5">
              {hero.ctaLabel}
            </Button>
            <Button href={hero.ctaSecondaryHref} className="!px-5">
              {hero.ctaSecondaryLabel}
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
