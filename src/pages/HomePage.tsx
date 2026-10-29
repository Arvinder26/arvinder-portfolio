import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  additionalProjects,
  capabilities,
  education,
  experience,
  practiceStages,
  profile,
  projects,
  proofDiagrams,
  toolkit,
  type DiagramStage,
  type Project,
} from '../content'
import { ProjectVisual } from '../components/ProjectVisual'
import { Reveal } from '../components/Reveal'
import { Seo } from '../components/Seo'

const flagshipProjects = projects.filter((project) => project.priority === 'flagship')
const technicalProjects = projects.filter((project) => project.priority !== 'flagship')

function Stage({ stage, index, isLast }: { stage: DiagramStage; index: number; isLast: boolean }) {
  return (
    <li className={`diagram-node${isLast ? ' is-last' : ''}`}>
      <span className="diagram-stage">
        <span className="diagram-stage-number">{String(index + 1).padStart(2, '0')}</span>
        <strong>{stage.label}</strong>
        <span className="sr-only">: {stage.note}</span>
      </span>
    </li>
  )
}

function EngineeringProof() {
  return (
    <aside className="proof-panel" aria-labelledby="proof-title">
      <div className="panel-heading">
        <div>
          <p className="mono-label">ENGINEERING PROOF / 02 SYSTEMS</p>
          <h2 id="proof-title">How the pieces connect</h2>
        </div>
        <span className="status-dot">Systems view</span>
      </div>

      <div className="diagram-list">
        {proofDiagrams.map((diagram, diagramIndex) => (
          <section className="diagram" key={diagram.name} aria-label={`${diagram.name} architecture`}>
            <div className="diagram-meta">
              <span className="diagram-number">0{diagramIndex + 1}</span>
              <div>
                <h3>{diagram.name}</h3>
                <p>{diagram.descriptor}</p>
              </div>
            </div>
            <ol className="diagram-path">
              {diagram.stages.map((stage, index) => (
                <Stage key={stage.label} stage={stage} index={index} isLast={index === diagram.stages.length - 1} />
              ))}
            </ol>
          </section>
        ))}
      </div>

      <p className="proof-hint">A compact view of each production path.</p>
    </aside>
  )
}

function SectionIntro({ index, label, title, copy }: { index: string; label: string; title: string; copy?: string }) {
  return (
    <div className="section-intro">
      <div className="section-index"><span>{index}</span><span>{label}</span></div>
      <div>
        <h2>{title}</h2>
        {copy && <p>{copy}</p>}
      </div>
    </div>
  )
}

function FeaturedProject({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal className={`featured-project${project.priority === 'flagship' ? ' is-flagship' : ''}${index === 0 ? ' is-primary' : ''}`}>
      <article>
        <header className="project-heading">
          <div>
            <p className="mono-label">{String(index + 1).padStart(2, '0')} / {project.kicker}</p>
            <h3>{project.title}</h3>
          </div>
          <span className="project-type">{project.typeLabel ?? 'BUILD'}</span>
        </header>

        <div className="project-feature-grid">
          <div className="project-story">
            <p className="project-summary">{project.summary}</p>
            <dl className="evidence-grid">
              {project.relationship && <div><dt>Ownership</dt><dd>{project.relationship}</dd></div>}
              {project.role && <div><dt>Role</dt><dd>{project.role}</dd></div>}
              <div><dt>Need</dt><dd>{project.problem}</dd></div>
              <div><dt>Built</dt><dd>{project.contribution.slice(0, 2).join(' ')}</dd></div>
              <div><dt>Constraint</dt><dd>{project.constraints[0]}</dd></div>
              <div><dt>Validated</dt><dd>{project.validation[0]}</dd></div>
            </dl>
            <div className="tech-line" aria-label="Technologies used">
              {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
            </div>
            <div className="project-actions">
              <Link className="text-link" to={`/work/${project.slug}`}>Read detailed case study <span aria-hidden="true">↗</span></Link>
              {project.liveUrl && <a className="text-link" href={project.liveUrl} target="_blank" rel="noreferrer">Visit live website <span aria-hidden="true">↗</span></a>}
            </div>
          </div>
          <ProjectVisual project={project} />
        </div>
      </article>
    </Reveal>
  )
}

function EmailCopy() {
  const [status, setStatus] = useState('')

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setStatus('Email copied')
    } catch {
      setStatus('Select the email address to copy it')
    }
  }

  return (
    <div className="email-copy">
      <a href={`mailto:${profile.email}`}>{profile.email}</a>
      <button type="button" onClick={copyEmail} aria-label={`Copy ${profile.email} to clipboard`}>Copy</button>
      <span aria-live="polite">{status}</span>
    </div>
  )
}

