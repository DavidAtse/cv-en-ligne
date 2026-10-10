import React from 'react';
import { Sparkles, FolderGit2, Copy, Printer } from 'lucide-react';

export default function TopNav({ isCyberFilter, onToggleFilter, onCopyEmail, onScrollToProjects }) {
  return (
    <header className="top-nav no-print">
      <div className="nav-container">
        <div className="nav-brand">
          <span className="status-indicator"></span>
          <span className="brand-text">DISPONIBLE POUR PROJETS & CDI / CDD</span>
        </div>

        <div className="nav-actions">
          <button 
            onClick={onToggleFilter} 
            className="nav-btn" 
            title="Changer l'effet de la photo (Cyber / Naturel)"
          >
            <Sparkles className="nav-icon" />
            <span className="btn-text">
              Effet Photo : <strong>{isCyberFilter ? 'Cyber' : 'Naturel'}</strong>
            </span>
          </button>

          <button onClick={onScrollToProjects} className="nav-btn">
            <FolderGit2 className="nav-icon" />
            <span className="btn-text">Mes Projets</span>
          </button>

          <button onClick={onCopyEmail} className="nav-btn" title="Copier mon email">
            <Copy className="nav-icon" />
            <span className="btn-text">Copier Email</span>
          </button>

          <button onClick={() => window.print()} className="nav-btn primary" title="Imprimer ou enregistrer en PDF">
            <Printer className="nav-icon" />
            <span className="btn-text">Télécharger PDF</span>
          </button>
        </div>
      </div>
    </header>
  );
}
