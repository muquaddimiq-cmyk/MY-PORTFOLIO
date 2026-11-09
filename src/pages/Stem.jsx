import { stemShots } from '../data/content.js';
import { IG, STEM_SITE, B_STEM } from '../data/links.js';
import Gallery from '../components/Gallery.jsx';
import { Row, Label, Breadcrumb } from '../components/Blocks.jsx';

export default function Stem() {
  return (
    <div className="page">
      <Breadcrumb current="STEM Tisha" />
      <h1 className="mt-10 text-[28px] font-medium fg tracking-tight">STEM Tisha</h1>
      <p className="sub">Instagram graphics for TechGen Africa’s coding and AI program for kids</p>
      <div className="mt-8">
        <Row l="Role" r="Designer, every graphic on the Instagram page" />
        <Row l="Client" r="TechGen Africa" />
        <Row l="Format" r="Instagram carousels and posts" />
      </div>
      <p className="-mt-2 flex flex-wrap gap-x-4">
        <a className="u" href={IG} target="_blank" rel="noopener noreferrer">STEM Tisha on Instagram</a>
        <a className="u" href={STEM_SITE} target="_blank" rel="noopener noreferrer">TechGen Africa page</a>
        <a className="u" href={B_STEM} target="_blank" rel="noopener noreferrer">Behance</a>
      </p>
      <Label>The work</Label>
      <p>The Student Demo Day carousel presents five web apps built by students, in a seven slide story that moves from the problem to the build to the call to enrol. All seven slides are shown below.</p>
      <p className="mt-4">Each slide shares one system: a deep navy grid background, electric blue highlights and an orange call to action, with a laptop mockup showing the student’s app.</p>
      <Label>The seven slides</Label>
      <Gallery items={stemShots} more={[B_STEM, 'View on Behance']} />
    </div>
  );
}
