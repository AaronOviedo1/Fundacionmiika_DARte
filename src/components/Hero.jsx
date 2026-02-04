import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default function Hero() {
  const images = [
    '/images/darte-img02.jpg',
    '/images/darte-img03.jpg',
    '/images/darte-img04.jpg'
  ]

  return (
    <section id="inicio" className="relative bg-gradient-to-br from-white via-blue-50 to-green-50 pt-24 pb-20 overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        className="absolute top-10 right-5 w-80 h-80 bg-[#3F8A4B] opacity-5 rounded-full blur-3xl"
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 left-5 w-80 h-80 bg-[#EECA44] opacity-5 rounded-full blur-3xl"
        animate={{ y: [0, -50, 0] }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-3xl md:text-4xl font-display font-bold text-black mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              DARte: El único museo dedicado
              <span className="block">a la donación de órganos</span>
            </motion.h1>

            <motion.p
              className="text-lg text-gray-700 mb-8 leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Descubre un espacio educativo único donde la ciencia, la cultura y la esperanza se unen. Aprende sobre el impacto de la donación de órganos y cómo puedes salvar vidas.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <a href="#contacto" className="btn-primary hidden md:flex items-center justify-center gap-2 group text-lg">
                Visita el Museo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="border-l-4 border-[#3F8A4B] pl-4">
                <p className="text-3xl font-display font-bold text-[#3F8A4B]">1</p>
                <p className="text-sm text-gray-700">Museo único en el mundo</p>
              </div>
              <div className="border-l-4 border-[#EECA44] pl-4">
                <p className="text-3xl font-display font-bold text-[#E8CC5D]">1000+</p>
                <p className="text-sm text-gray-700">Vidas impactadas</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              className="relative h-96 sm:h-80 md:h-96"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#3F8A4B] to-[#EECA44] rounded-3xl opacity-20 blur-xl"></div>
              <div className="relative h-full bg-white rounded-3xl shadow-2xl overflow-hidden">
                <Swiper
                  modules={[Autoplay, Pagination]}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                    dynamicBullets: true,
                  }}
                  loop={true}
                  className="h-full swiper-hero"
                >
                  {images.map((image, index) => (
                    <SwiperSlide key={index} className="h-full">
                      <div className="h-full w-full flex items-center justify-center bg-gray-100">
                        <img
                          src={image}
                          alt={`DARte Imagen ${index + 1}`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Swiper Custom Styles */}
      <style>{`
        .swiper-hero .swiper-pagination-bullet {
          background-color: #3F8A4B;
          opacity: 0.6;
        }
        .swiper-hero .swiper-pagination-bullet-active {
          background-color: #3F8A4B;
          opacity: 1;
        }
        .swiper-hero .swiper-button-next,
        .swiper-hero .swiper-button-prev {
          color: #3F8A4B;
          background-color: rgba(255, 255, 255, 0.9);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .swiper-hero .swiper-button-next::after,
        .swiper-hero .swiper-button-prev::after {
          font-size: 18px;
          font-weight: bold;
        }
      `}</style>
    </section>
  )
}
