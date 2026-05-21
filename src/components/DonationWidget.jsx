import { useTranslation } from 'react-i18next'

// Remplacer les URLs par les vrais Payment Links Stripe (mode Live)
const STRIPE = {
  '5':     'https://buy.stripe.com/test_6oU7sL7LN3yT3Tt4ko9MY00',
  '10':    'https://buy.stripe.com/test_6oU7sL7LN3yT3Tt4ko9MY00',
  '20':    'https://buy.stripe.com/test_6oU7sL7LN3yT3Tt4ko9MY00',
  'libre': 'https://buy.stripe.com/test_6oU7sL7LN3yT3Tt4ko9MY00',
}

const amounts = ['5', '10', '20', 'libre']

export default function DonationWidget({ dark = false }) {
  const { t } = useTranslation()

  const cardBase = dark
    ? 'bg-white/10 border-white/20 hover:bg-white/20 text-white'
    : 'bg-white border-slate-200 hover:border-dss-coral hover:shadow-lg text-dss-navy'

  const amountColor = dark ? 'text-[#A8E6C3]' : 'text-dss-coral'
  const descColor   = dark ? 'text-white/60'   : 'text-dss-gray'

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {amounts.map(amount => (
          <a
            key={amount}
            href={STRIPE[amount]}
            target="_blank"
            rel="noreferrer"
            className={`${cardBase} border rounded-2xl px-4 py-5 text-center transition-all duration-200 cursor-pointer group`}
          >
            <div className={`text-2xl font-black font-serif mb-1 group-hover:scale-110 transition-transform ${amountColor}`}>
              {amount === 'libre' ? t('donation.widget.libreLabel') : `${amount} €`}
            </div>
            <div className={`text-xs ${descColor}`}>{t(`donation.widget.${amount}`)}</div>
          </a>
        ))}
      </div>
      <p className={`text-xs mt-3 text-center ${dark ? 'text-white/40' : 'text-slate-400'}`}>
        {t('donation.widget.secure')}
      </p>
    </div>
  )
}
