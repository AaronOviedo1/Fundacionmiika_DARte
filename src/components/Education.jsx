import { motion } from 'framer-motion'
import { BookOpen, Heart, Microscope, Users } from 'lucide-react'

export default function Education() {
  const programs = [
    {
      icon: Heart,
      title: 'Programa de Sensibilización',
      description: 'Sesiones interactivas para entender la importancia de la donación de órganos y su impacto en la vida.',
      audience: 'Público General'
    },
    {
      icon: BookOpen,
      title: 'Educación Escolar',
      description: 'Programas diseñados para estudiantes de primaria, secundaria y preparatoria sobre ética y salud.',
      audience: 'Estudiantes'
    },
    {
      icon: Microscope,
      title: 'Formación Profesional',
      description: 'Capacitación especializada para profesionales de la salud sobre trasplantes y cuidado de donantes.',
      audience: 'Profesionales'
    },
    {
      icon: Users,
      title: 'Apoyo a Comunidades',
      description: 'Talleres comunitarios sobre donación, derechos y recursos disponibles para pacientes en espera.',
      audience: 'Comunidad'
    },
  ]

  return (
    <section id="educacion" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block bg-darte-verde/10 text-darte-verde px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-darte-verde/20">
            Programas Educativos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-darte-azul mb-4">
            Educación para la Transformación
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestros programas educativos están diseñados para impactar a diferentes grupos y comunidades.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {programs.map((program, index) => {
            const Icon = program.icon
            return (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-200 hover:border-darte-verde hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-darte-verde/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-darte-verde" />
                </div>
                <h3 className="font-semibold text-darte-azul mb-2">{program.title}</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{program.description}</p>
                <span className="inline-block bg-darte-amarillo/10 text-darte-amarillo text-xs px-3 py-1 rounded-full border border-darte-amarillo/30 font-medium">
                  {program.audience}
                </span>
              </motion.div>
            )
          })}
        </div>

        {/* Impact Section */}
        <motion.div
          className="bg-gradient-to-r from-darte-verde/10 to-darte-azul/10 rounded-2xl p-12 border border-darte-verde/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0 }}
            >
              <p className="text-4xl font-bold text-darte-verde mb-2">+500</p>
              <p className="text-gray-700 font-medium">Estudiantes Capacitados</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <p className="text-4xl font-bold text-darte-azul mb-2">+50</p>
              <p className="text-gray-700 font-medium">Talleres Realizados</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-4xl font-bold text-darte-rojo mb-2">+1000</p>
              <p className="text-gray-700 font-medium">Vidas Impactadas</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-4xl font-bold text-darte-amarillo mb-2">100%</p>
              <p className="text-gray-700 font-medium">Dedicación a la Causa</p>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-darte-azul mb-6">
            ¿Interesado en nuestros programas educativos?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">Solicitar un Programa</button>
            <button className="btn-outline">Conocer Más</button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
