import React, { useState } from 'react';
import { Layers, Music, Briefcase, Film, Landmark, Tv, ArrowRight, Gamepad2, ExternalLink } from 'lucide-react';

export default function ProjectsSection({ projects, onSelectProject }) {
  const [filter, setFilter] = useState('all');

  const filteredProjects = projects.filter(p => {
    if (filter === 'all') return true;
    return p.category.toLowerCase().includes(filter.toLowerCase());
  });

  const getProjectIcon = (id) => {
    switch (id) {
      case 'imots-devinemot-ci': return <Gamepad2 style={{ width: 22, height: 22 }} />;
      case 'pierres': return <Layers style={{ width: 22, height: 22 }} />;
      case 'babifab': return <Music style={{ width: 22, height: 22 }} />;
      case 'emploi': return <Briefcase style={{ width: 22, height: 22 }} />;
      case 'apifilm': return <Film style={{ width: 22, height: 22 }} />;
      case 'banque': return <Landmark style={{ width: 22, height: 22 }} />;
      case 'netflix': return <Tv style={{ width: 22, height: 22 }} />;
      default: return <Layers style={{ width: 22, height: 22 }} />;
    }
  };

  return (
    <section className="glass-card projects-card" id="projets">
      <div className="card-glow-reflection"></div>

      <div className="projects-header-row">
        <div className="projects-title-group">
          <h2 className="section-title">PROJETS RÉALISÉS</h2>
          <div className="matrix-dots" aria-hidden="true">
            <span></span><span></span><span></span><span></span>
            <span></span><span></span><span></span><span></span>
          </div>
        </div>

        {/* Filter buttons */}
        <div className="filter-tabs no-print">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            Tous
          </button>
          <button 
            className={`filter-btn ${filter === 'jeu' ? 'active' : ''}`}
            onClick={() => setFilter('jeu')}
          >
            Jeux
          </button>
          <button 
            className={`filter-btn ${filter === 'fullstack' ? 'active' : ''}`}
            onClick={() => setFilter('fullstack')}
          >
            Fullstack
          </button>
          <button 
            className={`filter-btn ${filter === 'react' ? 'active' : ''}`}
            onClick={() => setFilter('react')}
          >
            React
          </button>
          <button 
            className={`filter-btn ${filter === 'api' ? 'active' : ''}`}
            onClick={() => setFilter('api')}
          >
            APIs
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project) => {
          const isGame = Boolean(
            project.category?.toLowerCase().includes('jeu') || 
            project.id?.includes('imots')
          );

          return (
            <article key={project.id} className="project-box">
              <div className={`project-banner ${project.bannerClass}`}>
                <div className="banner-badge">{project.badge}</div>
                <div className="banner-icon">
                  {getProjectIcon(project.id)}
                </div>
              </div>

              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>

                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="p-tag">{tag}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <button 
                    className="project-action-btn secondary"
                    onClick={() => onSelectProject(project)}
                  >
                    <span>Détails & Stack</span>
                    <ArrowRight style={{ width: 14, height: 14 }} />
                  </button>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-action-btn live-direct-btn"
                      title={isGame ? "Jouer en direct" : "Voir le site en direct"}
                    >
                      {isGame ? (
                        <Gamepad2 style={{ width: 14, height: 14 }} />
                      ) : (
                        <ExternalLink style={{ width: 13, height: 13 }} />
                      )}
                      <span>{isGame ? "Jouer" : "Démo"}</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
