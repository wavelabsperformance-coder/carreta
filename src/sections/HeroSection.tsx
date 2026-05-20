import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { siteData } from '@/data/site-data'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--color-warm)]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-muted) 1px, transparent 0)`,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[var(--color-gold)]"
      />

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.08 }}
        transition={{ duration: 1.5, delay: 0.4 }}
        className="absolute bottom-1/4 -right-48 w-[500px] h-[500px] rounded-full bg-[var(--color-terracotta)]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-background)] border border-[var(--color-border)] mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--color-sage)] animate-pulse" />

              <span className="text-xs font-medium tracking-wide text-[var(--color-muted)]">
                Impacto social em movimento
              </span>
            </motion.div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-[var(--color-foreground)] leading-[1.1] mb-6">
              <span className="block">Saúde, cultura</span>
              <span className="block">e conhecimento</span>
              <span className="block text-[var(--color-gold)]">
                em movimento.
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg lg:text-xl text-[var(--color-muted)] leading-relaxed max-w-lg mb-10">
              {siteData.description} Levamos experiências transformadoras para
              comunidades em todo o Brasil.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#contato"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-medium text-[var(--color-background)] bg-[var(--color-foreground)] rounded-full hover:bg-[var(--color-accent)] transition-colors"
              >
                Solicitar Proposta

                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.a>

              <motion.a
                href={siteData.company.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-medium text-[var(--color-foreground)] border border-[var(--color-border)] rounded-full hover:bg-[var(--color-background)] transition-colors"
              >
                Falar com Equipe
              </motion.a>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-[var(--color-warm-dark)]">
              {/* Hero Image */}
              <img
                src="/images/hero-bg.jpg"
                alt="Cinema itinerante Saint Germain em comunidade brasileira"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-[var(--color-foreground)]/20">
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 mx-auto rounded-full bg-[var(--color-background)]/90 flex items-center justify-center cursor-pointer group shadow-2xl"
                  >
                    <Play
                      size={32}
                      className="text-[var(--color-foreground)] ml-1 group-hover:text-[var(--color-gold)] transition-colors"
                    />
                  </motion.div>

                  <p className="mt-4 text-sm text-[var(--color-background)] font-medium">
                    Assista ao vídeo institucional
                  </p>
                </div>
              </div>

              {/* Decorative overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[var(--color-foreground)]/60 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: 'easeInOut',
          }}
          className="w-6 h-10 rounded-full border-2 border-[var(--color-muted)] flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-muted)]" />
        </motion.div>
      </motion.div>
    </section>
  )
}