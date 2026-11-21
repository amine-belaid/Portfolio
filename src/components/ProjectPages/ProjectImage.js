import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Shows the project's image; if the file is missing, shows its icon instead.
const ProjectImage = ({ project }) => {
  const [failed, setFailed] = useState(false);
  const cover = project.images && project.images[0];


  if (!cover || failed) {
    return (
      <span
        aria-hidden="true"
        style={{
          display: 'grid', placeItems: 'center', width: '100%', height: '100%',
          fontSize: '2.6rem', color: 'rgba(255,255,255,0.85)',
        }}
      >
        <FontAwesomeIcon icon={project.icon} />
      </span>
    );
  }
  return (
    <img
      src={cover}
      alt={`${project.title} preview`}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
};

export default ProjectImage;