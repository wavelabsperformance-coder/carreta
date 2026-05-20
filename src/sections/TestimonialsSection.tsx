import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { Quote } from 'lucide-react'
import { siteData } from '@/data/site-data'

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  // Duplicate testimonials for infinite scroll effect
  const duplicatedTestimonials = [...siteData.testimonials, ...siteData.testimonials]

  return (
    <section className="py-24 lg:py-32 bg-[var(--color-background)] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-[var(--color-gold)] mb-4 block">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-foreground)] leading-tight">
            O que dizem nossos parceiros
          </h2>
        </motion.div>
      </div>

      {/* Infinite Scroll Carousel */}
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--color-background)] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--color-background)] to-transparent z-10" />

        {/* Scrolling container */}
        <div className="flex animate-scroll">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${index}`}
              className="flex-shrink-0 w-[400px] mx-4"
            >
              <div className="bg-[var(--color-card)] rounded-2xl p-8 border border-[var(--color-border)] h-full">
                {/* Quote Icon */}
                <div className="w-10 h-10 rounded-full bg-[var(--color-warm)] flex items-center justify-center mb-6">
                  <Quote size={18} className="text-[var(--color-gold)]" />
                </div>

                {/* Content */}
                <p className="text-[var(--color-foreground)] leading-relaxed mb-6">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-warm-dark)] flex items-center justify-center">
                    <span className="text-sm font-medium text-[var(--color-foreground)]">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[var(--color-foreground)]">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-[var(--color-muted)]">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
