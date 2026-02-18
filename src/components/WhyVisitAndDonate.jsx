import { motion } from 'framer-motion'
import { Users, Heart, CheckCircle, Brain } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function WhyVisitAndDonate() {
  const { t } = useTranslation()

  const benefitIcons = [Heart, CheckCircle, Brain, Users]

  return (
    <>
      {/* Why Donate */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-[#CF423B]/10 text-[#CF423B] px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-[#CF423B]/20">
              {t('whyDonate.badge')}
            </span>
            <h2 className="section-title mb-4">
              {t('whyDonate.title')}
            </h2>
            <p className="section-subtitle">
              {t('whyDonate.subtitle')}
            </p>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {(t('whyDonate.benefits', { returnObjects: true })).map((item, index) => {
                const Icon = benefitIcons[index]
                return (
                  <motion.div
                    key={index}
                    className="flex flex-col gap-4 bg-gradient-to-br from-[#3F8A4B]/10 to-[#EECA44]/10 rounded-xl p-6 border border-[#3F8A4B]/10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="p-3 bg-[#3F8A4B] rounded-lg w-fit">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-[#3F8A4B]">{item.title}</p>
                      <p className="text-gray-700 text-sm mt-1">{item.desc}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Myths vs Reality */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-display font-bold text-[#3F8A4B] mb-8 text-center">
              {t('whyDonate.mythsTitle')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(t('whyDonate.myths', { returnObjects: true })).map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 border-l-4 border-[#CF423B] shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <p className="text-sm text-gray-600 mb-2">❌ {t('whyDonate.mythLabel')}</p>
                  <p className="font-semibold text-gray-800 mb-4">{item.myth}</p>
                  <p className="text-sm text-gray-600 mb-2">✅ {t('whyDonate.realityLabel')}</p>
                  <p className="font-semibold text-[#3F8A4B]">{item.reality}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>
    </>
  )
}
