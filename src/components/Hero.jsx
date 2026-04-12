export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      position: 'relative', overflow: 'hidden',
      display: 'flex', alignItems: 'center',
      padding: '120px 0 80px',
    }}>
      {/* Background photo */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=80)',
        backgroundSize: 'cover', backgroundPosition: 'center top',
      }} />

      {/* Gradient overlay — sombre élégant */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(105deg, rgba(10,20,15,0.88) 0%, rgba(10,20,15,0.70) 50%, rgba(10,20,15,0.40) 100%)',
      }} />

      {/* Accent vert bas gauche */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0,
        width: '40%', height: '4px',
        background: 'linear-gradient(90deg, #1B6B45, transparent)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '680px' }}>

          {/* Logo + nom */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px' }}>
            <img src="/Logo_DSS.png" alt="DSS" style={{ width: '64px', height: '64px', objectFit: 'contain' }} />
            <div>
              <div style={{ fontSize: '15px', fontWeight: '800', color: '#fff', letterSpacing: '1px', textTransform: 'uppercase' }}>
                Développement Solidaire & Santé
              </div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', letterSpacing: '3px', marginTop: '3px', textTransform: 'uppercase' }}>
                DSS — Paris, France
              </div>
            </div>
          </div>

          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(27,107,69,0.35)', backdropFilter: 'blur(8px)',
            border: '1px solid rgba(168,230,195,0.3)',
            borderRadius: '40px', padding: '7px 16px', marginBottom: '28px',
          }}>
            <span style={{ fontSize: '14px' }}>🌍</span>
            <span style={{ color: '#A8E6C3', fontSize: '12px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase' }}>
              ONG française · Sénégal & Afrique
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(38px, 6vw, 72px)', fontWeight: '900', color: '#fff', marginBottom: '24px', lineHeight: 1.05 }}>
            Développement<br />
            <span style={{ color: '#A8E6C3' }}>Solidaire</span><br />
            & Santé
          </h1>

          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: '40px' }}>
            Améliorer le bien-être des populations vulnérables à travers la santé,
            le développement durable et la lutte contre le changement climatique.
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a href="#mission" style={{
              background: '#fff', color: '#1B6B45',
              padding: '15px 30px', borderRadius: '12px',
              fontSize: '15px', fontWeight: '800',
              boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
            }}>Découvrir notre mission</a>
            <a href="https://www.jappoo-faju.org" target="_blank" rel="noreferrer" style={{
              background: '#E05A2B', color: '#fff',
              padding: '15px 30px', borderRadius: '12px',
              fontSize: '15px', fontWeight: '800',
              boxShadow: '0 4px 20px rgba(224,90,43,0.4)',
            }}>Soutenir Jappoo Faju →</a>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: '40px', marginTop: '60px', flexWrap: 'wrap', paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            {[
              { value: '2019', label: 'Fondée à Paris' },
              { value: '3', label: 'Piliers d\'action' },
              { value: '100%', label: 'Transparence' },
            ].map(s => (
              <div key={s.label}>
                <div style={{ fontSize: '30px', fontWeight: '900', color: '#A8E6C3', fontFamily: 'Playfair Display, serif' }}>{s.value}</div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginTop: '4px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
