import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCode, faCube, faGlobe, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import './index.scss';
import { Link } from 'react-router-dom';


const SKILLS = [
  { icon: faGlobe, title: 'Web Development', text: 'React, Next.js, Node.js' },
  { icon: faCode, title: 'Programming', text: 'Java, Python, C++' },
  { icon: faCube, title: 'Problem Solving', text: 'Algorithms & Data Structures' },
  { icon: faUserGroup, title: 'Teamwork', text: 'Collaborative Mindset' },
];
const AboutSkills = () => {
  

  return (
  <div className="container band">


    <div className="panel about-skills">
      <section id="about" className="about">
        <div className="about__art" aria-hidden="true">
          <div className="editor">
            <div className="editor__bar"><i /><i /><i /></div>
            <div className="editor__code">
              <p style={{ width: '46%' }} />
              <p style={{ width: '72%', marginLeft: 18 }} />
              <p style={{ width: '58%', marginLeft: 18 }} />
              <p style={{ width: '34%', marginLeft: 36 }} />
              <p style={{ width: '64%', marginLeft: 18 }} />
              <p style={{ width: '22%' }} />
            </div>
          </div>
        </div>

        <div className="about__copy">
          <h2 className="section-title">About me</h2>
          <p className="about__headline">
            Passionate about technology and <em>innovation.</em>
          </p>
          <p className="about__text">
            I am a second-year Software Engineering student at ISSAT Sousse,
             passionate about web development, artificial intelligence, and emerging technologies...
          </p>
       <Link to="/profile" className="btn btn--ghost btn--sm">
  Get in touch <FontAwesomeIcon icon={faArrowRight} />
</Link>
        </div>
      </section>

      <section id="skills" className="skills">
        <h2 className="section-title">My skills</h2>
        <ul className="skills__grid">
          {SKILLS.map((s) => (
            <li key={s.title} className="skill">
              <span className="skill__icon"><FontAwesomeIcon icon={s.icon} /></span>
              <span>
                <strong>{s.title}</strong>
                <small>{s.text}</small>
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
        

  </div>
);
}

export default AboutSkills;
