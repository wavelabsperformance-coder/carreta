import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react'
import { siteData } from '@/data/site-data'

export function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contato" className="py-24 lg:py-32 bg-[var(--color-warm)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-medium tracking-widest uppercase text-[var(--color-gold)] mb-4 block">
              Contato
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-foreground)] leading-tight mb-6">
              Leve o Saint Germain até sua cidade ou instituição.
            </h2>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-8">
              Estamos prontos para construir uma parceria que gere impacto real. 
              Entre em contato e vamos transformar vidas juntos.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-background)] flex items-center justify-center">
                  <Mail size={18} className="text-[var(--color-gold)]" />
                </div>
                <div>
                  <p className="text-xs text-[var(--color-muted)] uppercase tracking-wide">Email</p>
                  <a 
                    href={`mailto:${siteData.company.email}`}
                    className="text-[var(--color-foreground)] hover:text-[var(--color-gold)] transition-colors"
                  >
                    {siteData.company.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-background)] flex items-center justify-center">
                  <Phone size={18} className="text-[var(--color-gold)]" />
                </div>
                <div>
                  <p className="text-xs text-[var(--color-muted)] uppercase tracking-wide">WhatsApp</p>
                  <a 
                    href={siteData.company.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-foreground)] hover:text-[var(--color-gold)] transition-colors"
                  >
                    {siteData.company.whatsapp}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-background)] flex items-center justify-center">
                  <MapPin size={18} className="text-[var(--color-gold)]" />
                </div>
                <div>
                  <p className="text-xs text-[var(--color-muted)] uppercase tracking-wide">Endereço</p>
                  <p className="text-[var(--color-foreground)]">{siteData.company.address}</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href={siteData.company.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-medium text-[var(--color-background)] bg-[var(--color-foreground)] rounded-full hover:bg-[var(--color-accent)] transition-colors"
              >
                Falar pelo WhatsApp
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href={`mailto:${siteData.company.email}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-medium text-[var(--color-foreground)] border border-[var(--color-border)] rounded-full hover:bg-[var(--color-background)] transition-colors"
              >
                Enviar Email
              </motion.a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="bg-[var(--color-card)] rounded-3xl p-8 lg:p-10 border border-[var(--color-border)] shadow-xl">
              <h3 className="text-2xl font-serif font-bold text-[var(--color-foreground)] mb-6">
                Solicite uma proposta
              </h3>

              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--color-foreground)] mb-2">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-foreground)] placeholder:text-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--color-foreground)] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-foreground)] placeholder:text-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[var(--color-foreground)] mb-2">
                    Telefone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-foreground)] placeholder:text-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]"
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-[var(--color-foreground)] mb-2">
                    Interesse principal
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]"
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="cine-road">Cine Road 75 - Cinema Itinerante</option>
                    <option value="saude">Saúde para Todos - Campanhas de Saúde</option>
                    <option value="ambos">Ambos os serviços</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--color-foreground)] mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-foreground)] placeholder:text-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] resize-none"
                    placeholder="Conte-nos mais sobre sua necessidade..."
                  />
                </div>

                {/* LGPD Consent */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    className="mt-1 w-4 h-4 rounded border-[var(--color-border)] text-[var(--color-gold)] focus:ring-[var(--color-gold)]"
                  />
                  <label htmlFor="consent" className="text-xs text-[var(--color-muted)]">
                    Concordo com a{' '}
                    <a href="/privacidade" className="underline hover:text-[var(--color-foreground)]">
                      Política de Privacidade
                    </a>{' '}
                    e autorizo o uso dos meus dados conforme a LGPD.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 text-base font-medium text-[var(--color-background)] bg-[var(--color-foreground)] rounded-full hover:bg-[var(--color-accent)] transition-colors"
                >
                  Enviar Solicitação
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
