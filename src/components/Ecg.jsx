const D = 'M0 30H150l8-5 8 5h26l6-7 6 7h18l8 3 10-22 12 44 10-28 6 7h120l8-3 8 3h120';
export default function Ecg() {
  return (
    <svg viewBox="0 0 540 60" className="mt-8 w-full h-[44px]" aria-hidden="true" preserveAspectRatio="none">
      <path d={D} fill="none" stroke="var(--line)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
      <path className="ecg" d={D} fill="none" stroke="var(--accent)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
