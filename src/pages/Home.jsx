import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import CategoryCard from '../components/CategoryCard'

const categories = [
  {
    number: '01',
    name: 'Macro',
    id: 'macro',
    color: 'from-cyan/20 to-transparent',
    image: '/images/macro/1.jpg',
  },
  {
    number: '02',
    name: 'Light Painting',
    id: 'light',
    color: 'from-violet/20 to-transparent',
    image: '/images/light/4.jpg',
  },
  {
    number: '03',
    name: 'Pencil Art',
    id: 'pencil',
    color: 'from-cyan/20 to-transparent',
    image: '/images/pencil/1.jpg',
  },
  {
    number: '04',
    name: 'Weddings & Birthdays',
    id: 'events',
    color: 'from-violet/20 to-transparent',
    image: '/images/events/1.jpg',
  },
]

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[85vh] flex flex-col justify-center relative overflow-hidden py-12">
        <div className="absolute inset-0 -z-10">
          <div className="absolute w-96 h-96 bg-cyan/10 rounded-full blur-3xl top-20 -left-48"></div>
          <div className="absolute w-96 h-96 bg-violet/10 rounded-full blur-3xl bottom-20 -right-48"></div>
        </div>

        <div className="wrap grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Profile Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center lg:justify-start order-2 lg:order-1"
          >
            <div className="relative group w-64 h-64 sm:w-80 sm:h-80 lg:w-[350px] lg:h-[350px] xl:w-[380px] xl:h-[380px]">
              
              {/* Outer Glowing Ring */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-cyan via-violet to-purple-600 rounded-full blur-md opacity-70 group-hover:opacity-100 transition duration-700 animate-pulse" />

              {/* Profile Image Frame with Ultra-Sharp Rendering */}
              <div className="relative w-full h-full rounded-full p-[3px] bg-gradient-to-tr from-cyan via-violet to-purple-500 overflow-hidden shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-bg-raised">
                  <img
                    src="/images/profile2.jpg"
                    alt="Dewindu H. Fernando"
                    loading="eager"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-110 transition-all duration-700 [image-rendering:-webkit-optimize-contrast]"
                  />
                </div>
              </div>

              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-2 right-6 bg-bg/90 backdrop-blur-md border border-line py-2 px-4 rounded-full flex items-center gap-2 shadow-xl z-20 whitespace-nowrap"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 -ml-5" />
                <span className="text-[11px] font-mono tracking-wider uppercase text-text">
                  Available Islandwide
                </span>
              </motion.div>

            </div>
          </motion.div>

          {/* Right Column: Hero Typography & Buttons */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="eyebrow mb-3 text-cyan font-mono tracking-widest text-xs"
            >
              COLOMBO, SRI LANKA
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-display uppercase leading-[1.05] mb-5 tracking-tight"
            >
              Light, held still.
              <br />
              <span className="bg-gradient-to-r from-cyan via-violet to-purple-400 bg-clip-text text-transparent">
                Detail, made vast.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg text-text-dim max-w-xl mb-8 leading-relaxed"
            >
              From the smallest wingbeat to a silhouette carved out of moving light Dewindu shoots the moments most cameras walk past.
            </motion.p>

            {/* Pill Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <motion.div whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/gallery"
                  className="px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan to-violet text-bg font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg shadow-cyan/25 hover:shadow-violet/40 block text-center"
                >
                  View Gallery
                </Link>
              </motion.div>

              <motion.div whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/contact"
                  className="px-8 py-3.5 rounded-full border border-line hover:border-cyan bg-bg-raised/50 backdrop-blur-md text-text hover:text-cyan font-semibold text-xs uppercase tracking-widest transition-all duration-300 block text-center shadow-md"
                >
                  Book a Shoot
                </Link>
              </motion.div>
            </motion.div>
          </div>

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="trail mt-16"
        ></motion.div>
      </section>

      {/* Categories Section */}
      <section className="py-20 border-b border-line">
        <div className="wrap mb-16">
          <p className="eyebrow mb-4">Four ways of looking</p>
          <h2 className="text-4xl md:text-5xl font-display uppercase mb-2">What I shoot</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-line">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <CategoryCard {...cat} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20">
        <div className="wrap grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Modern Frame with Crisp Image Optimization */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="aspect-square bg-bg-raised overflow-hidden rounded-2xl border border-line relative group shadow-xl"
          >
            <img
              src="/images/profile.jpg"
              alt="Dewindu H. Fernando"
              loading="eager"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105 [image-rendering:-webkit-optimize-contrast]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="eyebrow mb-4">The eye behind it</p>
            <h2 className="text-3xl md:text-4xl font-display uppercase mb-6">Patience is the real lens.</h2>
            <p className="text-text-dim mb-6 max-w-lg leading-relaxed">
              Every macro frame is a hundred stacked shots. Every light trail is one exposure held in the dark, planned out in the body before it's drawn in the air. That's the thread through all of it — get close, wait, and let the subject tell you when it's ready.
            </p>
            <motion.div whileHover={{ y: -2 }} className="inline-block">
              <Link to="/about" className="px-8 py-3.5 rounded-full border border-line hover:border-cyan text-xs font-semibold uppercase tracking-widest text-text hover:text-cyan transition-all inline-block shadow-md">
                More about Dewindu
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}