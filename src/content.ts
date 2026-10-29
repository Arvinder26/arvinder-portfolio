export type DiagramStage = {
  label: string
  note: string
}

export type ProjectSlug = 'pn-media' | 'path-planner' | 'cruzycabs' | 'fade-plug' | 'smart-vineyard' | 'recursed'

export type Project = {
  slug: ProjectSlug
  title: string
  shortTitle: string
  kicker: string
  outcome: string
  summary: string
  technologies: string[]
  context?: string
  course?: string
  problem: string
  stakeholders?: string
  constraints: string[]
  contribution: string[]
  decisions: Array<{ title: string; detail: string }>
  validation: string[]
  tradeoffs: string[]
  architecture: DiagramStage[]
  visual: 'newsroom' | 'pathway' | 'transport' | 'booking' | 'vineyard' | 'game'
  accent: string
  typeLabel?: string
  relationship?: string
  role?: string
  period?: string
  liveUrl?: string
  repositoryUrl?: string
  priority?: 'flagship' | 'technical'
  media?: { src: string; alt: string; label: string }
  delivery?: Array<{ phase: string; detail: string }>
  evidence?: { heading: string; body: string; items?: string[] }
}

export const profile = {
  name: 'Arvinder Singh',
  role: 'Graduate Software Developer',
  location: 'Auckland, New Zealand',
  email: 'arvindax26@gmail.com',
  github: 'https://github.com/Arvinder26',
  linkedin: 'https://linkedin.com/in/arvinder26',
  resume: '/Arvinder_Singh_Resume.docx',
} as const

