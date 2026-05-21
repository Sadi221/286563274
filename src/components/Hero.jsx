import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { fadeInUp, stagger, viewport } from '../utils/animations'

export default function Hero() {
  const { t } = useTranslation()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  return (
    <section ref={ref} className="min-h-screen relative flex items-center pt-24 pb-20 overflow-hidden">
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{
          backgroundImage: 'url(/images/hero.jpeg)',
          filter: 'brightness(0.48)',
          y: bgY,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/25" />
      <div className="absolute bottom-0 left-0 w-2/5 h-1 bg-gradient-to-r from-dss-green to-transparent" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <motion.div
          className="max-w-2xl"
          variants={stagger(0.12, 0.1)}
          initial="hidden"
          animate="visible"
        >
          {/* Logo + name */}
          <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-10">
            <img src="/Logo_DSS.png" alt="DSS" className="w-16 h-16 object-contain" />
            <div>
              <div className="text-sm font-extrabold text-white tracking-widest uppercase">
                Développement Solidaire & Santé
              </div>
              <div className="text-[11px] text-white/45 tracking-[3px] mt-1 uppercase">DSS — Paris, France</div>
            </div>
          </motion.div>

          {/* Badge */}
          <motion.div variants={fadeInUp}
            className="inline-flex items-center gap-2 bg-dss-green/35 backdrop-blur-sm border border-green-300/30 rounded-full px-4 py-2 mb-7">
            <span className="text-sm">🌍</span>
            <span className="text-[#A8E6C3] text-xs font-bold tracking-widest uppercase">
              {t('hero.badge')}
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="font-serif font-black text-white mb-6 leading-[1.05]"
            style={{ fontSize: 'clamp(38px,6vw,72px)' }}
          >
            {t('hero.subtitle')}<br />
            <span className="text-[#A8E6C3]">{t('hero.tagline').split('&')[0]}</span>
            {t('hero.tagline').includes('&') ? <>&<br />{t('hero.tagline').split('& ')[1]}</> : null}
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-lg text-white leading-[1.8] mb-8 max-w-lg">
            {t('hero.description')}
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mb-12">
            <motion.a
              href="#mission"
              className="inline-block bg-white text-dss-green px-8 py-3.5 rounded-xl text-sm font-extrabold shadow-xl hover:shadow-2xl transition-shadow"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              {t('hero.ctaMission')}
            </motion.a>
            <motion.a
              href="#don"
              className="inline-block bg-dss-green/80 backdrop-blur-sm border border-dss-green text-white px-8 py-3.5 rounded-xl text-sm font-bold hover:bg-dss-green transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              {t('hero.ctaDonate')}
            </motion.a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
