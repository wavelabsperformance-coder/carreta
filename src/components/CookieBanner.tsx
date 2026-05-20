import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Cookie } from 'lucide-react'

const CONSENT_KEY = 'saint-germain-cookie-consent'

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY)
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted')
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, 'declined')
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-40 p-4 md:p-6"
        >
          <div className="mx-auto max-w-4xl">
            <div className="relative bg-[var(--color-card)] rounded-2xl shadow-2xl border border-[var(--color-border)] p-6 md:p-8">
              <button
                onClick={handleDecline}
                className="absolute top-4 right-4 text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors"
                aria-label="Fechar"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-warm)] flex items-center justify-center">
                  <Cookie size={24} className="text-[var(--color-gold)]" />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-serif font-semibold text-[var(--color-foreground)] mb-2">
                    Política de Cookies
                  </h3>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                    Utilizamos cookies para melhorar sua experiência de navegação, personalizar conteúdo e analisar nosso tráfego. 
                    Ao continuar navegando, você concorda com nossa{' '}
                    <a href="/cookies" className="underline hover:text-[var(--color-foreground)]">
                      Política de Cookies
                    </a>{' '}
                    e{' '}
                    <a href="/lgpd" className="underline hover:text-[var(--color-foreground)]">
                      LGPD
                    </a>.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <button
                    onClick={handleDecline}
                    className="px-5 py-2.5 text-sm font-medium text-[var(--color-foreground)] border border-[var(--color-border)] rounded-full hover:bg-[var(--color-secondary)] transition-colors"
                  >
                    Recusar
                  </button>
                  <button
                    onClick={handleAccept}
                    className="px-5 py-2.5 text-sm font-medium text-[var(--color-background)] bg-[var(--color-foreground)] rounded-full hover:bg-[var(--color-accent)] transition-colors"
                  >
                    Aceitar Todos
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
