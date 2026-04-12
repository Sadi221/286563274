const projects = [
  {
    tag: 'Santé numérique',
    title: 'Jappoo Faju',
    desc: 'Plateforme de solidarité médicale connectant donateurs et patients sénégalais en besoin urgent. Dons via Wave, Orange Money et carte bancaire.',
    status: 'Actif',
    statusColor: '#16A34A',
    icon: '💊',
    link: 'https://www.jappoo-faju.org',
  },
  {
    tag: 'Agriculture',
    title: 'Jardins Solidaires',
    desc: 'Soutien aux agricultures familiales au Sénégal avec des techniques durables et résistantes aux aléas climatiques.',
    status: 'En développement',
    statusColor: '#F59E0B',
    icon: '🌾',
    link: null,
  },
  {
    tag: 'Environnement',
    title: 'Reforestation Communautaire',
    desc: 'Programme de reforestation impliquant les communautés locales dans la protection de leur environnement naturel.',
    status: 'En développement',
    statusColor: '#F59E0B',
    icon: '🌳',
    link: null,
  },
]

export default function Projects() {
  return (
    <section id="projets" style={{ background: '#F8FAFF' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span style={{
            display: 'inline-block', background: '#E8F5EE', color: '#1B6B45',
            padding: '6px 16px', borderRadius: '40px', fontSize: '13px',
            fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px',
          }}>Nos projets</span>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: '#1A1A2E', marginBottom: '16px' }}>
            Des initiatives concrètes<br />pour un impact durable
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {projects.map(p => (
            <div key={p.title} style={{
              background: '#fff', borderRadius: '20px', padding: '32px',
              boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
              display: 'flex', flexDirection: 'column',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                <span style={{ fontSize: '40px' }}>{p.icon}</span>
                <span style={{
                  background: p.statusColor + '20', color: p.statusColor,
                  padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '700',
                }}>{p.status}</span>
              </div>

              <span style={{
                fontSize: '12px', fontWeight: '700', color: '#1B6B45',
                textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px',
              }}>{p.tag}</span>

              <h3 style={{ fontSize: '22px', color: '#1A1A2E', marginBottom: '12px' }}>{p.title}</h3>
              <p style={{ fontSize: '15px', color: '#64748B', lineHeight: 1.8, flex: 1 }}>{p.desc}</p>

              {p.link && (
                <a href={p.link} target="_blank" rel="noreferrer" style={{
                  display: 'inline-block', marginTop: '24px',
                  background: '#1B6B45', color: '#fff',
                  padding: '12px 24px', borderRadius: '10px',
                  fontSize: '14px', fontWeight: '700', textAlign: 'center',
                }}>
                  Visiter le site →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
