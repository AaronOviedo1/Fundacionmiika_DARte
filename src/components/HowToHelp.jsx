import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { UserCheck, MapPin, HandHeart, Heart } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { db } from '../firebase'
import { collection, addDoc, doc, getDoc, updateDoc, setDoc, increment } from 'firebase/firestore'

export default function HowToHelp() {
  const { t } = useTranslation()

  const icons = [UserCheck, MapPin, HandHeart, Heart]
  const colors = ['#3F8A4B', '#EECA44', '#CF423B', '#5F5FA2']

  const ways = t('howToHelp.ways', { returnObjects: true })

  const [donorName, setDonorName] = useState('')
  const [donorCount, setDonorCount] = useState(0)
  const [registered, setRegistered] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const statsRef = doc(db, 'stats', 'donors')
        const statsSnap = await getDoc(statsRef)
        if (statsSnap.exists()) {
          setDonorCount(statsSnap.data().total || 0)
        }
      } catch {
        // Fallback to localStorage if Firebase is not configured
        const count = parseInt(localStorage.getItem('darteDonorCount') || '0', 10)
        setDonorCount(count)
      }
    }
    fetchCount()
  }, [])

  const handleRegister = async (e) => {
    e.preventDefault()
    if (!donorName.trim() || loading) return

    setLoading(true)
    try {
      // Save donor to Firestore
      await addDoc(collection(db, 'donors'), {
        name: donorName.trim(),
        createdAt: new Date().toISOString(),
      })

      // Increment counter
      const statsRef = doc(db, 'stats', 'donors')
      const statsSnap = await getDoc(statsRef)
      if (statsSnap.exists()) {
        await updateDoc(statsRef, { total: increment(1) })
      } else {
        await setDoc(statsRef, { total: 1 })
      }

      setDonorCount((prev) => prev + 1)
      setDonorName('')
      setRegistered(true)
      setTimeout(() => setRegistered(false), 3000)
    } catch {
      // Fallback to localStorage
      const donors = JSON.parse(localStorage.getItem('darteDonors') || '[]')
      donors.push({ name: donorName.trim(), date: new Date().toISOString() })
      localStorage.setItem('darteDonors', JSON.stringify(donors))
      const newCount = donorCount + 1
      localStorage.setItem('darteDonorCount', String(newCount))
      setDonorCount(newCount)
      setDonorName('')
      setRegistered(true)
      setTimeout(() => setRegistered(false), 3000)
    } finally {
      setLoading(false)
    }
  }

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <div className="p-4 rounded-lg mb-6 w-fit" style={{ backgroundColor: `${color}20` }}>
                  <Icon className="w-8 h-8" style={{ color }} />
                </div>

                <h3 className="text-xl font-bold text-[#5F5FA2] mb-3">{way.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed flex-grow">{way.description}</p>

                {index === 0 ? (
                  <motion.a
                    href="#donor-register"
                    className="inline-block font-semibold transition-colors"
                    style={{ color }}
                    whileHover={{ x: 5 }}
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById('donor-register')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                    }}
                  >
                    {way.cta} →
                  </motion.a>
                ) : (
                  <motion.div whileHover={{ x: 5 }}>
                    <Link
                      to="/contacto"
                      className="inline-block font-semibold transition-colors"
                      style={{ color }}
                    >
                      {way.cta} →
                    </Link>
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Donor Registration + Counter */}
        <motion.div
          id="donor-register"
          className="mt-12 bg-white rounded-2xl p-8 md:p-12 shadow-lg border-t-4 border-[#3F8A4B]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto text-center">
            {donorCount > 0 && (
              <p className="text-lg text-gray-700 mb-6">
                {t('howToHelp.counterPrefix')}{' '}
                <span className="text-4xl font-display font-bold text-[#3F8A4B]">{donorCount}</span>{' '}
                {t('howToHelp.counterSuffix')}
              </p>
            )}

            <form onSubmit={handleRegister} className="flex flex-col sm:flex-row gap-3 items-stretch">
              <input
                type="text"
                value={donorName}
                onChange={(e) => setDonorName(e.target.value)}
                placeholder={t('howToHelp.namePlaceholder')}
                className="flex-1 px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3F8A4B] focus:border-transparent"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-3 bg-[#3F8A4B] text-white font-semibold rounded-lg hover:bg-[#3F8A4B]/90 transition-colors disabled:opacity-50 whitespace-nowrap"
              >
                {loading ? '...' : ways[0]?.cta}
              </button>
            </form>

            <AnimatePresence>
              {registered && (
                <motion.p
                  className="text-[#3F8A4B] font-semibold mt-4"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  {t('howToHelp.registeredMessage')}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
