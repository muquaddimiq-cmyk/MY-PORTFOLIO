import { useRef, useState } from 'react';

// A draggable decoration. Children can be an emoji or an SVG.
export default function Sticker({ children, style, rot = 0 }) {
  const [p, setP] = useState({ x: 0, y: 0 });
  const [z, setZ] = useState(1);
  const start = useRef(null);
  const delay = useRef((Math.random() * -5).toFixed(2) + 's');
  return (
    <span
      className="sticker"
      role="img"
      aria-label="Decoration"
      style={{ ...style, transform: `translate(${p.x}px,${p.y}px) rotate(${rot}deg)`, zIndex: z }}
      onPointerDown={(e) => {
        e.currentTarget.setPointerCapture(e.pointerId);
        start.current = { x: e.clientX - p.x, y: e.clientY - p.y };
        setZ(30);
      }}
      onPointerMove={(e) => { if (start.current) setP({ x: e.clientX - start.current.x, y: e.clientY - start.current.y }); }}
      onPointerUp={() => { start.current = null; }}
    >
      <span className="bob" style={{ animationDelay: delay.current }}>{children}</span>
    </span>
  );
}

export const FigmaLogo = (
  <svg width="38" height="57" viewBox="0 0 38 57" aria-hidden="true">
    <path fill="#1abcfe" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
    <path fill="#0acf83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" />
    <path fill="#ff7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" />
    <path fill="#f24e1e" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" />
    <path fill="#a259ff" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" />
  </svg>
);
export const NigeriaFlag = (
  <svg width="60" height="40" viewBox="0 0 60 40" aria-hidden="true">
    <rect width="20" height="40" fill="#008751" /><rect x="20" width="20" height="40" fill="#fff" /><rect x="40" width="20" height="40" fill="#008751" />
  </svg>
);
