import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArchitecturePath, ProjectVisual } from '../components/ProjectVisual'
import { Reveal } from '../components/Reveal'
import { Seo } from '../components/Seo'
import { projectBySlug, projects, type ProjectSlug } from '../content'

function ReadingProgress() {
  const progressRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const onScroll = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight
      const progress = available > 0 ? Math.min(100, (window.scrollY / available) * 100) : 0
      if (progressRef.current) progressRef.current.style.width = `${progress}%`
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return <div className="reading-progress" aria-hidden="true"><span ref={progressRef} /></div>
}

function CaseSection({ index, title, children }: { index: string; title: string; children: ReactNode }) {
  return (
    <Reveal className="case-section">
      <section>
        <header><span>{index}</span><h2>{title}</h2></header>
        <div className="case-section-content">{children}</div>
      </section>
    </Reveal>
  )
}

export function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug && slug in projectBySlug ? projectBySlug[slug as ProjectSlug] : undefined

  if (!project) {
    return (
      <section className="not-found">
        <p className="mono-label">404 / PROJECT NOT FOUND</p>
        <h1>That case study is not here.</h1>
        <Link className="button button-primary" to="/#work">Return to selected work</Link>
      </section>
    )
  }

  const currentIndex = projects.findIndex((item) => item.slug === project.slug)
  const previous = projects[(currentIndex - 1 + projects.length) % projects.length]
  const next = projects[(currentIndex + 1) % projects.length]
  const sectionIndex = (withDelivery: number, withoutDelivery: number) => String(project.delivery ? withDelivery : withoutDelivery).padStart(2, '0')
  const evidence = project.evidence ?? {
    heading: 'System evidence shown, project media pending',
    body: 'The diagrams on this page use verified project information. Real screenshots, prototype photography, dashboard graphs, or gameplay captures have not been published because approved source media was not supplied.',
  }

  return (
    <article className="case-study" style={{ '--project-accent': project.accent } as CSSProperties}>
      <Seo project={project} />
      <ReadingProgress />

      <header className="case-hero">
        <Link className="back-link" to="/#work"><span aria-hidden="true">←</span> All selected work</Link>
        <div className="case-title-grid">
          <div>
            <p className="mono-label">CASE STUDY / {String(currentIndex + 1).padStart(2, '0')}</p>
            <h1>{project.title}</h1>
            <p className="case-outcome">{project.outcome}</p>
          </div>
          <dl className="case-meta">
            {project.relationship && <div><dt>Ownership</dt><dd>{project.relationship}</dd></div>}
            {project.role && <div><dt>Role</dt><dd>{project.role}</dd></div>}
            {project.period && <div><dt>Status</dt><dd>{project.period}</dd></div>}
            {project.context && <div><dt>Context</dt><dd>{project.context}</dd></div>}
            {project.course && <div><dt>Course</dt><dd>{project.course}</dd></div>}
            <div><dt>Focus</dt><dd>{project.kicker}</dd></div>
          </dl>
        </div>
        <div className="tech-line case-tech">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
        {(project.liveUrl || project.repositoryUrl) && <div className="case-actions">
          {project.liveUrl && <a className="button button-primary" href={project.liveUrl} target="_blank" rel="noreferrer">Visit live website <span aria-hidden="true">↗</span></a>}
          {project.repositoryUrl && <a className="button button-secondary" href={project.repositoryUrl} target="_blank" rel="noreferrer">View source repository <span aria-hidden="true">↗</span></a>}
        </div>}
      </header>

      <div className="case-visual-wrap"><ProjectVisual project={project} /></div>

      <div className="case-body">
        <CaseSection index="01" title="Problem and people">
          <div className="prose-grid">
            <div><h3>The problem</h3><p>{project.problem}</p></div>
            {project.stakeholders && <div><h3>Users and stakeholders</h3><p>{project.stakeholders}</p></div>}
          </div>
        </CaseSection>

        <CaseSection index="02" title="Constraints">
          <ul className="numbered-list">{project.constraints.map((constraint, index) => <li key={constraint}><span>{String(index + 1).padStart(2, '0')}</span>{constraint}</li>)}</ul>
        </CaseSection>

        {project.delivery && <CaseSection index="03" title="From brief to production">
          <ol className="delivery-timeline">
            {project.delivery.map((stage, index) => <li key={stage.phase}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{stage.phase}</h3><p>{stage.detail}</p></div></li>)}
          </ol>
        </CaseSection>}

        <CaseSection index={sectionIndex(4, 3)} title="System overview">
          <ArchitecturePath stages={project.architecture} />
        </CaseSection>

        <CaseSection index={sectionIndex(5, 4)} title="Arvinder’s contribution">
          <ul className="check-list">{project.contribution.map((item) => <li key={item}>{item}</li>)}</ul>
        </CaseSection>

        <CaseSection index={sectionIndex(6, 5)} title="Important engineering decisions">
          <div className="decision-grid">
            {project.decisions.map((decision, index) => (
              <article key={decision.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{decision.title}</h3>
                <p>{decision.detail}</p>
              </article>
            ))}
          </div>
        </CaseSection>

        <CaseSection index={sectionIndex(7, 6)} title="Validation and reliability">
          <div className="validation-panel">
            <p className="mono-label">CHECKED PATHS</p>
            <ul>{project.validation.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </CaseSection>

        <CaseSection index={sectionIndex(8, 7)} title="Challenges and trade-offs">
          <div className="prose-grid">
            {project.tradeoffs.map((item, index) => <div key={item}><h3>Trade-off {index + 1}</h3><p>{item}</p></div>)}
          </div>
        </CaseSection>

        <CaseSection index={sectionIndex(9, 8)} title="Evidence and media">
          <div className="evidence-note">
            <span className="evidence-mark" aria-hidden="true">↳</span>
            <div>
              <h3>{evidence.heading}</h3>
              <p>{evidence.body}</p>
              {evidence.items && <ul>{evidence.items.map((item) => <li key={item}>{item}</li>)}</ul>}
              {(project.liveUrl || project.repositoryUrl) && <div className="evidence-links">
                {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Open live project ↗</a>}
                {project.repositoryUrl && <a href={project.repositoryUrl} target="_blank" rel="noreferrer">Inspect public source ↗</a>}
              </div>}
            </div>
          </div>
        </CaseSection>
      </div>

      <nav className="case-navigation" aria-label="Project case studies">
        <Link to={`/work/${previous.slug}`}><span>Previous</span><strong>← {previous.shortTitle}</strong></Link>
        <Link to={`/work/${next.slug}`}><span>Next</span><strong>{next.shortTitle} →</strong></Link>
      </nav>
    </article>
  )
}
