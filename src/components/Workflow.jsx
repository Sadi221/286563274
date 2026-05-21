import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { fadeInUp, stagger, viewport } from '../utils/animations'

const stepKeys = ['s1', 's2', 's3', 's4', 's5', 's6']
const stepIcons = { s1: '🏥', s2: '✅', s3: '📢', s4: '❤️', s5: '💊', s6: '📊' }
const stepNums  = { s1: '01', s2: '02', s3: '03', s4: '04', s5: '05', s6: '06' }

const lineVariant = {
  hidden:  { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Workflow() {
  const { t } = useTranslation()

  return (
    <section id="comment-ca-marche" className="py-14 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          className="text-center mb-16"
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.span variants={fadeInUp} className="inline-block bg-dss-light text-dss-green px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            {t('workflow.badge')}
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-dss-navy mb-4" style={{ fontSize: 'clamp(28px,4vw,48px)' }}>
            {t('workflow.title').split('\n').map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-dss-gray max-w-xl mx-auto leading-[1.8]">
            {t('workflow.description')}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-x-8 gap-y-10"
          variants={stagger(0.13, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {stepKeys.map((key, i) => (
            <motion.div key={key} variants={fadeInUp} className="relative">
              {i % 3 !== 2 && (
                <motion.div
                  className="hidden md:block absolute top-8 left-[calc(100%-16px)] w-8 h-0.5 bg-dss-green/30 origin-left"
                  variants={lineVariant}
                />
              )}
              <motion.div
                whileHover={{ y: -5, transition: { duration: 0.22 } }}
                className="bg-dss-sand rounded-2xl p-7 h-full border border-dss-green/10 cursor-default relative"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-dss-green text-white text-xs font-black flex items-center justify-center flex-shrink-0">
                    {stepNums[key]}
                  </span>
                  <span className="text-2xl">{stepIcons[key]}</span>
                </div>
                <h3 className="text-base font-bold text-dss-navy mb-2">{t(`workflow.steps.${key}.title`)}</h3>
                <p className="text-sm text-slate-600 leading-[1.8]">{t(`workflow.steps.${key}.desc`)}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={viewport}
        >
          <p className="text-dss-gray mb-5 text-sm">{t('workflow.ctaText')}</p>
          <motion.a
            href="https://www.jappoo-faju.org"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block bg-dss-green text-white px-9 py-4 rounded-xl font-extrabold text-sm shadow-lg hover:bg-dss-dark transition-colors"
          >
            {t('workflow.ctaBtn')}
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
