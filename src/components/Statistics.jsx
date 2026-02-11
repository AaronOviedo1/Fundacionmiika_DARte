import { motion } from 'framer-motion'
import { Users, Heart, TrendingUp, Award } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function Statistics() {
  const { t } = useTranslation()

  const icons = [Users, Heart, TrendingUp, Award]
  const colors = ['#3F8A4B', '#CF423B', '#EECA44', '#5F5FA2']
  const statsData = t('statistics.stats', { returnObjects: true })

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
            {t('statistics.badge')}
          </span>
          <h2 className="section-title mb-4">
            {t('statistics.title')}
          </h2>
          <p className="section-subtitle">
            {t('statistics.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {statsData.map((stat, index) => {
            const Icon = icons[index]
            const color = colors[index]
            return (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-2xl p-8 text-white"
                style={{ backgroundColor: color }}
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
            {t('statistics.importanceTitle')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(t('statistics.importance', { returnObjects: true })).map((item, index) => (
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
