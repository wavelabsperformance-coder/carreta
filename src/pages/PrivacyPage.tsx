import { motion } from 'framer-motion'
import { siteData } from '@/data/site-data'

export function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 bg-[var(--color-background)]">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-serif font-bold text-[var(--color-foreground)] mb-8">
            Política de Privacidade
          </h1>

          <div className="prose prose-lg text-[var(--color-muted)]">
            <p className="text-sm text-[var(--color-muted)] mb-8">
              Última atualização: Maio de 2026
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-serif font-semibold text-[var(--color-foreground)] mb-4">
                1. Introdução
              </h2>
              <p className="leading-relaxed">
                A {siteData.company.name} (&ldquo;nós&rdquo;, &ldquo;nosso&rdquo; ou &ldquo;empresa&rdquo;) está comprometida 
                em proteger sua privacidade. Esta Política de Privacidade explica como coletamos, 
                usamos, divulgamos e protegemos suas informações pessoais.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-serif font-semibold text-[var(--color-foreground)] mb-4">
                2. Informações que Coletamos
              </h2>
              <p className="leading-relaxed mb-4">
                Podemos coletar as seguintes categorias de informações:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Informações de identificação pessoal (nome, email, telefone)</li>
                <li>Informações de contato profissional</li>
                <li>Dados de navegação e uso do site</li>
                <li>Informações fornecidas em formulários de contato</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-serif font-semibold text-[var(--color-foreground)] mb-4">
                3. Como Usamos suas Informações
              </h2>
              <p className="leading-relaxed mb-4">
                Utilizamos suas informações para:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Responder a solicitações de contato e propostas</li>
                <li>Enviar informações sobre nossos serviços</li>
                <li>Melhorar nosso site e serviços</li>
                <li>Cumprir obrigações legais</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-serif font-semibold text-[var(--color-foreground)] mb-4">
                4. Compartilhamento de Dados
              </h2>
              <p className="leading-relaxed">
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros 
                para fins de marketing. Podemos compartilhar dados com prestadores de serviços 
                que nos auxiliam em nossas operações, sempre sob acordos de confidencialidade.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-serif font-semibold text-[var(--color-foreground)] mb-4">
                5. Seus Direitos
              </h2>
              <p className="leading-relaxed mb-4">
                De acordo com a LGPD, você tem direito a:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir dados incompletos ou desatualizados</li>
                <li>Solicitar a exclusão de seus dados</li>
                <li>Revogar consentimentos fornecidos</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-serif font-semibold text-[var(--color-foreground)] mb-4">
                6. Contato
              </h2>
              <p className="leading-relaxed">
                Para exercer seus direitos ou tirar dúvidas sobre esta política, entre em contato:
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
