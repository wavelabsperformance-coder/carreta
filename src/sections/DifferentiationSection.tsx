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
    <section className="overflow-hidden bg-[var(--color-background)] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-4 block text-xs font-medium uppercase tracking-[0.25em] text-[var(--color-gold)]">
            Cultura & Educação
          </span>

          <h2 className="mb-6 text-3xl font-serif font-bold leading-tight text-[var(--color-foreground)] sm:text-4xl lg:text-5xl">
            Cine Road 75
          </h2>

          <p className="text-lg leading-relaxed text-[var(--color-muted)]">
            Experiências cinematográficas itinerantes que unem cultura,
            tecnologia e conexão humana em qualquer lugar.
          </p>
        </motion.div>

        {/* Main Block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="overflow-hidden rounded-[40px] border border-[var(--color-border)] bg-[var(--color-card)] shadow-[0_20px_80px_rgba(0,0,0,0.08)]"
        >
          {/* Image */}
          <div className="relative border-b border-[var(--color-border)] bg-[var(--color-card)]">
            {/* 
              Aqui a imagem respeita TOTALMENTE a proporção original.
              Sem crop.
              Sem distorção.
              Sem barras pretas forçadas.
            */}
            <img
              src="/images/gallery-2.jpeg"
              alt="Experiência cinematográfica itinerante"
              className="w-full h-auto object-contain"
            />

            {/* Overlay suave */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

            {/* Glow cinematográfico */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,200,0,0.06),transparent_65%)]" />

            {/* Floating Badge */}
            <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 backdrop-blur-md shadow-lg">
              <Film
                size={14}
                className="text-[var(--color-gold)]"
              />

              <span className="text-xs font-medium tracking-wide text-black">
                Cultura & Educação
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 lg:p-10">
            {/* Description */}
            <div className="mb-10 max-w-3xl">
              <h3 className="mb-5 text-2xl font-serif font-bold leading-tight text-[var(--color-foreground)] lg:text-[2rem]">
                Transforme seu espaço em uma experiência cultural inesquecível.
              </h3>

              <p className="text-base leading-relaxed text-[var(--color-muted)] lg:text-lg">
                O Cine Road 75 leva experiências cinematográficas itinerantes
                para cidades, empresas, escolas e comunidades através de uma
                estrutura móvel premium criada para gerar conexão,
                entretenimento e impacto cultural em qualquer lugar.
              </p>
            </div>

            {/* Features Grid */}
            <div className="mb-12 grid gap-5 md:grid-cols-2">
              {points.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.45,
                    delay: 0.25 + index * 0.05,
                  }}
                  whileHover={{ y: -3 }}
                  className="group relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] px-6 py-5 transition-all duration-300 hover:border-[var(--color-gold)]/30 hover:shadow-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[var(--color-gold)]" />

                    <span className="text-sm leading-relaxed text-[var(--color-foreground)] lg:text-[15px]">
                      {point}
                    </span>
                  </div>

                  {/* Hover Glow */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[var(--color-gold)]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div>
              <a
                href="#contato"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-[var(--color-foreground)] px-7 py-4 text-sm font-medium text-[var(--color-background)] shadow-xl transition-all duration-300 hover:scale-[1.02] hover:bg-[var(--color-gold)] hover:text-[var(--color-foreground)]"
              >
                Solicitar apresentação institucional

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}