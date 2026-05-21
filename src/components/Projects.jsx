import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { fadeInUp, stagger, viewport } from '../utils/animations'

const projectsData = [
  { key: 'jappoo',        icon: '💊', link: 'https://www.jappoo-faju.org', active: true },
  { key: 'jardins',       icon: '🌾', link: null, active: false },
  { key: 'reforestation', icon: '🌳', link: null, active: false },
]

export default function Projects() {
  const { t } = useTranslation()

  return (
    <section id="projets" className="py-14 md:py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          className="text-center mb-16"
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.span variants={fadeInUp} className="inline-block bg-dss-light text-dss-green px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            {t('projects.badge')}
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-dss-navy mb-4" style={{ fontSize: 'clamp(28px,4vw,48px)' }}>
            {t('projects.title').split('\n').map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={stagger(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {projectsData.map(p => (
            <motion.div
              key={p.key}
              variants={fadeInUp}
              whileHover={{ y: -5, transition: { duration: 0.22 } }}
              className="bg-white rounded-2xl p-8 shadow-md shadow-black/5 flex flex-col"
            >
              <div className="flex justify-between items-start mb-5">
                <motion.span
                  className="text-4xl"
                  whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.4 } }}
                >{p.icon}</motion.span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${p.active ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                  {p.active ? t('projects.statusActive') : t('projects.statusDev')}
                </span>
              </div>
              <span className="text-xs font-bold text-dss-green uppercase tracking-widest mb-2">
                {t(`projects.${p.key}.tag`)}
              </span>
              <h3 className="text-xl font-bold text-dss-navy mb-3">{t(`projects.${p.key}.title`)}</h3>
              <p className="text-sm text-dss-gray leading-[1.8] flex-1">{t(`projects.${p.key}.desc`)}</p>
              {p.link && (
                <motion.a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-6 bg-dss-green text-white px-6 py-3 rounded-xl text-sm font-bold text-center hover:bg-dss-dark transition-colors"
                >
                  {t('projects.visitSite')}
                </motion.a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
