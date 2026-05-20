import { motion } from 'framer-motion'
import { siteData } from '@/data/site-data'

export function CookiesPage() {
  return (
    <div className="pt-32 pb-24 bg-[var(--color-background)]">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-serif font-bold text-[var(--color-foreground)] mb-8">
            Política de Cookies
          </h1>

          <div className="prose prose-lg text-[var(--color-muted)]">
            <p className="text-sm text-[var(--color-muted)] mb-8">
              Última atualização: Maio de 2026
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-serif font-semibold text-[var(--color-foreground)] mb-4">
                1. O que são Cookies?
              </h2>
              <p className="leading-relaxed">
                Cookies são pequenos arquivos de texto armazenados em seu dispositivo quando você 
                visita nosso site. Eles nos ajudam a proporcionar uma experiência melhor e mais 
                personalizada.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-serif font-semibold text-[var(--color-foreground)] mb-4">
                2. Tipos de Cookies que Utilizamos
              </h2>
              
              <h3 className="text-lg font-semibold text-[var(--color-foreground)] mt-6 mb-3">
                Cookies Essenciais
              </h3>
              <p className="leading-relaxed">
                Necessários para o funcionamento básico do site. Sem eles, algumas funcionalidades 
                podem não operar corretamente.
              </p>

              <h3 className="text-lg font-semibold text-[var(--color-foreground)] mt-6 mb-3">
                Cookies de Análise
              </h3>
              <p className="leading-relaxed">
                Nos ajudam a entender como os visitantes interagem com o site, permitindo melhorias 
                contínuas em nossa plataforma.
              </p>

              <h3 className="text-lg font-semibold text-[var(--color-foreground)] mt-6 mb-3">
                Cookies de Preferências
              </h3>
              <p className="leading-relaxed">
                Permitem que o site lembre suas escolhas e preferências, como idioma e região.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-serif font-semibold text-[var(--color-foreground)] mb-4">
                3. Como Gerenciar Cookies
              </h2>
              <p className="leading-relaxed mb-4">
                Você pode controlar e gerenciar cookies das seguintes formas:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Configurações do navegador para bloquear ou excluir cookies</li>
                <li>Usar o modo de navegação privada/anônima</li>
                <li>Utilizar ferramentas de opt-out de análise</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Note que desabilitar cookies pode afetar a funcionalidade do site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-serif font-semibold text-[var(--color-foreground)] mb-4">
                4. Cookies de Terceiros
              </h2>
              <p className="leading-relaxed">
                Podemos utilizar serviços de terceiros que também utilizam cookies, como 
                ferramentas de análise. Esses terceiros têm suas próprias políticas de privacidade.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-serif font-semibold text-[var(--color-foreground)] mb-4">
                5. Atualizações desta Política
              </h2>
              <p className="leading-relaxed">
                Podemos atualizar esta política periodicamente. Recomendamos que você revise 
                esta página regularmente para se manter informado.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-serif font-semibold text-[var(--color-foreground)] mb-4">
                6. Contato
              </h2>
              <p className="leading-relaxed">
                Para dúvidas sobre nossa Política de Cookies:
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
