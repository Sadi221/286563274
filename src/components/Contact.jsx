import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    window.location.href = `mailto:contact@dss-france.org?subject=Contact DSS - ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AEnvoyé par: ${form.name} (${form.email})`
    setSent(true)
  }

  return (
    <section id="contact" style={{ background: '#F5F0E8' }}>
      <div className="container">
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start',
        }}>
          {/* Left */}
          <div>
            <span style={{
              display: 'inline-block', background: '#E8F5EE', color: '#1B6B45',
              padding: '6px 16px', borderRadius: '40px', fontSize: '13px',
              fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '24px',
            }}>Contact</span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', color: '#1A1A2E', marginBottom: '24px' }}>
              Nous contacter
            </h2>
            <p style={{ fontSize: '16px', color: '#64748B', lineHeight: 1.8, marginBottom: '40px' }}>
              Vous souhaitez en savoir plus sur nos actions, devenir partenaire
              ou rejoindre l'association ? Écrivez-nous.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                { icon: '📧', label: 'Email', value: 'contact@dss-france.org' },
                { icon: '📍', label: 'Adresse', value: '9 rue du Cirque, 75008 Paris' },
                { icon: '🌐', label: 'Projet santé', value: 'www.jappoo-faju.org' },
              ].map(c => (
                <div key={c.label} style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '12px',
                    background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '22px', flexShrink: 0,
                  }}>{c.icon}</div>
                  <div>
                    <div style={{ fontSize: '12px', color: '#94A3B8', marginBottom: '2px' }}>{c.label}</div>
                    <div style={{ fontSize: '15px', fontWeight: '600', color: '#1A1A2E' }}>{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div style={{
            background: '#fff', borderRadius: '24px', padding: '40px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
          }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <span style={{ fontSize: '64px', display: 'block', marginBottom: '16px' }}>✅</span>
                <h3 style={{ fontSize: '22px', color: '#1B6B45', marginBottom: '8px' }}>Message envoyé !</h3>
                <p style={{ color: '#64748B' }}>Nous vous répondrons dans les plus brefs délais.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label style={{ fontSize: '13px', fontWeight: '700', color: '#475569', display: 'block', marginBottom: '6px' }}>Nom complet</label>
                  <input
                    type="text" required placeholder="Votre nom"
                    value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                    style={{
                      width: '100%', padding: '12px 16px', borderRadius: '10px',
                      border: '1.5px solid #E2E8F0', fontSize: '15px', outline: 'none',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '13px', fontWeight: '700', color: '#475569', display: 'block', marginBottom: '6px' }}>Email</label>
                  <input
                    type="email" required placeholder="votre@email.com"
                    value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                    style={{
                      width: '100%', padding: '12px 16px', borderRadius: '10px',
                      border: '1.5px solid #E2E8F0', fontSize: '15px', outline: 'none',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '13px', fontWeight: '700', color: '#475569', display: 'block', marginBottom: '6px' }}>Message</label>
                  <textarea
                    required rows={5} placeholder="Votre message..."
                    value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                    style={{
                      width: '100%', padding: '12px 16px', borderRadius: '10px',
                      border: '1.5px solid #E2E8F0', fontSize: '15px', outline: 'none',
                      fontFamily: 'Inter, sans-serif', resize: 'vertical',
                    }}
                  />
                </div>
                <button type="submit" style={{
                  background: '#1B6B45', color: '#fff',
                  padding: '14px', borderRadius: '12px',
                  fontSize: '15px', fontWeight: '800', border: 'none', cursor: 'pointer',
                }}>
                  Envoyer le message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact .container > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
