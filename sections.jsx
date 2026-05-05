// sections.jsx — Pillo Landing Page sections

const { useState, useEffect, useRef } = React;

// ── TOKENS ──────────────────────────────────────────────────────
const T = {
  bg: '#FAFAF7',
  lavanda: '#C5B8F0',
  lavandaLight: '#EDE9FF',
  lavandaMid: '#D4CAF5',
  menta: '#A8D8C8',
  mentaLight: '#D6F0E8',
  pessego: '#F2C4A0',
  pessegoLight: '#FCE8D8',
  text: '#2C2040',
  textSec: '#544E64',
  textMuted: '#8A8593',
  card: '#EFF2F9',
  white: '#FFFFFF',
  primary: '#5C85D6',
  deepPurple: '#2C2040',
};

// ── SCROLL REVEAL HOOK ───────────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// ── ICONS ────────────────────────────────────────────────────────
const ClockIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const DocIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="5" y="3" width="14" height="18" rx="3" stroke="currentColor" strokeWidth="2"/>
    <path d="M9 8h6M9 12h6M9 16h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const BrainIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M9.5 3C7 3 5 5 5 7.5c0 1.2.4 2.2 1.1 3C5.4 11.3 5 12.4 5 13.5 5 16.5 7.5 19 10.5 19H12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M14.5 3C17 3 19 5 19 7.5c0 1.2-.4 2.2-1.1 3 .7.8 1.1 1.9 1.1 3C19 16.5 16.5 19 13.5 19H12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="12" y1="3" x2="12" y2="19" stroke="currentColor" strokeWidth="1.8"/>
  </svg>
);
const CameraIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="2" y="7" width="20" height="14" rx="3" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="14" r="3" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 7V5a1 1 0 011-1h6a1 1 0 011 1v2" stroke="currentColor" strokeWidth="2"/>
  </svg>
);
const SparkleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
  </svg>
);
const ChecklistIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M8 6h13M8 12h13M8 18h13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M3 6l1 1 2-2M3 12l1 1 2-2M3 18l1 1 2-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const MoonIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const GroupIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="2" y="10" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="2"/>
    <rect x="14" y="10" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M6 10V8a2 2 0 014 0v2M12 14h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const CheckIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const HistoryIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M3 12a9 9 0 109-9H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M3 3v6h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const PawIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <ellipse cx="5.5" cy="10" rx="2" ry="3" stroke="currentColor" strokeWidth="2"/>
    <ellipse cx="18.5" cy="10" rx="2" ry="3" stroke="currentColor" strokeWidth="2"/>
    <ellipse cx="9" cy="7" rx="2" ry="2.5" stroke="currentColor" strokeWidth="2"/>
    <ellipse cx="15" cy="7" rx="2" ry="2.5" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 14c-3.5 0-6 2.5-6 4 0 1.2 1.5 2 6 2s6-.8 6-2c0-1.5-2.5-4-6-4z" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

// ── LOGO MARK ────────────────────────────────────────────────────
const LogoMark = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <circle cx="16" cy="16" r="16" fill="#C5B8F0"/>
    <circle cx="10" cy="13" r="2.2" fill="white"/>
    <circle cx="14.5" cy="10" r="1.8" fill="white"/>
    <circle cx="19.5" cy="10" r="1.8" fill="white"/>
    <circle cx="22" cy="13" r="2.2" fill="white"/>
    <path d="M16 15c-3.5 0-6 2.5-6 4.5 0 1.4 1.2 2.5 2.8 2.5h6.4c1.6 0 2.8-1.1 2.8-2.5 0-2-2.5-4.5-6-4.5z" fill="white"/>
  </svg>
);

