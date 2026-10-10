import React, { useState } from 'react';
import TopNav from './components/TopNav';
import SystemHeader from './components/SystemHeader';
import ProfileCard from './components/ProfileCard';
import ExperienceEducationCard from './components/ExperienceEducationCard';
import ProjectsSection from './components/ProjectsSection';
import ProjectModal from './components/ProjectModal';
import Footer from './components/Footer';
import Toast from './components/Toast';

import { 
  candidateData, 
  educationData, 
  experienceData, 
  skillsData, 
  projectsData 
} from './data/resumeData';

export default function App() {
  const [isCyberFilter, setIsCyberFilter] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3200);
  };

  const handleToggleFilter = () => {
    setIsCyberFilter(prev => {
      const next = !prev;
      triggerToast(next ? 'Effet photo : Ambiance Cyber Neon' : 'Effet photo : Rendu naturel');
      return next;
    });
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(candidateData.email);
      triggerToast(`Email copié dans le presse-papier : ${candidateData.email}`);
    } catch {
      triggerToast(`Email : ${candidateData.email}`);
    }
  };

  const handleScrollToProjects = () => {
    const el = document.getElementById('projets');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleHighlightSkills = () => {
    const el = document.querySelector('.skills-block');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const pills = document.querySelectorAll('.skill-pill');
      pills.forEach((p, idx) => {
        setTimeout(() => {
          p.style.transform = 'translateY(-4px) scale(1.05)';
          p.style.borderColor = '#c084fc';
          p.style.boxShadow = '0 0 20px #a855f7';
          setTimeout(() => {
            p.style.transform = '';
            p.style.borderColor = '';
            p.style.boxShadow = '';
          }, 600);
        }, idx * 60);
      });
    }
  };

  return (
    <>
      {/* Ambient background glows */}
      <div className="ambient-glow glow-top-left"></div>
      <div className="ambient-glow glow-top-right"></div>
      <div className="ambient-glow glow-bottom-center"></div>
      <div className="ambient-grid"></div>

      {/* Top Floating Bar */}
      <TopNav 
        isCyberFilter={isCyberFilter}
        onToggleFilter={handleToggleFilter}
        onCopyEmail={handleCopyEmail}
        onScrollToProjects={handleScrollToProjects}
      />

      {/* Main Resume Container */}
      <main className="resume-wrapper">
        <SystemHeader tagline={candidateData.tagline} />

        <ProfileCard 
          candidate={candidateData}
          isCyberFilter={isCyberFilter}
          onHighlightSkills={handleHighlightSkills}
        />

        <ExperienceEducationCard 
          education={educationData}
          experience={experienceData}
          skills={skillsData}
        />

        <ProjectsSection 
          projects={projectsData}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        <Footer 
          candidateName={candidateData.name}
          email={candidateData.email}
        />
      </main>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

      {/* Toast Notification */}
      <Toast message={toastMessage} />
    </>
  );
}
