// Platforms.jsx — tabbed locations switcher mirroring the reference's MacOS/iOS tabs
const LOCATIONS = [
  {
    id: 'downtown', label: 'Downtown', icon: '🏙️',
    address: 'R. Augusta, 1240 · São Paulo',
    hours: 'Mon–Sat · 8a–9p',
    chair: 'Chair 03 · Dr. Aline',
  },
  {
    id: 'jardins', label: 'Jardins', icon: '🌿',
    address: 'Al. Lorena, 880 · São Paulo',
    hours: 'Mon–Fri · 9a–7p',
    chair: 'Chair 01 · Dr. Bruno',
  },
  {
    id: 'pinheiros', label: 'Pinheiros', icon: '🎨',
    address: 'R. dos Pinheiros, 412 · São Paulo',
    hours: 'Tue–Sun · 10a–8p',
    chair: 'Chair 02 · Dr. Camila',
  },
  {
    id: 'remote', label: 'Tele-Smile', icon: '📱',
    address: 'Video consults · anywhere',
    hours: '7 days · 7a–11p',
    chair: 'Async · 24h response',
  },
];

const SCHEDULE = [
  { name: 'All slots', count: 38, color: 'linear-gradient(90deg,#6E5BFF,#FF6EC4,#FFD58A,#6EDBE0,#B7F0C6)' },
  { name: 'Open', count: 18, dot: 'var(--success)' },
  { name: 'Held', count: 12, dot: '#FFD58A' },
  { name: 'Booked', count: 8, dot: '#D14B4B' },
];

const APPTS = [
  { who: 'Cleaning · Jamie', tag: '09:30', logo: '🦷', g: '#8A6BFF,#FF6EC4' },
  { who: 'Whitening · Priya', tag: '10:15', logo: '💎', g: '#6EDBE0,#8A6BFF' },
  { who: 'Implant consult · Leo', tag: '11:00', logo: '✦', g: '#FFD58A,#A496FF' },
  { who: 'Aligners · Mira', tag: '11:45', logo: '✧', g: '#B7F0C6,#6EDBE0' },
];

