// FinalCTA.jsx
const FinalCTA = () => {
  return (
    <section style={{ paddingBottom: 96 }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 className="h1 reveal" style={{ marginBottom: 40 }}>
          <span className="glyph">⚡</span> Ready to Own Your <span className="glyph">✦</span> Smile?
        </h2>
        <div className="card reveal" style={{
          background: '#fff',
          padding: '20px 24px',
          borderRadius: 999,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 24, maxWidth: 720, margin: '0 auto',
          flexWrap: 'wrap',
        }}>
          <div style={{ textAlign: 'left', flex: 1, minWidth: 280 }}>
            <div style={{ fontSize: 15, color: 'var(--ink-900)', fontWeight: 600, lineHeight: 1.4 }}>
              Hop on the Dental Clinic wave. Start free or go pro with a 30-day trial.
            </div>
            <div style={{ fontSize: 13, color: 'var(--ink-400)', marginTop: 4 }}>
              No card needed. Real care, real fast.
            </div>
          </div>
          <button className="btn btn--primary" style={{ padding: '14px 28px' }}>
            Book a Cleaning
          </button>
        </div>
      </div>
    </section>
  );
};

window.FinalCTA = FinalCTA;
