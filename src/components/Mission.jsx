const pillars = [
  {
    icon: '🏥',
    title: 'Santé & Soins',
    desc: 'Mise en place d\'activités de prévention et de soins médicaux pour les populations vulnérables. Accès aux soins essentiels et accompagnement médical.',
    color: '#1B6B45',
    bg: '#E8F5EE',
    img: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&q=80',
  },
  {
    icon: '🌱',
    title: 'Développement Durable',
    desc: 'Projets d\'agriculture durable et de protection de l\'environnement. Soutien aux communautés pour un avenir résilient face aux défis climatiques.',
    color: '#2D6A4F',
    bg: '#D8F3DC',
    img: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4e7?w=400&q=80',
  },
  {
    icon: '🌍',
    title: 'Lutte contre le Changement Climatique',
    desc: 'Promotion de la participation active des individus et communautés dans la lutte contre le changement climatique en Afrique de l\'Ouest.',
    color: '#E05A2B',
    bg: '#FEF0EB',
    img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&q=80',
  },
]

export default function Mission() {
  return (
    <section id="mission" style={{ background: '#fff' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span style={{
            display: 'inline-block', background: '#E8F5EE', color: '#1B6B45',
            padding: '6px 16px', borderRadius: '40px', fontSize: '13px',
            fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px',
          }}>Notre mission</span>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: '#1A1A2E', marginBottom: '16px' }}>
            Agir pour les populations<br />les plus vulnérables
          </h2>
          <p style={{ fontSize: '17px', color: '#64748B', maxWidth: '560px', margin: '0 auto', lineHeight: 1.8 }}>
            Fondée en 2019 à Paris, DSS œuvre pour améliorer le bien-être général
            des communautés à travers trois piliers d'action complémentaires.
          </p>
        </div>

        {/* Pillars */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {pillars.map(p => (
            <div key={p.title} style={{
              borderRadius: '20px', overflow: 'hidden',
              border: `1px solid ${p.color}20`,
              boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
            }}>
              {/* Image */}
              <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: `${p.color}40` }} />
                <span style={{ position: 'absolute', top: '16px', left: '16px', fontSize: '32px' }}>{p.icon}</span>
              </div>
              {/* Content */}
              <div style={{ background: p.bg, padding: '24px' }}>
                <h3 style={{ fontSize: '20px', color: '#1A1A2E', marginBottom: '10px' }}>{p.title}</h3>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.8 }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div style={{
          marginTop: '64px',
          borderRadius: '24px', overflow: 'hidden',
          position: 'relative',
        }}>
          <img
            src="https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=1200&q=80"
            alt="Communauté"
            style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(135deg, rgba(15,74,46,0.92), rgba(27,107,69,0.85))',
            display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px',
          }}>
            <div style={{ textAlign: 'center', maxWidth: '700px' }}>
              <p style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(18px, 2.5vw, 28px)', color: '#fff',
                lineHeight: 1.6, fontStyle: 'italic',
              }}>
                "Améliorer le bien-être général des populations et des communautés vulnérables,
                avec un accent particulier sur la santé, l'agriculture et l'environnement."
              </p>
              <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: '16px', fontSize: '14px', letterSpacing: '1px' }}>
                — Objet social de DSS, déclaration du 11 mars 2019
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
