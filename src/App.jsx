import "./App.css";

const coreSkills = [
  "C#",
  "JavaScript",
  "Python",
  "Unity",
  "Flutter",
  "Android Studio",
  "Git/GitHub",
  "Blender",
  "Agile Development",
  "Problem Solving",
];

const strengths = [
  {
    title: "Software Development",
    description:
      "Experience building applications, gameplay systems, mobile interfaces, and low-level systems features.",
  },
  {
    title: "Business Mindset",
    description:
      "Finance background with an understanding of analytical thinking, decision-making, and practical business value.",
  },
  {
    title: "Team Delivery",
    description:
      "Comfortable working in agile team projects using planning, documentation, version control, and iterative development.",
  },
];

const projects = [
  {
    title: "First-Person Unity Game",
    category: "Software Development Practice",
    description:
      "Developed a first-person Unity game using C# with modular gameplay systems, player movement, UI, game states, anomaly logic, audio feedback, and subtitle support.",
    highlights: ["Unity", "C#", "Blender", "GitHub", "Agile Sprints"],
  },
  {
    title: "Flutter Mobile Application",
    category: "Mobile App Development",
    description:
      "Built a Flutter application with multiple screens, navigation, structured data handling, UI state management, and clean layouts designed for readability and usability.",
    highlights: ["Flutter", "Mobile UI", "Navigation", "Testing", "Refactoring"],
  },
  {
    title: "xv6 Systems Programming",
    category: "Operating Systems",
    description:
      "Implemented low-level features in an xv6 RISC-V environment using C, working with system calls, synchronisation concepts, debugging, and Linux-based tooling.",
    highlights: ["C", "RISC-V", "Linux", "Systems Programming"],
  },
];

const achievements = [
  "Delivered complete university builds across mobile, game, and systems programming.",
  "Combined software development knowledge with finance and quantitative analysis.",
  "Created and integrated 3D assets using Blender, rigging, animation, and Unity prefabs.",
  "Used agile workflows including sprint planning, documentation, GitHub, and iteration.",
];

const experience = [
  {
    role: "Produce Assistant",
    company: "Pak'nSave Papakura",
    date: "October 2025 – Current",
    description:
      "Manage stock presentation and freshness in a high-volume retail environment while maintaining quality standards, assisting customers, and supporting efficient daily operations.",
  },
  {
    role: "Produce Assistant",
    company: "New World Papakura",
    date: "November 2019 – December 2023",
    description:
      "Supported department operations through stock replenishment, quality checks, display maintenance, and customer assistance while developing strong communication and teamwork skills.",
  },
];

const courses = [
  "Software Development Practice",
  "Research and Development Project",
  "Operating Systems & Systems Programming",
  "International Corporate Finance",
  "Corporate Finance",
];