// ── NAVBAR ───────────────────────────────────────────────────────
function Navbar({ tokens }) {
  const [scrolled, setScrolled] = useState(false);
  const lv = (tokens && tokens.lavanda) || T.lavanda;

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav aria-label="Navegação principal" style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 clamp(20px, 5vw, 72px)',
      height: 68,
      background: scrolled ? 'rgba(250,250,247,0.90)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(197,184,240,0.18)' : 'none',
      transition: 'background 0.4s ease, border-color 0.4s ease',
    }}>
      <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <img src="uploads/Logo 3D.png" alt="Pillo" style={{ height: 36, width: 'auto', display: 'block' }}/>
      </a>

      <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
        {[['#como-funciona','Como funciona'],['#features','Features']].map(([href, label]) => (
          <a key={href} href={href} className="focus-pill" style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 500,
            color: T.textSec, textDecoration: 'none', transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.target.style.color = T.text}
          onMouseLeave={e => e.target.style.color = T.textSec}>
            {label}
          </a>
        ))}
      </div>

      <a href="#cta" className="focus-pill" style={{
        background: '#5C85D6', color: '#FFFFFF',
        fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 15,
        padding: '10px 22px', borderRadius: 1000, textDecoration: 'none',
        transition: 'opacity 0.2s, transform 0.15s',
      }}
      onMouseEnter={e => { e.currentTarget.style.opacity = '0.82'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
      onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}>
        Começar grátis
      </a>
    </nav>
  );
}

