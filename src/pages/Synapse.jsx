import { LOGOS } from '../assets/index.js';
import { synapseNodes, synapseHighlights, synapseShots } from '../data/content.js';
import { B_SYN, PROTOTYPE } from '../data/links.js';
import Gallery from '../components/Gallery.jsx';
import { Row, Label, Breadcrumb } from '../components/Blocks.jsx';

export default function Synapse() {
  return (
    <div className="page">
      <Breadcrumb current="THE IQ SYNAPSE" />
      <h1 className="mt-10 text-[28px] font-medium fg tracking-tight">THE IQ SYNAPSE</h1>
      <p className="sub">Bridging home memory care and clinical oversight</p>
      <div className="mt-8 flex items-center justify-center py-12 text-white" style={{ background: 'linear-gradient(160deg,#1f3a5f,#5f86b4)' }}>
        <img src={LOGOS.lock} alt="THE IQ SYNAPSE logo" className="h-[64px] w-auto max-w-full" />
      </div>
      <div className="mt-8">
        <Row l="Role" r="Lead UI UX Designer & Founder" />
        <Row l="Platform" r="Zero touch kiosk, mobile app, web dashboard" />
        <Row l="Domain" r="Digital health and predictive AI" />
        <Row l="Status" r="Registered business, CAC" />
      </div>
      <p className="-mt-2 flex flex-wrap gap-x-4">
        <a className="u" href={PROTOTYPE} target="_blank" rel="noopener noreferrer">Open the interactive prototype</a>
        <a className="u" href={B_SYN} target="_blank" rel="noopener noreferrer">Full case study on Behance</a>
      </p>
      <Label>By the numbers</Label>
      <dl className="rv grid grid-cols-2 sm:grid-cols-4 gap-px border" style={{ background: 'var(--line)', borderColor: 'var(--line)' }}>
        {[['10', 'People interviewed'], ['25', 'Mobile app screens'], ['10+', 'Patient node screens'], ['20+', 'Clinician screens']].map(([n, l]) => (
          <div key={l} className="px-4 py-4" style={{ background: 'var(--bg)' }}>
            <dt className="fg text-[26px] font-semibold tracking-tight leading-none">{n}</dt>
            <dd className="sub text-[12px] mt-2">{l}</dd>
          </div>
        ))}
      </dl>
      <Label>The problem</Label>
      <p>Here in Africa, many people aged 60 and above live with dementia, and proper systems to care for them are scarce. The weight falls on their families, and the result is burnout.</p>
      <p className="mt-4">Existing smart devices do not help. They demand active engagement like swiping or typing, which becomes impossible for patients with cognitive decline and motor apraxia.</p>
      <Label>The idea</Label>
      <p>THE IQ SYNAPSE is a tri node system that connects the patient living with Alzheimer’s, their family members and the healthcare practitioners managing their care. It removes the cognitive load from the patient while turning daily biometric data into actionable clinical insights.</p>
      <div className="mt-6 grid gap-px border" style={{ background: 'var(--line)', borderColor: 'var(--line)' }}>
        {synapseNodes.map(([title, text], i) => (
          <div key={title} className="p-5" style={{ background: 'var(--bg)' }}>
            <span className="sub">{'0' + (i + 1)}</span>
            <h3 className="fg font-medium mt-1">{title}</h3>
            <p className="mt-1">{text}</p>
          </div>
        ))}
      </div>
      <Label>Research</Label>
      <Row l="About 10 interviews" r="Interviews">I interviewed about 10 people to hear what they think about THE IQ SYNAPSE before and while building it.</Row>
      <Row l="A matron in the UK" r="Perspective abroad">I spoke with a matron in the UK about having a system like this. European countries already have them, and nothing comparable exists here.</Row>
      <Row l="A neurosurgery resident in Nigeria" r="University of Ilorin Teaching Hospital">I spoke with a Nigerian neurosurgery resident at the University of Ilorin Teaching Hospital to understand how dementia care works in practice. They called it a very good project and a very good initiative.</Row>
      <Label>Where it stands</Label>
      <Row l="A registered business" r="CAC">THE IQ SYNAPSE is a fully registered business with the Corporate Affairs Commission (CAC).</Row>
      <Row l="An interactive prototype" r="Live">You can click through the experience yourself. <a className="u" href={PROTOTYPE} target="_blank" rel="noopener noreferrer">Open the prototype</a>.</Row>
      <Label>Key screens</Label>
      <Gallery items={synapseShots} more={[B_SYN, 'View on Behance']} />
      <Label>Design highlights</Label>
      {synapseHighlights.map(([title, text]) => <Row key={title} l={title} r="">{text}</Row>)}
    </div>
  );
}
