import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function ContactAndMap() {
  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-[#3F8A4B]/5 to-[#5F5FA2]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-[#3F8A4B]/10 text-[#3F8A4B] px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-[#3F8A4B]/20">
            Ponte en Contacto
          </span>
          <h2 className="section-title mb-4">
            Contacto y Ubicación
          </h2>
          <p className="section-subtitle">
            Estamos aquí para responder tus preguntas y recibir tu visita.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {[
              {
                icon: MapPin,
                title: 'Ubicación',
                items: ['Angela Peralta 35', 'Col. Periodista', 'Hermosillo, Sonora, México'],
                color: '#3F8A4B'
              },
              {
                icon: Phone,
                title: 'Teléfono',
                items: ['+52 (662) 123-4567', 'Lunes a Viernes: 9am - 6pm'],
                color: '#EECA44'
              },
              {
                icon: Mail,
                title: 'Email',
                items: ['info@darte.mx', 'Respuesta en 24 horas'],
                color: '#CF423B'
              },
              {
                icon: Clock,
                title: 'Horarios',
                items: ['Lun-Vie: 9:00am - 6:00pm', 'Sábados: 10:00am - 4:00pm', 'Domingos: Cerrado'],
                color: '#5F5FA2'
              }
            ].map((contact, index) => {
              const Icon = contact.icon
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border-l-4"
                  style={{ borderLeftColor: contact.color }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg" style={{ backgroundColor: `${contact.color}20` }}>
                      <Icon className="w-6 h-6" style={{ color: contact.color }} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#5F5FA2] mb-2">{contact.title}</h3>
                      <div className="space-y-1">
                        {contact.items.map((item, idx) => (
                          <p key={idx} className="text-gray-700 text-sm">{item}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="bg-white rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onSubmit={(e) => {
              e.preventDefault()
              alert('Formulario enviado. Nos contactaremos pronto!')
            }}
          >
            <h3 className="text-2xl font-display font-bold text-[#3F8A4B] mb-6">
              Envíanos tu Mensaje
            </h3>

            <div className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-[#5F5FA2] mb-2">Nombre</label>
                <input
                  type="text"
                  placeholder="Tu nombre completo"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#3F8A4B] transition-colors"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-[#5F5FA2] mb-2">Email</label>
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#3F8A4B] transition-colors"
                  required
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-semibold text-[#5F5FA2] mb-2">Asunto</label>
                <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#3F8A4B] transition-colors">
                  <option>Selecciona un asunto</option>
                  <option>Visita al museo</option>
                  <option>Programa educativo</option>
                  <option>Donación</option>
                  <option>Voluntariado</option>
                  <option>Otros</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-[#5F5FA2] mb-2">Mensaje</label>
                <textarea
                  rows="5"
                  placeholder="Tu mensaje..."
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#3F8A4B] transition-colors resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full btn-primary text-lg font-semibold py-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Enviar Mensaje
              </motion.button>
            </div>
          </motion.form>
        </div>

        {/* Map Section */}
        <motion.div
          className="rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="aspect-[16/5] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3485.917710663196!2d-110.95046102487599!3d29.108110675408422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ce85004d4d3d5f%3A0x28a445d56332883c!2sCentro%20DARte%20-%20Espacio%20educativo%20para%20la%20donaci%C3%B3n%20y%20la%20cultura!5e0!3m2!1ses-419!2smx!4v1769794857396!5m2!1ses-419!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
