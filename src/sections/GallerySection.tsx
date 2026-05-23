import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const galleryImages = [
  {
    id: 2,
    src: '/images/gallery-1.jpeg',
    alt: 'Atendimento de saúde itinerante',
  },
  {
    id: 3,
    src: '/images/gallery-3.jpeg',
    alt: 'Público no cinema itinerante',
  },
  {
    id: 4,
    src: '/images/gallery-4.jpeg',
    alt: 'Equipe médica em campanha',
  },
  {
    id: 6,
    src: '/images/gallery-5.jpeg',
    alt: 'Unidade móvel de saúde',
  },
  {
    id: 7,
    src: '/images/gallery-6.jpeg',
    alt: 'Atividade educativa',
  },
  {
    id: 8,
    src: '/images/gallery-2.jpeg',
    alt: 'Participação comunitária',
  },
]

export function GallerySection() {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  })

  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // Swipe
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  const minSwipeDistance = 50

  const goToNext = useCallback(() => {
    if (selectedImage !== null) {
      setSelectedImage((prev) => (prev! + 1) % galleryImages.length)
    }
  }, [selectedImage])

  const goToPrev = useCallback(() => {
    if (selectedImage !== null) {
      setSelectedImage(
        (prev) => (prev! - 1 + galleryImages.length) % galleryImages.length
      )
    }
  }, [selectedImage])

  const closeLightbox = useCallback(() => {
    setSelectedImage(null)
  }, [])

  // Keyboard Navigation
  useEffect(() => {
    if (selectedImage === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
          e.preventDefault()
          goToNext()
          break

        case 'ArrowLeft':
          e.preventDefault()
          goToPrev()
          break

        case 'Escape':
          e.preventDefault()
          closeLightbox()
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [selectedImage, goToNext, goToPrev, closeLightbox])

  // Swipe Mobile
  const onTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null
    touchStartX.current = e.targetTouches[0].clientX
  }

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return

    const distance = touchStartX.current - touchEndX.current

    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      goToNext()
    } else if (isRightSwipe) {
      goToPrev()
    }

    touchStartX.current = null
    touchEndX.current = null
  }

  return (
    <section
      id="galeria"
      className="overflow-hidden bg-[var(--color-warm)] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="mb-4 block text-xs font-medium uppercase tracking-[0.25em] text-[var(--color-gold)]">
            Galeria
          </span>

          <h2 className="mb-6 text-3xl font-serif font-bold leading-tight text-[var(--color-foreground)] sm:text-4xl lg:text-5xl">
            Momentos que transformam
          </h2>

          <p className="text-lg leading-relaxed text-[var(--color-muted)]">
            Cada imagem conta uma história de impacto, conexão e transformação
            social.
          </p>
        </motion.div>

        {/* Gallery */}
        <div className="columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3">
          {galleryImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.45,
                delay: 0.05 * index,
              }}
              className="break-inside-avoid cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[var(--color-card)] shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                {/* 
                  AQUI ESTÁ O PRINCIPAL:
                  - h-auto
                  - object-contain
                  - sem altura fixa
                  - sem crop
                  - imagem inteira respeitando proporção original
                */}
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-auto object-contain transition-transform duration-[4000ms] group-hover:scale-[1.015]"
                  loading="lazy"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Caption */}
                <div className="absolute inset-x-0 bottom-0 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm font-medium text-white drop-shadow-lg">
                    {item.alt}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-md"
            onClick={closeLightbox}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Close */}
            <button
              className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20 sm:right-6 sm:top-6 sm:h-12 sm:w-12"
              onClick={(e) => {
                e.stopPropagation()
                closeLightbox()
              }}
              aria-label="Fechar"
            >
              <X size={22} />
            </button>

            {/* Prev */}
            <button
              className="absolute left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20 sm:left-6 sm:h-12 sm:w-12"
              onClick={(e) => {
                e.stopPropagation()
                goToPrev()
              }}
              aria-label="Anterior"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next */}
            <button
              className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20 sm:right-6 sm:h-12 sm:w-12"
              onClick={(e) => {
                e.stopPropagation()
                goToNext()
              }}
              aria-label="Próxima"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image */}
            <motion.div
              key={selectedImage}
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="mx-4 w-full max-w-6xl sm:mx-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="overflow-hidden rounded-[28px] border border-white/10 bg-black/30 shadow-2xl">
                <img
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].alt}
                  className="w-full h-auto max-h-[82vh] object-contain"
                />
              </div>

              {/* Caption */}
              <div className="mt-5 text-center">
                <p className="text-sm text-white/85 sm:text-base">
                  {galleryImages[selectedImage].alt}
                </p>

                <p className="mt-1 text-xs text-white/45">
                  {selectedImage + 1} / {galleryImages.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}