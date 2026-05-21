import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { fadeInUp, stagger, viewport } from '../utils/animations'
import DonationWidget from './DonationWidget'

export default function Donation() {
  const { t } = useTranslation()

  return (
    <section id="don" className="py-14 md:py-20 bg-dss-green">
      <motion.div
        className="max-w-3xl mx-auto px-6 text-center"
        variants={stagger(0.13)}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.span variants={fadeInUp} className="inline-block bg-white/15 text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-5">
          {t('donation.badge')}
        </motion.span>

        <motion.h2 variants={fadeInUp} className="font-serif text-white mb-4" style={{ fontSize: 'clamp(28px,4vw,44px)' }}>
          {t('donation.title')}
        </motion.h2>

        <motion.p variants={fadeInUp} className="text-white/75 leading-[1.8] mb-10 max-w-xl mx-auto">
          {t('donation.description')}
        </motion.p>

        <motion.div variants={fadeInUp}>
          <DonationWidget dark />
        </motion.div>
      </motion.div>
    </section>
  )
}