// ── HERO MOCKUP ──────────────────────────────────────────────────
function TimelineMockup({ tokens }) {
  const lv = (tokens && tokens.lavanda) || T.lavanda;
  const meds = [
    { name: 'Dipirona', dose: '250mg', times: ['08:00', '20:00'], color: T.menta },
    { name: 'Amoxicilina', dose: '500mg', times: ['08:00', '16:00'], color: T.pessego },
    { name: 'Omeprazol', dose: '20mg', times: ['07:00'], color: lv },
  ];
  return (
    <div style={{
      background: T.white, borderRadius: 28,
      padding: '24px 24px 20px',
      boxShadow: '0 12px 48px rgba(44,32,64,0.10), 0 2px 8px rgba(197,184,240,0.2)',
      width: '100%', maxWidth: 340,
      fontFamily: "'DM Sans', sans-serif",
      animation: 'float 5s ease-in-out infinite',
    }}>
      {/* Header */}      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
        <div>
          <div style={{ fontSize: 12, color: T.textMuted, fontWeight: 400, marginBottom: 2 }}>Hoje, 30 abr</div>
          <div style={{ fontSize: 17, fontWeight: 600, color: T.text }}>Cronograma do Thor</div>
        </div>
        <div style={{
          background: T.mentaLight, color: '#2A7A62',
          fontSize: 12, fontWeight: 600,
          padding: '5px 12px', borderRadius: 1000,
        }}>3 de 5 ✓</div>
      </div>

      {/* Sleep zone */}
      <div style={{
        background: T.lavandaLight, borderRadius: 14,
        padding: '10px 14px', marginBottom: 14,
        display: 'flex', alignItems: 'center', gap: 10,
        animation: 'pulse-glow 3.5s ease-in-out infinite',
      }}>
        <span style={{ fontSize: 18, lineHeight: 1 }}>🌙</span>
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, color: '#5E4594', marginBottom: 1 }}>Zona de sono protegida</div>
          <div style={{ fontSize: 11, color: '#8A7DB5' }}>00h – 06h · sem interrupções</div>
        </div>
      </div>

      {/* Med rows */}
      {meds.map((med, i) => (
        <div key={med.name} style={{
          display: 'flex', alignItems: 'center', gap: 12,
          padding: '10px 0',
          borderBottom: i < meds.length - 1 ? `1px solid #F0EDF8` : 'none',
          animation: `row-in 0.4s ease ${0.1 + i * 0.12}s both`,
        }}>
          <div style={{
            width: 8, height: 8, borderRadius: '50%',
            background: med.color, flexShrink: 0,
          }}></div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: T.text }}>{med.name}</div>
            <div style={{ fontSize: 11, color: T.textMuted }}>{med.dose}</div>
          </div>
          <div style={{ display: 'flex', gap: 5 }}>
            {med.times.map(t => (
              <span key={t} style={{
                background: T.card, color: T.textSec,
                fontSize: 11, fontWeight: 500,
                padding: '3px 9px', borderRadius: 1000,
              }}>{t}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ── HERO ─────────────────────────────────────────────────────────
function Hero({ tokens }) {
  const lv = (tokens && tokens.lavanda) || T.lavanda;
  return (
    <section style={{
      position: 'relative', minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      overflow: 'hidden', paddingTop: 68,
    }}>

      <div className="hero-grid" style={{
        maxWidth: 1200, margin: '0 auto',
        padding: 'clamp(80px,8vw,120px) clamp(20px,5vw,72px)',
        display: 'grid',
        gridTemplateColumns: '1.05fr 0.95fr',
        gap: 64, alignItems: 'center', width: '100%',
      }}>
        {/* Copy */}
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: T.lavandaLight, color: '#5E4594',
            fontSize: 13, fontWeight: 600,
            padding: '6px 16px', borderRadius: 1000, marginBottom: 28,
          }}>
            <SparkleIcon/> IA para tutores de pets
          </div>

          <h1 style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(36px, 4.5vw, 58px)',
            fontWeight: 600, lineHeight: 1.15,
            color: T.text, marginBottom: 22, textWrap: 'pretty',
          }}>
            Seu pet merece cuidados.<br/>
            <em style={{ fontStyle: 'normal', color: T.primary }}>Você merece dormir.</em>
          </h1>

          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(16px, 1.8vw, 19px)',
            color: T.textSec, lineHeight: 1.7,
            marginBottom: 38, maxWidth: 480,
          }}>
            Pillo converte receitas veterinárias em um cronograma inteligente que respeita sua rotina e protege o seu sono.
          </p>

          <div className="hero-ctas" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="#cta" className="focus-pill" style={{
              background: '#5C85D6', color: '#FFFFFF',
              fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 16,
              padding: '15px 28px', borderRadius: 1000, textDecoration: 'none',
              display: 'inline-block', transition: 'opacity 0.2s, transform 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.84'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              Criar meu cronograma grátis
            </a>
            <a href="#como-funciona" className="focus-pill" style={{
              background: 'transparent', color: T.textSec,
              fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: 16,
              padding: '15px 28px', borderRadius: 1000, textDecoration: 'none',
              display: 'inline-block', border: `1.5px solid ${T.lavandaMid}`,
              transition: 'background 0.2s, color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = T.lavandaLight; e.currentTarget.style.color = T.text; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = T.textSec; }}>
              Conferir como funciona ↓
            </a>
          </div>
        </div>

        {/* Drag-animated medication card */}
        <div className="hero-drag-card" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <DragMedCard/>
        </div>
      </div>
    </section>
  );
}

// ── DRAG MED CARD ────────────────────────────────────────────────
function DragMedCard() {
  // Animate only on hover. Phases: 0 rest → 2 lift → 3 drift → 0 rest.
  const [phase, setPhase] = useState(0);
  const [hovering, setHovering] = useState(false);
  useEffect(() => {
    if (!hovering) { setPhase(0); return; }
    const seq = [
      { p: 2, t: 700 },  // lift up & rotate
      { p: 3, t: 700 },  // drift down
      { p: 0, t: 800 },  // settle
      { p: 0, t: 600 },  // pause before looping
    ];
    let i = 0;
    let timer;
    const tick = () => {
      const s = seq[i % seq.length];
      setPhase(s.p);
      i++;
      timer = setTimeout(tick, s.t);
    };
    tick();
    return () => clearTimeout(timer);
  }, [hovering]);

  // Transform table per phase
  const transforms = {
    0: 'translate(0px, 0px) rotate(0deg) scale(1)',
    1: 'translate(0px, 0px) rotate(0deg) scale(1)',
    2: 'translate(8px, -14px) rotate(-3deg) scale(1.04)',
    3: 'translate(14px, 38px) rotate(-2deg) scale(1.03)',
  };
  const shadows = {
    0: '0 4px 20px rgba(94,69,148,0.10)',
    1: '0 4px 20px rgba(94,69,148,0.10)',
    2: '0 22px 48px rgba(94,69,148,0.28), 0 8px 16px rgba(94,69,148,0.18)',
    3: '0 18px 36px rgba(94,69,148,0.22), 0 6px 14px rgba(94,69,148,0.14)',
  };

  return (
    <div style={{
      position: 'relative',
      width: 360, maxWidth: '100%',
      padding: '40px 30px 60px',
    }}
    onMouseEnter={() => setHovering(true)}
    onMouseLeave={() => setHovering(false)}>
      {/* Dashed ghost outline (drop target) */}
      <div aria-hidden="true" style={{
        position: 'absolute',
        top: 40, left: 30, right: 30,
        height: 134,
        borderRadius: 22,
        border: `1.5px dashed ${T.lavandaMid}`,
        opacity: phase === 2 || phase === 3 ? 0.85 : 0,
        transition: 'opacity 0.4s ease',
      }}></div>

      {/* Card */}
      <div style={{
        position: 'relative',
        background: T.lavandaLight,
        borderRadius: 22,
        padding: '18px 22px 20px',
        boxShadow: shadows[phase],
        transform: transforms[phase],
        transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.5s ease',
        cursor: 'grab',
      }}>
        {/* Top row: avatar + name */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
          <div style={{
            width: 30, height: 30, borderRadius: '50%',
            border: `2px solid ${T.lavandaMid}`,
            boxShadow: 'inset 0 0 0 1.5px #fff',
            flexShrink: 0,
            backgroundImage: 'url("uploads/pasted-1777983607117-0.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} aria-hidden="true"></div>
          <div style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 17, fontWeight: 700, color: T.text,
            letterSpacing: '-0.2px',
          }}>Margot</div>
        </div>

        {/* Body row: drag handle + text */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
          {/* 6-dot drag handle */}
          <div aria-hidden="true" style={{
            display: 'grid',
            gridTemplateColumns: '4px 4px',
            gap: '4px 5px',
            paddingTop: 6,
            flexShrink: 0,
          }}>
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} style={{
                width: 4, height: 4, borderRadius: '50%',
                background: T.textMuted,
                opacity: 0.55,
              }}></span>
            ))}
          </div>

          <div style={{ flex: 1 }}>
            <div style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 16, fontWeight: 500,
              color: T.text, marginBottom: 4,
              lineHeight: 1.35,
            }}>
              Gaviz – 20mg (1 comprimido)
            </div>
            <div style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 16, fontWeight: 400,
              color: T.text, opacity: 0.78,
            }}>
              Cada 12h
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── PROBLEMA ─────────────────────────────────────────────────────
function Problema() {
  const cards = [
    { icon: <ClockIcon/>, bg: T.pessegoLight, iconColor: '#C47A3A', title: 'Acordar às 3h da manhã para dar remédio', desc: 'Prescrições que ignoram sua necessidade de descanso prejudicam você e seu pet.' },
    { icon: <DocIcon/>, bg: T.lavandaLight, iconColor: '#7D60CC', title: 'Receitas complexas difíceis de memorizar', desc: 'Múltiplos medicamentos, horários diferentes, doses variadas — impossível decorar tudo.' },
    { icon: <BrainIcon/>, bg: T.mentaLight, iconColor: '#2E8A70', title: 'Medo constante de errar a dose ou o horário', desc: 'A ansiedade de cometer um erro com seu pet adoece mais do que qualquer rotina.' },
  ];

  return (
    <section style={{ padding: 'clamp(72px,8vw,120px) clamp(20px,5vw,72px)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 56 }}>
          <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(28px,3.5vw,42px)', fontWeight: 600, color: T.text, marginBottom: 12 }}>
            Cuidar de pet doente é exaustivo
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, color: T.textSec, maxWidth: 440, margin: '0 auto' }}>
            Você não está sozinho nesse cansaço.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
          {cards.map((card, i) => (
            <div key={i} className={`reveal reveal-d${i + 1}`} style={{
              background: card.bg, borderRadius: 24, padding: 28,
              transition: 'transform 0.25s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{
                width: 48, height: 48, borderRadius: 16,
                background: 'rgba(255,255,255,0.65)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 18, color: card.iconColor,
              }}>
                {card.icon}
              </div>
              <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 18, fontWeight: 600, color: T.text, marginBottom: 10, lineHeight: 1.35 }}>
                {card.title}
              </h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: T.textSec, lineHeight: 1.65 }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── COMO FUNCIONA ────────────────────────────────────────────────
function ComoFunciona() {
  const steps = [
    { num: '01', icon: <CameraIcon/>, title: 'Insira a receita', desc: 'Tire uma foto ou digite o texto da receita veterinária. O Pillo lê tudo automaticamente.' },
    { num: '02', icon: <SparkleIcon/>, title: 'IA otimiza', desc: 'Agrupa doses, protege seu sono e sugere os melhores horários para o tratamento.' },
    { num: '03', icon: <ChecklistIcon/>, title: 'Siga o cronograma', desc: 'Notificações gentis e um checklist diário para nunca esquecer nenhuma dose.' },
  ];

  return (
    <section id="como-funciona" style={{
      padding: 'clamp(72px,8vw,120px) clamp(20px,5vw,72px)',
      background: '#FAFAF7',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
          <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(28px,3.5vw,42px)', fontWeight: 600, color: T.text, marginBottom: 12 }}>
            De receita para cronograma em segundos
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, color: T.textSec }}>
            Simples como tirar uma foto.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, position: 'relative' }}>
          {/* Connector lines */}
          <div className="steps-connector" style={{
            position: 'absolute', top: 36, left: 'calc(16.6% + 36px)', right: 'calc(16.6% + 36px)',
            height: 2,
            background: `linear-gradient(90deg, ${T.lavanda} 0%, ${T.menta} 50%, ${T.pessego} 100%)`,
            borderRadius: 2, opacity: 0.5, zIndex: 0,
          }} aria-hidden="true"></div>

          {steps.map((step, i) => (
            <div key={i} className={`reveal reveal-d${i + 1}`} style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
              <div style={{
                width: 72, height: 72, borderRadius: '50%',
                background: T.white,
                boxShadow: '0 4px 24px rgba(197,184,240,0.35)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 20px',
                color: T.primary,
              }}>
                {step.icon}
              </div>
              <div style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: 11,
                fontWeight: 700, color: T.lavanda,
                letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 10,
              }}>{step.num}</div>
              <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 20, fontWeight: 600, color: T.text, marginBottom: 10 }}>
                {step.title}
              </h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: T.textSec, lineHeight: 1.65, maxWidth: 280, margin: '0 auto' }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── SLEEP BAR VISUAL ─────────────────────────────────────────────