export const projects: Project[] = [
  {
    slug: 'pn-media',
    title: 'PN Media Bilingual News Platform',
    shortTitle: 'PN Media',
    kicker: 'Client newsroom · end-to-end delivery',
    outcome: 'A production bilingual newsroom that keeps English and Punjabi reporting connected from the editorial CMS through to public article routes.',
    summary: 'A client-built digital publication combining a bilingual editorial workflow, responsive news experience, search, trust pages, structured metadata, and reader contact flows.',
    technologies: ['Next.js 16', 'TypeScript', 'React 19', 'Sanity CMS', 'Resend', 'Vercel'],
    context: 'Client project · independent bilingual news publication',
    problem: 'Give a New Zealand-based newsroom one dependable publishing system for English and Punjabi readers without splitting translations, editorial status, media credits, corrections, or search into disconnected workflows.',
    stakeholders: 'The client founder and newsroom team, English and Punjabi readers, authors, editors, tip submitters, and future publication administrators.',
    constraints: [
      'English and Punjabi versions needed to stay paired while retaining language-specific headlines, bodies, SEO fields, captions, and completion states.',
      'Editors needed a maintainable draft, review, publish, correction, and homepage-curation workflow without editing source code.',
      'Articles needed server-rendered metadata, canonical and alternate-language URLs, structured data, and readable responsive layouts.',
      'News-tip and contact flows needed validation, abuse controls, and honest failure states because submissions may contain sensitive information.',
    ],
    contribution: [
      'Translated the client brief into the publication structure, responsive editorial design system, and bilingual navigation model.',
      'Built the public Next.js application across home, latest, category, article, author, search, about, policy, contact, and news-tip routes.',
      'Designed the Sanity newsroom schemas for paired-language articles, authors, categories, tags, media credits, editorial states, translation review, and corrections.',
      'Implemented the typed content adapter, CMS queries, draft exclusion, server rendering, cache revalidation, SEO metadata, and NewsArticle structured data.',
      'Built validated newsletter, contact, and news-tip server flows with honeypots, bounded inputs, rate limiting, and Resend or webhook delivery.',
      'Prepared the production deployment, documentation, CMS handover workflow, and rendered-route regression coverage.',
    ],
    decisions: [
      { title: 'One story, two coordinated editions', detail: 'Store English and Punjabi fields in one article record so editorial status, authorship, media, tags, corrections, and translation readiness cannot silently drift apart.' },
      { title: 'Server-render the publication', detail: 'Render article and index routes on the server so news content, metadata, canonical URLs, hreflang alternatives, and structured data are available without client-side execution.' },
      { title: 'Put newsroom control in the CMS', detail: 'Model editorial states, priority, featured and breaking flags, translation review, image credits, and correction notices as maintained content rather than hard-coded presentation.' },
      { title: 'Fail honestly at the boundary', detail: 'Validate forms on both sides and never display a false success when a delivery provider or recipient is not configured.' },
    ],
    validation: [
      'The repository includes rendered-route tests for both language homepages, paired article routes, search, trust pages, active news desks, metadata, and unpublished-section behaviour.',
      'CMS queries explicitly exclude drafts and require published editorial status before a story reaches readers.',
      'Form endpoints bound payload sizes, validate fields, apply honeypot and rate-limit controls, and return actionable provider failures.',
      'The live publication exposes separate English and Punjabi editions with preserved story routes and language switching.',
    ],
    tradeoffs: [
      'A paired bilingual record protects editorial consistency but requires deliberate completion and review states for each language.',
      'A flexible newsroom CMS adds schema and operational complexity, but removes code deployment from routine publishing work.',
      'In-memory rate limiting is suitable for the launch shape; a higher-volume newsroom should move abuse protection to a durable edge service.',
    ],
    architecture: [
      { label: 'Readers', note: 'Browse English or Punjabi routes, search, policies, authors, and story pages.' },
      { label: 'Next.js', note: 'Server-renders editorial pages, metadata, structured data, and language-aware navigation.' },
      { label: 'Content layer', note: 'Maps typed CMS records and enforces publication and translation rules.' },
      { label: 'Sanity', note: 'Manages drafts, paired-language content, authors, media, review, corrections, and curation.' },
      { label: 'Revalidation', note: 'A signed webhook refreshes published content without a full redeploy.' },
      { label: 'Delivery', note: 'Resend and configured webhooks deliver newsroom enquiries and subscriptions.' },
    ],
    visual: 'newsroom',
    accent: '#9a6b22',
    typeLabel: 'CLIENT',
    relationship: 'Client project',
    role: 'Product design, full-stack development, CMS architecture, QA, deployment, and handover',
    period: '2026 · Production',
    liveUrl: 'https://pnmedia.co.nz/en/latest',
    priority: 'flagship',
    media: { src: '/projects/pn-media/og.png', alt: 'PN Media brand artwork reading News without language barriers', label: 'Live bilingual publication' },
    delivery: [
      { phase: 'Discover', detail: 'Converted the client’s audience, language, trust, and newsroom needs into a route map and editorial requirements.' },
      { phase: 'Design', detail: 'Created the responsive publication hierarchy, bilingual navigation, article system, trust surfaces, and branded visual language.' },
      { phase: 'Build', detail: 'Implemented the public application, typed CMS layer, editorial schemas, search, metadata, and reader forms.' },
      { phase: 'Integrate', detail: 'Connected Sanity, signed revalidation, email delivery, production metadata, and deployment configuration.' },
      { phase: 'Validate and hand over', detail: 'Added rendered-route checks and documented story publishing, categories, authors, settings, deployment, and operational limits.' },
    ],
    evidence: {
      heading: 'Production site, source architecture, and newsroom workflow',
      body: 'The live client publication and its project files verify the complete delivery: paired-language CMS schemas, server-rendered routes, article metadata, reader forms, search, trust pages, deployment configuration, and editorial documentation.',
      items: ['Live English and Punjabi publication', 'Sanity article and newsroom schemas', 'Rendered-route regression tests', 'Production deployment and editor handover documentation'],
    },
  },
  {
    slug: 'path-planner',
    title: 'PATHPlanner Client Website',
    shortTitle: 'PATHPlanner',
    kicker: 'Client service platform · end-to-end delivery',
    outcome: 'A calm, credible service website that turns a complex university and career-planning offer into a clear journey from first question to qualified enquiry.',
    summary: 'A client website for New Zealand Year 11–13 students and parents, combining a distinctive editorial brand, the PATH Method, service education, privacy-aware content, and a production enquiry flow.',
    technologies: ['Next.js 16', 'TypeScript', 'React 19', 'Resend', 'Vercel'],
    context: 'Client project · education and career pathway planning',
    problem: 'Present a high-trust advisory service clearly enough for students and parents to understand the method, compare the offer, recognise its limits, and submit a useful enquiry without oversharing sensitive academic information.',
    stakeholders: 'The client founder, New Zealand secondary-school students, parents, and prospective Clarity Intensive clients.',
    constraints: [
      'The experience needed to build confidence without guaranteeing admission, scholarships, or career outcomes.',
      'The client’s PATH Method and Clarity Intensive needed a clear narrative across multiple pages rather than a generic landing page.',
      'Student enquiries needed privacy guidance, bounded inputs, same-origin checks, and reliable email delivery.',
      'The site needed to work as both a brand experience and a focused lead-generation path without automatic payment or speculative features.',
    ],
    contribution: [
      'Shaped the information architecture and translated the client’s service model into a coherent multi-page user journey.',
      'Created the visual system, responsive layout, typographic hierarchy, pathway motifs, interaction states, and reusable page components.',
      'Built the homepage, PATH Method, Clarity Intensive, about, insights, FAQ, booking, privacy, terms, and disclaimer routes.',
      'Implemented the booking-enquiry form with accessible validation, consent, sensitive-data guidance, success and failure states, and spam protection.',
      'Built the server route for origin checking, payload bounds, sanitisation, validation, Resend delivery, and safe operational logging.',
      'Added metadata, social imagery, deployment configuration, and a maintainable production structure for the client.',
    ],
    decisions: [
      { title: 'Lead with clarity, not pressure', detail: 'Use the student’s uncertainty as the narrative starting point, then progressively explain the method, deliverable, boundaries, and next step.' },
      { title: 'Turn the method into an interface', detail: 'Represent Personal, Academic, Target, and High-Probability Plan as a connected decision framework with Plan A, B, and C—not as a list of generic services.' },
      { title: 'Qualify before payment', detail: 'Use a reviewed enquiry rather than instant checkout so the client can confirm suitability, timing, intake, and fees personally.' },
      { title: 'Protect the enquiry boundary', detail: 'Combine client and server validation, consent, a honeypot, origin checks, input limits, HTML escaping, and provider error handling.' },
    ],
    validation: [
      'The booking flow validates identity, enquirer role, question, consent, and optional year level before sending.',
      'The server rejects cross-origin, oversized, malformed, or invalid submissions and does not expose delivery credentials to the browser.',
      'The content consistently states the service boundaries and avoids admission or career-outcome guarantees.',
      'The project includes production build and TypeScript checks plus responsive metadata and social assets.',
    ],
    tradeoffs: [
      'A personally reviewed enquiry creates a higher-quality handoff but is intentionally slower than automated booking and payment.',
      'The editorial design communicates a premium, thoughtful service while requiring careful responsive typography and spacing work.',
      'Email delivery keeps the launch operationally simple; a future CRM could add durable lead tracking if the client needs it.',
    ],
    architecture: [
      { label: 'Visitor', note: 'Learns the method, service, boundaries, and expected next steps.' },
      { label: 'Next.js pages', note: 'Deliver the brand narrative and reusable responsive content system.' },
      { label: 'Enquiry form', note: 'Collects only the context needed for the client to assess a session request.' },
      { label: 'API route', note: 'Checks origin, size, fields, consent, sanitisation, and spam signals.' },
      { label: 'Resend', note: 'Delivers a structured enquiry without exposing provider credentials.' },
      { label: 'Client handoff', note: 'The founder reviews suitability and confirms availability, intake, and payment directly.' },
    ],
    visual: 'pathway',
    accent: '#9b673b',
    typeLabel: 'CLIENT',
    relationship: 'Client project',
    role: 'UX strategy, visual design, full-stack implementation, enquiry integration, and deployment',
    period: '2026 · Production',
    liveUrl: 'https://www.pathplanner.co.nz/',
    priority: 'flagship',
    media: { src: '/projects/path-planner/og.png', alt: 'PATHPlanner brand artwork reading Clarity for the path ahead', label: 'Live client website' },
    delivery: [
      { phase: 'Discover', detail: 'Clarified the audience, advisory boundaries, service steps, student privacy needs, and desired enquiry outcome.' },
      { phase: 'Structure', detail: 'Mapped the method, service, trust, insight, policy, FAQ, and booking content into a purposeful route hierarchy.' },
      { phase: 'Design', detail: 'Created the warm editorial brand system and pathway visual language across desktop and mobile layouts.' },
      { phase: 'Build and integrate', detail: 'Implemented the Next.js pages, reusable components, validated enquiry experience, email delivery, metadata, and social assets.' },
      { phase: 'Launch', detail: 'Prepared the production deployment and a client-operable enquiry path with explicit success, failure, and privacy behaviour.' },
    ],
    evidence: {
      heading: 'Live client website and complete lead-generation path',
      body: 'The production website and source files verify the full visitor journey—from the home narrative and PATH Method through service explanation, policies, booking enquiry, server validation, and delivery to the client inbox.',
      items: ['Live multi-page client website', 'Responsive design system and branded social asset', 'Validated client and server enquiry flow', 'Privacy, terms, disclaimer, FAQ, and service-boundary content'],
    },
  },
  {
    slug: 'cruzycabs',
    title: 'Cruzy Cabs Booking & Operations Platform',
    shortTitle: 'Cruzy Cabs',
    kicker: 'Founder-owned business · production platform',
    outcome: 'A production transport platform connecting public service pages, road-based quotes, booking requests, secure customer access, dispatch, driver workflows, and operational communication.',
    summary: 'My own transport business and the largest end-to-end system in this portfolio: brand, customer booking, pricing, identity, operations, driver coordination, data, notifications, analytics, and release engineering.',
    technologies: ['Next.js 16', 'TypeScript', 'React 19', 'Turso / libSQL', 'Drizzle ORM', 'Google Routes', 'Resend', 'Vercel'],
    context: 'Founder-owned business · live Auckland transport service',
    problem: 'Build a customer-facing transport brand and the operational software behind it: quote real journeys, accept and manage requests, protect customer data, coordinate drivers, communicate changes, and give staff a dependable dispatch view.',
    stakeholders: 'Passengers, business operations, dispatch and admin staff, drivers, partner fleets, and the founder operating the service.',
    constraints: [
      'Fares, capacity, road distance, route duration, and schedule rules needed server authority rather than client trust.',
      'Booking retries, assignments, cancellations, notifications, and provider callbacks needed idempotent state transitions.',
      'Journey and customer information required protected access, careful analytics boundaries, and role-scoped staff workflows.',
      'New Zealand time, booking windows, driver clashes, vehicle capacity, service availability, and operational review needed explicit modelling.',
      'The product had to evolve while live, with migrations, recovery paths, deployment checks, and clearly documented business gates.',
    ],
    contribution: [
      'Founded the business and took the product from service concept and brand through architecture, implementation, deployment, and ongoing release work.',
      'Built the public service experience, responsive booking journey, address autocomplete, Google road routing, quotes, vehicle selection, and booking requests.',
      'Implemented secure guest booking management, email-code identity, role-bound staff access, authenticator assurance, saved places, and review flows.',
      'Built dispatch, admin, driver, and partner surfaces with assignments, status transitions, availability, compliance, location scope, and operational metrics.',
      'Designed the persistent booking, assignment, event, notification, audit, pricing, migration, and recovery model using libSQL and Drizzle-compatible patterns.',
      'Implemented branded email delivery, operations copies, calendar invites with update and cancellation semantics, retryable outbox processing, and health checks.',
      'Added consent-controlled analytics, private-route exclusions, structured SEO, offline support, security headers, automated tests, and production release evidence.',
    ],
    decisions: [
      { title: 'The server owns price and state', detail: 'Store canonical route inputs, versioned integer-cent fares, capacity decisions, and expiring quote access so browser changes cannot replace the accepted journey or amount.' },
      { title: 'Model operations as a state machine', detail: 'Make review, assignment, confirmation, arrival, travel, completion, cancellation, and recovery explicit so retries converge on one outcome.' },
      { title: 'Separate public and private surfaces', detail: 'Keep public marketing and quoting accessible while customer records, booking links, staff tools, partner reads, and driver writes use scoped authorisation and no-store responses.' },
      { title: 'Design for failure and recovery', detail: 'Use idempotency keys, additive migrations, audit records, a leased notification outbox, bounded retries, job records, and actionable failure states.' },
      { title: 'Treat communication as product infrastructure', detail: 'Generate branded plain-text and HTML emails plus driver calendar invites that update or cancel with the underlying booking.' },
    ],
    validation: [
      'The recorded production release passed 81 automated tests alongside TypeScript, lint, and production build checks.',
      'Tests cover pricing, New Zealand scheduling, route fallbacks, booking idempotency, access control, assignments, cancellations, recovery, migrations, analytics consent, and driver calendar updates.',
      'Live acceptance evidence includes health, public route, metadata, consent, protected-route, and direct booking-management checks.',
      'The repository documents deployment history, architecture decisions, operational boundaries, audits, launch checks, and release evidence.',
    ],
    tradeoffs: [
      'A complete booking and operations platform creates more operational responsibility than a marketing-only site, so feature gates and documented manual reviews remain deliberate controls.',
      'Provider-backed routing and email improve real-world accuracy and communication while requiring explicit fallback, retry, and failure behaviour.',
      'Supporting customer, driver, dispatch, admin, and partner roles increases model complexity but prevents one over-privileged interface from becoming the whole system.',
    ],
    architecture: [
      { label: 'Customer', note: 'Explores services, enters a journey, receives a road-based quote, and submits a request.' },
      { label: 'Quote and booking APIs', note: 'Validate route, schedule, capacity, pricing, access, consent, and idempotency.' },
      { label: 'Operational data', note: 'libSQL stores bookings, events, assignments, requests, audit records, and recovery state.' },
      { label: 'Dispatch', note: 'Staff review requests, assign compliant drivers, manage timing, and monitor scoped work.' },
      { label: 'Driver workflow', note: 'Drivers receive offers, calendar updates, journey details, and controlled status actions.' },
      { label: 'Communications', note: 'A retryable outbox delivers customer, driver, and operations messages.' },
    ],
    visual: 'transport',
    accent: '#f2a622',
    typeLabel: 'FOUNDER',
    relationship: 'Founder-owned product and operating business',
    role: 'Founder, product designer, full-stack engineer, systems designer, QA, and release owner',
    period: '2026 · Live and evolving',
    liveUrl: 'https://cruzycabs.co.nz/',
    repositoryUrl: 'https://github.com/Arvinder26/cruzycabs',
    priority: 'flagship',
    media: { src: '/projects/cruzycabs/og.png', alt: 'Cruzy Cabs brand artwork for Auckland and North Island transport', label: 'Founder-owned live platform' },
    delivery: [
      { phase: 'Define the business', detail: 'Established the service proposition, customer journeys, brand, operating roles, booking boundaries, and production requirements.' },
      { phase: 'Design the system', detail: 'Mapped public, customer, driver, dispatch, admin, partner, data, security, provider, and recovery responsibilities.' },
      { phase: 'Build the platform', detail: 'Implemented the public site, quotes, booking lifecycle, identity, operations tools, driver workflow, persistence, notifications, and analytics controls.' },
      { phase: 'Validate and release', detail: 'Built automated coverage, migrations, health checks, browser acceptance, SEO checks, security boundaries, and documented production releases.' },
      { phase: 'Operate and improve', detail: 'Iterated on real operational needs including in-person payment, short references, pickup-time changes, driver scheduling, branded communications, and calendar updates.' },
    ],
    evidence: {
      heading: 'Live business, public source, and production release evidence',
      body: 'Cruzy Cabs is not a concept screen. The live service and public repository show the customer experience, operational applications, data model, API routes, migrations, automated tests, deployment history, and documented release checks behind the business.',
      items: ['Live Auckland transport website and booking journey', 'Public source repository and architecture documentation', '81-test recorded production release', 'Dispatch, admin, driver, customer, notifications, migrations, and release evidence'],
    },
  },
  {
    slug: 'fade-plug',
    title: 'Fade Plug Booking Platform',
    shortTitle: 'Fade Plug',
    kicker: 'Full-stack booking & payments',
    outcome: 'A booking flow that coordinates availability, private uploads, deposits, and confirmations with server-side safeguards.',
    summary: 'A mobile-service booking workflow with availability control, private reference-image storage, deposit payments, confirmations, and server-side safeguards.',
    technologies: ['React', 'TypeScript', 'Cloudflare D1', 'Cloudflare R2', 'Stripe', 'Drizzle ORM'],
    context: 'Mobile barber service booking platform',
    problem: 'Turn a multi-step mobile-service enquiry into one dependable path: select an available time, share a private style reference, pay a deposit, and receive confirmation.',
    stakeholders: 'Customers booking a mobile barber service and the person managing availability and bookings.',
    constraints: [
      'Price, duration, and availability needed to be verified on the server rather than trusted from the client.',
      'Customer reference images needed private storage and controlled uploads.',
      'Booking and payment state needed safe handling when payment callbacks were repeated.',
      'Management access needed protection without exposing reusable credentials.',
    ],
    contribution: [
      'Built availability and booking workflows.',
      'Added private reference-image storage.',
      'Implemented a 20% Stripe deposit flow.',
      'Implemented email confirmations.',
      'Protected management links with secure tokens.',
    ],
    decisions: [
      { title: 'Trust the server', detail: 'Revalidate price, duration, and booking state at the boundary where changes are committed.' },
      { title: 'Separate records from media', detail: 'Use D1 for structured booking data and private R2 storage for reference images.' },
      { title: 'Treat payment as an event', detail: 'Verify Stripe webhook signatures and make payment-state updates idempotent.' },
      { title: 'Layer abuse controls', detail: 'Combine upload-signature checks, rate limiting, server-verified bot protection, and secure management tokens.' },
    ],
    validation: [
      'Verified webhook signatures before accepting payment events.',
      'Checked payment state before confirmation updates.',
      'Checked upload signatures before accepting reference media.',
      'Applied server-side validation to pricing, duration, and booking rules.',
    ],
    tradeoffs: [
      'Private media improves customer privacy but requires signed upload and retrieval paths.',
      'A deposit reduces payment scope while still requiring careful coordination between booking and Stripe state.',
    ],
    architecture: [
      { label: 'Client', note: 'Selects service, time, and reference image.' },
      { label: 'Booking API', note: 'Validates availability, price, duration, and upload intent.' },
      { label: 'D1 / R2', note: 'Persists booking state and private media separately.' },
      { label: 'Stripe', note: 'Processes the 20% deposit.' },
      { label: 'Webhook', note: 'Verifies and reconciles payment state.' },
      { label: 'Email', note: 'Sends the customer confirmation.' },
    ],
    visual: 'booking',
    accent: '#2457f5',
    typeLabel: 'WEB',
    priority: 'technical',
  },
  {
    slug: 'smart-vineyard',
    title: 'Smart Vineyard Frost Detection System',
    shortTitle: 'Smart Vineyard',
    kicker: 'IoT monitoring prototype',
    outcome: 'A battery-powered prototype that moves environmental and device readings from vineyard sensors to a live dashboard.',
    summary: 'A battery-powered IoT weather-station prototype designed to collect environmental and device data for frost monitoring.',
    technologies: ['Arduino', 'LoRaWAN', 'MQTT', 'ThingsBoard', 'JavaScript'],
    context: 'Battery-powered IoT weather-station prototype',
    problem: 'Collect several frost-relevant environmental signals in the field and make them visible through a remote monitoring dashboard.',
    stakeholders: 'People monitoring vineyard frost conditions and the team maintaining the sensing hardware.',
    constraints: [
      'The prototype needed to operate from battery power.',
      'Sensor data needed to travel beyond short-range local connectivity.',
      'The system combined environmental readings with battery and signal-health data.',
      'Weatherproofing and physical hardware limitations remained important field constraints.',
    ],
    contribution: [
      'Collected air, leaf, infrared, wind, battery, and signal data.',
      'Integrated sensors with an Arduino Mega.',
      'Sent telemetry through LoRaWAN and a Dragino gateway.',
      'Connected the data path to ThingsBoard using MQTT.',
      'Documented hardware constraints and weatherproofing improvements.',
    ],
    decisions: [
      { title: 'Observe the device too', detail: 'Send battery and signal readings alongside environmental data so the health of the station remains visible.' },
      { title: 'Use a staged data pipeline', detail: 'Separate sensing, device coordination, long-range transport, gateway forwarding, messaging, and visualisation.' },
      { title: 'Design for field conditions', detail: 'Treat power, transmission range, enclosure quality, and sensor exposure as system concerns rather than afterthoughts.' },
    ],
    validation: [
      'Tested live data transmission indoors.',
      'Repeated transmission testing outdoors.',
      'Observed environmental readings together with battery and signal data in ThingsBoard.',
      'Recorded weatherproofing changes and hardware constraints for iteration.',
    ],
    tradeoffs: [
      'A battery-powered station makes placement more flexible but increases the importance of power and connectivity telemetry.',
      'A working data path does not by itself make field hardware deployment-ready; enclosure and weatherproofing work remain visible requirements.',
    ],
    architecture: [
      { label: 'Sensors', note: 'Air, leaf, infrared, wind, battery, and signal inputs.' },
      { label: 'Arduino Mega', note: 'Coordinates collection on the prototype device.' },
      { label: 'LoRaWAN', note: 'Carries low-power, long-range telemetry.' },
      { label: 'Dragino', note: 'Bridges device packets through the gateway.' },
      { label: 'MQTT', note: 'Moves messages into the dashboard platform.' },
      { label: 'ThingsBoard', note: 'Displays the live monitoring data.' },
    ],
    visual: 'vineyard',
    accent: '#23634b',
    typeLabel: 'IOT',
    priority: 'technical',
  },
  {
    slug: 'recursed',
    title: 'RECurseD',
    shortTitle: 'RECurseD',
    kicker: 'Interactive systems & team delivery',
    outcome: 'A team-built first-person game combining modular interaction, anomaly state, time pressure, audiovisual feedback, and an asset-production pipeline.',
    summary: 'A first-person psychological-horror game built around modular gameplay systems, environmental anomalies, time pressure, and audiovisual feedback.',
    technologies: ['Unity', 'C#', 'Blender', 'GitHub', 'Agile / Scrum'],
    context: 'Team software-development project',
    course: 'Software Development Practice — COMP602',
    problem: 'Create a coherent first-person experience where interaction, anomaly events, countdown pressure, chase logic, audio, and subtitles respond to shared game state.',
    stakeholders: 'Players using the game and the student team coordinating design, code, assets, testing, and delivery.',
    constraints: [
      'Gameplay systems needed modular responsibilities while still sharing state.',
      '3D assets had to move cleanly from Blender into Unity prefabs and scenes.',
      'The team needed visible requirements, sprint planning, version control, quality checks, and documentation.',
    ],
    contribution: [
      'Developed modular player controls and CCTV interaction.',
      'Built game-state and environmental anomaly systems.',
      'Added countdown pressure, chase logic, audio cues, and subtitles.',
      'Created, rigged, and animated 3D assets in Blender.',
      'Integrated assets into Unity prefabs and scenes.',
    ],
    decisions: [
      { title: 'Keep interactions modular', detail: 'Separate player control, CCTV use, anomalies, countdown pressure, chase behaviour, and audiovisual feedback into understandable responsibilities.' },
      { title: 'Make state legible to the player', detail: 'Use audio cues and subtitles as feedback, not decoration, so events are easier to perceive.' },
      { title: 'Treat assets as a pipeline', detail: 'Create, rig, and animate in Blender before integrating reusable Unity prefabs and scenes.' },
      { title: 'Make delivery visible', detail: 'Use requirements, sprint backlogs, burndown tracking, GitHub, quality checks, and documentation to coordinate the team build.' },
    ],
    validation: [
      'Used project quality checks during the team build.',
      'Tracked work through sprint backlogs and burndown artefacts.',
      'Used version control and documentation to coordinate changes.',
      'Integrated and checked 3D assets inside Unity scenes and prefabs.',
    ],
    tradeoffs: [
      'Modular systems reduce coupling, but shared game state still needs explicit ownership and transitions.',
      'A Blender-to-Unity workflow enables custom assets while adding integration and iteration steps to the delivery process.',
    ],
    architecture: [
      { label: 'Explore', note: 'Player controls move through the environment.' },
      { label: 'Observe', note: 'CCTV interaction exposes additional viewpoints.' },
      { label: 'Detect', note: 'Game state evaluates environmental anomalies.' },
      { label: 'Escalate', note: 'Countdown and chase logic increase pressure.' },
      { label: 'Feedback', note: 'Audio cues and subtitles communicate events.' },
      { label: 'Resolve', note: 'The loop returns to state-driven play.' },
    ],
    visual: 'game',
    accent: '#6a54b5',
    typeLabel: 'UNITY',
    priority: 'technical',
  },
]

