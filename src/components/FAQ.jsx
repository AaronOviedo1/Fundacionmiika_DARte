import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      category: 'Sobre el Museo',
      questions: [
        {
          q: '¿Cuál es el costo de entrada al museo?',
          a: 'El acceso a DARte es gratuito para propósitos educativos. Contáctanos para información sobre tours grupales o eventos especiales.'
        },
        {
          q: '¿Cuáles son los horarios de apertura?',
          a: 'Lunes a viernes: 9:00 AM - 6:00 PM | Sábados: 10:00 AM - 4:00 PM | Domingos: Cerrado. Para eventos especiales, contáctanos.'
        },
        {
          q: '¿Cómo llego al museo?',
          a: 'Estamos ubicados en Angela Peralta 35, Col. Periodista, Hermosillo, Sonora. Disponemos de estacionamiento y acceso para personas con discapacidad.'
        },
        {
          q: '¿Puedo llevar a mi grupo escolar?',
          a: 'Sí, ofrecemos tours especiales y programas educativos para escuelas. Contáctanos con anticipación para organizar tu visita.'
        }
      ]
    },
    {
      category: 'Sobre Donación',
      questions: [
        {
          q: '¿A qué edad se puede ser donante?',
          a: 'Puedes registrarte desde los 18 años. Sin embargo, menores de edad pueden ser donantes con consentimiento de sus padres.'
        },
        {
          q: '¿Cuáles son los tipos de donación?',
          a: 'Existen dos tipos: donación de órganos (después de la muerte) y donación en vida (riñón o lóbulo del hígado).'
        },
        {
          q: '¿Cuándo deja de ser válido mi registro?',
          a: 'Tu registro es válido de por vida, pero puedes revocar tu decisión en cualquier momento.'
        },
        {
          q: '¿Donar afecta mi funeral?',
          a: 'No. El cuerpo es tratado con el máximo respeto durante el proceso de donación. Los arreglos funerarios no se ven afectados.'
        },
        {
          q: '¿Si soy donante, ¿recibiré la misma atención médica?',
          a: 'Sí. Los donantes reciben exactamente la misma calidad de atención que cualquier otro paciente. Tu decisión es privada.'
        }
      ]
    },
    {
      category: 'Fundación Miika',
      questions: [
        {
          q: '¿Cómo puede ayudar Fundación Miika a mi familia?',
          a: 'Ofrecemos apoyo médico, psicológico y económico integral durante el proceso de trasplante. Contáctanos para una consulta.'
        },
        {
          q: '¿Cuáles son los gastos que cubre la Fundación?',
          a: 'Cubrimos costos médicos, transporte, alojamiento y otros gastos asociados al trasplante que no sean cubiertos por servicios de salud.'
        },
        {
          q: '¿Cómo me registro con Fundación Miika?',
          a: 'Llámanos al número de contacto o visita nuestras oficinas. Te ayudaremos a entender todos los beneficios disponibles para ti.'
        }
      ]
    },
    {
      category: 'Voluntariado',
      questions: [
        {
          q: '¿Cómo me puedo hacer voluntario en DARte?',
          a: 'Contáctanos a través del formulario de contacto. Estamos buscando personas apasionadas por la donación de órganos.'
        },
        {
          q: '¿Qué requisitos tengo que cumplir?',
          a: 'Necesitas ser mayor de 18 años, tener entusiasmo y disponibilidad. Ofrecemos capacitación completa.'
        },
        {
          q: '¿Es remunerado el voluntariado?',
          a: 'El voluntariado es un acto de amor y servicio. No es remunerado, pero sí invaluable para la comunidad.'
        }
      ]
    }
  ]

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
            Dudas y Respuestas
          </span>
          <h2 className="section-title mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="section-subtitle">
            Resolvemos tus dudas sobre el museo, donación de órganos y Fundación Miika.
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
            ¿No encontraste tu respuesta?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Contáctanos directamente. Nuestro equipo está disponible para responder tus preguntas específicas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contacto" className="btn-primary">
              Contacto
            </a>
            <a href="https://wa.me/526621234567" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
