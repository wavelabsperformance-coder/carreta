import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function ManifestoSection() {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  })

  return (
    <section
      id="manifesto"
      className="bg-[var(--color-background)] py-24 lg:py-32 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          ref={ref}
          className="mx-auto max-w-4xl"
        >
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12 flex items-center gap-4"
          >
            <div className="h-px flex-1 bg-[var(--color-border)]" />

            <span className="text-xs font-medium uppercase tracking-[0.25em] text-[var(--color-muted)]">
              Manifesto
            </span>

            <div className="h-px flex-1 bg-[var(--color-border)]" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h2 className="text-center text-3xl font-serif font-bold leading-tight text-[var(--color-foreground)] sm:text-4xl lg:text-5xl">
              Acreditamos que o{' '}
              <span className="text-[var(--color-gold)]">
                cinema
              </span>{' '}
              e a{' '}
              <span className="text-[var(--color-gold)]">
                cultura
              </span>{' '}
              não devem ter{' '}
              <span className="italic">
                fronteiras geográficas
              </span>
              .
            </h2>

            <div className="grid gap-8 pt-8 md:grid-cols-2">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg leading-relaxed text-[var(--color-muted)]"
              >
                O Cine Road 75 nasceu da convicção de que o acesso à cultura,
                ao entretenimento e às experiências cinematográficas deve
                alcançar todas as pessoas. Por isso, levamos estruturas móveis
                premium para cidades, escolas, empresas e comunidades,
                aproximando pessoas de experiências que inspiram, conectam e
                transformam.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg leading-relaxed text-[var(--color-muted)]"
              >
                Nossa missão vai além de exibir filmes. Criamos experiências
                culturais capazes de gerar impacto emocional, social e humano.
                Cada sessão realizada representa um encontro entre histórias,
                pessoas e possibilidades, fortalecendo conexões através da arte,
                da cultura e do cinema itinerante.
              </motion.p>
            </div>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 h-px bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent"
          />

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <p className="text-2xl font-serif italic text-[var(--color-foreground)] lg:text-3xl">
              &ldquo;Onde existir uma história para ser vivida, o cinema pode
              chegar.&rdquo;
            </p>

            <footer className="mt-4 text-sm text-[var(--color-muted)]">
              — Cine Road 75
            </footer>
          </motion.blockquote>
        </div>
      </div>
    </section>
  )
}