export const projectBySlug = Object.fromEntries(projects.map((project) => [project.slug, project])) as Record<ProjectSlug, Project>

export const proofDiagrams = [
  { name: 'Cruzy Cabs', descriptor: 'Booking to operations', stages: projectBySlug.cruzycabs.architecture.slice(0, 6) },
  {
    name: 'PN Media',
    descriptor: 'Bilingual publishing path',
    stages: projectBySlug['pn-media'].architecture.slice(0, 6),
  },
]

export const capabilities = ['Production web platforms', 'Client delivery', 'Booking & operations', 'CMS & editorial systems', 'IoT and systems work'] as const

export const practiceStages = [
  { name: 'Scope', description: 'Clarify the problem, users, operating model, risks, constraints, and definition of done.', evidence: 'Client discovery for PN Media and PATHPlanner; business modelling for Cruzy Cabs.' },
  { name: 'Build', description: 'Use typed interfaces, modular boundaries, maintainable content and data models, and clear ownership of state.', evidence: 'Next.js platforms, Sanity schemas, booking workflows, and operational APIs.' },
  { name: 'Validate', description: 'Test important paths, failure states, integrations, accessibility, security boundaries, and production routes.', evidence: 'Rendered-route coverage, form safeguards, and Cruzy Cabs production release evidence.' },
  { name: 'Improve', description: 'Ship, observe real needs, document decisions, and iterate without losing reliability or operational clarity.', evidence: 'Client handover documentation and ongoing Cruzy Cabs releases.' },
] as const

