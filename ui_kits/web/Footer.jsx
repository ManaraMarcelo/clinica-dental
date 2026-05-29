// Footer.jsx
const Footer = () => {
  return (
    <footer style={{ padding: '40px 0 64px', textAlign: 'center' }}>
      <div className="container">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
          <img src="../../assets/logo-mark.svg" width="28" height="28" alt="" />
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: 'var(--ink-900)', letterSpacing: '-0.01em' }}>Dental Clinic</span>
        </div>
        <div style={{ display: 'flex', gap: 24, justifyContent: 'center', marginBottom: 18 }}>
          {['About Us', 'Pricing', 'Stories', 'Support', 'Privacy', 'Terms'].map(l => (
            <a key={l} href="#" style={{ fontSize: 13, color: 'var(--ink-500)', textDecoration: 'none', fontWeight: 500 }}>{l}</a>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginBottom: 24 }}>
          {['𝕏', '◎', 'ig', 'in'].map(s => (
            <a key={s} href="#" style={{ width: 32, height: 32, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: 'var(--bg-card)', color: 'var(--ink-500)', textDecoration: 'none', fontSize: 14 }}>{s}</a>
          ))}
        </div>
        <div style={{ fontSize: 12, color: 'var(--ink-400)', fontFamily: 'var(--font-mono)' }}>
          © 2026 Dental Clinic · All rights reserved.
        </div>
      </div>
    </footer>
  );
};

window.Footer = Footer;
