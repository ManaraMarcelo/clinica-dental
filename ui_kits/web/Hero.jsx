// Hero.jsx — text + CSS-rendered glossy chrome scene
const HeroIllustration = () => {
  return (
    <div style={{
      position: 'relative', width: '100%', aspectRatio: '1 / 1', maxWidth: 560,
      marginLeft: 'auto',
    }}>
      {/* Soft radial "stage" highlight */}
      <div style={{
        position: 'absolute', inset: '-10%',
        background: 'radial-gradient(circle at 60% 55%, rgba(255,255,255,.9), rgba(255,255,255,0) 60%)',
        filter: 'blur(8px)',
      }} />
      {/* Iridescent disks — drift */}
      <div className="iri iri--violet" style={iriStyle({ top: '8%', left: '12%', size: 160, c1: '#A496FF', c2: '#FF6EC4', delay: 0 })} />
      <div className="iri iri--cyan"   style={iriStyle({ top: '62%', left: '4%',  size: 140, c1: '#6EDBE0', c2: '#8A6BFF', delay: 1.4 })} />
      <div className="iri iri--pink"   style={iriStyle({ top: '70%', left: '60%', size: 120, c1: '#FF9AD1', c2: '#A496FF', delay: 2.8 })} />

      {/* Central chrome dome — a glossy abstract tooth */}
      <div style={{
        position: 'absolute', top: '14%', left: '24%', width: '58%', height: '72%',
        borderRadius: '46% 46% 42% 42% / 52% 52% 48% 48%',
        background: 'linear-gradient(160deg, #FFFFFF 0%, #EDECEE 30%, #C9C7D0 55%, #FFFFFF 78%, #D9D7DE 100%)',
        boxShadow: `
          inset 12px 30px 40px -10px rgba(255,255,255,.95),
          inset -22px -10px 40px -10px rgba(80,76,110,.35),
          0 30px 60px -20px rgba(110,91,255,.28),
          0 20px 40px -10px rgba(20,20,30,.18)
        `,
      }}>
        {/* highlight on top */}
        <div style={{
          position: 'absolute', top: '6%', left: '18%', width: '42%', height: '22%',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse at center, rgba(255,255,255,.95), rgba(255,255,255,0) 70%)',
        }} />
        {/* prism refraction strip */}
        <div style={{
          position: 'absolute', top: '46%', left: '8%', width: '84%', height: '6%',
          background: 'linear-gradient(90deg, #FF6EC4, #A496FF, #6EDBE0, #B7F0C6, #FFD58A)',
          borderRadius: 999,
          filter: 'blur(6px)', opacity: .55, mixBlendMode: 'screen',
        }} />
      </div>

      {/* Floating ribbon */}
      <svg viewBox="0 0 600 600" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
        <defs>
          <linearGradient id="ribbon" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#FFFFFF" stopOpacity=".95" />
            <stop offset=".5" stopColor="#E9E6FF" stopOpacity=".85" />
            <stop offset="1" stopColor="#FFFFFF" stopOpacity=".7" />
          </linearGradient>
        </defs>
        <path d="M40 420 C 180 380, 240 480, 360 440 S 540 380, 580 420" stroke="url(#ribbon)" strokeWidth="34" fill="none" strokeLinecap="round" opacity=".75" style={{ filter: 'drop-shadow(0 8px 16px rgba(110,91,255,.18))' }} />
      </svg>

      {/* Floating sparkle glyphs */}
      <div className="float-y" style={{ position: 'absolute', top: '6%', right: '20%', fontSize: 28, color: 'var(--primary-500)', animationDelay: '0s' }}>✦</div>
      <div className="float-y" style={{ position: 'absolute', bottom: '14%', right: '8%', fontSize: 22, color: 'var(--primary-400)', animationDelay: '1.2s' }}>✧</div>
      <div className="float-y" style={{ position: 'absolute', top: '40%', right: '4%', fontSize: 18, color: 'var(--iri-pink)', animationDelay: '2.4s' }}>✦</div>
    </div>
  );
};

const iriStyle = ({ top, left, size, c1, c2, delay }) => ({
  position: 'absolute', top, left, width: size, height: size,
  borderRadius: '50%',
  background: `radial-gradient(circle at 40% 35%, ${c1}, ${c2} 60%, transparent 75%)`,
  filter: 'blur(2px)',
  opacity: .85,
  animation: `floatY 7s ease-in-out infinite`,
  animationDelay: `${delay}s`,
  mixBlendMode: 'multiply',
});

const Hero = () => {
  return (
    <section style={{ paddingTop: 140, paddingBottom: 80, position: 'relative' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: 48, alignItems: 'center' }}>
        <div className="reveal">
          <h1 className="display" style={{ marginBottom: 24 }}>
            Supercharge Your <span className="glyph">⚡</span> Smile
            <br />for Ultimate <span className="glyph">✦</span> Confidence
          </h1>
          <p className="lead" style={{ marginBottom: 32, maxWidth: 460 }}>
            No more dentist dread. Dental Clinic delivers calm, modern care that vibes with your always-on life — pain-free cleanings, in-chair whitening, and next-level smile design.
          </p>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <button className="btn btn--primary" style={{ padding: '16px 28px' }}>
              Book a Cleaning <span aria-hidden="true">→</span>
            </button>
            <a href="#" style={{ color: 'var(--ink-700)', fontSize: 14, fontWeight: 500, textDecoration: 'none', padding: '12px 8px' }}>
              See pricing →
            </a>
          </div>
          <div style={{ marginTop: 36, display: 'flex', gap: 20, alignItems: 'center', color: 'var(--ink-400)', fontSize: 13 }}>
            <span>4.9 ★ 1,200+ reviews</span>
            <span style={{ width: 4, height: 4, borderRadius: 999, background: 'currentColor' }} />
            <span>Open 7 days</span>
            <span style={{ width: 4, height: 4, borderRadius: 999, background: 'currentColor' }} />
            <span>3 locations</span>
          </div>
        </div>
        <HeroIllustration />
      </div>
    </section>
  );
};

window.Hero = Hero;
