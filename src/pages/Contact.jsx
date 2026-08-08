import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    type: 'Wedding',
    date: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simple form handling - in production, integrate with EmailJS
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', type: 'Wedding', date: '', message: '' })
    alert('Thank you! We\'ll get back to you soon.')
  }

  const whatsappNumber = '94758555896' // Replace with actual number
  const whatsappMessage = 'Hi Dewindu, I\'d like to book a shoot.'
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div className="pt-32 pb-20">
      <div className="wrap mb-16">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-4">Let's talk</p>
          <h1 className="text-4xl md:text-6xl font-display uppercase">Book a Shoot</h1>
        </motion.div>
      </div>

      <div className="wrap grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-bg-raised border border-line rounded-lg mb-8 hover:border-cyan transition-colors duration-300"
          >
            <MessageCircle size={32} className="text-cyan flex-shrink-0" />
            <div>
              <p className="font-medium text-text">Chat on WhatsApp</p>
              <p className="text-sm text-text-dim">Fastest way to reach me</p>
            </div>
          </a>

          <div className="space-y-4 text-text-dim mb-8">
            <p><strong className="text-text">Email:</strong> Hasankafernando6@gmail.com</p>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-medium tracking-nav uppercase text-text-dim mb-4">Follow me</p>
            <a
              href="https://web.facebook.com/hasanka.fernando.756"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm hover:text-cyan transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm hover:text-cyan transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </motion.div>

        {/* Booking Form */}
        <motion.form
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-xs font-medium tracking-nav uppercase text-text-dim mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-bg-raised border border-line text-text px-4 py-3 focus:outline-none focus:border-cyan transition-colors duration-300"
            />
          </div>

          <div>
            <label htmlFor="type" className="block text-xs font-medium tracking-nav uppercase text-text-dim mb-2">
              Event Type
            </label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full bg-bg-raised border border-line text-text px-4 py-3 focus:outline-none focus:border-cyan transition-colors duration-300"
            >
              <option>Wedding</option>
              <option>Birthday</option>
              <option>Macro / Personal Shoot</option>
              <option>Light Painting Session</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="date" className="block text-xs font-medium tracking-nav uppercase text-text-dim mb-2">
              Preferred Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full bg-bg-raised border border-line text-text px-4 py-3 focus:outline-none focus:border-cyan transition-colors duration-300"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-medium tracking-nav uppercase text-text-dim mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full bg-bg-raised border border-line text-text px-4 py-3 focus:outline-none focus:border-cyan transition-colors duration-300 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-full bg-gradient-to-r from-cyan to-violet text-bg font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg shadow-cyan/20 hover:shadow-violet/30 hover:-translate-y-0.5 cursor-pointer"
          >
            Send Inquiry
          </button>
        </motion.form>
      </div>
    </div>
  )
}