function SleepBar() {
  const slots = [
    { left: '26%', width: '7%', bg: T.menta },
    { left: '40%', width: '7%', bg: T.pessego },
    { left: '54%', width: '7%', bg: T.menta },
    { left: '68%', width: '7%', bg: T.lavanda },
    { left: '82%', width: '7%', bg: T.pessego },
  ];
  return (
    <div style={{ marginTop: 24 }}>
      <div style={{
        position: 'relative', height: 36, borderRadius: 1000,
        background: 'rgba(255,255,255,0.12)', overflow: 'hidden',
        marginBottom: 8,
      }}>
        {/* Sleep zone */}
        <div style={{
          position: 'absolute', left: 0, top: 0, width: '25%', height: '100%',
          background: 'linear-gradient(90deg, rgba(94,69,148,0.9), rgba(125,96,204,0.7))',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.9)',
          gap: 4,
        }}>
          🌙 00–06h
        </div>
        {/* Dose marks */}
        {slots.map((s, i) => (
          <div key={i} style={{
            position: 'absolute', left: s.left, top: '22%',
            height: '56%', width: s.width,
            borderRadius: 6, background: s.bg, opacity: 0.85,
          }}></div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 2px' }}>
        {['00h','06h','12h','18h','23h'].map(t => (
          <span key={t} style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.45)' }}>{t}</span>
        ))}
      </div>
    </div>
  );
}

// ── FEATURES ─────────────────────────────────────────────────────
function Features() {
  const small = [
    { icon: <GroupIcon/>, bg: T.pessegoLight, iconColor: '#C47A3A', title: 'Agrupamento inteligente', desc: 'Doses combinadas para minimizar as interrupções na sua rotina.' },
    { icon: <CheckIcon/>, bg: T.mentaLight, iconColor: '#2E8A70', title: 'Checklist visual', desc: 'Marque cada dose com um toque. Nunca mais dúvida: "dei ou não dei?"' },
    { icon: <HistoryIcon/>, bg: T.lavandaLight, iconColor: '#7D60CC', title: 'Histórico do pet', desc: 'Registro completo de todos os tratamentos passados para consultas futuras.' },
    { icon: <PawIcon/>, bg: T.card, iconColor: T.primary, title: 'Múltiplos pets', desc: 'Gerencie o cronograma de todos os seus pets em um só lugar.' },
  ];

  return (
    <section id="features" style={{
      padding: 'clamp(72px,8vw,120px) clamp(20px,5vw,72px)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 56 }}>
          <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(28px,3.5vw,42px)', fontWeight: 600, color: T.text, marginBottom: 12 }}>
            Tudo que você precisa para não esquecer nada
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 16 }}>
          {/* Big card */}
          <div className="reveal features-big" style={{
            gridColumn: 'span 7',
            background: T.deepPurple, borderRadius: 28, padding: 36,
            color: T.white,
          }}>
            <div style={{
              width: 46, height: 46, borderRadius: 15,
              background: 'rgba(197,184,240,0.18)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: 18, color: T.lavanda,
            }}>
              <MoonIcon/>
            </div>
            <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 26, fontWeight: 600, color: T.white, marginBottom: 10 }}>
              Proteção do sono
            </h3>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: 'rgba(255,255,255,0.62)', lineHeight: 1.7, maxWidth: 380 }}>
              Nenhum remédio entre 00h e 06h. Sua noite de sono é sagrada — e essencial para cuidar bem do seu pet.
            </p>
            <SleepBar/>
          </div>

          {/* Small cards */}
          {small.map((f, i) => (
            <div key={i} className={`reveal reveal-d${(i % 2) + 1} features-sm`} style={{
              gridColumn: 'span 5',
              background: f.bg, borderRadius: 24, padding: 24,
              transition: 'transform 0.2s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ color: f.iconColor, marginBottom: 14 }}>{f.icon}</div>
              <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, fontWeight: 600, color: T.text, marginBottom: 8 }}>{f.title}</h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: T.textSec, lineHeight: 1.65 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── DEPOIMENTOS ──────────────────────────────────────────────────
function Depoimentos() {
  const testimonials = [
    {
      initials: 'MA', bg: T.lavanda, name: 'Mariana A.', pet: 'Tutora da Luna · gata',
      text: 'Antes eu acordava às 2h, 4h e 6h com alarmes. Com o Pillo, a Luna tomou todos os remédios certinhos e eu dormi a noite toda pela primeira vez em semanas.',
    },
    {
      initials: 'RF', bg: T.menta, name: 'Rafael F.', pet: 'Tutor do Thor · cachorro',
      text: 'A receita tinha 4 remédios com horários que se batiam. O Pillo reorganizou tudo em minutos e agrupou as doses da manhã. Muito mais simples.',
    },
    {
      initials: 'CS', bg: T.pessego, name: 'Camila S.', pet: 'Tutora do Mel e do Pipoca · 2 gatos',
      text: 'Dois gatos com tratamentos diferentes ao mesmo tempo. Parecia impossível. O Pillo criou um cronograma único para os dois e nunca mais esqueci uma dose.',
    },
  ];

  return (
    <section id="depoimentos" style={{
      padding: 'clamp(72px,8vw,120px) clamp(20px,5vw,72px)',
      background: 'linear-gradient(180deg, #FAFAF7 0%, #F2EFFE 50%, #FAFAF7 100%)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 56 }}>
          <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(28px,3.5vw,42px)', fontWeight: 600, color: T.text, marginBottom: 12 }}>
            Tutores que recuperaram o sono
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, color: T.textSec }}>
            Histórias de quem cuida com amor — e agora descansa também.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {testimonials.map((t, i) => (
            <div key={i} className={`reveal reveal-d${i + 1}`} style={{
              background: T.white, borderRadius: 24, padding: 28,
              boxShadow: '0 2px 16px rgba(44,32,64,0.055)',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 10px 32px rgba(44,32,64,0.10)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 16px rgba(44,32,64,0.055)'; }}>
              <div style={{ color: T.pessego, fontSize: 15, letterSpacing: 3, marginBottom: 16 }}>★★★★★</div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: T.textSec, lineHeight: 1.75, marginBottom: 22, fontStyle: 'italic' }}>
                "{t.text}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 42, height: 42, borderRadius: '50%',
                  background: t.bg, display: 'flex', alignItems: 'center',
                  justifyContent: 'center', flexShrink: 0,
                  fontFamily: "'DM Sans', sans-serif", fontWeight: 700,
                  fontSize: 14, color: T.white,
                }}>{t.initials}</div>
                <div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, color: T.text }}>{t.name}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: T.textMuted }}>{t.pet}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── CTA FINAL ────────────────────────────────────────────────────
function CTAFinal({ tokens }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const lv = (tokens && tokens.lavanda) || T.lavanda;

  const handleSubmit = async e => {
    e.preventDefault();
    if (!email.includes('@')) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="cta" style={{
      padding: 'clamp(80px,10vw,140px) clamp(20px,5vw,72px)',
      background: `linear-gradient(135deg, ${T.lavandaLight} 0%, ${T.mentaLight} 100%)`,
      textAlign: 'center',
    }}>
      <div className="reveal" style={{ maxWidth: 580, margin: '0 auto' }}>
        <h2 style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 'clamp(30px,4vw,50px)',
          fontWeight: 600, color: T.text,
          lineHeight: 1.2, marginBottom: 16,
        }}>
          Comece hoje.<br/>Durma melhor esta noite.
        </h2>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, color: T.textSec, marginBottom: 4 }}>
          Grátis para sempre para 1 pet. Sem cartão de crédito.
        </p>

        {submitted ? (
          <div style={{
            background: T.white, borderRadius: 24, padding: '32px 40px',
            marginTop: 36, boxShadow: '0 4px 28px rgba(197,184,240,0.28)',
          }}>
            <div style={{ fontSize: 44, marginBottom: 12 }}>🌙</div>
            <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 22, fontWeight: 600, color: T.text, marginBottom: 8 }}>
              Você está na lista!
            </h3>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: T.textSec, lineHeight: 1.65 }}>
              Em breve você vai dormir tranquilo enquanto o Pillo cuida do cronograma do seu pet.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} aria-label="Formulário de cadastro" style={{
            display: 'flex', gap: 10, marginTop: 36,
            flexWrap: 'wrap', justifyContent: 'center',
          }}>
            <input
              className="focus-pill"
              type="email" value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="seu@email.com" required
              aria-label="Seu endereço de e-mail"
              style={{
                flex: 1, minWidth: 220, maxWidth: 320,
                background: T.white, border: 'none',
                borderRadius: 1000, padding: '15px 22px',
                fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: T.text,
                boxShadow: '0 2px 14px rgba(197,184,240,0.28)',
              }}
            />
            <button type="submit" disabled={loading} className="focus-pill" style={{
              background: '#5C85D6', color: '#FFFFFF',
              fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 16,
              padding: '15px 26px', borderRadius: 1000, border: 'none',
              cursor: loading ? 'default' : 'pointer',
              opacity: loading ? 0.7 : 1,
              transition: 'opacity 0.2s, transform 0.15s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => { if (!loading) { e.currentTarget.style.opacity = '0.84'; e.currentTarget.style.transform = 'translateY(-2px)'; } }}
            onMouseLeave={e => { e.currentTarget.style.opacity = loading ? '0.7' : '1'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              {loading ? 'Enviando…' : 'Quero testar o Pillo'}
            </button>
          </form>
        )}

        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: T.textMuted, marginTop: 20, lineHeight: 1.6 }}>
          Sempre valide os horários com seu veterinário.
        </p>
      </div>
    </section>
  );
}

