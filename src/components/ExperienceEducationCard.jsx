import React from 'react';

export default function ExperienceEducationCard({ education, experience, skills }) {
  return (
    <section className="glass-card main-body-card">
      <div className="card-glow-reflection"></div>

      {/* Two-column: EDUCATION & WORK EXPERIENCE */}
      <div className="experience-education-grid">
        
        {/* EDUCATION */}
        <div className="column-block education-block">
          <div className="section-title-wrap">
            <h2 className="section-title">FORMATION</h2>
            <div className="matrix-dots" aria-hidden="true">
              <span></span><span></span><span></span><span></span>
              <span></span><span></span><span></span><span></span>
            </div>
          </div>

          <div className="timeline-container">
            {education.map((item, index) => (
              <div key={item.id} className="timeline-item">
                <div className="timeline-indicator">
                  <div className="timeline-node">
                    <span className="inner-node"></span>
                  </div>
                  {index < education.length - 1 && <div className="timeline-line"></div>}
                </div>
                <div className="timeline-content">
                  <div className="item-header">
                    <h3 className="institution-name">{item.title}</h3>
                    <span className="timeline-date">{item.date}</span>
                  </div>
                  <p className="timeline-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* WORK EXPERIENCE */}
        <div className="column-block experience-block">
          <div className="section-title-wrap">
            <h2 className="section-title">EXPÉRIENCE</h2>
            <div className="matrix-dots" aria-hidden="true">
              <span></span><span></span><span></span><span></span>
              <span></span><span></span><span></span><span></span>
            </div>
          </div>

          <div className="timeline-container">
            {experience.map((item, index) => (
              <div key={item.id} className="timeline-item">
                <div className="timeline-indicator">
                  <div className="timeline-node">
                    <span className="inner-node"></span>
                  </div>
                  {index < experience.length - 1 && <div className="timeline-line"></div>}
                </div>
                <div className="timeline-content">
                  <div className="item-header">
                    <div className="role-org-group">
                      <h3 className="institution-name">{item.title}</h3>
                      <span className="sub-role">{item.role}</span>
                    </div>
                    <span className="timeline-date">{item.date}</span>
                  </div>
                  <p className="timeline-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* SECTION DIVIDER */}
      <div className="inner-section-divider"></div>

      {/* SKILLS */}
      <div className="skills-block">
        <div className="skills-header-row">
          <div className="skills-title-group">
            <h2 className="section-title">COMPÉTENCES</h2>
            <div className="matrix-dots small" aria-hidden="true">
              <span></span><span></span><span></span><span></span>
              <span></span><span></span><span></span><span></span>
            </div>
          </div>
          
          <div className="section-decor-dots">
            <span className="decor-dot"></span>
            <span className="decor-dot"></span>
            <span className="decor-dot"></span>
          </div>
        </div>

        <div className="skills-chips-wrapper">
          {skills.map((skill, idx) => (
            <div key={idx} className="skill-pill">
              <span className="skill-name">{skill}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
