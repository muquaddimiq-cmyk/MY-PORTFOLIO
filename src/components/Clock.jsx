import { useEffect, useState } from 'react';

export default function Clock() {
  const [t, setT] = useState('');
  useEffect(() => {
    const tick = () =>
      setT(new Date().toLocaleTimeString('en-US', { timeZone: 'Africa/Lagos', hour: 'numeric', minute: '2-digit', second: '2-digit' }).toLowerCase());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return <span>Nigeria, UTC+1 {t}</span>;
}
