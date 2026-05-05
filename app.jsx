// app.jsx — Main App + Tweaks

const { useState, useEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "lavanda": "#C5B8F0",
  "accentMode": "warm",
  "roundness": "generous",
  "heroLayout": "split"
}/*EDITMODE-END*/;

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  useScrollReveal();

  // Derived tokens from tweaks (guard against undefined on first render)
  const lv = (tweaks && tweaks.lavanda) || TWEAK_DEFAULTS.lavanda;
  const tokens = {
    lavanda: lv,
    lavandaLight: lv + '33',
    lavandaMid: lv + '88',
  };

  return (
    <React.Fragment>
      <Navbar tokens={tokens}/>
      <main>
        <Hero tokens={tokens}/>
        <Problema/>
        <ComoFunciona/>
        <Features/>
        <CTAFinal tokens={tokens}/>
      </main>
      <Footer/>

      <TweaksPanel>
        <TweakSection title="Cor principal">
          <TweakColor
            label="Lavanda"
            value={tweaks.lavanda}
            onChange={v => setTweak('lavanda', v)}
          />
          <TweakRadio
            label="Tom geral"
            value={tweaks.accentMode}
            options={[
              { label: 'Quente', value: 'warm' },
              { label: 'Frio', value: 'cool' },
              { label: 'Neutro', value: 'neutral' },
            ]}
            onChange={v => {
              setTweak('accentMode', v);
              if (v === 'warm') setTweak('lavanda', '#C5B8F0');
              if (v === 'cool') setTweak('lavanda', '#9BB8E8');
              if (v === 'neutral') setTweak('lavanda', '#B8B8C8');
            }}
          />
        </TweakSection>

        <TweakSection title="Layout hero">
          <TweakRadio
            label="Disposição"
            value={tweaks.heroLayout}
            options={[
              { label: 'Dividido', value: 'split' },
              { label: 'Centrado', value: 'centered' },
            ]}
            onChange={v => setTweak('heroLayout', v)}
          />
        </TweakSection>

        <TweakSection title="Bordas">
          <TweakRadio
            label="Arredondamento"
            value={tweaks.roundness}
            options={[
              { label: 'Generoso', value: 'generous' },
              { label: 'Moderado', value: 'moderate' },
              { label: 'Sutil', value: 'subtle' },
            ]}
            onChange={v => {
              setTweak('roundness', v);
              const map = { generous: '24px', moderate: '16px', subtle: '8px' };
              document.documentElement.style.setProperty('--card-radius', map[v]);
            }}
          />
        </TweakSection>
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
