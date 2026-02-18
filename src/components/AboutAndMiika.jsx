import { motion } from 'framer-motion'
import { Target, Eye, Gem } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function About() {
  const { t, i18n } = useTranslation()

  const videoSrc = i18n.language === 'es'
    ? '/videos/que_es_darte_español.mp4'
    : '/videos/que_es_darte_ingles.mp4'

  return (
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

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-lg mb-12 max-w-4xl mx-auto"
        >
          <video
            key={videoSrc}
            className="w-full h-auto rounded-2xl"
            controls
            playsInline
            preload="metadata"
          >
            <source src={videoSrc} type="video/mp4" />
            {t('testimonials.videoFallback')}
          </video>
        </motion.div>

        {/* Misión, Visión y Valores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {[
            { icon: Target, title: t('about.mission.title'), text: t('about.mission.text'), color: '#3F8A4B' },
            { icon: Eye, title: t('about.vision.title'), text: t('about.vision.text'), color: '#5F5FA2' },
            { icon: Gem, title: t('about.values.title'), text: t('about.values.text'), color: '#EECA44' }
          ].map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md border-l-4 flex items-start gap-4"
                style={{ borderLeftColor: item.color }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-block p-3 rounded-lg shrink-0" style={{ backgroundColor: `${item.color}20` }}>
                  <Icon className="w-6 h-6" style={{ color: item.color }} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-gray-800 mb-1">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed text-sm">{item.text}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
