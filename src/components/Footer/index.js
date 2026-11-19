import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Logo from '../Navbar/Logo';
import './index.scss';

const Footer = () => (
  <footer className="footer">
    <div className="container footer__inner">
      <Logo />
      <p>© {new Date().getFullYear()} Amine Belaid. All rights reserved.</p>
      <nav className="footer__links" aria-label="Footer">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href="#home" className="footer__top" aria-label="Back to top">
          <FontAwesomeIcon icon={faArrowUp} />
        </a>
      </nav>
    </div>
  </footer>
);

export default Footer;
