import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Sobre DARte', href: '#sobre' },
    { label: 'Fundación Miika', href: '#miika' },
    { label: 'Estadísticas', href: '#estadisticas' },
    { label: 'Testimonios', href: '#testimonios' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <motion.a
            href="#inicio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <img src="/images/DARte.png" alt="DARte Logo" className="h-12 w-auto rounded" />
          </motion.a>
          <motion.a
            href="#miika"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <img src="/images/fundacion Miika.png" alt="Fundación Miika Logo" className="h-12 w-auto rounded" />
          </motion.a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="text-[#5F5FA2] font-medium hover:text-[#3F8A4B] transition-colors"
              whileHover={{ y: -2 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.a
          href="#contacto"
          className="hidden lg:block btn-primary pl-8"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contacto
        </motion.a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-[#3F8A4B]"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden fixed inset-0 top-[60px] bg-white z-40 px-4 py-4 space-y-3 overflow-y-auto"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block text-[#5F5FA2] font-medium hover:text-[#3F8A4B] transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a href="#contacto" className="w-full btn-primary block text-center py-3">
            Contacto
          </a>
        </motion.div>
      )}
    </header>
  )
}
