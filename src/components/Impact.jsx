import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { fadeInUp, stagger, viewport } from '../utils/animations'

function AnimatedCounter({ from, to, suffix = '', duration = 1400 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [value, setValue] = useState(from)

  useEffect(() => {
    if (!isInView) return
    let startTime = null
    const step = (ts) => {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(from + (to - from) * eased))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [isInView, from, to, duration])

  return <span ref={ref}>{value}{suffix}</span>
}

const statsData = [
  { from: 2015, to: 2019, suffix: '', icon: '📅', key: 'founded' },
  { from: 0,    to: 3,    suffix: '', icon: '🎯', key: 'pillars' },
  { from: 0,    to: 2,    suffix: '', icon: '🏥', key: 'hospitals' },
  { from: 0,    to: 100,  suffix: '%', icon: '🔍', key: 'transparency' },
]

export default function Impact() {
  const { t } = useTranslation()

  return (
    <section id="impact" className="py-14 md:py-20 bg-dss-sand">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          className="text-center mb-12"
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.span variants={fadeInUp} className="inline-block bg-white text-dss-green px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            {t('impact.badge')}
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-dss-navy" style={{ fontSize: 'clamp(28px,4vw,44px)' }}>
            {t('impact.title').split('\n').map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={stagger(0.13)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {statsData.map(s => (
            <motion.div
              key={s.key}
              variants={fadeInUp}
              whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-6 text-center shadow-sm border border-slate-100 cursor-default"
            >
              <span className="text-3xl block mb-3">{s.icon}</span>
              <div className="font-serif font-black text-dss-green mb-1" style={{ fontSize: 'clamp(28px,3vw,40px)' }}>
                <AnimatedCounter from={s.from} to={s.to} suffix={s.suffix} />
              </div>
              <div className="text-sm font-bold text-dss-navy mb-1">{t(`impact.stats.${s.key}.label`)}</div>
              <div className="text-xs text-dss-gray">{t(`impact.stats.${s.key}.desc`)}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
