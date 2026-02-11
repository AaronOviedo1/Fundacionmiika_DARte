import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function Testimonials() {
  const { t } = useTranslation()

  const images = ['👩‍🦰', '👨‍💼', '👨‍⚕️', '👩‍🏫', '👨‍🦱', '👩‍💼']
  const colors = ['#3F8A4B', '#EECA44', '#CF423B', '#5F5FA2', '#3F8A4B', '#EECA44']

  const esotVideos = [
    '/videos/ESOT_2025/efestratos-chatzixiros.mp4',
    '/videos/ESOT_2025/mauricio-carvalho.mp4'
  ]
  const esotColors = ['#3F8A4B', '#CF423B']

  const wtcVideos = [
    '/videos/WTC_2025/jim-rodrigue.mp4',
    '/videos/WTC_2025/virginia-liuti.mp4'
  ]
  const wtcColors = ['#3F8A4B', '#EECA44']

  const testimonialItems = t('testimonials.items', { returnObjects: true })
  const esotSpeakers = t('testimonials.esotSpeakers', { returnObjects: true })
  const wtcSpeakers = t('testimonials.wtcSpeakers', { returnObjects: true })

  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-[#3F8A4B]/10 text-[#3F8A4B] px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-[#3F8A4B]/20">
            {t('testimonials.badge')}
          </span>
          <h2 className="section-title mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="section-subtitle">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialItems.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4"
              style={{ borderTopColor: colors[index] }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" style={{ color: colors[index] }} />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="text-4xl">{images[index]}</div>
                <div>
                  <p className="font-bold text-[#5F5FA2]">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Videos from Conferences */}
        <div className="mt-20 pt-20 border-t border-gray-200">
          {/* ESOT 2025 Videos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <span className="inline-block bg-[#EECA44]/20 text-[#EECA44] px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-[#EECA44]/40">
                {t('testimonials.esotBadge')}
              </span>
              <h3 className="text-3xl font-display font-bold text-[#3F8A4B] mb-2">
                {t('testimonials.esotTitle')}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {esotSpeakers.map((speaker, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border-t-4 flex flex-col"
                  style={{ borderTopColor: esotColors[index] }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <video
                    controls
                    className="w-full bg-black flex-shrink-0"
                    style={{ aspectRatio: '9/16' }}
                  >
                    <source src={esotVideos[index]} type="video/mp4" />
                    {t('testimonials.videoFallback')}
                  </video>
                  <div className="p-6">
                    <p className="font-bold text-[#5F5FA2] mb-1">{speaker.title}</p>
                    <p className="text-sm text-gray-600">{speaker.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* WTC 2025 Videos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <span className="inline-block bg-[#5F5FA2]/20 text-[#5F5FA2] px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-[#5F5FA2]/40">
                {t('testimonials.wtcBadge')}
              </span>
              <h3 className="text-3xl font-display font-bold text-[#CF423B] mb-2">
                {t('testimonials.wtcTitle')}
              </h3>
            </div>
            <div className="space-y-8">
              {/* Video Horizontal - DARte */}
              <motion.div
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border-t-4"
                style={{ borderTopColor: '#CF423B' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <video
                  controls
                  className="w-full bg-black"
                  style={{ aspectRatio: '16/9' }}
                >
                  <source src="/videos/WTC_2025/mencion_DARte.mp4" type="video/mp4" />
                  {t('testimonials.videoFallback')}
                </video>
                <div className="p-6">
                  <p className="font-bold text-[#5F5FA2] mb-1">{t('testimonials.wtcDarteTitle')}</p>
                  <p className="text-sm text-gray-600">{t('testimonials.wtcDarteDesc')}</p>
                </div>
              </motion.div>

              {/* Videos Verticales - Jim y Virginia */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {wtcSpeakers.map((speaker, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border-t-4 flex flex-col"
                    style={{ borderTopColor: wtcColors[index] }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: (index + 1) * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <video
                      controls
                      className="w-full bg-black flex-shrink-0"
                      style={{ aspectRatio: '9/16' }}
                    >
                      <source src={wtcVideos[index]} type="video/mp4" />
                      {t('testimonials.videoFallback')}
                    </video>
                    <div className="p-6">
                      <p className="font-bold text-[#5F5FA2] mb-1">{speaker.title}</p>
                      <p className="text-sm text-gray-600">{speaker.role}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-[#3F8A4B]/10 to-[#CF423B]/10 rounded-2xl p-12 text-center border border-[#3F8A4B]/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-display font-bold text-[#3F8A4B] mb-4">
            {t('testimonials.ctaTitle')}
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            {t('testimonials.ctaText')}
          </p>
          <a href="#contacto" className="btn-primary inline-block">
            {t('testimonials.ctaButton')}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
