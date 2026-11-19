import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faDownload } from '@fortawesome/free-solid-svg-icons';
import Logo from '../Navbar/Logo';
import ThemeToggle from '../Navbar/ThemeToggle';

const PageHeader = () => (
  <header className="navbar">
    <div className="container navbar__inner">
      <Logo to="/" />
      <div className="navbar__actions">
        <Link to="/" className="pj-back" aria-label="Back to home">
          <FontAwesomeIcon icon={faArrowLeft} /> <span>Back to home</span>
        </Link>
        <ThemeToggle />
        <a href="/Amine-Belaid-CV.pdf" download className="btn btn--primary navbar__cta">
          <FontAwesomeIcon icon={faDownload} /> Download CV
        </a>
      </div>
    </div>
  </header>
);

export default PageHeader;