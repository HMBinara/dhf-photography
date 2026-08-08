import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function CategoryCard({ id, name, number, color, image }) {
  const categoryMap = {
    'Macro': 'macro',
    'Light Painting': 'light',
    'Pencil Art': 'pencil',
    'Weddings & Birthdays': 'events'
  }

  // Cover image fallback map (Image prop ekak awe naththath auto load venna)
  const defaultImages = {
    'macro': '/images/macro/473446123_1345612323551070_626.jpg',
    'light': '/images/light/light1.jpg',
    'pencil': '/images/pencil/pencil1.jpg',
    'events': '/images/events/event1.jpg'
  }

  const catSlug = categoryMap[name] || id
  const coverImg = image || defaultImages[catSlug]

  return (
    <Link to={`/gallery?filter=${catSlug}`}>
      <motion.div
        className="relative aspect-square bg-bg-raised overflow-hidden group cursor-pointer"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Background Image */}
        {coverImg && (
          <img
            src={coverImg}
            alt={name}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
          />
        )}

        {/* Color & Shadow Overlays */}
        <div className={`absolute inset-0 bg-gradient-to-b ${color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10`}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>

        {/* Text Content */}
        <div className="absolute inset-0 flex items-end p-8 z-20">
          <div className="relative">
            <p className="eyebrow text-white opacity-85 mb-2">{number}</p>
            <h3 className="text-2xl md:text-3xl font-display text-white uppercase">{name}</h3>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}