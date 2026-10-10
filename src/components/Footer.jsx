import React from 'react';
import { Mail, ChevronUp } from 'lucide-react';

export default function Footer({ candidateName, email }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="resume-footer no-print">
      <div className="footer-glass-bar">
        <div className="footer-left">
          <div className="pulse-circle"></div>
          <span>Conçu pour <strong>{candidateName}</strong> &bull; Développeur Web & Fullstack</span>
        </div>

        <div className="footer-actions">
          <a href={`mailto:${email}`} className="footer-btn">
            <span>Me contacter</span>
            <Mail style={{ width: 14, height: 14 }} />
          </a>

          <button 
            onClick={scrollToTop} 
            className="footer-btn icon-only" 
            title="Remonter en haut"
            aria-label="Remonter en haut de la page"
          >
            <ChevronUp style={{ width: 16, height: 16 }} />
          </button>
        </div>
      </div>
    </footer>
  );
}
