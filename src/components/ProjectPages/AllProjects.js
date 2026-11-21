import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faImages } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { PROJECTS } from '../../data/projects';
import ProjectImage from './ProjectImage';
import PageHeader from './PageHeader';
import './index.scss';

const AllProjects = () => (
  <>
    <PageHeader />
    <div className="container pj">
      <header className="pj-head">
        <span className="pj-eyebrow">Portfolio</span>
        <h1>All projects</h1>
        <p>A selection of what I've built so far, with the code of each one on GitHub.</p>
      </header>

      <ol className="pj-list">
        {PROJECTS.map((p, i) => (
          <li key={p.slug} className={`pj-item ${i % 2 ? 'is-reversed' : ''}`}>
           <Link to={`/projects/${p.slug}`} className="pj-media" aria-label={`Open ${p.title}`}>
            <ProjectImage project={p} />
            {p.images.length > 1 && (
              <span className="pj-count">
                <FontAwesomeIcon icon={faImages} /> {p.images.length}
              </span>
            )}
          </Link>

            <div className="pj-body">
              <div className="pj-meta">
                <span className="pj-index">{String(i + 1).padStart(2, '0')}</span>
                <span className="pj-tag">{p.category}</span>
              </div>
              <h2><Link to={`/projects/${p.slug}`}>{p.title}</Link></h2>
              <p>{p.text}</p>
              <ul className="pj-chips">
                {p.tags.map((t) => <li key={t}>{t}</li>)}
              </ul>
              <div className="pj-actions">
                <a className="pj-btn pj-btn--solid" href={p.github} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faGithub} /> GitHub
                </a>
                <Link className="pj-btn" to={`/projects/${p.slug}`}>
                  View details <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </>
);

export default AllProjects;