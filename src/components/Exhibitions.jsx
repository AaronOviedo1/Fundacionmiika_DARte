import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Exhibitions() {
  const exhibitions = [
    {
      id: 1,
      title: 'La Anatomía de la Esperanza',
      description: 'Descubre cómo los órganos salvan vidas a través de exhibiciones interactivas sobre trasplantes.',
      image: 'bg-gradient-to-br from-darte-rojo to-darte-amarillo',
      tags: ['Educación', 'Anatomía', 'Interactivo']
    },
    {
      id: 2,
      title: 'Historias de Vida',
      description: 'Relatos inspiradores de donantes, receptores y sus familias que transformaron vidas.',
      image: 'bg-gradient-to-br from-darte-verde to-darte-azul',
      tags: ['Testimonios', 'Impacto', 'Inspiración']
    },
    {
      id: 3,
      title: 'La Ciencia del Trasplante',
      description: 'Explora los procesos médicos y tecnológicos detrás de los trasplantes de órganos.',
      image: 'bg-gradient-to-br from-darte-azul to-darte-verde',
      tags: ['Ciencia', 'Medicina', 'Tecnología']
    },
    {
      id: 4,
      title: 'Arte y Donación',
      description: 'Expresiones artísticas que celebran la donación y su impacto en la sociedad.',
      image: 'bg-gradient-to-br from-darte-amarillo to-darte-rojo',
      tags: ['Arte', 'Cultura', 'Sociedad']
    },
  ]

  return (
    <section id="exhibiciones" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block bg-darte-verde/10 text-darte-verde px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-darte-verde/20">
            Exhibiciones
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-darte-azul mb-4">
            Explorando la Donación desde Múltiples Perspectivas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            DARte ofrece experiencias educativas y culturales que profundizan en el mundo de la donación de órganos.
          </p>
        </motion.div>

        {/* Exhibitions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {exhibitions.map((exhibition, index) => (
            <motion.div
              key={exhibition.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Image */}
                <motion.div
                  className={`${exhibition.image} h-64 flex items-center justify-center relative overflow-hidden`}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all" />
                  <p className="text-white text-lg font-semibold text-center relative z-10 px-6">
                    {exhibition.title}
                  </p>
                </motion.div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-darte-azul mb-2">{exhibition.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{exhibition.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {exhibition.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-darte-verde/10 text-darte-verde text-xs px-3 py-1 rounded-full border border-darte-verde/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.button
                    className="flex items-center gap-2 text-darte-verde font-semibold group/btn"
                    whileHover={{ x: 5 }}
                  >
                    Ver Exhibición
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-darte-verde to-darte-azul rounded-2xl p-12 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-bold mb-4">¿Listo para visitarnos?</h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Ubicado en Angela Peralta 35, Col. Periodista, Hermosillo, Sonora. Un viaje transformador te espera.
          </p>
          <motion.button
            className="inline-block bg-darte-amarillo text-darte-azul px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Planifica Tu Visita
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