export function HomePage() {
  return (
    <>
      <Seo />
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-copy">
          <div className="eyebrow hero-enter hero-enter-1">
            <span className="availability-mark" aria-hidden="true" />
            {profile.role} <span aria-hidden="true">·</span> {profile.location}
          </div>
          <h1 id="hero-heading" className="hero-enter hero-enter-2">
            I build reliable software from the interface to the <em>system beneath it.</em>
          </h1>
          <p className="hero-intro hero-enter hero-enter-3">
            I’m Arvinder Singh, an AUT graduate in Software Development and Finance. I design, build, launch, and maintain production web platforms—from client news and advisory websites to the booking and operations system behind my own transport business.
          </p>
          <div className="hero-actions hero-enter hero-enter-4">
            <a className="button button-primary" href="#work">Explore selected work <span aria-hidden="true">↘</span></a>
            <a className="button button-secondary" href={profile.resume} download>Download résumé <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-social hero-enter hero-enter-5">
            <span>Open to graduate and junior software roles</span>
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
        </div>

        <EngineeringProof />
      </section>

      <section className="capability-strip" aria-label="Core capabilities">
        <span className="mono-label">PRACTICAL RANGE</span>
        <ul>{capabilities.map((capability) => <li key={capability}>{capability}</li>)}</ul>
      </section>

      <section className="page-section work-section" id="work">
        <Reveal><SectionIntro index="01" label="PRODUCTION & CLIENT WORK" title="Built from brief to production" copy="Three live projects showing client delivery, full-stack implementation, operational thinking, deployment, and ongoing ownership—not tutorial builds or isolated interface concepts." /></Reveal>
        <div className="featured-work-list">
          {flagshipProjects.map((project, index) => <FeaturedProject project={project} index={index} key={project.slug} />)}
        </div>
      </section>

      <section className="page-section technical-work-section">
        <Reveal><SectionIntro index="02" label="TECHNICAL FOUNDATIONS" title="Additional engineering depth" copy="Academic and independent projects that demonstrate payments, IoT telemetry, interactive systems, low-level programming, and cross-platform development." /></Reveal>
        <div className="featured-work-list technical-work-list">
          {technicalProjects.map((project, index) => <FeaturedProject project={project} index={index + flagshipProjects.length} key={project.slug} />)}
        </div>
      </section>

      <section className="page-section practice-section" id="practice">
        <Reveal><SectionIntro index="03" label="ENGINEERING PRACTICE" title="How I approach software delivery" copy="A practical loop for moving from an understood problem to a system that can be launched, checked, operated, and improved." /></Reveal>
        <ol className="practice-model">
          {practiceStages.map((stage, index) => (
            <li key={stage.name}>
              <span className="practice-number">0{index + 1}</span>
              <h3>{stage.name}</h3>
              <p>{stage.description}</p>
              <small>{stage.evidence}</small>
            </li>
          ))}
        </ol>
      </section>

      <section className="page-section additional-work">
        <Reveal><SectionIntro index="04" label="PROJECT INDEX" title="Additional project range" copy="More contexts where I have applied interface design, application state, platform tooling, and low-level debugging." /></Reveal>
        <div className="project-index">
          {additionalProjects.map((project, index) => (
            <article key={project.title}>
              <div className="index-heading">
                <span className="mono-label">{String(index + 7).padStart(2, '0')} / {project.context}</span>
                <h3>{project.title}</h3>
              </div>
              <div>
                <p>{project.summary}</p>
                <ul>{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                <div className="tech-line">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section toolkit-section">
        <Reveal><SectionIntro index="05" label="TECHNICAL TOOLKIT" title="Tools used in context" copy="Technologies are grouped by where I have applied them—not by arbitrary percentages." /></Reveal>
        <div className="toolkit-grid">
          {toolkit.map((group) => (
            <article key={group.group}>
              <h3>{group.group}</h3>
              <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section about-section" id="about">
        <Reveal><SectionIntro index="06" label="ABOUT & EDUCATION" title="Software thinking with commercial context" /></Reveal>
        <div className="about-grid">
          <div className="about-copy">
            <p>I studied Software Development and Finance as a conjoint degree at AUT. That combination shaped how I approach projects: understand the user and business problem, choose an appropriate technical solution, and validate that the system behaves reliably.</p>
            <p>Financial analysis, valuation, risk, and business decision-making complement my software work; engineering remains the centre of what I want to build.</p>
          </div>
          <article className="education-record">
            <span className="mono-label">QUALIFICATION / COMPLETE</span>
            <h3>{education.school}</h3>
            <p>{education.degree}</p>
            <strong>{education.graduation}</strong>
          </article>
        </div>
        <div className="study-areas" aria-label="Relevant study areas">
          {education.areas.map((area, index) => <span key={area}><i>{String(index + 1).padStart(2, '0')}</i>{area}</span>)}
        </div>
      </section>

      <section className="page-section experience-section" id="experience">
        <Reveal><SectionIntro index="07" label="PROFESSIONAL EXPERIENCE" title="Reliability beyond the codebase" copy="Customer-facing work built the habits that support dependable delivery: communication, prioritisation, teamwork, and close attention to detail." /></Reveal>
        <div className="experience-timeline">
          {experience.map((item) => (
            <article key={`${item.company}-${item.date}`}>
              <div className="experience-date">{item.date}</div>
              <div className="experience-role"><h3>{item.role}</h3><p>{item.company}</p></div>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-inner">
          <p className="mono-label">08 / CONTACT</p>
          <h2>Let’s build something dependable.</h2>
          <p>I’m open to graduate and junior software development opportunities in Auckland, across New Zealand, or in suitable remote teams.</p>
          <div className="contact-actions">
            <a className="button button-light" href={`mailto:${profile.email}`}>Email Arvinder <span aria-hidden="true">↗</span></a>
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href={profile.resume} download>Download résumé ↓</a>
          </div>
          <EmailCopy />
        </div>
      </section>
    </>
  )
}
