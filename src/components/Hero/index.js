import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight, faCode, faDownload, faEnvelope, faGraduationCap, faInfinity, faTrophy,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './index.scss';

export const SOCIALS = [
  { icon: faGithub, label: 'GitHub', href: 'https://github.com/aminebelaid2004-lang' },
  { icon: faLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/amine-belaid-196a67310/' },
  { icon: faFacebook, label: 'Facebook', href: 'https://www.facebook.com/amine.belaid.583' },
  { icon: faInstagram, label: 'Instagram', href: 'https://www.instagram.com/aminee_belaid/' },
];

const STATS = [
  { icon: faCode, value: '3+', label: 'Projects' },
  { icon: faGraduationCap, value: '1+', label: 'Years of Study' },
  { icon: faTrophy, value: <FontAwesomeIcon icon={faInfinity} />, label: 'Motivation' },
];

const Hero = () => {
  const [photoOk, setPhotoOk] = useState(true);

  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="hello">Hello, I'm <span aria-hidden="true">👋</span></span>
          <h1>Amine <em>Belaid</em></h1>
          <p className="role">Software Engineering student &amp; Full-Stack Developer</p>
          <p className="lead">I build modern web applications and turn ideas into real products.</p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              View my projects <FontAwesomeIcon icon={faArrowRight} />
            </a>
            <a href="/Amine-Belaid-CV.pdf" download className="btn btn--ghost">
              <FontAwesomeIcon icon={faDownload} /> Download CV
            </a>
          </div>

          <ul className="socials" aria-label="Social links">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                  <FontAwesomeIcon icon={s.icon} />
                </a>
              </li>
            ))}
            <li>
              <a href="mailto:aminebelaid2004@gmail.com" aria-label="Email">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </li>
          </ul>
        </div>

  <div className="hero__visual">
  <div className="portrait">
    <span className="portrait__shape" aria-hidden="true" />
    <span className="portrait__dots" aria-hidden="true" />

    <div className="portrait__frame">
      {photoOk ? (
        <img
          src="/profile.png"
          alt="Portrait of Amine Belaid"
          onError={() => setPhotoOk(false)}
        />
      ) : (
        <div className="portrait__fallback" aria-hidden="true">AB</div>
      )}
    </div>

    <span className="chip" aria-hidden="true">
      <FontAwesomeIcon icon={faCode} />
    </span>

    <ul className="stats panel">
      {STATS.map((s) => (
        <li key={s.label}>
          <span className="stats__icon"><FontAwesomeIcon icon={s.icon} /></span>
          <strong>{s.value}</strong>
          <small>{s.label}</small>
        </li>
      ))}
    </ul>
  </div>
</div>
      </div>
    </section>
  );
};

export default Hero;
