import { motion } from 'framer-motion'
import { UserCheck, MapPin, HandHeart, Heart } from 'lucide-react'

export default function HowToHelp() {
  const ways = [
    {
      icon: UserCheck,
      title: 'Regístrate como Donante',
      description: 'El primer paso para salvar vidas. Regístrate en el Registro Nacional de Donantes.',
      color: '#3F8A4B',
      cta: 'Registrarme Ahora'
    },
    {
      icon: MapPin,
      title: 'Visita el Museo',
      description: 'Aprende sobre donación de órganos en nuestro museo. Una experiencia transformadora te espera.',
      color: '#EECA44',
      cta: 'Planificar Visita'
    },
    {
      icon: HandHeart,
      title: 'Sé Voluntario',
      description: 'Únete a nuestro equipo de voluntarios y ayuda a educar a la comunidad.',
      color: '#CF423B',
      cta: 'Voluntariarme'
    },
    {
      icon: Heart,
      title: 'Haz una Donación',
      description: 'Contribuye financieramente para expandir nuestros programas educativos.',
      color: '#5F5FA2',
      cta: 'Donar Ahora'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-[#3F8A4B]/5 to-[#5F5FA2]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-[#3F8A4B]/10 text-[#3F8A4B] px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-[#3F8A4B]/20">
            Toma Acción
          </span>
          <h2 className="section-title mb-4">
            ¿Cómo Puedes Ayudar?
          </h2>
          <p className="section-subtitle">
            Existen múltiples formas de ser parte de la misión de DARte. Elige la que mejor se ajuste a ti.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {ways.map((way, index) => {
            const Icon = way.icon
            return (
              <motion.div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-t-4"
                style={{ borderTopColor: way.color }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                {/* Icon */}
                <div className="p-4 rounded-lg mb-6 w-fit" style={{ backgroundColor: `${way.color}20` }}>
                  <Icon className="w-8 h-8" style={{ color: way.color }} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#5F5FA2] mb-3">{way.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed flex-grow">{way.description}</p>

                {/* CTA */}
                <motion.a
                  href="#contacto"
                  className="inline-block font-semibold transition-colors"
                  style={{ color: way.color }}
                  whileHover={{ x: 5 }}
                >
                  {way.cta} →
                </motion.a>
              </motion.div>
            )
          })}
        </div>

        {/* Why These Ways Matter */}
        <motion.div
          className="bg-white rounded-2xl p-12 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-display font-bold text-[#3F8A4B] mb-8">
            Por qué Cada Acción Importa
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-lg font-bold text-[#EECA44] mb-4">Acción Directa</h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cuando te registras como donante, contribuyes directamente a la red de salvamento de vidas. Cada donante potencial es una chispa de esperanza para miles de personas en lista de espera.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Visitar el museo te permite experimentar firsthand cómo la donación transforma comunidades, y después puedes compartir esa experiencia con tu red.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#CF423B] mb-4">Apoyo Sistémico</h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                Los voluntarios y donantes nos permiten expandir nuestros programas educativos a más comunidades y escuelas.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Juntos, creamos un movimiento de conciencia que cambia la cultura alrededor de la donación de órganos en México.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
