export default function Footer() {
  return (
    <footer style={{ background: '#0F4A2E', padding: '48px 0 32px' }}>
      <div className="container">
        <div style={{
          display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '48px',
          marginBottom: '48px',
        }}>
          {/* Brand */}
          <div>
            <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: '900', color: '#fff', marginBottom: '4px' }}>DSS</div>
            <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
              Développement Solidaire & Santé
            </div>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: '280px' }}>
              Association loi 1901 fondée en 2019.<br />
              N° W751251475 — Paris, France.
            </p>
          </div>

          {/* Links */}
          <div>
            <div style={{ fontSize: '13px', fontWeight: '700', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>Navigation</div>
            {['Notre mission', 'Nos projets', 'Jappoo Faju', 'Contact'].map(l => (
              <a key={l} href={`#${l.toLowerCase().replace(' ', '-')}`} style={{
                display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: '14px',
                marginBottom: '10px', transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = '#A8E6C3'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}
              >{l}</a>
            ))}
          </div>

          {/* Project */}
          <div>
            <div style={{ fontSize: '13px', fontWeight: '700', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>Projet santé</div>
            <a href="https://www.jappoo-faju.org" target="_blank" rel="noreferrer" style={{
              display: 'inline-block', background: '#E05A2B', color: '#fff',
              padding: '10px 20px', borderRadius: '10px', fontSize: '14px', fontWeight: '700',
              marginBottom: '16px',
            }}>jappoo-faju.org →</a>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>
              Solidarité médicale<br />au Sénégal
            </p>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>
            © 2026 Développement Solidaire & Santé. Tous droits réservés.
          </p>
          <a href="https://www.jappoo-faju.org/privacy-policy" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>
            Politique de confidentialité
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer .container > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
