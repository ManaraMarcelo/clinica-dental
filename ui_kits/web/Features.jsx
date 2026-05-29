// Features.jsx — 2-up + 3-up grid below the manifesto
const FeatureCard = ({ title, sub, visual, span = 1, tall = false }) => (
  <div className="card reveal" style={{
    gridColumn: `span ${span}`,
    padding: 28, display: 'flex', flexDirection: 'column', gap: 16,
    minHeight: tall ? 320 : 280,
  }}>
    <div>
      <h3 style={{ fontSize: 19, fontWeight: 600, marginBottom: 6 }}>{title}</h3>
      <p style={{ fontSize: 14, color: 'var(--ink-500)', lineHeight: 1.5 }}>{sub}</p>
    </div>
    <div style={{ flex: 1, marginTop: 'auto' }}>{visual}</div>
  </div>
);

// --- visual demos ---
const RadarVisual = () => (
  <div style={demoFrame()}>
    <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 60%, rgba(110,91,255,.18), transparent 60%)' }} />
    {[60, 100, 140].map((s, i) => (
      <div key={i} style={{
        position: 'absolute', left: '50%', top: '55%', width: s, height: s,
        marginLeft: -s/2, marginTop: -s/2, borderRadius: '50%',
        border: '1.5px solid rgba(110,91,255,.25)',
        animation: `pulse 3s ease-out ${i * 0.6}s infinite`,
      }} />
    ))}
    <div style={{
      position: 'absolute', left: '50%', top: '55%', width: 56, height: 56,
      marginLeft: -28, marginTop: -28, borderRadius: '50%',
      background: 'linear-gradient(160deg, #8A6BFF, #6E5BFF)',
      boxShadow: '0 10px 24px rgba(110,91,255,.4), inset 0 2px 0 rgba(255,255,255,.5)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: '#fff', fontSize: 22, fontWeight: 700,
    }}>!</div>
  </div>
);

const SmileScoreVisual = () => (
  <div style={demoFrame()}>
    <div style={{
      position: 'absolute', inset: '18% 8%',
      background: '#fff', borderRadius: 999,
      boxShadow: 'var(--shadow-card)',
      display: 'flex', alignItems: 'center', padding: '0 18px', gap: 10,
    }}>
      <div style={{ display: 'flex', gap: 6 }}>
        {[...Array(8)].map((_, i) => (
          <div key={i} className="dot" style={{
            width: 16, height: 16, borderRadius: '50%',
            background: i < 6 ? 'var(--primary-500)' : 'var(--ink-200)',
            animation: `dotPop 2s ease-in-out ${i * 0.15}s infinite`,
          }} />
        ))}
      </div>
      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 28, height: 28, borderRadius: 999, background: 'var(--bg-inset)', color: 'var(--ink-400)' }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/><circle cx="12" cy="12" r="3"/></svg>
      </div>
    </div>
    <div style={{ position: 'absolute', bottom: '14%', left: 0, right: 0, textAlign: 'center', fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--ink-400)' }}>SMILE SCORE · 86 / 100</div>
  </div>
);

const AutoFillVisual = () => (
  <div style={demoFrame()}>
    <div style={{
      position: 'absolute', inset: '14% 12% 14% 12%',
      background: '#fff', borderRadius: 12,
      boxShadow: 'var(--shadow-card)', padding: 12,
      display: 'flex', flexDirection: 'column', gap: 8, fontSize: 11, color: 'var(--ink-400)',
    }}>
      <div style={{ padding: '8px 10px', background: 'var(--bg-card)', borderRadius: 8 }}>Name on insurance</div>
      <div style={{ padding: '8px 10px', background: 'var(--bg-card)', borderRadius: 8 }}>Last cleaning date</div>
      <div style={{
        padding: '8px 10px', background: 'var(--primary-500)', borderRadius: 8,
        color: '#fff', fontFamily: 'var(--font-mono)', boxShadow: '0 4px 12px rgba(110,91,255,.35)',
        position: 'relative',
      }}>
        jamie.smith@email.com
        <span style={{ position: 'absolute', right: 10, top: 8, fontSize: 9, opacity: .7 }}>auto · Dental Clinic</span>
      </div>
    </div>
  </div>
);

