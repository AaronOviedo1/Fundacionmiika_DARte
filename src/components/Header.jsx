import { useState, useRef, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'

function DropdownMenu({ label, items }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1 font-medium transition-colors ${
          open ? 'text-[#3F8A4B]' : 'text-[#5F5FA2] hover:text-[#3F8A4B]'
        }`}
      >
        {label}
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50"
          >
            {items.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-[#3F8A4B] bg-[#3F8A4B]/5'
                      : 'text-[#5F5FA2] hover:text-[#3F8A4B] hover:bg-gray-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [mobileSubmenu, setMobileSubmenu] = useState(null)
  const { t, i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es'
    i18n.changeLanguage(newLang)
    document.documentElement.lang = newLang
  }

  const dropdowns = [
    {
      label: t('header.nav.recursos'),
      items: [
        { label: t('header.nav.porQue'), to: '/por-que' },
        { label: t('header.nav.testimonios'), to: '/testimonios' },
        { label: t('header.nav.faq'), to: '/faq' },
      ],
    },
  ]

  return (
    <header className="bg-white/70 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <nav className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/">
            <img src="/images/DARte.png" alt="DARte Logo" className="h-10 w-auto rounded" />
          </Link>
          <Link to="/miika">
            <img src="/images/fundacion Miika.png" alt="Fundación Miika Logo" className="h-10 w-auto rounded" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `font-medium transition-colors ${
                isActive ? 'text-[#3F8A4B]' : 'text-[#5F5FA2] hover:text-[#3F8A4B]'
              }`
            }
          >
            {t('header.nav.inicio')}
          </NavLink>

          <NavLink
            to="/miika"
            className={({ isActive }) =>
              `font-medium transition-colors ${
                isActive ? 'text-[#3F8A4B]' : 'text-[#5F5FA2] hover:text-[#3F8A4B]'
              }`
            }
          >
            {t('header.nav.miika')}
          </NavLink>

          <NavLink
            to="/estadisticas"
            className={({ isActive }) =>
              `font-medium transition-colors ${
                isActive ? 'text-[#3F8A4B]' : 'text-[#5F5FA2] hover:text-[#3F8A4B]'
              }`
            }
          >
            {t('header.nav.estadisticas')}
          </NavLink>

          <NavLink
            to="/innovacion"
            className={({ isActive }) =>
              `font-medium transition-colors ${
                isActive ? 'text-[#3F8A4B]' : 'text-[#5F5FA2] hover:text-[#3F8A4B]'
              }`
            }
          >
            {t('header.nav.innovacion')}
          </NavLink>

          {dropdowns.map((dropdown) => (
            <DropdownMenu
              key={dropdown.label}
              label={dropdown.label}
              items={dropdown.items}
            />
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
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contacto"
              className="px-5 py-2 rounded-full bg-[#3F8A4B] text-white font-semibold text-sm hover:bg-[#357a40] transition-colors"
            >
              {t('header.contacto')}
            </Link>
          </motion.div>
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
            onClick={() => { setIsOpen(!isOpen); setMobileSubmenu(null) }}
            className="p-2 text-[#3F8A4B]"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 top-[60px] bg-white z-40 px-4 py-4 space-y-1 overflow-y-auto"
          >
            {/* Inicio */}
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `block font-medium transition-colors py-3 px-3 rounded-lg ${
                  isActive ? 'text-[#3F8A4B] bg-[#3F8A4B]/5' : 'text-[#5F5FA2] hover:text-[#3F8A4B]'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {t('header.nav.inicio')}
            </NavLink>

            <NavLink
              to="/miika"
              className={({ isActive }) =>
                `block font-medium transition-colors py-3 px-3 rounded-lg ${
                  isActive ? 'text-[#3F8A4B] bg-[#3F8A4B]/5' : 'text-[#5F5FA2] hover:text-[#3F8A4B]'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {t('header.nav.miika')}
            </NavLink>

            <NavLink
              to="/estadisticas"
              className={({ isActive }) =>
                `block font-medium transition-colors py-3 px-3 rounded-lg ${
                  isActive ? 'text-[#3F8A4B] bg-[#3F8A4B]/5' : 'text-[#5F5FA2] hover:text-[#3F8A4B]'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {t('header.nav.estadisticas')}
            </NavLink>

            <NavLink
              to="/innovacion"
              className={({ isActive }) =>
                `block font-medium transition-colors py-3 px-3 rounded-lg ${
                  isActive ? 'text-[#3F8A4B] bg-[#3F8A4B]/5' : 'text-[#5F5FA2] hover:text-[#3F8A4B]'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {t('header.nav.innovacion')}
            </NavLink>

            {/* Dropdown groups as collapsible sections */}
            {dropdowns.map((dropdown) => (
              <div key={dropdown.label}>
                <button
                  onClick={() =>
                    setMobileSubmenu(mobileSubmenu === dropdown.label ? null : dropdown.label)
                  }
                  className="w-full flex items-center justify-between font-medium text-[#5F5FA2] py-3 px-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {dropdown.label}
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${
                      mobileSubmenu === dropdown.label ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {mobileSubmenu === dropdown.label && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 space-y-1 pb-1">
                        {dropdown.items.map((item) => (
                          <NavLink
                            key={item.to}
                            to={item.to}
                            className={({ isActive }) =>
                              `block font-medium transition-colors py-2.5 px-3 rounded-lg text-sm ${
                                isActive
                                  ? 'text-[#3F8A4B] bg-[#3F8A4B]/5'
                                  : 'text-[#5F5FA2] hover:text-[#3F8A4B]'
                              }`
                            }
                            onClick={() => setIsOpen(false)}
                          >
                            {item.label}
                          </NavLink>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <div className="pt-3">
              <Link
                to="/contacto"
                className="w-full block text-center py-3 rounded-full bg-[#3F8A4B] text-white font-semibold hover:bg-[#357a40] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t('header.contacto')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
