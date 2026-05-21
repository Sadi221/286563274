import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mbdwpvjv'

export default function Contact() {
  const { t } = useTranslation()
  const [form,   setForm]   = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const contactItems = [
    { icon: '📧', label: t('contact.labelEmail'),   value: 'contact@dss-france.org' },
    { icon: '📍', label: t('contact.labelAddress'), value: '9 rue du Cirque, 75008 Paris' },
    { icon: '🌐', label: t('contact.labelProject'), value: 'www.jappoo-faju.org' },
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const inputClass = 'w-full px-4 py-3 rounded-xl border-2 border-slate-200 text-sm font-sans outline-none focus:border-dss-green transition-colors'

  return (
    <section id="contact" className="py-14 md:py-20 bg-dss-sand">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <span className="inline-block bg-white text-dss-green px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              {t('contact.badge')}
            </span>
            <h2 className="text-dss-navy mb-6" style={{ fontSize: 'clamp(28px,4vw,44px)' }}>
              {t('contact.title')}
            </h2>
            <p className="text-base text-dss-gray leading-[1.8] mb-10">
              {t('contact.description')}
            </p>
            <div className="flex flex-col gap-5">
              {contactItems.map(c => (
                <div key={c.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-xl flex-shrink-0 shadow-sm">
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 mb-0.5">{c.label}</div>
                    <div className="text-sm font-semibold text-dss-navy">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-black/5">
            {status === 'sent' ? (
              <div className="text-center py-10">
                <span className="text-6xl block mb-4">✅</span>
                <h3 className="text-xl font-bold text-dss-green mb-2">{t('contact.form.successTitle')}</h3>
                <p className="text-dss-gray text-sm">{t('contact.form.successDesc')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1.5">{t('contact.form.name')}</label>
                  <input type="text" required placeholder={t('contact.form.namePlaceholder')}
                    value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                    className={inputClass} />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1.5">{t('contact.form.email')}</label>
                  <input type="email" required placeholder="votre@email.com"
                    value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                    className={inputClass} />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1.5">{t('contact.form.message')}</label>
                  <textarea required rows={5} placeholder={t('contact.form.messagePlaceholder')}
                    value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    className={`${inputClass} resize-vertical`} />
                </div>
                {status === 'error' && (
                  <p className="text-sm text-red-600 text-center">{t('contact.form.error')}</p>
                )}
                <button type="submit" disabled={status === 'sending'}
                  className="bg-dss-green text-white py-4 rounded-xl text-sm font-extrabold hover:bg-dss-dark transition-colors disabled:opacity-60 cursor-pointer">
                  {status === 'sending' ? t('contact.form.sending') : t('contact.form.submit')}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
