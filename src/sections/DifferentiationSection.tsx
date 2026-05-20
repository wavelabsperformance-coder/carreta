import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Film, Heart, ArrowRight } from 'lucide-react'

const differentiators = [
  {
    category: 'Cultura & Educação',
    title: 'Cine Road 75',
    icon: Film,
    color: 'var(--color-gold)',
    points: [
      'Cinema itinerante de alta qualidade',
      'Programação educativa e cultural',
      'Experiências imersivas para todas as idades',
      'Parcerias com escolas e instituições',
      'Eventos corporativos personalizados',
    ],
  },
  {
    category: 'Saúde & Impacto Social',
    title: 'Saúde para Todos',
    icon: Heart,
    color: 'var(--color-terracotta)',
    points: [
      'Atendimentos médicos itinerantes',
      'Campanhas de vacinação e prevenção',
      'Ações sociais em comunidades vulneráveis',
      'Parcerias com prefeituras e governos',
      'Projetos de saúde corporativa',
    ],
  },
]

export function DifferentiationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-24 lg:py-32 bg-[var(--color-background)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16 lg:mb-24"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-[var(--color-gold)] mb-4 block">
            Diferenciação
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-foreground)] leading-tight">
            O que nos torna únicos
          </h2>
        </motion.div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {differentiators.map((item, index) => {
            const Icon = item.icon
            
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="relative group"
              >
                <div className="relative bg-[var(--color-card)] rounded-3xl p-8 lg:p-10 border border-[var(--color-border)] hover:shadow-xl transition-shadow duration-500">
                  {/* Category Tag */}
                  <div 
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
                    style={{ backgroundColor: `color-mix(in srgb, ${item.color} 15%, transparent)` }}
                  >
                    <Icon size={14} style={{ color: item.color }} />
                    <span className="text-xs font-medium" style={{ color: item.color }}>
                      {item.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl lg:text-3xl font-serif font-bold text-[var(--color-foreground)] mb-8">
                    {item.title}
                  </h3>

                  {/* Points */}
                  <ul className="space-y-4">
                    {item.points.map((point, pointIndex) => (
                      <motion.li
                        key={point}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.15 + pointIndex * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <span 
                          className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="text-[var(--color-muted)]">{point}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="#contato"
                    className="mt-8 group/link inline-flex items-center gap-2 text-sm font-medium text-[var(--color-foreground)]"
                  >
                    Solicitar proposta
                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>

                  {/* Decorative Corner */}
                  <div 
                    className="absolute top-0 right-0 w-32 h-32 opacity-5 rounded-bl-full"
                    style={{ backgroundColor: item.color }}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
