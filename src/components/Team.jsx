export default function Team() {
  return (
    <section style={{ background: '#fff' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span style={{
            display: 'inline-block', background: '#E8F5EE', color: '#1B6B45',
            padding: '6px 16px', borderRadius: '40px', fontSize: '13px',
            fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px',
          }}>L'association</span>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: '#1A1A2E', marginBottom: '16px' }}>
            Une organisation reconnue
          </h2>
          <p style={{ fontSize: '17px', color: '#64748B', maxWidth: '560px', margin: '0 auto', lineHeight: 1.8 }}>
            DSS est une association loi 1901 déclarée à la Préfecture de Police de Paris,
            enregistrée sous le numéro W751251475.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
          {[
            { label: 'Numéro d\'enregistrement', value: 'W751251475', icon: '📋' },
            { label: 'Date de déclaration', value: '11 mars 2019', icon: '📅' },
            { label: 'Siège social', value: '9 rue du Cirque\n75008 Paris', icon: '📍' },
            { label: 'Statut juridique', value: 'Association loi 1901\nà but non lucratif', icon: '⚖️' },
          ].map(i => (
            <div key={i.label} style={{
              background: '#F8FAFF', borderRadius: '16px', padding: '28px',
              border: '1px solid #E2E8F0', textAlign: 'center',
            }}>
              <span style={{ fontSize: '36px', display: 'block', marginBottom: '12px' }}>{i.icon}</span>
              <div style={{ fontSize: '12px', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>{i.label}</div>
              <div style={{ fontSize: '16px', fontWeight: '700', color: '#1A1A2E', whiteSpace: 'pre-line' }}>{i.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
