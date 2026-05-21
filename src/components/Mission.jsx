import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { fadeInUp, stagger, viewport } from '../utils/animations'

const pillarKeys = ['health', 'agriculture', 'climate']

const pillarMeta = [
  { icon: '🏥', bg: 'bg-dss-light',    border: 'border-dss-green/20',  overlay: 'bg-dss-green/50',  img: '/images/mission-sante.jpeg' },
  { icon: '🌱', bg: 'bg-[#D8F3DC]',   border: 'border-[#2D6A4F]/20', overlay: 'bg-[#2D6A4F]/45', img: '/images/mission-agriculture.jpg' },
  { icon: '🌍', bg: 'bg-[#FEF0EB]',   border: 'border-dss-coral/20', overlay: 'bg-dss-coral/40', img: '/images/mission-climat.jpg' },
]

export default function Mission() {
  const { t } = useTranslation()

  return (
    <section id="mission" className="py-14 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          className="text-center mb-16"
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.span variants={fadeInUp} className="inline-block bg-dss-light text-dss-green px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            {t('mission.badge')}
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-dss-navy mb-4" style={{ fontSize: 'clamp(28px,4vw,48px)' }}>
            {t('mission.title').split('\n').map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-dss-gray max-w-xl mx-auto leading-[1.8]">
            {t('mission.description')}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={stagger(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {pillarKeys.map((key, idx) => {
            const meta = pillarMeta[idx]
            return (
              <motion.div
                key={key}
                variants={fadeInUp}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className={`rounded-2xl overflow-hidden border ${meta.border} shadow-md shadow-black/5 cursor-default`}
              >
                <div className="h-52 relative overflow-hidden">
                  <img src={meta.img} alt={t(`mission.pillars.${key}.title`)} className="w-full h-full object-cover object-center" />
                  <div className={`absolute inset-0 ${meta.overlay}`} />
                  <span className="absolute top-4 left-4 text-3xl drop-shadow">{meta.icon}</span>
                </div>
                <div className={`${meta.bg} p-6`}>
                  <h3 className="text-lg font-bold text-dss-navy mb-2">{t(`mission.pillars.${key}.title`)}</h3>
                  <p className="text-sm text-slate-600 leading-[1.8]">{t(`mission.pillars.${key}.desc`)}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
