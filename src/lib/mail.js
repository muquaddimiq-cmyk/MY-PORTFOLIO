import { EMAIL } from '../data/links.js';

// Phones open the native mail app through the mailto link.
// Computers open a Gmail compose window, so visitors do not need a mail client set up.
// Put data-subject="..." on the link to prefill the subject line.
export function mailHref(subject) {
  return 'mailto:' + EMAIL + (subject ? '?subject=' + encodeURIComponent(subject) : '');
}

export function handleMail(e) {
  const mobile =
    /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ||
    (navigator.maxTouchPoints > 1 && window.innerWidth < 900);
  if (mobile) return;
  e.preventDefault();
  const subject = e.currentTarget.dataset.subject;
  window.open(
    'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(EMAIL) + (subject ? '&su=' + encodeURIComponent(subject) : ''),
    '_blank',
    'noopener'
  );
}
