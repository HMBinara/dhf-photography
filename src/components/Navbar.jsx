import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-sm border-b border-line">
      <div className="wrap flex items-center justify-between h-20">
        <Link to="/" className="text-xl font-display uppercase tracking-wide">
          DEWINDU <span className="bg-gradient-to-r from-cyan to-violet bg-clip-text text-transparent">FERNANDO</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-9">
          {[
            { path: '/', label: 'Home' },
            { path: '/gallery', label: 'Gallery' },
            { path: '/about', label: 'About' },
            { path: '/contact', label: 'Contact' },
          ].map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`text-sm font-medium tracking-nav uppercase transition-colors duration-300 ${
                isActive(path)
                  ? 'text-text'
                  : 'text-text-dim hover:text-text'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-text"
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden bg-bg border-t border-line">
          <div className="wrap py-4 flex flex-col gap-4">
            {[
              { path: '/', label: 'Home' },
              { path: '/gallery', label: 'Gallery' },
              { path: '/about', label: 'About' },
              { path: '/contact', label: 'Contact' },
            ].map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium tracking-nav uppercase border-b border-line pb-4"
              >
                {label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}