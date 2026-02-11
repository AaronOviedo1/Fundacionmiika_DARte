import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function WhatsAppButton() {
  const { t } = useTranslation()

  const phoneNumber = '526621234567'
  const message = t('whatsapp.message')
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 bg-[#3F8A4B] text-white rounded-full p-4 shadow-2xl hover:shadow-xl z-40"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5 }}
      whileHover={{ scale: 1.1, backgroundColor: '#2d6a38' }}
      whileTap={{ scale: 0.95 }}
      title={t('whatsapp.title')}
    >
      <MessageCircle className="w-6 h-6" />
    </motion.a>
  )
}
