import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export default function GalleryGrid({ photos }) {
  const [selectedId, setSelectedId] = useState(null)
  const selected = photos.find(p => p.id === selectedId)

  const getImagePath = (photo) => {
    if (!photo) return ''
    if (photo.fileName) return `/images/${photo.cat}/${photo.fileName}`
    if (photo.url) return photo.url
    return `/images/${photo.cat}/${photo.id}.jpg`
  }

  return (
    <>
      {/* Modern Card Grid with Spacing & Rounded Corners */}
      <div className="wrap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo, idx) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="bg-bg-raised rounded-2xl overflow-hidden cursor-pointer group relative border border-line shadow-xl flex items-center justify-center"
            style={{ aspectRatio: photo.aspect || '4/5' }}
            onClick={() => setSelectedId(photo.id)}
          >
            <motion.div
              className="w-full h-full relative overflow-hidden"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={getImagePath(photo)}
                alt={photo.title}
                loading="eager"
                className="w-full h-full object-cover [image-rendering:-webkit-optimize-contrast]"
              />
              
              {/* Modern Gradient Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-[10px] font-mono text-cyan uppercase tracking-widest mb-1">{photo.cat}</p>
                <h3 className="text-base font-display text-text uppercase tracking-wide">{photo.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Pop-up with High-Quality Framing */}
      <AnimatePresence>
        {selectedId && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-40"
            ></motion.div>

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
              onClick={(e) => {
                if (e.target === e.currentTarget) setSelectedId(null)
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-bg/60 backdrop-blur-md border border-line text-text hover:text-cyan hover:border-cyan transition-all duration-300 z-50 shadow-lg cursor-pointer"
                aria-label="Close"
              >
                <X size={24} />
              </button>

              {/* Lightbox Container */}
              <div
                className="relative rounded-2xl overflow-hidden max-w-4xl max-h-[85vh] w-full border border-line bg-bg-raised shadow-2xl flex flex-col justify-end"
                style={{ aspectRatio: selected?.aspect || '4/5' }}
              >
                <img
                  src={getImagePath(selected)}
                  alt={selected?.title}
                  className="w-full h-full object-contain bg-black/40 [image-rendering:-webkit-optimize-contrast]"
                />
                
                {/* Details Footer */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6">
                  <p className="text-xs text-cyan uppercase font-mono tracking-widest mb-1">{selected?.cat}</p>
                  <h3 className="text-2xl font-display text-white uppercase">{selected?.title}</h3>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}