import { EMAIL, SCHEDULE_URL } from '../data/links.js';
import { handleMail, mailHref } from '../lib/mail.js';
import { Arrow } from './Icons.jsx';

export default function HireMe() {
  const subject = 'Intro call: product design role';
  const book = SCHEDULE_URL
    ? { href: SCHEDULE_URL, target: '_blank', rel: 'noopener noreferrer' }
    : { href: mailHref(subject), onClick: handleMail, 'data-subject': subject };
  return (
    <section className="rv mt-14 border border-[var(--line)] p-6" aria-labelledby="hire">
      <h2 id="hire" className="fg text-[22px] font-medium tracking-tight">Hire me</h2>
      <p className="mt-2">Product design that makes complex things clear. Ready to start full time, working remotely with teams in other countries.</p>
      <dl className="mt-5 grid gap-3 text-[13px]">
        <div className="flex justify-between gap-4"><dt className="sub">Email</dt><dd className="fg text-right"><a className="u" href={mailHref()} onClick={handleMail}>{EMAIL}</a></dd></div>
        <div className="flex justify-between gap-4"><dt className="sub">Availability</dt><dd className="fg text-right">Full time, remote, time zone flexible</dd></div>
        <div className="flex justify-between gap-4"><dt className="sub">Scheduling</dt><dd className="fg text-right">{SCHEDULE_URL ? <a className="u" href={SCHEDULE_URL} target="_blank" rel="noopener noreferrer">Book an intro call</a> : 'Book an intro call'}</dd></div>
      </dl>
      <div className="mt-6 flex flex-wrap gap-3">
        <a className="dl inline-flex items-center gap-2 px-3.5 py-2 text-[13px] fg" href={mailHref('Hiring: product design role')} onClick={handleMail} data-subject="Hiring: product design role">Email me <Arrow /></a>
        <a className="dl inline-flex items-center gap-2 px-3.5 py-2 text-[13px] fg" {...book}>Schedule a call <Arrow /></a>
      </div>
    </section>
  );
}
