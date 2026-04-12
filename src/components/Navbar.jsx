import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Notre mission', href: '#mission' },
    { label: 'Projets', href: '#projets' },
    { label: 'Jappoo Faju', href: '#jappoo' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid #E2E8F0' : 'none',
      transition: 'all 0.3s ease',
      padding: scrolled ? '12px 0' : '20px 0',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src="/Logo_DSS.png" alt="DSS" style={{ width: '36px', height: '36px', objectFit: 'contain' }} />
          <div>
            <div style={{ fontSize: '13px', fontWeight: '800', color: scrolled ? '#1B6B45' : '#fff', letterSpacing: '0.5px' }}>
              DSS
            </div>
            <div style={{ fontSize: '9px', color: scrolled ? '#94A3B8' : 'rgba(255,255,255,0.5)', letterSpacing: '1px', textTransform: 'uppercase' }}>
              Développement Solidaire & Santé
            </div>
          </div>
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }} className="desktop-nav">
          {links.map(l => (
            <a key={l.href} href={l.href} style={{
              fontSize: '14px', fontWeight: '600',
              color: scrolled ? '#475569' : 'rgba(255,255,255,0.85)',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = '#1B6B45'}
            onMouseLeave={e => e.target.style.color = scrolled ? '#475569' : 'rgba(255,255,255,0.85)'}
            >{l.label}</a>
          ))}
          <a href="https://www.jappoo-faju.org" target="_blank" rel="noreferrer" style={{
            background: '#E05A2B', color: '#fff',
            padding: '9px 20px', borderRadius: '8px',
            fontSize: '13px', fontWeight: '700',
            boxShadow: '0 2px 8px rgba(224,90,43,0.3)',
          }}>Faire un don →</a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .desktop-nav { display: none !important; } }
      `}</style>
    </nav>
  )
}