const StackVisual = () => (
  <div style={demoFrame()}>
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{
        width: 72, height: 72, borderRadius: 999,
        background: 'linear-gradient(160deg, #8A6BFF, #6E5BFF)',
        boxShadow: '0 12px 30px rgba(110,91,255,.4), inset 0 2px 0 rgba(255,255,255,.5)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
      }}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
      </div>
    </div>
    {/* logo plates around */}
    {['💎','🦷','✦','✧','⚡','💠'].map((g, i) => {
      const angle = (i / 6) * Math.PI * 2 - Math.PI / 2;
      const r = 78;
      return (
        <div key={i} style={{
          position: 'absolute', left: `calc(50% + ${Math.cos(angle) * r}px)`, top: `calc(50% + ${Math.sin(angle) * r}px)`,
          width: 36, height: 36, marginLeft: -18, marginTop: -18, borderRadius: 8,
          background: '#fff', boxShadow: 'var(--shadow-card)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 16, color: 'var(--primary-500)',
          animation: `floatY 5s ease-in-out ${i * 0.3}s infinite`,
        }}>{g}</div>
      );
    })}
  </div>
);

const FingerprintVisual = () => (
  <div style={demoFrame()}>
    <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 55%, rgba(110,91,255,.16), transparent 60%)' }} />
    <div style={{
      position: 'absolute', top: '32%', left: '20%',
      background: '#fff', padding: '10px 18px', borderRadius: 999,
      boxShadow: 'var(--shadow-card)', fontSize: 13, fontWeight: 600, color: 'var(--ink-900)',
    }}>Check-in confirmed</div>
    <div style={{
      position: 'absolute', bottom: '12%', right: '18%',
      width: 64, height: 64, borderRadius: '50%',
      background: 'linear-gradient(160deg, #8A6BFF, #6E5BFF)',
      boxShadow: '0 12px 24px rgba(110,91,255,.4), inset 0 2px 0 rgba(255,255,255,.5)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
    }}>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 11v4"/><path d="M8 9a4 4 0 0 1 8 0v6"/><path d="M5 11a7 7 0 0 1 14 0v3"/><path d="M2 13a10 10 0 0 1 20 0"/></svg>
    </div>
  </div>
);

function demoFrame() {
  return {
    position: 'relative', height: '100%', minHeight: 160,
    background: 'linear-gradient(180deg, var(--bg-card-hi), var(--bg-card))',
    borderRadius: 12, overflow: 'hidden',
  };
}

const Features = () => {
  return (
    <section style={{ paddingBottom: 96 }}>
      <div className="container">
        {/* 2-up wide row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 12, marginBottom: 12 }}>
          <FeatureCard
            title="Cavity Radar"
            sub="We scan early and ping you the moment something's off — no surprise bills."
            visual={<RadarVisual />}
          />
          <FeatureCard
            title="Smile Score on Steroids"
            sub="A live read of your dental health with personalized next steps. No guessing."
            visual={<SmileScoreVisual />}
            span={1}
          />
        </div>
        {/* 3-up row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
          <FeatureCard
            title="Auto-Fill That Slaps"
            sub="Bring your insurance once. We auto-claim every visit so you don't lift a finger."
            visual={<AutoFillVisual />}
          />
          <FeatureCard
            title="Pain-Proof Tech"
            sub="Lasers, gentle scans, calm rooms. Backed by board-certified specialists."
            visual={<StackVisual />}
          />
          <FeatureCard
            title="Check-In by Face"
            sub="Walk in, smile at the kiosk, sit down. Paperwork's already done."
            visual={<FingerprintVisual />}
          />
        </div>
      </div>
    </section>
  );
};

window.Features = Features;
