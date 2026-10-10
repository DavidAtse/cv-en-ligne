import React, { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';

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

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-group">
            <span className="modal-badge">{project.badge}</span>
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
          <button className="nav-btn" onClick={onClose}>
            Fermer
          </button>
          <a 
            href="https://github.com/DavidAtse" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-btn primary"
          >
            <span>Consulter le GitHub</span>
            <ExternalLink style={{ width: 14, height: 14 }} />
          </a>
        </div>
      </div>
    </div>
  );
}
