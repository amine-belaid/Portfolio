import { Link, Navigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { PROJECTS } from '../../data/projects';
import ProjectImage from './ProjectImage';
import PageHeader from './PageHeader';
import './index.scss';

const ProjectDetail = () => {
  const { slug } = useParams();
  const index = PROJECTS.findIndex((p) => p.slug === slug);
  if (index === -1) return <Navigate to="/projects" replace />;

  const p = PROJECTS[index];
  const prev = PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(index + 1) % PROJECTS.length];

  return (
    <>
      <PageHeader />
      <div className="container pj pj-detail">
        <Link to="/projects" className="pj-crumb">
          <FontAwesomeIcon icon={faArrowLeft} /> All projects
        </Link>

        <header className="pj-detail__head">
          <span className="pj-tag">{p.category}</span>
          <h1>{p.title}</h1>
          <p className="pj-lead">{p.summary}</p>
          <div className="pj-actions">
            <a className="pj-btn pj-btn--solid" href={p.github} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} /> View on GitHub
            </a>
          </div>
        </header>

        <div className="pj-cover">
          <ProjectImage project={p} />
        </div>

        <div className="pj-detail__grid">
          <div>
            <h2>Overview</h2>
            <p className="pj-text">{p.text}</p>

            <h2>What I built</h2>
            <ul className="pj-points">
              {p.points.map((pt) => <li key={pt}>{pt}</li>)}
            </ul>
          </div>

          <aside className="pj-facts">
            <h3>Technologies</h3>
            <ul className="pj-chips">
              {p.tags.map((t) => <li key={t}>{t}</li>)}
            </ul>
            <h3>Category</h3>
            <p>{p.category}</p>
            <h3>Source code</h3>
            <a href={p.github} target="_blank" rel="noreferrer" className="pj-link">
              <FontAwesomeIcon icon={faGithub} /> GitHub repository
            </a>
          </aside>
        </div>

        <nav className="pj-pager" aria-label="Other projects">
          <Link to={`/projects/${prev.slug}`}>
            <small><FontAwesomeIcon icon={faArrowLeft} /> Previous project</small>
            <strong>{prev.name}</strong>
          </Link>
          <Link to={`/projects/${next.slug}`} className="is-next">
            <small>Next project <FontAwesomeIcon icon={faArrowRight} /></small>
            <strong>{next.name}</strong>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default ProjectDetail;