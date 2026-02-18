import { motion } from 'framer-motion'
import { Users, Heart, TrendingUp, BarChart3, Clock, Skull, ListOrdered, AlertTriangle, Activity } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function Statistics() {
  const { t } = useTranslation()

  const icons = [Users, Heart, TrendingUp, BarChart3]
  const colors = ['#3F8A4B', '#CF423B', '#EECA44', '#5F5FA2']
  const statsData = t('statistics.stats', { returnObjects: true })
  const countries = t('statistics.countries', { returnObjects: true })
  const waitingListStats = t('statistics.waitingListStats', { returnObjects: true })
  const diseases = t('statistics.diseases', { returnObjects: true })

  const maxRate = Math.max(...countries.map(c => c.rate))

  const waitingIcons = [Clock, Skull, ListOrdered, AlertTriangle]
  const waitingColors = ['#CF423B', '#5F5FA2', '#EECA44', '#3F8A4B']

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

        {/* Waiting List Urgency */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-display font-bold text-[#CF423B] mb-2 text-center">
            {t('statistics.waitingListTitle')}
          </h3>
          <p className="text-gray-600 mb-8 text-center">
            {t('statistics.waitingListSubtitle')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {waitingListStats.map((stat, index) => {
              const Icon = waitingIcons[index]
              const color = waitingColors[index]
              return (
                <motion.div
                  key={index}
                  className={`rounded-2xl p-6 text-center border-2 ${
                    stat.highlight
                      ? 'bg-[#CF423B]/5 border-[#CF423B]'
                      : 'bg-white border-gray-200'
                  }`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="inline-block p-3 rounded-lg mb-4" style={{ backgroundColor: `${color}20` }}>
                    <Icon className="w-6 h-6" style={{ color }} />
                  </div>
                  <p className="text-4xl font-display font-bold mb-2" style={{ color }}>
                    {stat.number}
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">{stat.label}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Common Diseases */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-display font-bold text-[#5F5FA2] mb-2 text-center">
            {t('statistics.diseasesTitle')}
          </h3>
          <p className="text-gray-600 mb-8 text-center">
            {t('statistics.diseasesSubtitle')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diseases.map((disease, index) => (
              <motion.div
                key={index}
                className={`rounded-2xl p-6 border-2 transition-all ${
                  disease.requiresTransplant
                    ? 'bg-[#CF423B]/5 border-[#CF423B]/30'
                    : 'bg-gray-50 border-gray-200'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="inline-block p-2 rounded-lg" style={{
                    backgroundColor: disease.requiresTransplant ? '#CF423B20' : '#5F5FA220'
                  }}>
                    <Activity className="w-5 h-5" style={{
                      color: disease.requiresTransplant ? '#CF423B' : '#5F5FA2'
                    }} />
                  </div>
                  {disease.requiresTransplant && (
                    <span className="text-xs font-semibold bg-[#CF423B] text-white px-2 py-1 rounded-full">
                      {t('statistics.diseasesTransplantBadge')}
                    </span>
                  )}
                </div>

                <h4 className={`text-lg font-bold mb-2 ${
                  disease.requiresTransplant ? 'text-[#CF423B]' : 'text-[#5F5FA2]'
                }`}>
                  {disease.name}
                </h4>

                <div className="space-y-1 text-sm text-gray-600">
                  <p>{disease.prevalence}</p>
                  <p className="font-semibold text-gray-800">{disease.deaths}</p>
                  {disease.requiresTransplant && disease.organ && (
                    <p className="text-[#CF423B] font-semibold mt-2">
                      → {disease.organ}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Country Comparison */}
        <motion.div
          className="bg-gradient-to-r from-[#3F8A4B]/10 to-[#5F5FA2]/10 rounded-2xl p-8 border border-[#3F8A4B]/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-display font-bold text-[#3F8A4B] mb-2">
            {t('statistics.comparisonTitle')}
          </h3>
          <p className="text-gray-600 mb-8">
            {t('statistics.comparisonSubtitle')}
          </p>
          <div className="space-y-4">
            {countries.map((country, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-28 sm:w-36 flex items-center gap-2 shrink-0">
                  <span className="text-xl">{country.flag}</span>
                  <span className={`text-sm font-semibold ${country.highlight ? 'text-[#CF423B]' : 'text-gray-700'}`}>
                    {country.name}
                  </span>
                </div>
                <div className="flex-1 bg-gray-200 rounded-full h-8 overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full flex items-center justify-end pr-3 ${
                      country.highlight
                        ? 'bg-[#CF423B]'
                        : 'bg-[#3F8A4B]'
                    }`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(country.rate / maxRate) * 100}%` }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-white text-xs font-bold whitespace-nowrap">
                      {country.label}
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
