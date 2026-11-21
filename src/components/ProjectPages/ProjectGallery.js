import { useCallback, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faExpand, faXmark } from '@fortawesome/free-solid-svg-icons';

// Main image + thumbnails + full-screen view. Works with 1 or more images.
const ProjectGallery = ({ project }) => {
  const images = project.images || [];
  const count = images.length;
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [broken, setBroken] = useState({});
  const dialogRef = useRef(null);

  const go = useCallback((d) => setIndex((i) => (i + d + count) % count), [count]);

  useEffect(() => {
    const dlg = dialogRef.current;
    if (!dlg) return;
    if (lightbox && !dlg.open) dlg.showModal();
    if (!lightbox && dlg.open) dlg.close();
    document.body.style.overflow = lightbox ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightbox]);

  useEffect(() => {
    const onKey = (e) => {
      if (!lightbox || count < 2) return;
      if (e.key === 'ArrowLeft') go(-1);
      if (e.key === 'ArrowRight') go(1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, count, go]);

  if (!count) {
    return (
      <div className="pj-gallery__main pj-gallery__empty" aria-hidden="true">
        <FontAwesomeIcon icon={project.icon} />
      </div>
    );
  }

  const current = images[index];
  const alt = `${project.title}, image ${index + 1} of ${count}`;
  const markBroken = (src) => setBroken((b) => ({ ...b, [src]: true }));

  return (
    <div className="pj-gallery">
      <div className="pj-gallery__main">
        <button type="button" className="pj-gallery__open" onClick={() => setLightbox(true)} aria-label="Enlarge image">
          {broken[current] ? (
            <span className="pj-gallery__empty"><FontAwesomeIcon icon={project.icon} /></span>
          ) : (
            <img src={current} alt={alt} onError={() => markBroken(current)} />
          )}
          <span className="pj-gallery__zoom" aria-hidden="true"><FontAwesomeIcon icon={faExpand} /></span>
        </button>

        {count > 1 && (
          <>
            <button type="button" className="pj-gallery__nav is-prev" onClick={() => go(-1)} aria-label="Previous image">
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button type="button" className="pj-gallery__nav is-next" onClick={() => go(1)} aria-label="Next image">
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
            <span className="pj-gallery__count">{index + 1} / {count}</span>
          </>
        )}
      </div>

      {count > 1 && (
        <ul className="pj-gallery__thumbs">
          {images.map((src, n) => (
            <li key={src}>
              <button
                type="button"
                className={n === index ? 'is-active' : ''}
                onClick={() => setIndex(n)}
                aria-label={`Show image ${n + 1}`}
                aria-current={n === index ? 'true' : undefined}
              >
                <img src={src} alt="" loading="lazy" />
              </button>
            </li>
          ))}
        </ul>
      )}

      <dialog
        ref={dialogRef}
        className="pj-lightbox"
        aria-label={`${project.title} images`}
        onClose={() => setLightbox(false)}
        onClick={(e) => e.target === dialogRef.current && setLightbox(false)}
      >
        <button type="button" className="pj-lightbox__close" onClick={() => setLightbox(false)} aria-label="Close">
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <img src={current} alt={alt} />
        {count > 1 && (
          <>
            <button type="button" className="pj-gallery__nav is-prev" onClick={() => go(-1)} aria-label="Previous image">
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button type="button" className="pj-gallery__nav is-next" onClick={() => go(1)} aria-label="Next image">
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
            <span className="pj-gallery__count">{index + 1} / {count}</span>
          </>
        )}
      </dialog>
    </div>
  );
};

export default ProjectGallery;