export const additionalProjects = [
  { title: 'Punjab Express Mobile App', context: 'Cross-platform product build', technologies: ['React Native', 'Expo', 'TypeScript', 'iOS', 'Android'], summary: 'A searchable restaurant menu and location experience built and checked across iOS, Android, and web bundles.', details: ['Searchable menu with category and vegetarian filters', 'Five location profiles, native tabs, ordering links, and directions', 'Development builds, deep links, app identifiers, and device installation'] },
  { title: 'Operating Systems & Systems Programming', context: 'COMP604', technologies: ['C', 'xv6', 'RISC-V', 'Linux'], summary: 'Low-level implementation and debugging work inside xv6 using C and Linux tooling.', details: ['System calls, processes, and memory management', 'Locks, semaphores, file systems, and I/O', 'Debugging low-level features in a RISC-V environment'] },
  { title: 'Mobile App Development', context: 'Course project', technologies: ['Flutter', 'Dart', 'Android Studio'], summary: 'A multi-screen mobile application structured around reusable UI and maintainable application state.', details: ['Reusable components, navigation, and structured data', 'State management and multi-screen behaviour', 'Testing, debugging, and refactoring'] },
] as const

export const toolkit = [
  { group: 'Languages', items: ['TypeScript — production web platforms', 'JavaScript — web and IoT', 'C# — RECurseD', 'C — xv6 / RISC-V', 'Python', 'Dart — Flutter'] },
  { group: 'Web & mobile', items: ['Next.js + React — PN Media, PATHPlanner, Cruzy Cabs', 'React Native + Expo — Punjab Express', 'Node.js', 'Flutter + Android Studio'] },
  { group: 'Systems & interactive', items: ['Unity — RECurseD', 'xv6 / RISC-V', 'Linux', 'Blender — asset production'] },
  { group: 'Platforms & integrations', items: ['Sanity CMS', 'Turso / libSQL + Drizzle', 'Resend', 'Vercel', 'Google Routes', 'Cloudflare D1 + R2', 'Arduino + LoRaWAN', 'MQTT + ThingsBoard'] },
  { group: 'Engineering practice', items: ['Client discovery and handover', 'Git + GitHub', 'Modular architecture', 'Testing and production validation', 'Security and privacy boundaries', 'Release documentation'] },
] as const

