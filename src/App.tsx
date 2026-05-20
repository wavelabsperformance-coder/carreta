import { Routes, Route } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { CookieBanner } from '@/components/CookieBanner'
import { HomePage } from '@/pages/HomePage'
import { PrivacyPage } from '@/pages/PrivacyPage'
import { TermsPage } from '@/pages/TermsPage'
import { CookiesPage } from '@/pages/CookiesPage'
import { LGPDPage } from '@/pages/LGPDPage'

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacidade" element={<PrivacyPage />} />
          <Route path="/termos" element={<TermsPage />} />
          <Route path="/cookies" element={<CookiesPage />} />
          <Route path="/lgpd" element={<LGPDPage />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </div>
  )
}

export default App
