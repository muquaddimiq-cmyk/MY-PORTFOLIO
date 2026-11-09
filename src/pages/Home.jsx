import { useRef } from 'react';
import { LOGOS } from '../assets/index.js';
import { cards, sideProjects } from '../data/content.js';
import { EMAIL, X, BEHANCE, HOL } from '../data/links.js';
import { handleMail } from '../lib/mail.js';
import { Ic, Chevron } from '../components/Icons.jsx';
import Mark from '../components/Marks.jsx';
import Ecg from '../components/Ecg.jsx';
import WorldClocks from '../components/WorldClocks.jsx';
import Testimonial from '../components/Testimonial.jsx';
import HireMe from '../components/HireMe.jsx';
import { Row, Label, Side } from '../components/Blocks.jsx';

const isExternal = (href) => /^https?:/.test(href);

export default function Home() {
  const scroller = useRef(null);
  const by = (n) => scroller.current && scroller.current.scrollBy({ left: n * 224, behavior: 'smooth' });
  const hour = +new Date().toLocaleString('en-US', { timeZone: 'Africa/Lagos', hour: 'numeric', hour12: false });
  const greeting = hour < 12 ? 'good morning' : hour < 17 ? 'good afternoon' : 'good evening';

  return (
    <div className="page">
      <p className="sub mt-16 flex flex-wrap items-center gap-3">
        {greeting}
        <span className="inline-flex items-center gap-2 border border-[var(--line)] px-2.5 py-1 text-[12px] fg">
          <span className="pulse h-1.5 w-1.5 rounded-full" style={{ background: 'var(--accent)' }}></span>Available full time
        </span>
        <span className="inline-flex items-center border border-[var(--line)] px-2.5 py-1 text-[12px] fg">Remote, time zone flexible</span>
      </p>
      <p className="mt-5">
        I’m Muquaddim, a <strong>UI UX product designer</strong> and the founder of <a className="u" href="#synapse">THE IQ SYNAPSE</a>, where I run the whole design system and its tokens. I turn complex ideas into clear, usable experiences.
      </p>
      <p className="mt-4">
        Everything I do is grounded in clarity and systems. I design in Figma from research to launch, build tokens and components, and I currently work at <a className="u" href="#stem">STEM Tisha</a>. Before that I worked with <a className="u" href={HOL} target="_blank" rel="noopener noreferrer">Hashgraph Online</a>.
      </p>
      <p className="mt-4">
        You can see it in how my work connects. A clinical design system at THE IQ SYNAPSE, brand identity for Zaynab Yahya & Co, and explainers for HOL and Qitmeer all share one goal: make the complex obvious.
      </p>
      <Ecg />

      <div className="mt-12 flex items-center justify-between">
        <span className="sub">work</span>
        <span className="flex gap-3 sub">
          <button className="tgl" aria-label="Scroll left" onClick={() => by(-1)}><Chevron d="l" /></button>
          <button className="tgl fg" aria-label="Scroll right" onClick={() => by(1)}><Chevron d="r" /></button>
        </span>
      </div>
      <div ref={scroller} className="scroller mt-4 flex gap-4 overflow-x-auto md:mr-[calc(270px-50vw)]">
        {cards.map(([title, text, bg, icon, href, mark], i) => (
          <a
            key={title}
            href={href}
            target={isExternal(href) ? '_blank' : undefined}
            rel={isExternal(href) ? 'noopener noreferrer' : undefined}
            className="wcard"
            style={{ background: bg, '--i': i * 70 + 'ms' }}
          >
            {mark && LOGOS[mark] ? (
              <img src={LOGOS[mark]} alt={title + ' logo'} className="h-14 w-auto max-w-full object-contain object-left" />
            ) : mark ? (
              <Mark k={mark} />
            ) : (
              <Ic s={26}><path d={icon} /></Ic>
            )}
            <h3 className="mt-3 font-semibold text-[13px]">{title}</h3>
            <p className="mt-2 text-[12px] leading-snug opacity-90">{text}</p>
          </a>
        ))}
      </div>

      <Label>before this</Label>
      <Row l="Sentimex.io, social media and visual design intern" r="Telegram growth">Designed templates and KOL outreach materials, and ran UX testing on an AI product.</Row>
      <Row l="Qitmeer Network, content creator" r="Web3">Visual content, educational explainers and threads that made blockchain concepts accessible.</Row>
      <Row l="DIMAI, community ambassador and content designer" r="AI">Designed onboarding content and feedback loops that kept messaging aligned with users.</Row>
      <Row l="Medicine and Surgery (in view), University of Ilorin" r="Nigeria">Studying alongside my design career, with my schedule fully open for full time design work and no restrictions.</Row>

      <Label>side projects</Label>
      {sideProjects.map((p) => <Side key={p.name} {...p} />)}

      <Label>learning</Label>
      <Row l="Foundations of User Experience (UX) Design" r="Google, Coursera" />
      <Row l="Figma Fundamentals" r="Coursera" />
      <Row l="Microsoft Digital Skills" r="Content, collaboration" />

      <Label>kind words</Label>
      <Testimonial />

      <Label>remote and time zone flexible</Label>
      <Row l="Open to remote roles with teams abroad" r="Nigeria, UTC+1">Eager to work with teams in other countries, and flexible across time zones. Time differences are not a barrier for me.</Row>
      <WorldClocks />
      <div className="mt-8" />
      <Row l="Tools" r="Design and collaboration">Figma for UI, prototyping and design systems, FigJam for flows and workshops, Illustrator and Canva for graphics and campaign visuals, plus whatever your team already uses.</Row>
      <Row l="Updates" r="Async friendly">Short written updates on a rhythm we agree. Each one links the Figma file and says what is done, what is next and what is blocked, so work keeps moving when we are not online together.</Row>
      <Row l="Feedback" r="Early and often">I share rough work early, gather comments directly in Figma, turn them into a clear list of changes and confirm it with you before I continue.</Row>
      <Row l="Handoff" r="Built to be built">Components, tokens and specs organised in Figma, so developers can build without guessing.</Row>

      <Label>connect</Label>
      <p>
        I’m available full time for remote product design roles and flexible across time zones. I’m always up for talking with thoughtful people about product design, research and clear communication. Reach me at <a className="u" href={'mailto:' + EMAIL} onClick={handleMail}>{EMAIL}</a>, or find me on <a className="u" href={X} target="_blank" rel="noopener noreferrer">X</a> and <a className="u" href={BEHANCE} target="_blank" rel="noopener noreferrer">Behance</a>.
      </p>
      <HireMe />
    </div>
  );
}
