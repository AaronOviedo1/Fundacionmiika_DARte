import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function Miika() {
  const { t } = useTranslation()

  return (
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
  )
}
