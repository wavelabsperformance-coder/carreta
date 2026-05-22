import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Film, ArrowUpRight } from 'lucide-react'

export function EcosystemSection() {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  })

  return (
    <section
      id="ecossistema"
      className="py-20 lg:py-24 bg-[var(--color-warm)]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-14 lg:mb-16"
        >
          <span className="text-xs font-medium tracking-[0.25em] uppercase text-[var(--color-gold)] mb-5 block">
            Cinema Itinerante
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-foreground)] leading-tight mb-6">
            Cultura, conexão e experiências cinematográficas em movimento.
          </h2>

          <p className="text-lg text-[var(--color-muted)] leading-relaxed">
            Um projeto itinerante criado para democratizar o acesso à cultura
            através de experiências audiovisuais de alto impacto em diferentes
            regiões do Brasil.
          </p>
        </motion.div>

        {/* Main Cinema Block */}
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative"
        >
          {/* Large Image */}
          <div className="relative rounded-[32px] mb-10 shadow-2xl overflow-hidden bg-black">
            <img
              src="/images/cine-road.jpeg"
              alt="Cinema itinerante Cine Road 75"
              className="w-full h-auto object-contain"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />

            {/* Floating Tag */}
            <div className="absolute top-6 left-6 px-5 py-2 rounded-full bg-white/90 backdrop-blur-sm text-xs tracking-wide font-medium text-black">
              Cultura & Impacto Social
            </div>
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-12 items-start">
            {/* Left Content */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[var(--color-foreground)] flex items-center justify-center shadow-lg">
                  <Film
                    size={28}
                    className="text-[var(--color-background)]"
                  />
                </div>

                <div>
                  <h3 className="text-3xl lg:text-4xl font-serif font-bold text-[var(--color-foreground)]">
                    Cine Road 75
                  </h3>

                  <p className="text-sm text-[var(--color-muted)]">
                    Cinema itinerante de impacto cultural e social
                  </p>
                </div>
              </div>

              <p className="text-lg lg:text-xl text-[var(--color-muted)] leading-relaxed max-w-3xl mb-8">
                Uma carreta de cinema desenvolvida para transformar espaços em
                experiências cinematográficas completas. Levamos sessões de
                cinema, ações culturais e ativações especiais para cidades,
                comunidades, empresas e eventos, promovendo entretenimento,
                inclusão e impacto social através da arte e da cultura.
              </p>

              {/* CTA */}
              <div>
                <a
                  href="#contato"
                  className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-[var(--color-foreground)] px-7 py-4 text-sm font-medium text-[var(--color-background)] transition-all duration-300 hover:scale-[1.02] hover:bg-[var(--color-gold)] hover:text-[var(--color-foreground)] shadow-xl"
                >
                  Solicitar apresentação institucional

                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </div>

            {/* Features Cards */}
            <div className="grid gap-3">
              {[
                'Cinema itinerante',
                'Experiências audiovisuais imersivas',
                'Projetos culturais e sociais',
                'Eventos corporativos e ativações',
                'Cultura acessível para comunidades',
                'Estrutura móvel premium para eventos',
              ].map((feature) => (
                <motion.div
                  key={feature}
                  whileHover={{ y: -2 }}
                  className="group relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)]/80 backdrop-blur-sm px-5 py-4 transition-all hover:border-[var(--color-gold)]/30 hover:shadow-xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-[var(--color-gold)] shadow-sm" />

                    <span className="text-sm lg:text-base text-[var(--color-foreground)] font-medium leading-relaxed">
                      {feature}
                    </span>
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-[var(--color-gold)]/5 to-transparent pointer-events-none" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  )
}