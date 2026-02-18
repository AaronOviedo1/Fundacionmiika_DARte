import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  const { t } = useTranslation()

  const faqs = t('faq.categories', { returnObjects: true })
  const allQuestions = faqs.flatMap(cat => cat.questions)

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-[#3F8A4B]/10 text-[#3F8A4B] px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-[#3F8A4B]/20">
            {t('faq.badge')}
          </span>
          <h2 className="section-title mb-4">
            {t('faq.title')}
          </h2>
          <p className="section-subtitle">
            {t('faq.subtitle')}
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {allQuestions.map((item, index) => (
            <motion.div
              key={index}
              className="border border-[#3F8A4B]/20 rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-6 bg-white hover:bg-[#3F8A4B]/5 transition-colors text-left"
              >
                <p className="font-semibold text-[#5F5FA2] pr-4">{item.q}</p>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-[#3F8A4B]" />
                </motion.div>
              </button>

              {/* Answer */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 bg-[#3F8A4B]/5 border-t border-[#3F8A4B]/20">
                  <p className="text-gray-700 leading-relaxed">{item.a}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Help */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-[#3F8A4B]/10 to-[#EECA44]/10 rounded-2xl p-12 text-center border border-[#3F8A4B]/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-display font-bold text-[#3F8A4B] mb-4">
            {t('faq.helpTitle')}
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            {t('faq.helpText')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto" className="btn-primary">
              {t('faq.helpContact')}
            </Link>
            <a href="https://wa.me/526621234567" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
