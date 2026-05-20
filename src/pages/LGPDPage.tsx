import { motion } from 'framer-motion'
import { siteData } from '@/data/site-data'

export function LGPDPage() {
  return (
    <div className="pt-32 pb-24 bg-[var(--color-background)]">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-serif font-bold text-[var(--color-foreground)] mb-8">
            LGPD - Lei Geral de Proteção de Dados
          </h1>

          <div className="prose prose-lg text-[var(--color-muted)]">
            <p className="text-sm text-[var(--color-muted)] mb-8">
              Última atualização: Maio de 2026
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-serif font-semibold text-[var(--color-foreground)] mb-4">
                1. Nosso Compromisso com a LGPD
              </h2>
              <p className="leading-relaxed">
                A {siteData.company.name} está comprometida com a conformidade à Lei Geral de 
                Proteção de Dados (Lei nº 13.709/2018). Tratamos seus dados pessoais com 
                responsabilidade, transparência e segurança.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-serif font-semibold text-[var(--color-foreground)] mb-4">
                2. Bases Legais para Tratamento
              </h2>
              <p className="leading-relaxed mb-4">
                Tratamos seus dados pessoais com base nas seguintes hipóteses legais:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Consentimento:</strong> Quando você autoriza expressamente</li>
                <li><strong>Execução de contrato:</strong> Para prestação de nossos serviços</li>
                <li><strong>Interesse legítimo:</strong> Para melhorias em nossos serviços</li>
                <li><strong>Obrigação legal:</strong> Para cumprimento de exigências legais</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-serif font-semibold text-[var(--color-foreground)] mb-4">
                3. Seus Direitos como Titular
              </h2>
              <p className="leading-relaxed mb-4">
                A LGPD garante a você os seguintes direitos:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Confirmação:</strong> Saber se tratamos seus dados</li>
                <li><strong>Acesso:</strong> Obter cópia dos seus dados</li>
                <li><strong>Correção:</strong> Atualizar dados incompletos ou incorretos</li>
                <li><strong>Anonimização:</strong> Solicitar anonimização de dados desnecessários</li>
                <li><strong>Portabilidade:</strong> Transferir seus dados para outro fornecedor</li>
                <li><strong>Eliminação:</strong> Solicitar exclusão de dados tratados com consentimento</li>
                <li><strong>Informação:</strong> Saber com quem compartilhamos seus dados</li>
                <li><strong>Revogação:</strong> Retirar consentimento a qualquer momento</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-serif font-semibold text-[var(--color-foreground)] mb-4">
                4. Segurança dos Dados
              </h2>
              <p className="leading-relaxed">
                Implementamos medidas técnicas e organizacionais apropriadas para proteger seus 
                dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-serif font-semibold text-[var(--color-foreground)] mb-4">
                5. Retenção de Dados
              </h2>
              <p className="leading-relaxed">
                Mantemos seus dados apenas pelo tempo necessário para cumprir as finalidades para 
                as quais foram coletados, ou conforme exigido por lei.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-serif font-semibold text-[var(--color-foreground)] mb-4">
                6. Encarregado de Dados (DPO)
              </h2>
              <p className="leading-relaxed">
                Para exercer seus direitos ou esclarecer dúvidas sobre o tratamento de seus dados 
                pessoais, entre em contato com nosso Encarregado de Proteção de Dados:
              </p>
              <p className="mt-4">
                <strong>Email:</strong> {siteData.company.email}<br />
                <strong>Telefone:</strong> {siteData.company.whatsapp}<br />
                <strong>Endereço:</strong> {siteData.company.address}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-serif font-semibold text-[var(--color-foreground)] mb-4">
                7. ANPD
              </h2>
              <p className="leading-relaxed">
                Caso entenda que o tratamento de seus dados pessoais viola a legislação, você 
                tem o direito de apresentar reclamação à Autoridade Nacional de Proteção de 
                Dados (ANPD).
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
