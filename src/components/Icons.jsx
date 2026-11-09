import { useRef, useState } from 'react';

export const Ic = ({ children, s = 16 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);
export const Chevron = ({ d }) => (
  <Ic s={14}><path d={d === 'l' ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7'} /></Ic>
);
export const Arrow = ({ size = 12 }) => (
  <Ic s={size}><path d="M7 17L17 7M8 7h9v9" /></Ic>
);
export const Contrast = () => (
  <Ic s={18}><circle cx="12" cy="12" r="9" /><path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor" /></Ic>
);
export const Download = () => (
  <Ic s={14}><path d="M12 4v11m0 0l-4.5-4.5M12 15l4.5-4.5M5 20h14" /></Ic>
);
export const Avatar = ({ s = 40 }) => (
  <svg width={s} height={s} viewBox="0 0 40 40" role="img" aria-label="Avatar" className="rounded-full shrink-0" style={{ border: '1px solid var(--line)' }}>
    <rect width="40" height="40" fill="#DCE6F2" />
    <circle cx="20" cy="15.5" r="6.5" fill="#1f3a5f" />
    <path d="M6 40c1.2-8.5 7.6-13.5 14-13.5S32.8 31.5 34 40z" fill="#1f3a5f" />
  </svg>
);
// The signature draws itself on load and rewrites itself whenever the cursor touches it (or on tap).
export function Sig() {
  const [n, setN] = useState(0);
  const busy = useRef(false);
  const rewrite = () => {
    if (busy.current) return;
    busy.current = true;
    setN((v) => v + 1);
    setTimeout(() => { busy.current = false; }, 1700);
  };
  return (
    <span className="inline-block p-2 -m-2 cursor-pointer" onMouseEnter={rewrite} onTouchStart={rewrite} title="Hover to rewrite">
      <svg key={n} className={'sig' + (n > 0 ? ' again' : '')} width="46" height="26" viewBox="0 0 46 26" fill="none" stroke="var(--fg)" strokeWidth="1.2" strokeLinecap="round" aria-hidden="true">
        <path pathLength="1" d="M3 20c4-8 8-16 11-16 3 0 0 14 3 14s4-9 7-9 1 8 4 8 5-6 8-8" />
        <path pathLength="1" d="M6 23c10-2 24-2 36-5" />
      </svg>
    </span>
  );
}
