import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function ContactAndMap() {
  const { t } = useTranslation()

  const contactData = [
    {
      icon: MapPin,
      title: t('contact.info.location'),
      items: t('contact.info.locationItems', { returnObjects: true }),
      color: '#3F8A4B'
    },
    {
      icon: Phone,
      title: t('contact.info.phone'),
      items: t('contact.info.phoneItems', { returnObjects: true }),
      color: '#EECA44'
    },
    {
      icon: Mail,
      title: t('contact.info.email'),
      items: t('contact.info.emailItems', { returnObjects: true }),
      color: '#CF423B'
    },
    {
      icon: Clock,
      title: t('contact.info.hours'),
      items: t('contact.info.hoursItems', { returnObjects: true }),
      color: '#5F5FA2'
    }
  ]

  const subjectOptions = t('contact.form.subjectOptions', { returnObjects: true })

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-[#3F8A4B]/5 to-[#5F5FA2]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-[#3F8A4B]/10 text-[#3F8A4B] px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-[#3F8A4B]/20">
            {t('contact.badge')}
          </span>
          <h2 className="section-title mb-4">
            {t('contact.title')}
          </h2>
          <p className="section-subtitle">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {contactData.map((contact, index) => {
              const Icon = contact.icon
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border-l-4"
                  style={{ borderLeftColor: contact.color }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg" style={{ backgroundColor: `${contact.color}20` }}>
                      <Icon className="w-6 h-6" style={{ color: contact.color }} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#5F5FA2] mb-2">{contact.title}</h3>
                      <div className="space-y-1">
                        {contact.items.map((item, idx) => (
                          <p key={idx} className="text-gray-700 text-sm">{item}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="bg-white rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onSubmit={(e) => {
              e.preventDefault()
              alert(t('contact.form.successAlert'))
            }}
          >
            <h3 className="text-2xl font-display font-bold text-[#3F8A4B] mb-6">
              {t('contact.form.title')}
            </h3>

            <div className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-[#5F5FA2] mb-2">{t('contact.form.name')}</label>
                <input
                  type="text"
                  placeholder={t('contact.form.namePlaceholder')}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#3F8A4B] transition-colors"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-[#5F5FA2] mb-2">{t('contact.form.emailLabel')}</label>
                <input
                  type="email"
                  placeholder={t('contact.form.emailPlaceholder')}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#3F8A4B] transition-colors"
                  required
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-semibold text-[#5F5FA2] mb-2">{t('contact.form.subject')}</label>
                <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#3F8A4B] transition-colors">
                  {subjectOptions.map((option, idx) => (
                    <option key={idx}>{option}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-[#5F5FA2] mb-2">{t('contact.form.message')}</label>
                <textarea
                  rows="5"
                  placeholder={t('contact.form.messagePlaceholder')}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#3F8A4B] transition-colors resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full btn-primary text-lg font-semibold py-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t('contact.form.submit')}
              </motion.button>
            </div>
          </motion.form>
        </div>

        {/* Map Section */}
        <motion.div
          className="rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="aspect-[16/5] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3485.917710663196!2d-110.95046102487599!3d29.108110675408422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ce85004d4d3d5f%3A0x28a445d56332883c!2sCentro%20DARte%20-%20Espacio%20educativo%20para%20la%20donaci%C3%B3n%20y%20la%20cultura!5e0!3m2!1ses-419!2smx!4v1769794857396!5m2!1ses-419!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