function App() {
  return (
    <div className="portfolio-site">
      <header className="site-header">
        <a href="#home" className="brand" aria-label="Go to homepage">
          <span>AS</span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-copy">
            <p className="section-label">Finance + Software Development</p>

            <h1>
              Building practical software with a business mindset.
            </h1>

            <p className="hero-description">
              Hi, I’m <strong>Arvinder Singh</strong>, a final-semester AUT
              conjoint student in Finance and Software Development. I enjoy
              creating well-structured digital solutions across web, mobile,
              game development, and systems programming.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="button button-primary">
                View Projects
              </a>
              <a href="mailto:arvindax26@gmail.com" className="button button-secondary">
                Contact Me
              </a>
            </div>

            <div className="hero-details" aria-label="Quick profile details">
              <div>
                <span className="detail-title">Location</span>
                <span>Auckland, New Zealand</span>
              </div>
              <div>
                <span className="detail-title">Degree</span>
                <span>Finance & Software Development</span>
              </div>
              <div>
                <span className="detail-title">Graduation</span>
                <span>Expected July 2026</span>
              </div>
            </div>
          </div>

          <aside className="hero-profile-card" aria-label="Profile summary">
            <div className="profile-badge">AS</div>

            <div>
              <p className="availability">Open to opportunities</p>
              <h2>Software Developer</h2>
              <p>
                Practical, detail-oriented, and approachable developer with
                experience in Unity, Flutter, C#, Python, JavaScript, GitHub,
                Blender, and systems programming.
              </p>
            </div>

            <div className="profile-card-footer">
              <a
                href="https://github.com/Arvinder26"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/arvinder26"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </aside>
        </section>

        <section id="about" className="content-section">
          <div className="section-heading">
            <p className="section-label">About</p>
            <h2>Practical, reliable, and focused on building useful solutions.</h2>
            <p>
              I bring a mix of technical development skills, business knowledge,
              customer service experience, and a strong willingness to learn.
            </p>
          </div>

          <div className="strength-grid">
            {strengths.map((item) => (
              <article className="strength-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

          <div className="about-layout">
            <article className="about-panel">
              <h3>Professional Summary</h3>
              <p>
                I am a final-semester Finance and Software Development conjoint
                student at Auckland University of Technology. I enjoy learning
                by doing and have hands-on experience across mobile development,
                Unity game development, Blender asset creation, GitHub workflows,
                and operating systems programming.
              </p>
            </article>

            <article className="education-panel">
              <h3>Education</h3>
              <p className="education-school">
                Auckland University of Technology
              </p>
              <p>
                Bachelor of Finance & Bachelor of Software Development:
                Conjoint
              </p>
              <p className="subtle-text">Expected completion: July 2026</p>
            </article>
          </div>

          <div className="skills-block">
            <div className="small-heading">
              <p className="section-label">Technical Skills</p>
              <h3>Tools and technologies I work with</h3>
            </div>

            <div className="skills-list">
              {coreSkills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="content-section">
          <div className="section-heading centered-heading">
            <p className="section-label">Projects</p>
            <h2>Selected university projects</h2>
            <p>
              A focused selection of projects showing experience across game
              development, mobile development, and low-level programming.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tags">
                  {project.highlights.map((highlight) => (
                    <span key={highlight}>{highlight}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section">
          <div className="section-heading">
            <p className="section-label">Achievements</p>
            <h2>What I can contribute</h2>
          </div>

          <div className="achievement-grid">
            {achievements.map((achievement, index) => (
              <article className="achievement-card" key={achievement}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{achievement}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="content-section experience-section">
          <div className="section-heading">
            <p className="section-label">Experience</p>
            <h2>Reliable work experience in fast-paced team environments.</h2>
            <p>
              My retail experience has helped me build professionalism,
              communication, time management, attention to detail, and the
              ability to work under pressure.
            </p>
          </div>

          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={`${item.company}-${item.date}`}>
                <div className="timeline-marker" aria-hidden="true"></div>
                <div className="timeline-card">
                  <p className="timeline-date">{item.date}</p>
                  <h3>{item.role}</h3>
                  <h4>{item.company}</h4>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section courses-section">
          <div className="section-heading centered-heading">
            <p className="section-label">Coursework</p>
            <h2>Relevant study areas</h2>
          </div>

          <div className="course-list">
            {courses.map((course) => (
              <span key={course}>{course}</span>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-card">
            <p className="section-label">Contact</p>
            <h2>Let’s connect.</h2>
            <p>
              I am open to software development internships, graduate roles,
              junior developer opportunities, and project-based work.
            </p>

            <div className="contact-links">
              <a href="mailto:arvindax26@gmail.com">arvindax26@gmail.com</a>
              <a href="tel:0272661398">027 266 1398</a>
              <a
                href="https://github.com/Arvinder26"
                target="_blank"
                rel="noreferrer"
              >
                github.com/Arvinder26
              </a>
              <a
                href="https://linkedin.com/in/arvinder26"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/arvinder26
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2026 Arvinder Singh. Built with React.</p>
      </footer>
    </div>
  );
}

export default App;