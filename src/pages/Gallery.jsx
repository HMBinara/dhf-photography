import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import GalleryGrid from '../components/GalleryGrid'

const categories = [
  { id: 'all', label: 'All' },
  { id: 'macro', label: 'Macro' },
  { id: 'light', label: 'Light Painting' },
  { id: 'pencil', label: 'Pencil Art' },
  { id: 'events', label: 'Weddings & Birthdays' },
]

const photos = [
  // MACRO (10 Photos)
  { id: 1, cat: 'macro', title: 'Macro Detail 01', fileName: '1.jpg', aspect: '4/5' },
  { id: 2, cat: 'macro', title: 'Macro Detail 02', fileName: '2.jpg', aspect: '4/6' },
  { id: 3, cat: 'macro', title: 'Macro Detail 03', fileName: '3.jpg', aspect: '4/4.4' },
  { id: 4, cat: 'macro', title: 'Macro Detail 04', fileName: '4.jpg', aspect: '4/5' },
  { id: 5, cat: 'macro', title: 'Macro Detail 05', fileName: '5.jpg', aspect: '4/5.2' },
  { id: 6, cat: 'macro', title: 'Macro Detail 06', fileName: '6.jpg', aspect: '4/5' },
  { id: 7, cat: 'macro', title: 'Macro Detail 07', fileName: '7.jpg', aspect: '4/4.8' },
  { id: 8, cat: 'macro', title: 'Macro Detail 08', fileName: '8.jpg', aspect: '4/5.5' },
  { id: 9, cat: 'macro', title: 'Macro Detail 09', fileName: '9.jpg', aspect: '4/5' },
  { id: 10, cat: 'macro', title: 'Macro Detail 10', fileName: '10.jpg', aspect: '4/5.2' },

  // LIGHT PAINTING (10 Photos)
  { id: 11, cat: 'light', title: 'Light Painting 01', fileName: '1.jpg', aspect: '4/5.5' },
  { id: 12, cat: 'light', title: 'Light Painting 02', fileName: '2.jpg', aspect: '4/5' },
  { id: 13, cat: 'light', title: 'Light Painting 03', fileName: '3.jpg', aspect: '4/4.6' },
  { id: 14, cat: 'light', title: 'Light Painting 04', fileName: '4.jpg', aspect: '4/5.2' },
  { id: 15, cat: 'light', title: 'Light Painting 05', fileName: '5.jpg', aspect: '4/5' },
  { id: 16, cat: 'light', title: 'Light Painting 06', fileName: '6.jpg', aspect: '4/4.8' },
  { id: 17, cat: 'light', title: 'Light Painting 07', fileName: '7.jpg', aspect: '4/5.4' },
  
  // PENCIL ART (10 Photos)
  { id: 21, cat: 'pencil', title: 'Pencil Sketch 01', fileName: '1.jpg', aspect: '4/5' },
  { id: 22, cat: 'pencil', title: 'Pencil Sketch 02', fileName: '2.jpg', aspect: '4/5.2' },
  { id: 23, cat: 'pencil', title: 'Pencil Sketch 03', fileName: '3.jpg', aspect: '4/4.8' },
  { id: 24, cat: 'pencil', title: 'Pencil Sketch 04', fileName: '4.jpg', aspect: '4/5' },
  { id: 25, cat: 'pencil', title: 'Pencil Sketch 05', fileName: '5.jpg', aspect: '4/5.5' },
  { id: 26, cat: 'pencil', title: 'Pencil Sketch 06', fileName: '6.jpg', aspect: '4/4.6' },
  { id: 27, cat: 'pencil', title: 'Pencil Sketch 07', fileName: '7.jpg', aspect: '4/5.2' },
  { id: 28, cat: 'pencil', title: 'Pencil Sketch 08', fileName: '8.jpg', aspect: '4/5' },
  { id: 29, cat: 'pencil', title: 'Pencil Sketch 09', fileName: '9.jpg', aspect: '4/4.8' },
  { id: 30, cat: 'pencil', title: 'Pencil Sketch 10', fileName: '10.jpg', aspect: '4/5.2' },

  // EVENTS (10 Photos)
  { id: 31, cat: 'events', title: 'Event Frame 01', fileName: '1.jpg', aspect: '4/5' },
  { id: 32, cat: 'events', title: 'Event Frame 02', fileName: '2.jpg', aspect: '4/4.8' },
  { id: 33, cat: 'events', title: 'Event Frame 03', fileName: '3.jpg', aspect: '4/5' },
  { id: 34, cat: 'events', title: 'Event Frame 04', fileName: '4.jpg', aspect: '4/5.2' },
  { id: 35, cat: 'events', title: 'Event Frame 05', fileName: '5.jpg', aspect: '4/4.6' },
  
]

export default function Gallery() {
  const [searchParams, setSearchParams] = useSearchParams()
  const filter = searchParams.get('filter') || 'all'

  const setFilter = (newFilter) => {
    if (newFilter === 'all') {
      setSearchParams({})
    } else {
      setSearchParams({ filter: newFilter })
    }
  }

  const filtered = filter === 'all' ? photos : photos.filter(p => p.cat === filter)

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="wrap mb-12">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-3 text-cyan font-mono tracking-widest text-xs">
            FULL GALLERY
          </p>
          <h1 className="text-4xl md:text-6xl font-display uppercase tracking-tight mb-8">
            The Work
          </h1>
        </motion.div>

        {/* Filter Buttons with Home Page Pill Shapes */}
        <div className="flex flex-wrap items-center gap-3">
          {categories.map((cat) => {
            const isActive = filter === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-7 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan to-violet text-bg shadow-lg shadow-cyan/20 border-transparent'
                    : 'border border-line bg-bg-raised/50 backdrop-blur-md text-text-dim hover:text-text hover:border-cyan/50'
                }`}
              >
                {cat.label}
              </button>
            )
          })}
        </div>
      </div>

      <GalleryGrid photos={filtered} />
    </div>
  )
}