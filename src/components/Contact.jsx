import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Ubicación',
      details: ['Angela Peralta 35', 'Col. Periodista', 'Hermosillo, Sonora, México']
    },
    {
      icon: Phone,
      title: 'Teléfono',
      details: ['+52 (662) 123-4567', 'Lunes a Viernes: 9am - 6pm']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@darte.mx', 'Respuesta en 24 horas']
    },
    {
      icon: Clock,
      title: 'Horarios',
      details: ['Lunes a Viernes: 9am - 6pm', 'Sábados: 10am - 4pm', 'Domingos: Cerrado']
    }
  ]

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block bg-darte-verde/10 text-darte-verde px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-darte-verde/20">
            Contacto
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-darte-azul mb-4">
            Ponte en Contacto con DARte
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aquí para responder tus preguntas y ayudarte a ser parte de nuestra misión.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.div
                  key={index}
                  className="flex gap-4 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-darte-verde/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-darte-verde" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-darte-azul mb-2">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-gray-600">{detail}</p>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="bg-white p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-darte-azul mb-6">Envíanos un Mensaje</h3>

            <div className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-darte-azul mb-2">Nombre</label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-darte-verde"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-darte-azul mb-2">Email</label>
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-darte-verde"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-darte-azul mb-2">Asunto</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-darte-verde">
                  <option>Selecciona un asunto</option>
                  <option>Visita al museo</option>
                  <option>Programa educativo</option>
                  <option>Donación</option>
                  <option>Otra consulta</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-darte-azul mb-2">Mensaje</label>
                <textarea
                  rows="5"
                  placeholder="Tu mensaje..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-darte-verde"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full btn-primary"
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
          className="rounded-xl overflow-hidden shadow-lg h-96 bg-gradient-to-br from-darte-verde to-darte-azul flex items-center justify-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <MapPin className="w-16 h-16 mx-auto mb-4" />
            <p className="text-xl font-semibold mb-2">Ubicación del Museo DARte</p>
            <p className="text-lg opacity-90">Angela Peralta 35, Col. Periodista</p>
            <p className="text-lg opacity-90">Hermosillo, Sonora, México</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
