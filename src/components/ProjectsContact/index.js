import Projects from '../Projects';
import Contact from '../Contact';
import './index.scss';

// The big panel on the home page: projects on the left, contact on the right.
const ProjectsContact = () => (
  <div className="container band">
    <div className="panel projects-contact">
      <Projects />
      <Contact />
    </div>
  </div>
);

export default ProjectsContact;