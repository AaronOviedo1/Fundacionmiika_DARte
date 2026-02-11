import { motion } from 'framer-motion'
import { UserCheck, MapPin, HandHeart, Heart } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function HowToHelp() {
  const { t } = useTranslation()

  const icons = [UserCheck, MapPin, HandHeart, Heart]
  const colors = ['#3F8A4B', '#EECA44', '#CF423B', '#5F5FA2']

  const ways = t('howToHelp.ways', { returnObjects: true })

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
            {t('howToHelp.badge')}
          </span>
          <h2 className="section-title mb-4">
            {t('howToHelp.title')}
          </h2>
          <p className="section-subtitle">
            {t('howToHelp.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {ways.map((way, index) => {
            const Icon = icons[index]
            const color = colors[index]
            return (
              <motion.div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-t-4"
                style={{ borderTopColor: color }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                {/* Icon */}
                <div className="p-4 rounded-lg mb-6 w-fit" style={{ backgroundColor: `${color}20` }}>
                  <Icon className="w-8 h-8" style={{ color }} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#5F5FA2] mb-3">{way.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed flex-grow">{way.description}</p>

                {/* CTA */}
                <motion.a
                  href="#contacto"
                  className="inline-block font-semibold transition-colors"
                  style={{ color }}
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
            {t('howToHelp.whyMattersTitle')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-lg font-bold text-[#EECA44] mb-4">{t('howToHelp.directAction.title')}</h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t('howToHelp.directAction.p1')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('howToHelp.directAction.p2')}
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#CF423B] mb-4">{t('howToHelp.systemicSupport.title')}</h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t('howToHelp.systemicSupport.p1')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('howToHelp.systemicSupport.p2')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
