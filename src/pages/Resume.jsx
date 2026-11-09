import { jobs, jobLinks } from '../data/content.js';
import { EMAIL, BEHANCE, RESUME_PDF } from '../data/links.js';
import { handleMail } from '../lib/mail.js';
import { Download } from '../components/Icons.jsx';
import { Row, Label, Breadcrumb } from '../components/Blocks.jsx';
import HireMe from '../components/HireMe.jsx';

export default function Resume() {
  return (
    <div className="page">
      <Breadcrumb current="Resume" />
      <div className="mt-10 flex flex-wrap items-start justify-between gap-4">
        <h1 className="text-[28px] font-medium fg tracking-tight">Muquaddim Omisore</h1>
        <a href={RESUME_PDF} download="Muquaddim_Omisore_Resume.pdf" className="dl inline-flex items-center gap-2 px-3.5 py-2 text-[13px] fg">
          <Download />Download PDF
        </a>
      </div>
      <p className="sub">Product Designer and Visual Content Strategist · Remote, Nigeria (UTC+1) · Available full time · Time zone flexible</p>
      <p className="mt-3 sub">
        <a className="u" href={'mailto:' + EMAIL} onClick={handleMail}>{EMAIL}</a> · <a className="u" href={BEHANCE} target="_blank" rel="noopener noreferrer">behance.net/muquaddomisore</a>
      </p>
      <Label>About</Label>
      <p className="fg">Product designer and founder of THE IQ SYNAPSE who turns complex ideas into clear, usable visual and written experiences. Strong track record in visual storytelling, UX feedback loops and design support for early stage products, from research through launch.</p>
      <Label>Availability</Label>
      <Row l="Full time, remote, time zone flexible" r="Nigeria, UTC+1">Eager to work with teams in other countries, and flexible across time zones. Time differences are not a barrier for me.</Row>
      <Label>Experience</Label>
      {jobs.map(([title, dates, bullets]) => (
        <div key={title} className="mb-7">
          <div className="flex justify-between gap-4">
            <span className="fg font-medium">{title}</span>
            <span className="sub text-right max-w-[40%] sm:max-w-none sm:shrink-0">{dates}</span>
          </div>
          <ul className="mt-2 list-disc pl-5 space-y-1.5">
            {bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
          {jobLinks[title] ? (
            <p className="mt-2 flex flex-wrap gap-x-4">
              {jobLinks[title].map(([url, label]) => <a key={url} className="u" href={url} target="_blank" rel="noopener noreferrer">{label}</a>)}
            </p>
          ) : null}
        </div>
      ))}
      <Label>Skills</Label>
      <Row l="Design" r="">Figma, FigJam, Adobe Illustrator, Canva, prototyping, visual design, information and explainer design, visual storytelling, branding</Row>
      <Row l="Content" r="">Content writing, social media management, community building, campaign and mindshare optimization</Row>
      <Row l="Research" r="">Product and ecosystem research, UX and beta testing, QA, AI training and data annotation, KOL and investor outreach</Row>
      <Label>Education</Label>
      <Row l="Medicine and Surgery (in view), University of Ilorin" r="Nigeria">Studying alongside my design career, with my schedule fully open for full time design work and no restrictions.</Row>
      <HireMe />
    </div>
  );
}
