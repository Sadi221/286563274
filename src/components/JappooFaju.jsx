export default function JappooFaju() {
  return (
    <section id="jappoo" style={{ background: '#1A1A2E', padding: '80px 0' }}>
      <div className="container">
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px',
          alignItems: 'center',
        }}>
          {/* Left */}
          <div>
            <span style={{
              display: 'inline-block', background: 'rgba(224,90,43,0.2)', color: '#E05A2B',
              padding: '6px 16px', borderRadius: '40px', fontSize: '13px',
              fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '24px',
            }}>Projet phare</span>

            <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: '#fff', marginBottom: '24px' }}>
              Jappoo Faju —<br />
              <span style={{ color: '#A8E6C3' }}>Aide-moi à guérir</span>
            </h2>

            <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '16px' }}>
              Jappoo Faju (« aide-moi à guérir » en wolof) est notre plateforme numérique
              de solidarité médicale dédiée aux patients sénégalais dans le besoin.
            </p>
            <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '32px' }}>
              Les hôpitaux partenaires soumettent des demandes validées par notre équipe.
              Chaque don est tracé en temps réel pour une transparence totale.
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href="https://www.jappoo-faju.org" target="_blank" rel="noreferrer" style={{
                background: '#E05A2B', color: '#fff',
                padding: '14px 28px', borderRadius: '12px',
                fontSize: '15px', fontWeight: '800',
              }}>
                Faire un don →
              </a>
              <a href="https://www.jappoo-faju.org" target="_blank" rel="noreferrer" style={{
                background: 'rgba(255,255,255,0.1)', color: '#fff',
                padding: '14px 28px', borderRadius: '12px',
                fontSize: '15px', fontWeight: '700',
                border: '1px solid rgba(255,255,255,0.2)',
              }}>
                Voir les cas
              </a>
            </div>
          </div>

          {/* Right — Features */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { icon: '📱', title: 'Application mobile', desc: 'Disponible sur iOS et Android' },
              { icon: '💳', title: 'Paiement sécurisé', desc: 'Wave, Orange Money, Visa/Mastercard' },
              { icon: '🏥', title: 'Hôpitaux validés', desc: 'Partenaires certifiés au Sénégal' },
              { icon: '🔒', title: '100% transparent', desc: 'Chaque don tracé en temps réel' },
            ].map(f => (
              <div key={f.title} style={{
                display: 'flex', alignItems: 'center', gap: '16px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '14px', padding: '16px 20px',
              }}>
                <span style={{ fontSize: '28px' }}>{f.icon}</span>
                <div>
                  <div style={{ color: '#fff', fontWeight: '700', fontSize: '15px' }}>{f.title}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #jappoo .container > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
