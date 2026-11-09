import { useCallback, useEffect, useState } from 'react';
import { EMAIL, X, BEHANCE } from './data/links.js';
import { handleMail } from './lib/mail.js';
import { Avatar, Sig, Contrast } from './components/Icons.jsx';
import Clock from './components/Clock.jsx';
import Lightbox from './components/Lightbox.jsx';
import { LightboxContext } from './components/Gallery.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Resume from './pages/Resume.jsx';
import Synapse from './pages/Synapse.jsx';
import Stem from './pages/Stem.jsx';

// Hash routes work on any static host, so Vercel needs no rewrite rules.
const ROUTES = {
  '': { View: Home, title: 'IQ.design | Muquaddim Omisore, Product Designer' },
  about: { View: About, title: 'About | IQ.design' },
  resume: { View: Resume, title: 'Resume | IQ.design' },
  synapse: { View: Synapse, title: 'THE IQ SYNAPSE | IQ.design' },
  stem: { View: Stem, title: 'STEM Tisha | IQ.design' },
};
const readRoute = () => {
  const r = window.location.hash.replace('#', '');
  return r in ROUTES ? r : '';
};

export default function App() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'));
  const [route, setRoute] = useState(readRoute);
  const [lightbox, setLightbox] = useState(null);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch { /* storage can be blocked */ }
  }, [dark]);

  useEffect(() => {
    const onHash = () => { setRoute(readRoute()); window.scrollTo(0, 0); };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => { document.title = ROUTES[route].title; }, [route]);

  // Fade sections in as they scroll into view.
  useEffect(() => {
    const els = [...document.querySelectorAll('.rv')];
    if (!('IntersectionObserver' in window)) { els.forEach((e) => e.classList.add('in')); return; }
    const io = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    }), { threshold: 0.1 });
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [route]);

  const { View } = ROUTES[route];

  return (
    <LightboxContext.Provider value={setLightbox}>
      <button onClick={() => setDark(!dark)} aria-label="Toggle light and dark mode" className="tgl sub fixed top-6 right-6 z-50">
        <span className="inline-block" style={{ transform: dark ? 'rotate(0deg)' : 'rotate(180deg)', transition: 'transform .4s cubic-bezier(.2,0,0,1)' }}>
          <Contrast />
        </span>
      </button>
      <main className="relative z-10 mx-auto w-full max-w-[540px] px-6 pb-16 pt-10">
        <header className="flex flex-wrap items-center justify-between gap-x-4 gap-y-5">
          <a href="#" className="flex items-center gap-3" aria-label="Home"><Avatar /><Sig /></a>
          <nav className="nav flex flex-wrap gap-x-5 gap-y-1 text-[13px] w-full sm:w-auto">
            <a href="#about" className={route === 'about' ? 'on' : ''}>About me</a>
            <a href={X} target="_blank" rel="noopener noreferrer">X</a>
            <a href={BEHANCE} target="_blank" rel="noopener noreferrer">Behance</a>
            <a href="#resume" className={route === 'resume' ? 'on' : ''}>Resume</a>
            <a href={'mailto:' + EMAIL} onClick={handleMail}>Email</a>
          </nav>
        </header>
        <View />
        <footer className="mt-16 flex flex-wrap justify-between gap-2 sub text-[13px]">
          <span>© 2026 IQ.design, Muquaddim Omisore</span>
          <Clock />
        </footer>
      </main>
      {lightbox ? <Lightbox item={lightbox} onClose={closeLightbox} /> : null}
    </LightboxContext.Provider>
  );
}
