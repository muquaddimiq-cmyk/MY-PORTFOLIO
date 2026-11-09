import { createContext, useContext, useRef } from 'react';
import { IMG, IMG_DIM } from '../assets/index.js';
import { Chevron, Arrow } from './Icons.jsx';

// Lets any image open the full screen viewer.
export const LightboxContext = createContext(() => {});

function Shot({ k, alt, w, cap }) {
  const open = useContext(LightboxContext);
  const [width, height] = IMG_DIM[k];
  return (
    <figure style={{ width: w ? w + 'px' : '100%', flex: 'none', scrollSnapAlign: 'start' }}>
      <button onClick={() => open({ k, alt })} aria-label={'Enlarge: ' + alt} className="shot block w-full">
        <img src={IMG[k]} alt={alt} width={width} height={height} loading="lazy" decoding="async" className="block w-full h-auto" />
      </button>
      {cap ? <figcaption className="sub text-[12px] mt-1.5">{cap}</figcaption> : null}
    </figure>
  );
}

// A swipeable row of screens. The last tile opens the full project on Behance.
export default function Gallery({ items, more }) {
  const ref = useRef(null);
  const by = (n) => ref.current && ref.current.scrollBy({ left: n * 260, behavior: 'smooth' });
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="sub text-[12px]">Swipe for more</span>
        <span className="flex gap-3 sub">
          <button className="tgl" aria-label="Previous" onClick={() => by(-1)}><Chevron d="l" /></button>
          <button className="tgl fg" aria-label="Next" onClick={() => by(1)}><Chevron d="r" /></button>
        </span>
      </div>
      <div ref={ref} className="scroller flex items-start gap-3 overflow-x-auto pb-1">
        {items.map(([k, alt, w, cap]) => <Shot key={k} k={k} alt={alt} w={w} cap={cap} />)}
        {more ? (
          <a href={more[0]} target="_blank" rel="noopener noreferrer" className="more flex-none self-stretch flex flex-col justify-between p-4 text-[13px] fg" style={{ width: '190px', minHeight: '170px', scrollSnapAlign: 'start' }}>
            <span className="sub">More screens and the full process</span>
            <span className="inline-flex items-center gap-1.5">{more[1]} <Arrow /></span>
          </a>
        ) : null}
      </div>
    </div>
  );
}
