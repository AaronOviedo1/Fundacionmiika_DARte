import { Heart, MapPin, Phone, Mail, Instagram, Facebook, Youtube } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#3F8A4B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About DARte */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/DARte.png" alt="DARte" className="h-12 w-auto rounded" />
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              El único museo en el mundo dedicado a la educación sobre donación de órganos. Un espacio de esperanza, ciencia y transformación.
            </p>
          </motion.div>

          {/* Fundación Miika */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/fundacion Miika.png" alt="Fundación Miika" className="h-12 w-auto rounded" />
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Donando Esperanzas. Apoyo integral médico, psicológico y económico para pacientes y familias en procesos de trasplante.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4 text-[#EECA44]">Contacto</h4>
            <div className="space-y-3 text-sm text-white/80">
              <div className="flex gap-2 items-start">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-1 text-[#EECA44]" />
                <p>Angela Peralta 35<br />Col. Periodista<br />Hermosillo, Sonora</p>
              </div>
              <div className="flex gap-2 items-center">
                <Phone className="w-4 h-4 text-[#EECA44]" />
                <a href="tel:+526621234567" className="hover:text-[#EECA44] transition-colors">
                  +52 (662) 123-4567
                </a>
              </div>
              <div className="flex gap-2 items-center">
                <Mail className="w-4 h-4 text-[#EECA44]" />
                <a href="mailto:info@darte.mx" className="hover:text-[#EECA44] transition-colors">
                  info@darte.mx
                </a>
              </div>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4 text-[#EECA44]">Síguenos</h4>
            <div className="space-y-4">
              {/* DARte Social */}
              <div>
                <p className="text-sm text-white/70 mb-2 font-medium">DARte</p>
                <div className="flex gap-3">
                  <motion.a
                    href="https://www.instagram.com/centrodartesonora/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 rounded-lg hover:bg-[#EECA44] text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    title="Instagram DARte"
                  >
                    <Instagram className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="https://www.facebook.com/espaciodartesonora"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 rounded-lg hover:bg-[#EECA44] text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    title="Facebook DARte"
                  >
                    <Facebook className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>

              {/* Fundación Miika Social */}
              <div>
                <p className="text-sm text-white/70 mb-2 font-medium">Fundación Miika</p>
                <div className="flex gap-3">
                  <motion.a
                    href="https://www.instagram.com/fundacion.miika/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 rounded-lg hover:bg-[#EECA44] text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    title="Instagram Fundación Miika"
                  >
                    <Instagram className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="https://www.facebook.com/fundacionmiika"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 rounded-lg hover:bg-[#EECA44] text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    title="Facebook Fundación Miika"
                  >
                    <Facebook className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-sm text-white/80">
                &copy; {currentYear} DARte - Donando Esperanzas. Todos los derechos reservados.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center gap-2 text-[#EECA44]">
                <Heart className="w-4 h-4" />
                <p className="text-sm font-semibold">Un corazón, una esperanza</p>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="flex justify-end gap-4 text-sm text-white/80"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <a href="#sobre" className="hover:text-[#EECA44] transition-colors">
                Sobre Nosotros
              </a>
              <span className="text-white/40">|</span>
              <a href="#contacto" className="hover:text-[#EECA44] transition-colors">
                Contacto
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}
