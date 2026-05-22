import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Film, ArrowRight } from 'lucide-react'

const points = [
  'Cinema itinerante com estrutura premium e experiência audiovisual de alto padrão',
  'Curadoria cultural e programação educativa para escolas, empresas e comunidades',
  'Sessões imersivas que encantam crianças, jovens e adultos',
  'Projetos que incentivam aprendizado, inclusão e acesso à cultura',
  'Parcerias estratégicas com instituições de ensino, prefeituras e organizações',
  'Eventos corporativos personalizados com experiências marcantes e memoráveis',
]

export function DifferentiationSection() {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  })

  return (
    <section className="py-20 lg:py-24 bg-[var(--color-background)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-xs font-medium tracking-[0.25em] uppercase text-[var(--color-gold)] mb-4 block">
            Cultura & Educação
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-foreground)] leading-tight mb-6">
            Cine Road 75
          </h2>

          <p className="text-lg text-[var(--color-muted)] leading-relaxed">
            Experiências cinematográficas itinerantes que unem cultura,
            tecnologia e conexão humana em qualquer lugar.
          </p>
        </motion.div>

        {/* Main Block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="overflow-hidden rounded-[36px] border border-[var(--color-border)] bg-[var(--color-card)] shadow-xl"
        >
          {/* Image Horizontal */}
          <div className="relative w-full h-[320px] lg:h-[500px] overflow-hidden">
            <img
              src="/images/gallery-2.jpeg"
              alt="Experiência cinematográfica itinerante"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

            {/* Floating Badge */}
            <div className="absolute top-6 left-6 inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-sm px-4 py-2">
              <Film
                size={14}
                className="text-[var(--color-gold)]"
              />

              <span className="text-xs font-medium text-black tracking-wide">
                Cultura & Educação
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 lg:p-14">
            {/* Description */}
            <div className="max-w-4xl mb-12">
              <h3 className="text-2xl lg:text-3xl font-serif font-bold text-[var(--color-foreground)] mb-5">
                Transforme seu espaço em uma experiência cultural inesquecível.
              </h3>

              <p className="text-lg text-[var(--color-muted)] leading-relaxed">
                O Cine Road 75 leva experiências cinematográficas itinerantes
                para cidades, empresas, escolas e comunidades através de uma
                estrutura móvel premium criada para gerar conexão, entretenimento
                e impacto cultural em qualquer lugar.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-5 mb-12">
              {points.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: 0.3 + index * 0.05,
                  }}
                  whileHover={{ y: -2 }}
                  className="group relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] px-6 py-5 transition-all hover:border-[var(--color-gold)]/30 hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-2 w-2 h-2 rounded-full bg-[var(--color-gold)] flex-shrink-0" />

                    <span className="text-sm lg:text-base text-[var(--color-foreground)] leading-relaxed">
                      {point}
                    </span>
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-[var(--color-gold)]/5 to-transparent pointer-events-none" />
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div>
              <a
                href="#contato"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-[var(--color-foreground)] px-7 py-4 text-sm font-medium text-[var(--color-background)] transition-all duration-300 hover:scale-[1.02] hover:bg-[var(--color-gold)] hover:text-[var(--color-foreground)] shadow-xl"
              >
                Solicitar apresentação institucional

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}