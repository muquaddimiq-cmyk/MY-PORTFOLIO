import Gallery from './Gallery.jsx';

export const Row = ({ l, r, children }) => (
  <div className="mb-6 rv">
    <div className="flex justify-between gap-4">
      <span className="fg font-medium">{l}</span>
      <span className="sub text-right max-w-[55%] sm:max-w-none sm:shrink-0">{r}</span>
    </div>
    {children ? <p className="mt-1">{children}</p> : null}
  </div>
);

export const Label = ({ children }) => <h2 className="sub mt-14 mb-4 rv">{children}</h2>;

export const Breadcrumb = ({ current }) => (
  <p className="mt-12 sub">
    <a href="#" className="u sub">Home</a> <span className="mx-1">/</span> <span className="fg">{current}</span>
  </p>
);

export const Side = ({ name, href, tag, text, meta, shots }) => (
  <div className="mb-6 rv">
    <div className="flex justify-between gap-4">
      <a className="fg font-medium u" href={href} target="_blank" rel="noopener noreferrer">{name} ↗</a>
      <span className="sub text-right max-w-[55%] sm:max-w-none sm:shrink-0">{tag}</span>
    </div>
    <p className="mt-1">{text}</p>
    <p className="mt-1 sub text-[13px]">{meta}</p>
    {shots ? <div className="mt-4"><Gallery items={shots} more={[href, 'View on Behance']} /></div> : null}
  </div>
);
