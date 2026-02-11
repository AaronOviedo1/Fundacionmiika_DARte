import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { t, i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es'
    i18n.changeLanguage(newLang)
    document.documentElement.lang = newLang
  }

  const navItems = [
    { label: t('header.nav.inicio'), href: '#inicio' },
    { label: t('header.nav.sobre'), href: '#sobre' },
    { label: t('header.nav.miika'), href: '#miika' },
    { label: t('header.nav.estadisticas'), href: '#estadisticas' },
    { label: t('header.nav.testimonios'), href: '#testimonios' },
    { label: t('header.nav.faq'), href: '#faq' },
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
              key={item.href}
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

        {/* CTA + Language Toggle */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-2 rounded-full border-2 border-[#5F5FA2]/20 hover:border-[#3F8A4B] text-[#5F5FA2] hover:text-[#3F8A4B] font-semibold text-sm transition-colors"
          >
            {i18n.language === 'es' ? 'EN' : 'ES'}
          </button>
          <motion.a
            href="#contacto"
            className="btn-primary pl-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('header.contacto')}
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={toggleLanguage}
            className="px-3 py-2 rounded-full border-2 border-[#5F5FA2]/20 text-[#5F5FA2] font-semibold text-sm"
          >
            {i18n.language === 'es' ? 'EN' : 'ES'}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-[#3F8A4B]"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
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
              key={item.href}
              href={item.href}
              className="block text-[#5F5FA2] font-medium hover:text-[#3F8A4B] transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a href="#contacto" className="w-full btn-primary block text-center py-3">
            {t('header.contacto')}
          </a>
        </motion.div>
      )}
    </header>
  )
}
