// Testimonials.jsx — auto-scrolling pill row with edge fades
const QUOTES = [
  { q: "0 anxiety, 10/10 smile. They get it.", h: "@miladentin", g: '#8A6BFF,#FF6EC4' },
  { q: "Whitening that actually slaps. Hooked.", h: "@kevhasteeth", g: '#6EDBE0,#8A6BFF' },
  { q: "Booked, scanned, polished. 38 min total.", h: "@emisardo9", g: '#FFD58A,#FF6EC4' },
  { q: "First dentist I don't dread. Wild.", h: "@tobyrenn7", g: '#B7F0C6,#6EDBE0' },
  { q: "Got my retainer same-day. Tech is real.", h: "@nia.j", g: '#FF6EC4,#A496FF' },
  { q: "Cleaning subscription is genius.", h: "@drew.codes", g: '#A496FF,#6EDBE0' },
  { q: "They text reminders that don't feel dumb.", h: "@laraax", g: '#6EDBE0,#B7F0C6' },
  { q: "Insurance auto-claim = unreal.", h: "@samtheman", g: '#FFD58A,#A496FF' },
];

const Bubble = ({ q, h, g }) => (
  <div style={{
    flex: '0 0 auto',
    background: '#fff',
    borderRadius: 999,
    padding: '14px 22px 14px 14px',
    display: 'flex', alignItems: 'center', gap: 14,
    boxShadow: 'var(--shadow-card)',
    minWidth: 320, maxWidth: 380,
  }}>
    <div style={{
      width: 38, height: 38, borderRadius: '50%',
      background: `linear-gradient(135deg, ${g})`,
      flexShrink: 0,
      boxShadow: 'inset 0 2px 0 rgba(255,255,255,.4)',
    }} />
    <div>
      <div style={{ fontSize: 14, color: 'var(--ink-700)', lineHeight: 1.35, fontWeight: 500 }}>{q}</div>
      <div style={{ fontSize: 12, color: 'var(--ink-400)', fontFamily: 'var(--font-mono)', marginTop: 2 }}>{h}</div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section style={{ padding: '40px 0 96px', position: 'relative' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: 48 }}>
        <h2 className="h1 reveal">
          Real Talk <span className="glyph">✧</span> from
          <br />Real <span className="glyph">🦷</span> Smiles
        </h2>
      </div>
      <div style={{ position: 'relative', overflow: 'hidden', padding: '12px 0' }}>
        {/* edge fade left */}
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: 120, background: 'linear-gradient(90deg, var(--bg-page), transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: 120, background: 'linear-gradient(-90deg, var(--bg-page), transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div className="marquee" style={{ display: 'flex', gap: 14, width: 'max-content' }}>
          {[...QUOTES, ...QUOTES].map((b, i) => <Bubble key={i} {...b} />)}
        </div>
        <div className="marquee marquee--rev" style={{ display: 'flex', gap: 14, width: 'max-content', marginTop: 14 }}>
          {[...QUOTES.slice().reverse(), ...QUOTES.slice().reverse()].map((b, i) => <Bubble key={i} {...b} />)}
        </div>
      </div>
    </section>
  );
};

window.Testimonials = Testimonials;