const Platforms = () => {
  const [active, setActive] = React.useState('downtown');
  const loc = LOCATIONS.find(l => l.id === active);
  return (
    <section style={{ padding: '40px 0 96px' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: 48 }}>
        <h2 className="h1 reveal">
          Find Dental Clinic <span className="glyph">✦</span>
          <br />Wherever <span className="glyph">📍</span> You Are
        </h2>
        <p className="lead reveal" style={{ maxWidth: 520, margin: '20px auto 0' }}>
          Three rooms in São Paulo and one in your pocket. Pick the vibe, book the slot.
        </p>
      </div>

      <div className="container reveal">
        <div className="card" style={{ padding: 16, background: 'var(--bg-card)' }}>
          {/* Tab strip */}
          <div style={{ display: 'flex', gap: 4, padding: 6, background: 'var(--bg-inset)', borderRadius: 999, width: 'fit-content', margin: '0 auto 24px' }}>
            {LOCATIONS.map(l => (
              <button
                key={l.id}
                onClick={() => setActive(l.id)}
                style={{
                  border: 'none', cursor: 'pointer',
                  padding: '10px 20px', borderRadius: 999,
                  fontSize: 14, fontWeight: 600,
                  background: active === l.id ? '#fff' : 'transparent',
                  color: active === l.id ? 'var(--ink-900)' : 'var(--ink-500)',
                  boxShadow: active === l.id ? 'var(--shadow-card)' : 'none',
                  transition: 'all 200ms var(--ease-soft)',
                  display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-body)',
                }}
              >
                <span>{l.icon}</span>{l.label}
              </button>
            ))}
          </div>

          {/* Mock dashboard */}
          <div style={{
            background: '#fff', borderRadius: 12, overflow: 'hidden',
            display: 'grid', gridTemplateColumns: '240px 1fr 320px',
            minHeight: 420,
            boxShadow: 'var(--shadow-card)',
          }}>
            {/* sidebar */}
            <aside style={{ padding: 20, borderRight: '1px solid var(--border)', background: 'var(--bg-card)' }}>
              <div style={{ display: 'flex', gap: 6, marginBottom: 18 }}>
                <span style={{ width: 10, height: 10, borderRadius: 999, background: '#D14B4B' }} />
                <span style={{ width: 10, height: 10, borderRadius: 999, background: '#FFD58A' }} />
                <span style={{ width: 10, height: 10, borderRadius: 999, background: 'var(--success)' }} />
              </div>
              <div style={{ fontSize: 11, color: 'var(--ink-400)', fontFamily: 'var(--font-mono)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 8 }}>Schedule</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {SCHEDULE.map((s, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px', borderRadius: 12, background: i === 0 ? '#fff' : 'transparent' }}>
                    {s.color
                      ? <span style={{ width: 14, height: 14, borderRadius: '50%', background: s.color }} />
                      : <span style={{ width: 10, height: 10, borderRadius: '50%', background: s.dot, marginLeft: 2, marginRight: 2 }} />}
                    <span style={{ fontSize: 13.5, color: 'var(--ink-700)', fontWeight: 500, flex: 1 }}>{s.name}</span>
                    <span style={{ fontSize: 11, color: 'var(--ink-400)', fontFamily: 'var(--font-mono)' }}>{s.count}</span>
                  </div>
                ))}
              </div>
            </aside>

            {/* main */}
            <main style={{ padding: 24 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 18 }}>
                <h3 style={{ fontSize: 19, fontWeight: 700 }}>Today · {loc.label}</h3>
                <span style={{ fontSize: 12, color: 'var(--ink-400)', fontFamily: 'var(--font-mono)' }}>{loc.address}</span>
              </div>
              <div style={{
                height: 8, borderRadius: 999, overflow: 'hidden', marginBottom: 6,
                background: 'var(--bg-inset)', display: 'flex',
              }}>
                <div style={{ width: '46%', background: 'var(--success)' }} />
                <div style={{ width: '32%', background: '#FFD58A' }} />
                <div style={{ width: '22%', background: '#D14B4B' }} />
              </div>
              <div style={{ display: 'flex', gap: 14, fontSize: 11, color: 'var(--ink-400)', marginBottom: 20, fontFamily: 'var(--font-mono)' }}>
                <span>● open 18</span><span>● held 12</span><span>● booked 8</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {APPTS.map((a, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: 12,
                    padding: '12px 14px', borderRadius: 12, background: 'var(--bg-card)',
                  }}>
                    <div style={{
                      width: 32, height: 32, borderRadius: 8,
                      background: `linear-gradient(135deg, ${a.g})`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 14,
                    }}>{a.logo}</div>
                    <div style={{ fontSize: 14, color: 'var(--ink-900)', fontWeight: 500, flex: 1 }}>{a.who}</div>
                    <div style={{ fontSize: 12, color: 'var(--ink-400)', fontFamily: 'var(--font-mono)' }}>{a.tag}</div>
                  </div>
                ))}
              </div>
            </main>

            {/* right panel */}
            <aside style={{ padding: 24, background: 'linear-gradient(180deg, var(--bg-card), #fff)', borderLeft: '1px solid var(--border)' }}>
              <div style={{
                width: 56, height: 56, borderRadius: 12,
                background: 'linear-gradient(160deg, #8A6BFF, #6E5BFF)',
                marginBottom: 16,
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 24,
                boxShadow: 'var(--shadow-pop)',
              }}>🦷</div>
              <div style={{ fontSize: 12, color: 'var(--ink-400)', fontFamily: 'var(--font-mono)' }}>{loc.hours}</div>
              <div style={{ fontSize: 17, fontWeight: 700, marginTop: 4, marginBottom: 18, color: 'var(--ink-900)' }}>Next slot · 9:30</div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 18 }}>
                <Row label="Doctor" value={loc.chair} />
                <Row label="Patient" value="ryan.kelly@email.com" />
                <Row label="Insurance" value="Bradesco Saúde" />
                <Row label="Last visit" value="4 months ago" />
              </div>

              <div style={{ background: '#FFF3EE', borderRadius: 12, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 8, marginBottom: 18 }}>
                <span style={{ width: 8, height: 8, borderRadius: 999, background: 'var(--warning)' }} />
                <span style={{ fontSize: 12.5, color: 'var(--ink-700)' }}>Recommend X-ray refresh</span>
                <span style={{ marginLeft: 'auto', fontSize: 11, color: 'var(--primary-500)', fontWeight: 600, cursor: 'pointer' }}>Schedule</span>
              </div>
            </aside>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <button className="btn btn--primary" style={{ padding: '16px 28px' }}>
            Book at {loc.label} <span aria-hidden="true">→</span>
          </button>
          <div style={{ marginTop: 12, fontSize: 12, color: 'var(--ink-400)' }}>
            Free first consult · all insurance accepted
          </div>
        </div>
      </div>
    </section>
  );
};

const Row = ({ label, value }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12.5 }}>
    <span style={{ color: 'var(--ink-400)' }}>{label}</span>
    <span style={{ color: 'var(--ink-900)', fontWeight: 500, fontFamily: 'var(--font-mono)', fontSize: 11.5 }}>{value}</span>
  </div>
);

window.Platforms = Platforms;
