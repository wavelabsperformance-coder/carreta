import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/utils/cn'

const navLinks = [
  { href: '#manifesto', label: 'Manifesto' },
  { href: '#ecossistema', label: 'Ecossistema' },
  { href: '#aplicacoes', label: 'Aplicações' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#contato', label: 'Contato' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled 
          ? 'bg-[var(--color-background)]/90 backdrop-blur-xl shadow-sm' 
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <nav className="flex items-center justify-between py-5">
          {/* Logo */}
          <a 
            href="#" 
            className="group flex items-center gap-3"
          >
            <div className="relative h-10 w-10 overflow-hidden rounded-full bg-[var(--color-foreground)]">
              <div className="absolute inset-0 flex items-center justify-center text-[var(--color-background)] font-serif font-bold text-lg">
                SG
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="block text-sm font-medium tracking-wide text-[var(--color-foreground)]">
                Saint Germain
              </span>
              <span className="block text-xs text-[var(--color-muted)] tracking-widest uppercase">
                Itinerante
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="link-underline text-sm font-medium text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contato"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-[var(--color-background)] bg-[var(--color-foreground)] rounded-full hover:bg-[var(--color-accent)] transition-colors"
            >
              Solicitar Proposta
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-[var(--color-foreground)]"
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[var(--color-background)] border-t border-[var(--color-border)]"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-lg font-medium text-[var(--color-foreground)] hover:text-[var(--color-gold)] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={() => setIsMenuOpen(false)}
                className="mt-6 block w-full text-center px-5 py-3 text-sm font-medium text-[var(--color-background)] bg-[var(--color-foreground)] rounded-full"
              >
                Solicitar Proposta
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
