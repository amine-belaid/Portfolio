import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft, faArrowRight, faDownload, faEnvelope, faLocationDot, faPaperPlane, faPhone,
} from '@fortawesome/free-solid-svg-icons';
import Logo from '../Navbar/Logo';
import ThemeToggle from '../Navbar/ThemeToggle';
import { SOCIALS } from '../Hero';
import './index.scss';
import { PROJECTS } from '../../data/projects';

/* ------------ Your content (edit here) ------------ */
const EMAIL = 'aminebelaid2004@gmail.com';
const PHONE = '+216 25 406 436';
const LOCATION = 'Kalaa Kebira, Sousse, Tunisia';

const SECTIONS = [
  { id: 'profile', label: 'Profile' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'languages', label: 'Languages' },
  { id: 'activities', label: 'Activities' },
];

const LANGUAGES = [
  { name: 'Arabic', level: 'Native' },
  { name: 'French', level: 'B2' },
  { name: 'English', level: 'B1 (university level)' },
];

const DETAILS = [
  ['Studies', 'Software engineering cycle, ISSAT Sousse (2025 – 2028)'],
  ['Focus', 'Web development · AI · Modern technologies'],
  ['Location', LOCATION],
  ['Phone', PHONE],
  ['Email', EMAIL],
];

const EDUCATION = [
  { years: '2025 – 2028', title: 'Engineering cycle in Software Engineering', place: 'ISSAT Sousse' },
  { years: '2023 – 2024', title: 'Integrated Preparatory Cycle', place: 'ISSAT Sousse' },
  { years: '2022 – 2023', title: 'Baccalaureate in Technical Sciences', place: 'Lycée Ali Bourguiba, Kalaa Kebira' },
];



const SKILLS = [
  ['Programming', ['Python', 'Java', 'Assembly', 'C / C++']],
  ['Web', ['HTML', 'CSS', 'JavaScript', 'PHP']],
  ['Databases', ['SQL (Oracle)']],
  ['UI/UX design', ['Figma']],
  ['Simulation', ['Matlab', 'ISIS']],
  ['Networking', ['OSI model', 'TCP/IP', 'Ethernet', 'Wi-Fi protocols']],
];
/* -------------------------------------------------- */

const Profile = () => {
  const [active, setActive] = useState('profile');
  const [photoOk, setPhotoOk] = useState(true);

  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-30% 0px -60% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <header className="navbar">
        <div className="container navbar__inner">
          <Logo to="/" />
          <div className="navbar__actions">
            <Link to="/" className="back-link">
              <FontAwesomeIcon icon={faArrowLeft} /> Back to home
            </Link>
            <ThemeToggle />
            <a href="/Amine-Belaid-CV.pdf" download className="btn btn--primary navbar__cta">
              <FontAwesomeIcon icon={faDownload} /> Download CV
            </a>
          </div>
        </div>
      </header>

      <div className="container profile">
        <aside className="profile__aside">
          <div className="profile__avatar">
            {photoOk ? (
              <img src="/profile.png" alt="Amine Belaid" onError={() => setPhotoOk(false)} />
            ) : (
              <span aria-hidden="true">AB</span>
            )}
          </div>

          <p className="profile__loc">
            <FontAwesomeIcon icon={faLocationDot} /> {LOCATION}
          </p>

          <ul className="chips" aria-label="Languages">
            {LANGUAGES.map((l) => (
              <li key={l.name}>{l.name} ({l.level.split(' ')[0]})</li>
            ))}
          </ul>

          <nav className="profile__index" aria-label="Sections">
            <ul>
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className={active === s.id ? 'is-active' : ''}>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <main className="profile__main">
          <h1>Amine Belaid</h1>
          <p className="profile__role">Software Engineering Student · Web Development · AI</p>

          <div className="actions">
            <a className="pill pill--solid" href="/Amine-Belaid-CV.pdf" download>
              <FontAwesomeIcon icon={faDownload} /> Download CV (PDF)
            </a>
            {SOCIALS.map((s) => (
              <a key={s.label} className="pill" href={s.href} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={s.icon} /> {s.label}
              </a>
            ))}
            <a className="pill" href={`mailto:${EMAIL}`}>
              <FontAwesomeIcon icon={faEnvelope} /> Email
            </a>
            <a className="pill" href={`tel:${PHONE.replace(/\s/g, '')}`}>
              <FontAwesomeIcon icon={faPhone} /> Call
            </a>
          </div>

          <section id="profile" className="block">
            <h2>Profile</h2>
            <p className="lead-text">
              I am a second-year Software Engineering student at ISSAT Sousse, passionate about web development,
              artificial intelligence, and emerging technologies. I enjoy designing and developing real-world applications,
              combining modern, user-friendly front-end interfaces with robust back-end logic.
              I am always eager to learn new technologies, improve my programming skills,
                and turn creative ideas into practical solutions.
                Through my projects, I aim to continuously challenge myself, gain hands-on experience,
                and build a strong professional portfolio
            </p>
            <dl className="details">
              {DETAILS.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section id="education" className="block">
            <h2>Education</h2>
            <ul className="timeline">
              {EDUCATION.map((e) => (
                <li key={e.title}>
                  <span className="timeline__years">{e.years}</span>
                  <div>
                    <strong>{e.title}</strong>
                    <span>{e.place}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section id="projects" className="block">
            <h2>Projects</h2>
            <div className="cards">
              {PROJECTS.map((p) => (
                <article key={p.slug} className="card">
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                  <ul className="card__points">
                    {p.points.map((pt) => <li key={pt}>{pt}</li>)}
                  </ul>
                  <ul className="chips chips--small">
                    {p.tags.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                  <Link to={`/projects/${p.slug}`} className="card__link">
                    View project <FontAwesomeIcon icon={faArrowRight} />
                  </Link>
                </article>
              ))}
            </div>
          </section>

          <section id="skills" className="block">
            <h2>Skills</h2>
            <div className="skill-groups">
              {SKILLS.map(([group, items]) => (
                <div key={group} className="skill-group">
                  <h3>{group}</h3>
                  <ul className="chips chips--small">
                    {items.map((i) => <li key={i}>{i}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section id="languages" className="block">
            <h2>Languages</h2>
            <ul className="langs">
              {LANGUAGES.map((l) => (
                <li key={l.name}>
                  <strong>{l.name}</strong>
                  <span>{l.level}</span>
                </li>
              ))}
            </ul>
          </section>

          <section id="activities" className="block">
            <h2>Activities</h2>
            <ul className="timeline">
              <li>
                <span className="timeline__years">2024 – 2025</span>
                <div>
                  <strong>Club Microsoft ISSATSO</strong>
                  <span>Member</span>
                </div>
              </li>
            </ul>
          </section>

          <Link to="/#contact" className="btn btn--primary profile__cta">
            Send me a message <FontAwesomeIcon icon={faPaperPlane} />
          </Link>
        </main>
      </div>
    </>
  );
};

export default Profile;