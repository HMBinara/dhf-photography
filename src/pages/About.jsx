import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function About() {
  const stats = [
    { num: '1000+', label: 'Macro Frames Shot' },
    { num: '50+', label: 'Light Painting Sessions' },
    { num: '30+', label: 'Events Covered' },
  ]

  return (
    <div className="pt-32 pb-20">
      <div className="wrap grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Photo Container (Updated with img tag) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="aspect-square bg-bg-raised overflow-hidden rounded-lg border border-line relative group"
        >
          <img
            src="/images/profile.jpg"
            alt="Dewindu H. Fernando"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
          />
        </motion.div>

        {/* Right Side: Bio & Details */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow mb-4">About</p>
          <h1 className="text-4xl md:text-5xl font-display uppercase mb-8">Dewindu H. Fernando</h1>

          <div className="space-y-6 text-text-dim mb-8">
            <p>
              Photography, for me, started with getting too close to things a spider on a leaf, a moth on a fence post and it grew from there into long nights out with a torch, painting shapes into the dark one exposure at a time.
            </p>
            <p>
              Two very different disciplines, one same habit: slow down, watch closely, and wait for the frame that isn't there yet.
            </p>
            <p>
              Alongside the camera work, I also draw pencil studies that come from the same instinct to notice detail most people move past.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 mb-10 py-8 border-y border-line">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-display mb-2">
                  <span className="bg-gradient-to-r from-cyan to-violet bg-clip-text text-transparent">{stat.num}</span>
                </div>
                <p className="text-xs font-medium tracking-eyebrow uppercase text-text-dim">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <Link
            to="/contact"
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan to-violet text-bg font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg shadow-cyan/25 hover:shadow-violet/40 block text-center"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </div>
  )
}