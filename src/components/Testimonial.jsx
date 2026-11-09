import { useContext } from 'react';
import { IMG, IMG_DIM } from '../assets/index.js';
import { LightboxContext } from './Gallery.jsx';

export default function Testimonial() {
  const open = useContext(LightboxContext);
  const [w, h] = IMG_DIM.praise;
  const alt = 'WhatsApp message from Mr Sodiq, CEO of STEM Tisha: Love your spirit';
  return (
    <div className="rv">
      <blockquote className="fg text-[20px] leading-snug tracking-tight">“Love your spirit”</blockquote>
      <p className="sub mt-1">Mr Sodiq, CEO of STEM Tisha</p>
      <button onClick={() => open({ k: 'praise', alt })} aria-label={'Enlarge: ' + alt} className="shot block w-full mt-4">
        <img src={IMG.praise} alt={alt} width={w} height={h} loading="lazy" decoding="async" className="block w-full h-auto" />
      </button>
      <p className="sub text-[12px] mt-1.5">The original message, sent on WhatsApp</p>
    </div>
  );
}
