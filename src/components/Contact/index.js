import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './index.scss';
import ContactMap from './ContactMap';

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus({ state: 'sending', message: '' });

    emailjs
      .sendForm('service_c0bxiwe', 'template_18878eo', formRef.current, 'prD6GwjTzHn15qAzt')
      .then(
        () => {
          formRef.current.reset();
          setStatus({ state: 'success', message: 'Message sent. I will reply soon.' });
        },
        (error) => {
          console.error('EmailJS error:', error);
          setStatus({ state: 'error', message: `Message not sent: ${error.text || 'please try again.'}` });
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <h2 className="contact__title">
        Let's work <em>together!</em>
      </h2>
      <p className="contact__text">
        Have a project in mind or just want to say hi? Feel free to reach out.
      </p>

      <ul className="contact__info">
        <li>
          <FontAwesomeIcon icon={faEnvelope} />
          <a href="mailto:aminebelaid2004@gmail.com">aminebelaid2004@gmail.com</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faLocationDot} />
          <span>Sousse, Tunisia</span>
        </li>
      </ul>
      <ContactMap />

      <div className="contact__row">
        <ul className="contact__socials" aria-label="Social links">
          <li><a href="https://github.com/aminebelaid2004-lang" target="_blank" rel="noreferrer" aria-label="GitHub"><FontAwesomeIcon icon={faGithub} /></a></li>
          <li><a href="https://www.linkedin.com/in/amine-belaid-196a67310/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a></li>
          <li><a href="https://www.facebook.com/amine.belaid.583" target="_blank" rel="noreferrer" aria-label="Facebook"><FontAwesomeIcon icon={faFacebook} /></a></li>
          <li><a href="https://www.instagram.com/aminee_belaid/" target="_blank" rel="noreferrer" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a></li>
        </ul>

        <form ref={formRef} onSubmit={sendEmail} className="contact__form">
          <input type="hidden" name="subject" value="New message from portfolio" />
          <div className="contact__fields">
            <label>
              <span className="sr-only">Your name</span>
              <input type="text" name="name" placeholder="Your name" required />
            </label>
            <label>
              <span className="sr-only">Your email</span>
              <input type="email" name="email" placeholder="Your email" required />
            </label>
          </div>
          <label>
            <span className="sr-only">Your message</span>
            <textarea name="message" placeholder="Your message" rows="4" required />
          </label>
          <button type="submit" className="btn btn--primary" disabled={status.state === 'sending'}>
            {status.state === 'sending' ? 'Sending…' : 'Send message'}
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
          <p className={`contact__status is-${status.state}`} role="status" aria-live="polite">
            {status.message}
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
