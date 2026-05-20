import { Mail, Phone, MapPin } from 'lucide-react'
import { siteData } from '@/data/site-data'

const footerLinks = {
  institucional: [
    { label: 'Manifesto', href: '#manifesto' },
    { label: 'Ecossistema', href: '#ecossistema' },
    { label: 'Aplicações', href: '#aplicacoes' },
    { label: 'Galeria', href: '#galeria' },
  ],
  legal: [
    { label: 'Política de Privacidade', href: '/privacidade' },
    { label: 'Termos de Uso', href: '/termos' },
    { label: 'Política de Cookies', href: '/cookies' },
    { label: 'LGPD', href: '/lgpd' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[var(--color-foreground)] text-[var(--color-background)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-full bg-[var(--color-background)] flex items-center justify-center">
                <span className="font-serif font-bold text-lg text-[var(--color-foreground)]">SG</span>
              </div>
              <div>
                <span className="block text-sm font-medium">Saint Germain</span>
                <span className="block text-xs text-[var(--color-muted-foreground)] tracking-widest uppercase">Itinerante</span>
              </div>
            </div>
            <p className="text-sm text-[var(--color-muted-foreground)] leading-relaxed max-w-xs">
              {siteData.tagline}
            </p>
          </div>

          {/* Institucional */}
          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase mb-6 text-[var(--color-muted-foreground)]">
              Institucional
            </h4>
            <ul className="space-y-3">
              {footerLinks.institucional.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    className="text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-background)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase mb-6 text-[var(--color-muted-foreground)]">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    className="text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-background)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase mb-6 text-[var(--color-muted-foreground)]">
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-[var(--color-muted-foreground)]" />
                <span className="text-sm text-[var(--color-muted-foreground)]">
                  {siteData.company.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[var(--color-muted-foreground)]" />
                <a 
                  href={`mailto:${siteData.company.email}`}
                  className="text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-background)] transition-colors"
                >
                  {siteData.company.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[var(--color-muted-foreground)]" />
                <a 
                  href={siteData.company.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-background)] transition-colors"
                >
                  {siteData.company.whatsapp}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-[var(--color-muted)]/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[var(--color-muted-foreground)] text-center md:text-left">
              <p>{siteData.company.name}</p>
              <p>CNPJ: {siteData.company.cnpj}</p>
            </div>
            <p className="text-xs text-[var(--color-muted-foreground)]">
              Desenvolvido por{' '}
              <span className="font-medium text-[var(--color-background)]">Wave Labs Performance</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
