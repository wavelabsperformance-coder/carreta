import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Building2, 
  Briefcase, 
  GraduationCap, 
  Users, 
  MapPin, 
  Calendar 
} from 'lucide-react'
import { siteData } from '@/data/site-data'

const iconMap = {
  'Prefeituras': Building2,
  'Empresas': Briefcase,
  'Escolas': GraduationCap,
  'Instituições': Users,
  'Comunidades': MapPin,
  'Eventos': Calendar,
}

export function ApplicationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="aplicacoes" className="py-24 lg:py-32 bg-[var(--color-foreground)] text-[var(--color-background)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16 lg:mb-24"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-[var(--color-gold)] mb-4 block">
            Aplicações
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold leading-tight mb-6">
            Para quem é o Saint Germain Itinerante
          </h2>
          <p className="text-lg text-[var(--color-muted-foreground)] leading-relaxed">
            Atendemos diferentes segmentos com soluções personalizadas para cada necessidade, 
            sempre mantendo nosso compromisso com a qualidade e o impacto social.
          </p>
        </motion.div>

        {/* Applications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {siteData.applications.map((app, index) => {
            const Icon = iconMap[app.title as keyof typeof iconMap]
            
            return (
              <motion.article
                key={app.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
                className="group relative"
              >
                <div className="relative p-8 rounded-2xl border border-[var(--color-muted)]/20 bg-[var(--color-muted)]/5 hover:bg-[var(--color-muted)]/10 transition-colors duration-300">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-gold)]/10 flex items-center justify-center mb-6 group-hover:bg-[var(--color-gold)]/20 transition-colors">
                    <Icon size={24} className="text-[var(--color-gold)]" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-serif font-semibold mb-3">
                    {app.title}
                  </h3>
                  <p className="text-[var(--color-muted-foreground)] text-sm leading-relaxed">
                    {app.description}
                  </p>

                  {/* Hover indicator */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--color-gold)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl" />
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
