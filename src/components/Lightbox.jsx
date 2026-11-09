import { useEffect } from 'react';
import { IMG } from '../assets/index.js';

export default function Lightbox({ item, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
  }, [onClose]);
  return (
    <div className="lb fixed inset-0 z-[100] flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,.9)' }} onClick={onClose} role="dialog" aria-modal="true" aria-label={item.alt}>
      <button className="absolute top-5 right-5 text-white text-sm px-3 py-1.5" style={{ border: '1px solid rgba(255,255,255,.4)' }} onClick={onClose}>Close</button>
      <img src={IMG[item.k]} alt={item.alt} className="max-h-[92vh] max-w-[94vw] w-auto h-auto object-contain" />
    </div>
  );
}
