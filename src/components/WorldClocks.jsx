import { useEffect, useState } from 'react';

// Shows the current time in the main working regions, to make time zone flexibility visible.
const ZONES = [
  ['San Francisco', 'America/Los_Angeles'],
  ['New York', 'America/New_York'],
  ['London', 'Europe/London'],
  ['Nigeria, home', 'Africa/Lagos'],
  ['Dubai', 'Asia/Dubai'],
  ['Singapore', 'Asia/Singapore'],
];

export default function WorldClocks() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="rv grid grid-cols-3 sm:grid-cols-6 gap-px border" style={{ background: 'var(--line)', borderColor: 'var(--line)' }}>
      {ZONES.map(([city, tz]) => {
        const home = tz === 'Africa/Lagos';
        const time = now.toLocaleTimeString('en-US', { timeZone: tz, hour: 'numeric', minute: '2-digit' }).toLowerCase();
        return (
          <div key={tz} className="px-3 py-3" style={{ background: 'var(--bg)' }}>
            <div className={'text-[11px] ' + (home ? '' : 'sub')} style={home ? { color: 'var(--accent)' } : undefined}>{city}</div>
            <div className="fg text-[13px] mt-0.5">{time}</div>
          </div>
        );
      })}
    </div>
  );
}
