import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Film, Heart, ArrowUpRight } from 'lucide-react'
import { siteData } from '@/data/site-data'

const iconMap = {
  Film: Film,
  Heart: Heart,
}

const imageMap = {
  'cine-road': '/images/cine-road.jpeg',
  'saude-para-todos': '/images/saude.jpeg',
}

export function EcosystemSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="ecossistema" className="py-24 lg:py-32 bg-[var(--color-warm)]">
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
            Ecossistema
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-foreground)] leading-tight mb-6">
            Duas vertentes, um propósito: transformar vidas.
          </h2>
          <p className="text-lg text-[var(--color-muted)] leading-relaxed">
            O Saint Germain Itinerante opera através de duas linhas complementares, 
            cada uma com sua especialidade, mas unidas pelo mesmo compromisso com o impacto social.
          </p>
        </motion.div>

        {/* Ecosystem Cards */}
        <div className="space-y-8">
          {siteData.ecosystem.map((item, index) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap]
            const isEven = index % 2 === 0

            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
                className={`relative grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  isEven ? '' : 'lg:grid-flow-dense'
                }`}
              >
                {/* Visual */}
                <div 
                  className={`relative aspect-[16/10] rounded-3xl overflow-hidden bg-[var(--color-warm-dark)] ${
                    isEven ? '' : 'lg:col-start-2'
                  }`}
                >
                  <img 
                    src={imageMap[item.id as keyof typeof imageMap]} 
                    alt={item.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  
                  {/* Corner Tag */}
                  <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-[var(--color-background)]/90 backdrop-blur-sm text-xs font-medium tracking-wide text-[var(--color-foreground)]">
                    {item.id === 'cine-road' ? 'Cultura & Educação' : 'Saúde & Social'}
                  </div>
                </div>

                {/* Content */}
                <div className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[var(--color-foreground)] flex items-center justify-center">
                      <IconComponent size={24} className="text-[var(--color-background)]" />
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-serif font-bold text-[var(--color-foreground)]">
                        {item.name}
                      </h3>
                      <p className="text-sm text-[var(--color-muted)]">{item.tagline}</p>
                    </div>
                  </div>

                  <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-8">
                    {item.description}
                  </p>

                  {/* Features */}
                  <ul className="grid grid-cols-2 gap-3 mb-8">
                    {item.features.map((feature) => (
                      <li 
                        key={feature} 
                        className="flex items-center gap-2 text-sm text-[var(--color-foreground)]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contato"
                    className="group inline-flex items-center gap-2 text-sm font-medium text-[var(--color-foreground)] hover:text-[var(--color-gold)] transition-colors"
                  >
                    Saiba mais sobre o {item.name}
                    <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
