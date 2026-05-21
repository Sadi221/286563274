import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { fadeInUp, scaleIn, stagger, viewport } from '../utils/animations'

const partnerKeys = ['fann', 'dalalJamm']
const partnerIcons = { fann: '🏥', dalalJamm: '🏨' }

export default function Partners() {
  const { t } = useTranslation()

  return (
    <section id="partenaires" className="py-14 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          className="text-center mb-16"
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.span variants={fadeInUp} className="inline-block bg-dss-light text-dss-green px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            {t('partners.badge')}
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-dss-navy mb-4" style={{ fontSize: 'clamp(28px,4vw,44px)' }}>
            {t('partners.title').split('\n').map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-dss-gray max-w-xl mx-auto leading-[1.8]">
            {t('partners.description')}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6 mb-12"
          variants={stagger(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {partnerKeys.map(key => (
            <motion.div
              key={key}
              variants={fadeInUp}
              whileHover={{ y: -4, transition: { duration: 0.22 } }}
              className="bg-dss-light rounded-2xl p-8 border border-dss-green/15"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-dss-green rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                  {partnerIcons[key]}
                </div>
                <div>
                  <span className="text-xs font-bold text-dss-green uppercase tracking-widest">{t('partners.medicalPartner')}</span>
                  <h3 className="text-xl font-bold text-dss-navy mt-1 mb-1">{t(`partners.${key}.name`)}</h3>
                  <div className="text-xs text-dss-gray mb-3">📍 Dakar, Sénégal</div>
                  <p className="text-sm text-slate-600 leading-[1.8]">{t(`partners.${key}.desc`)}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="bg-dss-green rounded-3xl p-10 md:p-14 text-center"
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <h3 className="font-serif text-2xl font-bold text-white mb-3">
            {t('partners.ctaTitle')}
          </h3>
          <p className="text-white/70 mb-8 max-w-lg mx-auto leading-[1.8]">
            {t('partners.ctaDesc')}
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block bg-white text-dss-green px-8 py-3.5 rounded-xl font-bold text-sm hover:shadow-xl transition-shadow"
          >
            {t('partners.ctaBtn')}
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
