// Nav.jsx — floating pill, frosts on scroll
const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div style={{
      position: 'fixed', top: 24, left: 0, right: 0, zIndex: 100,
      display: 'flex', justifyContent: 'center', pointerEvents: 'none',
    }}>
      <nav style={{
        pointerEvents: 'auto',
        display: 'flex', alignItems: 'center', gap: 6,
        background: scrolled ? 'rgba(245,244,242,.78)' : 'rgba(245,244,242,.55)',
        backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
        padding: '8px 8px 8px 20px',
        borderRadius: 999,
        boxShadow: scrolled
          ? '0 10px 30px -10px rgba(20,20,30,.18), 0 1px 2px rgba(20,20,30,.04)'
          : '0 1px 2px rgba(20,20,30,.04), 0 8px 24px -8px rgba(20,20,30,.06)',
        transition: 'background 240ms var(--ease-soft), box-shadow 240ms var(--ease-soft)',
      }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, paddingRight: 16, marginRight: 6, borderRight: '1px solid var(--border)', textDecoration: 'none' }}>
          <img src="../../assets/logo-mark.svg" width="24" height="24" alt="" />
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: 'var(--ink-900)', letterSpacing: '-0.01em' }}>Dental Clinic</span>
        </a>
        {['Services', 'Pricing', 'Team', 'Stories', 'Support'].map(t => (
          <a key={t} href="#" style={navLinkStyle}>{t}</a>
        ))}
        <button className="btn btn--primary" style={{ padding: '9px 18px', fontSize: 14, marginLeft: 6 }}>Book Now</button>
        <button className="btn btn--ghost" style={{ padding: '9px 14px', fontSize: 14, background: '#fff', boxShadow: 'var(--shadow-card)' }}>Log In</button>
      </nav>
    </div>
  );
};

const navLinkStyle = {
  fontFamily: 'var(--font-body)',
  fontSize: 14, fontWeight: 500,
  color: 'var(--ink-700)', padding: '9px 14px', borderRadius: 999,
  textDecoration: 'none', transition: 'background 160ms ease, color 160ms ease',
};

window.Nav = Nav;
