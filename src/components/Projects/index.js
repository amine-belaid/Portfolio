import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { PROJECTS } from '../../data/projects';
import ProjectImage from '../ProjectPages/ProjectImage';
import './index.scss';

const Projects = () => (
  <section id="projects" className="projects">
    <div className="projects__head">
      <h2 className="section-title">My projects</h2>
      <Link to="/projects" className="link-arrow">
        View all projects <FontAwesomeIcon icon={faArrowRight} />
      </Link>
    </div>

    <ul className="projects__grid">
      {PROJECTS.map((p) => (
        <li key={p.slug}>
          <Link className="project" to={`/projects/${p.slug}`}>
            <div className="project__thumb">
              <ProjectImage project={p} />
              <span className="project__tag">{p.category}</span>
            </div>
            <div className="project__body">
              <h3>{p.name}</h3>
              <p>{p.summary}</p>
              <span className="link-arrow">
                View project <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </section>
);

export default Projects;