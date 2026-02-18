import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function Innovation() {
  const { t } = useTranslation()

  return (
    <section id="innovacion" className="py-20 bg-gradient-to-r from-[#5F5FA2]/5 to-[#3F8A4B]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-[#5F5FA2]/10 text-[#5F5FA2] px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-[#5F5FA2]/20">
            {t('innovation.badge')}
          </span>
          <h2 className="section-title mb-4">
            {t('innovation.title')}
          </h2>
          <p className="section-subtitle">
            {t('innovation.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-[#5F5FA2] mb-4">
              {t('innovation.vrTitle')}
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {t('innovation.vrDescription')}
            </p>
            <ul className="space-y-3">
              {t('innovation.features', { returnObjects: true }).map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 text-gray-700"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#3F8A4B] shrink-0" />
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <video
              className="w-full aspect-video object-cover"
              controls
              preload="metadata"
              poster=""
            >
              <source src="/videos/Video_demo_VR_LifePark.mp4" type="video/mp4" />
              {t('innovation.videoFallback')}
            </video>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
