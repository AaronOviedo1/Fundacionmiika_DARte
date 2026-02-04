import { motion } from 'framer-motion'
import { Users, Heart, TrendingUp, Award } from 'lucide-react'

export default function Statistics() {
  const stats = [
    {
      icon: Users,
      number: '17,000+',
      label: 'Personas en lista de espera en México',
      color: '#3F8A4B',
      bg: '#3F8A4B'
    },
    {
      icon: Heart,
      number: '6,000+',
      label: 'Trasplantes realizados anualmente',
      color: '#CF423B',
      bg: '#CF423B'
    },
    {
      icon: TrendingUp,
      number: '1 de 4',
      label: 'Mexicanos puede ser donante',
      color: '#EECA44',
      bg: '#EECA44'
    },
    {
      icon: Award,
      number: '1',
      label: 'Único museo en el mundo',
      color: '#5F5FA2',
      bg: '#5F5FA2'
    }
  ]

  return (
    <section id="estadisticas" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-[#3F8A4B]/10 text-[#3F8A4B] px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-[#3F8A4B]/20">
            Datos Impactantes
          </span>
          <h2 className="section-title mb-4">
            Estadísticas de Donación en México
          </h2>
          <p className="section-subtitle">
            Conoce los números que reflejan la urgencia y el impacto de la donación de órganos en nuestro país.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-2xl p-8 text-white"
                style={{ backgroundColor: stat.bg }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {/* Background animation */}
                <motion.div
                  className="absolute inset-0 bg-white/10"
                  animate={{ opacity: [0.1, 0.2, 0.1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                <div className="relative z-10">
                  <div className="mb-4 inline-block p-3 bg-white/20 rounded-lg">
                    <Icon className="w-6 h-6" />
                  </div>
                  <p className="text-5xl font-display font-bold mb-2">{stat.number}</p>
                  <p className="text-white/90 text-lg leading-relaxed">{stat.label}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          className="bg-gradient-to-r from-[#3F8A4B]/10 to-[#5F5FA2]/10 rounded-2xl p-8 border border-[#3F8A4B]/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-display font-bold text-[#3F8A4B] mb-6">
            ¿Por qué es importante la donación?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Salva Vidas',
                description: 'Un donante puede salvar hasta 8 vidas diferentes mediante donación de órganos, además de mejorar la calidad de vida de otros pacientes.'
              },
              {
                title: 'Segundo Chance',
                description: 'Los trasplantes ofrecen una mejor calidad de vida comparado con la diálisis u otros tratamientos de largo plazo.'
              },
              {
                title: 'Legado Duradero',
                description: 'La decisión de donar es un acto de solidaridad que impacta a múltiples familias y comunidades por años.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-bold text-[#5F5FA2] mb-3">{item.title}</h4>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
