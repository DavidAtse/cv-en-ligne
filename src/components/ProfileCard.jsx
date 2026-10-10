import React from 'react';
import { Search, Globe, Mail } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

export default function ProfileCard({ candidate, isCyberFilter, onHighlightSkills }) {
  return (
    <section className="glass-card profile-card" id="profile">
      <div className="card-glow-reflection"></div>

      <div className="profile-layout">
        {/* Photo Container */}
        <div className="photo-column">
          <div className="photo-frame-wrapper">
            <div className="photo-halo"></div>
            <div className={`photo-container ${isCyberFilter ? 'cyber-filter' : ''}`}>
              <img 
                src={profileImg} 
                alt={`${candidate.name} - ${candidate.role}`} 
                className="profile-img" 
              />
              <div className="photo-scanline"></div>
              <div className="photo-overlay-glow"></div>
            </div>
          </div>

          {/* Sparkle decoration */}
          <div className="corner-sparkle">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/>
            </svg>
          </div>
        </div>

        {/* Profile Details */}
        <div className="profile-info-column">
          <div className="profile-header-row">
            <div className="role-pill-badge">
              <span className="badge-dot"></span>
              <span className="badge-text">{candidate.role}</span>
            </div>
            
            <button 
              className="action-circle-btn" 
              onClick={onHighlightSkills} 
              title="Mettre en valeur mes compétences"
              aria-label="Recherche et compétences"
            >
              <Search style={{ width: 18, height: 18 }} />
            </button>
          </div>

          <h1 className="candidate-name">{candidate.name}</h1>

          <p className="candidate-bio">{candidate.bio}</p>

          <div className="profile-footer-links">
            <a 
              href={candidate.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="link-pill-btn"
            >
              <span className="pill-icon">
                <Globe style={{ width: 17, height: 17 }} />
              </span>
              <span className="pill-label">{candidate.githubDisplay}</span>
            </a>

            <a 
              href={`mailto:${candidate.email}`} 
              className="link-pill-btn secondary"
            >
              <span className="pill-icon">
                <Mail style={{ width: 17, height: 17 }} />
              </span>
              <span className="pill-label">{candidate.email.toUpperCase()}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
