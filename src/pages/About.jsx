import { X, BEHANCE } from '../data/links.js';
import { Row, Label, Breadcrumb } from '../components/Blocks.jsx';
import Sticker, { FigmaLogo, NigeriaFlag } from '../components/Sticker.jsx';

// [content, left %, top px, rotation]
const stickers = [
  [FigmaLogo, 8, 30, -10], ['🩺', 24, 120, 8], ['🧬', 40, 20, -4], ['📐', 52, 140, 12], ['🫀', 66, 40, -14],
  [NigeriaFlag, 80, 150, 6], ['🧠', 88, 24, 10], ['🎨', 14, 200, -8], ['✏️', 60, 215, 4], ['💡', 36, 200, -10],
];

export default function About() {
  return (
    <div className="page">
      <Breadcrumb current="About me" />
      <p className="sub mt-12">a bit more of me</p>
      <p className="mt-5">Product designer and content strategist who turns complex ideas into clear, usable visual and written experiences. I combine Figma based UI and UX and information design with hands on community, campaign and growth work across early stage tech and AI driven products.</p>
      <p className="mt-4">I partner with product and engineering teams to run UX and beta testing programs, shape onboarding and product facing visuals, and translate technical concepts into accessible design and content, from research through launch.</p>
      <p className="mt-4">
        Languages: English (advanced) and Arabic (conversational). Remote, based in Nigeria, and open to working with teams in other countries, flexible across time zones. Find me on <a className="u" href={X} target="_blank" rel="noopener noreferrer">X</a> or <a className="u" href={BEHANCE} target="_blank" rel="noopener noreferrer">Behance</a>.
      </p>
      <div className="relative h-[300px] mt-10 overflow-hidden" aria-label="Draggable stickers">
        {stickers.map(([content, x, y, r], i) => (
          <Sticker key={i} style={{ left: x + '%', top: y + 'px' }} rot={r}>{content}</Sticker>
        ))}
      </div>
      <p className="sub text-center -mt-2">drag them around</p>
      <Label>skills</Label>
      <Row l="Design" r="">Figma (UI and UX, prototyping, visual design), FigJam, Adobe Illustrator, Canva, information and explainer design, visual storytelling, branding and campaign assets.</Row>
      <Row l="Content and community" r="">Content writing, social media management, community building and engagement, campaign and mindshare optimization.</Row>
      <Row l="Research and product" r="">Product and ecosystem research, UX and beta testing, quality assurance, AI training and data annotation, KOL and investor outreach.</Row>
    </div>
  );
}
