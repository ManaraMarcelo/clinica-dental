// Manifesto.jsx — the wide centered "Passwords Suck We Fix That" card
const Manifesto = () => {
  return (
    <section style={{ padding: '40px 0' }}>
      <div className="container">
        <div className="card reveal" style={{
          padding: '72px 48px', textAlign: 'center',
          background: 'linear-gradient(180deg, var(--bg-card-hi) 0%, var(--bg-card) 100%)',
        }}>
          <h2 className="h1" style={{ marginBottom: 20 }}>
            Cavities <span className="glyph">🦷</span> Suck.
            <br />We Fix <span className="glyph">⚡</span> That.
          </h2>
          <p className="lead" style={{ maxWidth: 540, margin: '0 auto', color: 'var(--ink-500)' }}>
            Bad cleanings, endless paperwork, sketchy chains? Dental Clinic delivers slick, science-backed dentistry that vibes with your tech-heavy life. Stay healthy, not lectured.
          </p>
        </div>
      </div>
    </section>
  );
};

window.Manifesto = Manifesto;