// ── FOOTER ───────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{
      padding: 'clamp(40px,5vw,60px) clamp(20px,5vw,72px)',
      borderTop: '1px solid rgba(197,184,240,0.2)',
    }}>
      <div className="footer-inner" style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'flex', flexWrap: 'wrap',
        gap: 32, justifyContent: 'space-between', alignItems: 'center',
      }}>
        <div>
          <div style={{ marginBottom: 6 }}>
            <img src="uploads/Logo 3D.png" alt="Pillo" style={{ height: 30, width: 'auto', display: 'block' }}/>
          </div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: T.textMuted }}>
            Cuidado inteligente para quem ama de verdade.
          </p>
        </div>

        <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap' }}>
          {['Privacidade','Termos de uso','Contato'].map(link => (
            <a key={link} href="#" className="focus-pill" style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 14,
              color: T.textMuted, textDecoration: 'none', transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = T.textSec}
            onMouseLeave={e => e.target.style.color = T.textMuted}>
              {link}
            </a>
          ))}
        </div>

        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: T.textMuted }}>
          Feito com amor por tutores de pets 🐾
        </p>
      </div>
    </footer>
  );
}

// ── EXPORTS ──────────────────────────────────────────────────────
Object.assign(window, {
  Navbar, Hero, Problema, ComoFunciona, Features,
  Depoimentos, CTAFinal, Footer,
  DragMedCard,
  useScrollReveal, T,
});
