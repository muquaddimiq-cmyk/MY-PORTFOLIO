// Hand drawn outline marks used on the Hashgraph Online and Zaynab Yahya & Co cards.
const HOL_NODES = [[24, 24, 3.2], [24, 4, 2.6], [41.3, 14, 2.6], [41.3, 34, 2.6], [24, 44, 2.6], [6.7, 34, 2.6], [6.7, 14, 2.6]];
const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' };

export default function Mark({ k, s = 44 }) {
  if (k === 'stem') {
    return (
      <svg width={s * 1.5} height={s} viewBox="0 0 72 48" role="img" aria-label="STEM Tisha outline mark">
        <text x="36" y="27" textAnchor="middle" fontFamily="Inter Variable, Inter, system-ui, sans-serif" fontWeight="800" fontSize="25" letterSpacing="1" fill="none" stroke="currentColor" strokeWidth="1.3">STEM</text>
        <text x="36" y="42" textAnchor="middle" fontFamily="Inter Variable, Inter, system-ui, sans-serif" fontWeight="500" fontSize="9" letterSpacing="7" fill="currentColor">TISHA</text>
      </svg>
    );
  }
  const parts = {
    synapse: (
      <g {...stroke}>
        <path d="M10 4l14 10 14-10M24 14v5" /><path d="M24 29v5M10 44l14-10 14 10" />
        <circle cx="24" cy="21.5" r="1.8" /><circle cx="20.5" cy="24" r="1.8" /><circle cx="27.5" cy="24" r="1.8" /><circle cx="24" cy="26.5" r="1.8" />
      </g>
    ),
    hol: (
      <g {...stroke}>
        <path d="M24 4l17.3 10v20L24 44 6.7 34V14z" />
        <path d="M24 24L24 4M24 24l17.3-10M24 24l17.3 10M24 24v20M24 24L6.7 34M24 24L6.7 14" />
        {HOL_NODES.map(([cx, cy, r], i) => (
          <circle key={i} className="node" style={{ animationDelay: (i * 0.18).toFixed(2) + 's' }} cx={cx} cy={cy} r={r} fill="currentColor" />
        ))}
      </g>
    ),
    zaynab: (
      <g {...stroke}>
        <circle cx="24" cy="7" r="2.5" />
        <path d="M24 9.5V42M15 43h18" />
        <g className="beam">
          <path d="M10 14h28" />
          <path d="M10 14L3 28M10 14l7 14M38 14l-7 14M38 14l7 14" />
          <path d="M3 28h14a7 6 0 0 1-14 0zM31 28h14a7 6 0 0 1-14 0z" />
        </g>
      </g>
    ),
  };
  return <svg width={s} height={s} viewBox="0 0 48 48" role="img" aria-label="Outline mark">{parts[k]}</svg>;
}
