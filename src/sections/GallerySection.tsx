import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const galleryImages = [
 
  { id: 2, src: '/images/gallery-2.jpeg', alt: 'Atendimento de saúde itinerante' },
  { id: 3, src: '/images/gallery-3.jpeg', alt: 'Público no cinema itinerante' },
  { id: 4, src: '/images/gallery-4.jpeg', alt: 'Equipe médica em campanha' },

  { id: 6, src: '/images/gallery-6.jpeg', alt: 'Unidade móvel de saúde' },
  { id: 7, src: '/images/gallery-7.jpeg', alt: 'Atividade educativa' },
  { id: 8, src: '/images/gallery-8.jpeg', alt: 'Participação comunitária' },
]

export function GallerySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // Touch handling para swipe
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

  // Keyboard navigation
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

    // Impedir scroll do body quando lightbox está aberto
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [selectedImage, goToNext, goToPrev, closeLightbox])

  // Touch handlers para swipe
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
      className="py-24 lg:py-32 bg-[var(--color-warm)]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-[var(--color-gold)] mb-4 block">
            Galeria
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-foreground)] leading-tight mb-6">
            Momentos que transformam
          </h2>

          <p className="text-lg text-[var(--color-muted)] leading-relaxed">
            Cada imagem conta uma história de impacto, conexão e transformação
            social.
          </p>
        </motion.div>

        {/* Editorial Masonry Gallery */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 space-y-3">
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
              <div className="group relative overflow-hidden bg-[var(--color-warm-dark)]">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                {/* Hover Content */}
                <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-medium drop-shadow-lg">
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
            className="fixed inset-0 z-[9998] bg-[var(--color-foreground)]/95 flex items-center justify-center"
            onClick={closeLightbox}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation()
                closeLightbox()
              }}
              aria-label="Fechar"
            >
              <X size={24} />
            </button>

            {/* Navigation - Previous */}
            <button
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation()
                goToPrev()
              }}
              aria-label="Imagem anterior"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Navigation - Next */}
            <button
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation()
                goToNext()
              }}
              aria-label="Próxima imagem"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image Container */}
            <motion.div
              key={selectedImage}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="max-w-5xl w-full mx-4 sm:mx-8"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />

              {/* Image Caption */}
              <div className="mt-4 text-center">
                <p className="text-white/80 text-sm sm:text-base">
                  {galleryImages[selectedImage].alt}
                </p>

                <p className="text-white/50 text-xs mt-1">
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