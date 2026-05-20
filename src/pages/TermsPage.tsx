import { motion } from 'framer-motion'
import { siteData } from '@/data/site-data'

export function TermsPage() {
  return (
    <div className="pt-32 pb-24 bg-[var(--color-background)]">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-serif font-bold text-[var(--color-foreground)] mb-8">
            Termos de Uso
          </h1>

          <div className="prose prose-lg text-[var(--color-muted)]">
            <p className="text-sm text-[var(--color-muted)] mb-8">
              Última atualização: Maio de 2026
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-serif font-semibold text-[var(--color-foreground)] mb-4">
                1. Aceitação dos Termos
              </h2>
              <p className="leading-relaxed">
                Ao acessar e usar este site, você concorda em cumprir e estar vinculado a estes 
                Termos de Uso. Se você não concordar com qualquer parte destes termos, não deve 
                usar nosso site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-serif font-semibold text-[var(--color-foreground)] mb-4">
                2. Uso do Site
              </h2>
              <p className="leading-relaxed mb-4">
                Você concorda em usar este site apenas para fins legais e de maneira que não 
                infrinja os direitos de terceiros. É proibido:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Usar o site para qualquer finalidade ilegal</li>
                <li>Tentar obter acesso não autorizado a sistemas</li>
                <li>Transmitir vírus ou código malicioso</li>
                <li>Coletar dados de outros usuários sem consentimento</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-serif font-semibold text-[var(--color-foreground)] mb-4">
                3. Propriedade Intelectual
              </h2>
              <p className="leading-relaxed">
                Todo o conteúdo deste site, incluindo textos, gráficos, logotipos, imagens e 
                software, é propriedade da {siteData.company.name} ou de seus licenciadores e 
                está protegido por leis de direitos autorais.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-serif font-semibold text-[var(--color-foreground)] mb-4">
                4. Limitação de Responsabilidade
              </h2>
              <p className="leading-relaxed">
                Este site é fornecido &ldquo;como está&rdquo;, sem garantias de qualquer tipo. Não nos 
                responsabilizamos por danos diretos, indiretos, incidentais ou consequentes 
                decorrentes do uso ou incapacidade de usar o site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-serif font-semibold text-[var(--color-foreground)] mb-4">
                5. Links Externos
              </h2>
              <p className="leading-relaxed">
                Nosso site pode conter links para sites de terceiros. Não temos controle sobre 
                o conteúdo desses sites e não assumimos responsabilidade por eles.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-serif font-semibold text-[var(--color-foreground)] mb-4">
                6. Modificações
              </h2>
              <p className="leading-relaxed">
                Reservamo-nos o direito de modificar estes termos a qualquer momento. As 
                alterações entram em vigor imediatamente após a publicação no site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-serif font-semibold text-[var(--color-foreground)] mb-4">
                7. Contato
              </h2>
              <p className="leading-relaxed">
                Para dúvidas sobre estes Termos de Uso:
              </p>
              <p className="mt-4">
                <strong>Email:</strong> {siteData.company.email}<br />
                <strong>Telefone:</strong> {siteData.company.whatsapp}
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
