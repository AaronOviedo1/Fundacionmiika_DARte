import { motion } from 'framer-motion'
import { Heart, Users, Stethoscope, Lightbulb } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function AboutAndMiika() {
  const { t } = useTranslation()

  return (
    <>
      {/* About DARte Section */}
      <section id="sobre" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-[#3F8A4B]/10 text-[#3F8A4B] px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-[#3F8A4B]/20">
              {t('about.badge')}
            </span>
            <h2 className="section-title mb-4">
              {t('about.title')}
            </h2>
            <p className="section-subtitle">
              {t('about.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left: DARte Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-display font-bold text-[#3F8A4B] mb-6">
                {t('about.whatIs')}
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                {t('about.whatIsDesc')}
              </p>
              <ul className="space-y-4 mb-8">
                {(t('about.list', { returnObjects: true })).map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-[#EECA44] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="bg-[#3F8A4B]/5 border-l-4 border-[#3F8A4B] p-6 rounded">
                <p className="text-[#3F8A4B] font-semibold text-lg">{t('about.locationLabel')}</p>
                <p className="text-gray-700 mt-2">{t('about.locationAddress')}</p>
              </div>
            </motion.div>

            {/* Right: Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#3F8A4B]/10 to-[#EECA44]/10 rounded-3xl p-8 border border-[#3F8A4B]/20"
            >
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Heart, text: t('about.pillars.esperanza'), color: '#3F8A4B' },
                  { icon: Users, text: t('about.pillars.comunidad'), color: '#EECA44' },
                  { icon: Lightbulb, text: t('about.pillars.educacion'), color: '#CF423B' },
                  { icon: Stethoscope, text: t('about.pillars.medicina'), color: '#5F5FA2' }
                ].map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={index}
                      className="text-center p-6 bg-white rounded-xl shadow-md"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="inline-block p-3 rounded-lg mb-4" style={{ backgroundColor: `${item.color}20` }}>
                        <Icon className="w-6 h-6" style={{ color: item.color }} />
                      </div>
                      <p className="font-semibold text-gray-800">{item.text}</p>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fundación Miika Section */}
      <section id="miika" className="py-20 bg-gradient-to-r from-[#3F8A4B]/5 to-[#5F5FA2]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-[#CF423B]/10 text-[#CF423B] px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-[#CF423B]/20">
              {t('miika.badge')}
            </span>
            <h2 className="section-title mb-4">
              {t('miika.title')}
            </h2>
            <p className="section-subtitle">
              {t('miika.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Logo y descripción */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center lg:items-start"
            >
              <img src="/images/fundacion Miika.png" alt="Fundación Miika" className="h-42 w-auto mb-8 rounded" />
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                {t('miika.description')}
              </p>
            </motion.div>

            {/* Servicios de Miika */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {(t('miika.services', { returnObjects: true })).map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#EECA44]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <p className="text-lg font-bold text-[#3F8A4B] mb-3">{service.title}</p>
                  <p className="text-gray-700 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
