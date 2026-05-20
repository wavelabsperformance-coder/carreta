import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function ManifestoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="manifesto" className="py-24 lg:py-32 bg-[var(--color-background)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div ref={ref} className="max-w-4xl mx-auto">
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-12"
          >
            <div className="h-px flex-1 bg-[var(--color-border)]" />
            <span className="text-xs font-medium tracking-widest uppercase text-[var(--color-muted)]">
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-foreground)] leading-tight text-center">
              Acreditamos que <span className="text-[var(--color-gold)]">saúde</span> e{' '}
              <span className="text-[var(--color-gold)]">cultura</span> não devem ter{' '}
              <span className="italic">fronteiras geográficas</span>.
            </h2>

            <div className="grid md:grid-cols-2 gap-8 pt-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-[var(--color-muted)] leading-relaxed"
              >
                O Saint Germain Itinerante nasceu da convicção de que o acesso ao cuidado 
                e ao conhecimento é um direito de todos. Por isso, levamos estruturas completas 
                até as comunidades que mais precisam, quebrando as barreiras que separam 
                pessoas de oportunidades.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg text-[var(--color-muted)] leading-relaxed"
              >
                Nossa missão vai além de atendimentos e exibições. Construímos pontes entre 
                o possível e o necessário, entre a intenção e a transformação real. Cada cidade 
                visitada é uma história de impacto, cada vida tocada é a razão de existirmos.
              </motion.p>
            </div>
          </motion.div>

          {/* Visual Divider */}
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
            <p className="text-2xl lg:text-3xl font-serif italic text-[var(--color-foreground)]">
              &ldquo;Onde há necessidade, há caminho. Onde há caminho, estamos nós.&rdquo;
            </p>
            <footer className="mt-4 text-sm text-[var(--color-muted)]">
              — Saint Germain Itinerante
            </footer>
          </motion.blockquote>
        </div>
      </div>
    </section>
  )
}
