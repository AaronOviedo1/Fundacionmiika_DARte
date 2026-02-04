import { motion } from 'framer-motion'
import { Heart, Stethoscope, Users, Lightbulb } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: Heart,
      title: 'Educación sobre Donación',
      description: 'Aprende sobre la importancia vital de la donación de órganos y cómo puedes salvar vidas.'
    },
    {
      icon: Stethoscope,
      title: 'Perspectiva Médica',
      description: 'Explora los procesos médicos detrás de los trasplantes de órganos con recursos educativos.'
    },
    {
      icon: Users,
      title: 'Apoyo Integral',
      description: 'Fundación Miika brinda apoyo médico, psicológico y económico en el proceso de trasplante.'
    },
    {
      icon: Lightbulb,
      title: 'Cultura y Esperanza',
      description: 'Un espacio que combina arte, educación y la esperanza de nuevas oportunidades de vida.'
    },
  ]

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block bg-darte-verde/10 text-darte-verde px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-darte-verde/20">
            Sobre DARte
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-darte-azul mb-4">
            Un Espacio Único Dedicado a la Esperanza
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            DARte es el único museo en el mundo específicamente dedicado a la educación sobre donación de órganos. Ubicado en Hermosillo, Sonora, es un proyecto de la Fundación Miika, con el lema "Donando Esperanzas".
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold text-darte-azul mb-6">
              Misión y Propósito
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              DARte nace como respuesta a la necesidad global de educación sobre donación de órganos. Combinamos:
            </p>
            <ul className="space-y-4 mb-8">
              {['Educación científica', 'Sensibilización emocional', 'Apoyo integral', 'Esperanza y transformación'].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-darte-verde rounded-full" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-darte-verde/10 to-darte-azul/10 rounded-2xl p-8 border border-darte-verde/20"
          >
            <h3 className="text-2xl font-bold text-darte-azul mb-6">
              Fundación Miika
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              La Fundación Miika apoya de manera integral a pacientes y familias en el proceso previo al trasplante de órganos, brindando:
            </p>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border-l-4 border-darte-amarillo">
                <p className="font-semibold text-darte-azul mb-2">Apoyo Médico</p>
                <p className="text-sm text-gray-600">Orientación profesional en procesos médicos y trasplantes.</p>
              </div>
              <div className="bg-white rounded-lg p-4 border-l-4 border-darte-rojo">
                <p className="font-semibold text-darte-azul mb-2">Apoyo Psicológico</p>
                <p className="text-sm text-gray-600">Acompañamiento emocional durante todo el proceso.</p>
              </div>
              <div className="bg-white rounded-lg p-4 border-l-4 border-darte-verde">
                <p className="font-semibold text-darte-azul mb-2">Apoyo Económico</p>
                <p className="text-sm text-gray-600">Asistencia financiera para gastos asociados al trasplante.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-200 hover:border-darte-verde hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-darte-verde/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-darte-verde" />
                </div>
                <h4 className="font-semibold text-darte-azul mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
