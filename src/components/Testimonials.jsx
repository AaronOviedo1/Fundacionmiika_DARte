import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'María González',
      role: 'Receptora de Trasplante',
      content: 'Gracias a la donación de mi hermana, ahora tengo una segunda oportunidad de vida. DARte me ayudó a entender el proceso y a no estar sola en este camino.',
      image: '👩‍🦰',
      color: '#3F8A4B'
    },
    {
      name: 'Carlos Rodríguez',
      role: 'Familia Donante',
      content: 'Cuando perdimos a nuestro padre, donó sus órganos. Saber que salvó varias vidas nos da consuelo. DARte nos ayudó a procesar este momento tan difícil.',
      image: '👨‍💼',
      color: '#EECA44'
    },
    {
      name: 'Dr. Miguel Hernández',
      role: 'Cirujano de Trasplantes',
      content: 'DARte es revolucionario. Por primera vez tenemos un espacio que educa a la sociedad sobre la importancia crítica de la donación. ¡Es necesario!',
      image: '👨‍⚕️',
      color: '#CF423B'
    },
    {
      name: 'Elena Martínez',
      role: 'Visitante y Educadora',
      content: 'Llevé a mis estudiantes a DARte. Quedaron impactados. Ahora varios se han registrado como donantes. El museo realmente cambia perspectivas.',
      image: '👩‍🏫',
      color: '#5F5FA2'
    },
    {
      name: 'José Luis Gutiérrez',
      role: 'Donante Vivo',
      content: 'Doné uno de mis riñones. La experiencia fue diferente a lo que imaginaba. DARte ayuda a desmitificar la donación. Es un acto de amor real.',
      image: '👨‍🦱',
      color: '#3F8A4B'
    },
    {
      name: 'Patricia Solis',
      role: 'Voluntaria en DARte',
      content: 'Trabajar aquí me ha transformado. Ver cómo el museo inspira a las personas a ser donantes es lo más gratificante que he experimentado.',
      image: '👩‍💼',
      color: '#EECA44'
    }
  ]

  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-[#3F8A4B]/10 text-[#3F8A4B] px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-[#3F8A4B]/20">
            Historias Reales
          </span>
          <h2 className="section-title mb-4">
            Testimonios que Inspiran
          </h2>
          <p className="section-subtitle">
            Escucha las historias de personas cuyas vidas fueron transformadas por la donación de órganos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4"
              style={{ borderTopColor: testimonial.color }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" style={{ color: testimonial.color }} />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <p className="font-bold text-[#5F5FA2]">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Videos from Conferences */}
        <div className="mt-20 pt-20 border-t border-gray-200">
          {/* ESOT 2025 Videos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <span className="inline-block bg-[#EECA44]/20 text-[#EECA44] px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-[#EECA44]/40">
                Congreso Europeo de Trasplantes
              </span>
              <h3 className="text-3xl font-display font-bold text-[#3F8A4B] mb-2">
                ESOT 2025
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: 'Dr. Efestratos (Stratos) Chatzixiros',
                  role: 'Director de Donación de Órganos de la Organización Mundial de la Salud',
                  video: '/videos/ESOT_2025/efestratos-chatzixiros.mp4',
                  color: '#3F8A4B'
                },
                {
                  title: 'Mauricio Carvalho',
                  role: 'Vicepresidente de Asuntos Médicos, Bridge To Life',
                  video: '/videos/ESOT_2025/mauricio-carvalho.mp4',
                  color: '#CF423B'
                }
              ].map((speaker, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border-t-4 flex flex-col"
                  style={{ borderTopColor: speaker.color }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <video
                    controls
                    className="w-full bg-black flex-shrink-0"
                    style={{ aspectRatio: '9/16' }}
                  >
                    <source src={speaker.video} type="video/mp4" />
                    Tu navegador no soporta reproducción de videos.
                  </video>
                  <div className="p-6">
                    <p className="font-bold text-[#5F5FA2] mb-1">{speaker.title}</p>
                    <p className="text-sm text-gray-600">{speaker.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* WTC 2025 Videos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <span className="inline-block bg-[#5F5FA2]/20 text-[#5F5FA2] px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-[#5F5FA2]/40">
                Congreso Mundial de Trasplantes
              </span>
              <h3 className="text-3xl font-display font-bold text-[#CF423B] mb-2">
                WTC 2025
              </h3>
            </div>
            <div className="space-y-8">
              {/* Video Horizontal - DARte */}
              <motion.div
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border-t-4"
                style={{ borderTopColor: '#CF423B' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <video
                  controls
                  className="w-full bg-black"
                  style={{ aspectRatio: '16/9' }}
                >
                  <source src="/videos/WTC_2025/mencion_DARte.mp4" type="video/mp4" />
                  Tu navegador no soporta reproducción de videos.
                </video>
                <div className="p-6">
                  <p className="font-bold text-[#5F5FA2] mb-1">Ceremonia de Clausura - DARte</p>
                  <p className="text-sm text-gray-600">Video donde se menciona a DARte en la ceremonia de clausura, como uno de los 25 trabajos mas innovadores presentados</p>
                </div>
              </motion.div>

              {/* Videos Verticales - Jim y Virginia */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {[
                  {
                    title: 'Dr. Jim Rodrigue',
                    role: 'Director de Investigación y Análisis de Datos, Servicio de Donación de Órganos y Tejidos de Nueva Inglaterra',
                    video: '/videos/WTC_2025/jim-rodrigue.mp4',
                    color: '#3F8A4B'
                  },
                  {
                    title: 'Virginia Liuti',
                    role: 'Asesora Internacional, Organ Recovery Systems',
                    video: '/videos/WTC_2025/virginia-liuti.mp4',
                    color: '#EECA44'
                  }
                ].map((speaker, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border-t-4 flex flex-col"
                    style={{ borderTopColor: speaker.color }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: (index + 1) * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <video
                      controls
                      className="w-full bg-black flex-shrink-0"
                      style={{ aspectRatio: '9/16' }}
                    >
                      <source src={speaker.video} type="video/mp4" />
                      Tu navegador no soporta reproducción de videos.
                    </video>
                    <div className="p-6">
                      <p className="font-bold text-[#5F5FA2] mb-1">{speaker.title}</p>
                      <p className="text-sm text-gray-600">{speaker.role}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-[#3F8A4B]/10 to-[#CF423B]/10 rounded-2xl p-12 text-center border border-[#3F8A4B]/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-display font-bold text-[#3F8A4B] mb-4">
            Tu Historia También Puede Inspirar
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Si tienes una historia sobre donación de órganos que te gustaría compartir, contáctanos. Tu experiencia puede cambiar la vida de muchas personas.
          </p>
          <a href="#contacto" className="btn-primary inline-block">
            Comparte Tu Historia
          </a>
        </motion.div>
      </div>
    </section>
  )
}
