import { Link } from 'react-router-dom';

const Mark = () => (
  <>
    <svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true">
      <defs>
        <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" style={{ stopColor: 'var(--accent-b)' }} />
          <stop offset="1" style={{ stopColor: 'var(--accent-c)' }} />
        </linearGradient>
      </defs>
      <path d="M17 3 4 31h6.2l2.6-6h8.4l2.6 6H30L17 3Zm0 12.4 2.6 6.2h-5.2L17 15.4Z" fill="url(#lg)" />
    </svg>
    <span>Amine <b>Belaid</b></span>
  </>
);

const Logo = ({ to }) =>
  to ? (
    <Link className="logo" to={to} aria-label="Amine Belaid, back to home">
      <Mark />
    </Link>
  ) : (
    <a className="logo" href="#home" aria-label="Amine Belaid, back to top">
      <Mark />
    </a>
  );

export default Logo;