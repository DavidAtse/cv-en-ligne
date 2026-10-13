import React, { useEffect } from 'react';
import { X, ExternalLink, Gamepad2, Globe } from 'lucide-react';

const GithubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!project) return null;

  const isGame = Boolean(
    project.category?.toLowerCase().includes('jeu') || 
    project.id?.includes('imots')
  );

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-group">
            <div className="modal-badge-row">
              <span className="modal-badge">{project.badge}</span>
              {project.liveUrl ? (
                <span className="modal-status-tag live">
                  <span className="live-ping"></span>
                  En direct
                </span>
              ) : project.githubUrl ? (
                <span className="modal-status-tag repo">
                  Code GitHub
                </span>
              ) : null}
            </div>
            <h3 className="modal-title">{project.title}</h3>
          </div>
          <button 
            className="modal-close-btn" 
            onClick={onClose}
            aria-label="Fermer"
          >
            <X style={{ width: 18, height: 18 }} />
          </button>
        </div>

        <div className="modal-body">
          <p className="modal-desc">{project.desc}</p>
          
          <div className="modal-section-title">Points forts & Architecture :</div>
          <ul className="modal-highlights">
            {project.highlights.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <div className="modal-section-title">Technologies mobilisées :</div>
          <div className="modal-tags">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="p-tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="modal-footer">
          <button className="nav-btn modal-cancel-btn" onClick={onClose}>
            Fermer
          </button>

          {/* Lien direct GitHub pour ce projet précis */}
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`nav-btn modal-repo-btn ${!project.liveUrl ? 'primary' : 'secondary-repo'}`}
              title={`Consulter le projet ${project.title} sur GitHub`}
            >
              <GithubIcon />
              <span>{project.githubLabel || (project.liveUrl ? "Code GitHub" : "Consulter le GitHub")}</span>
              <ExternalLink style={{ width: 13, height: 13 }} />
            </a>
          )}

          {/* Lien direct vers le site ou le jeu hébergé */}
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="nav-btn primary modal-live-btn"
              title={`Ouvrir ${project.title} en direct`}
            >
              {isGame ? <Gamepad2 style={{ width: 16, height: 16 }} /> : <Globe style={{ width: 16, height: 16 }} />}
              <span>{project.liveLabel || (isGame ? "Jouer au jeu" : "Accéder au site")}</span>
              <ExternalLink style={{ width: 14, height: 14 }} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