export const education = {
  school: 'Auckland University of Technology',
  degree: 'Bachelor of Business in Finance and Bachelor of Computer and Information Sciences in Software Development, Conjoint programme.',
  graduation: 'Graduated July 2026.',
  areas: ['Software Development Practice', 'Operating Systems and Systems Programming', 'Research and Development Project', 'Mobile App Development', 'Corporate Finance', 'International Corporate Finance', 'Human-Computer Interaction', 'Data Structures and Algorithms', 'Quality Assurance'],
} as const

export const experience = [
  { company: "Pak'nSave Papakura", role: 'Produce Assistant', date: 'October 2025–Present', description: 'Maintain stock availability, rotation, freshness, and presentation in a high-volume produce department while assisting customers and coordinating replenishment priorities.' },
  { company: 'Smart Value Supermarket', role: 'Store Assistant', date: 'February 2021–August 2023', description: 'Supported dairy operations through customer service, transactions, stock ordering and control, store presentation, staff supervision, and daily work coordination.' },
  { company: 'New World Papakura', role: 'Produce Assistant', date: 'November 2019–January 2024', description: 'Replenished stock, completed quality checks, maintained displays, and assisted customers while working reliably with a team under time pressure.' },
] as const

export const contentTodos = [
  'Add approved client screenshots beyond the verified branded assets when supplied.',
  'Add real Fade Plug interface captures when approved for publication.',
  'Add Smart Vineyard prototype photos and ThingsBoard graphs.',
  'Add an approved RECurseD gameplay capture and Blender production media.',
  'Confirm a personal reflection or learning note for each detailed case study.',
] as const
