export type DiagramStage = {
  label: string
  note: string
}

export type ProjectSlug = 'fade-plug' | 'smart-vineyard' | 'recursed'

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
  visual: 'booking' | 'vineyard' | 'game'
  accent: string
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
  },
]

export const projectBySlug = Object.fromEntries(projects.map((project) => [project.slug, project])) as Record<ProjectSlug, Project>

export const proofDiagrams = [
  { name: 'Fade Plug', descriptor: 'Secure booking path', stages: projects[0].architecture.slice(0, 5) },
  {
    name: 'Smart Vineyard',
    descriptor: 'Environmental data path',
    stages: [
      { label: 'Sensors', note: 'Air, leaf, infrared, wind, battery, and signal inputs.' },
      { label: 'Arduino', note: 'An Arduino Mega coordinates collection.' },
      { label: 'LoRa', note: 'Long-range telemetry transport.' },
      { label: 'Gateway', note: 'A Dragino gateway bridges device packets.' },
      { label: 'MQTT', note: 'Messaging into the dashboard platform.' },
      { label: 'Dashboard', note: 'ThingsBoard displays monitoring data.' },
    ],
  },
]

export const capabilities = ['Full-stack web', 'IoT systems', 'Cross-platform mobile', 'Unity / C#', 'C & systems programming'] as const

export const practiceStages = [
  { name: 'Scope', description: 'Clarify the problem, requirements, users, constraints, and definition of done.', evidence: 'Requirements and sprint planning in RECurseD.' },
  { name: 'Build', description: 'Use modular design, typed interfaces, version control, and appropriately separated responsibilities.', evidence: 'Modular gameplay systems and typed web workflows.' },
  { name: 'Validate', description: 'Test important paths, debug failures, verify integrations, and treat security checks as part of implementation.', evidence: 'Webhook checks, field transmission tests, and bundle validation.' },
  { name: 'Improve', description: 'Refactor weak areas, document decisions, incorporate feedback, and iterate on both the product and the process.', evidence: 'Weatherproofing notes, Flutter refactoring, and xv6 debugging.' },
] as const

export const additionalProjects = [
  { title: 'Punjab Express Mobile App', context: 'Cross-platform product build', technologies: ['React Native', 'Expo', 'TypeScript', 'iOS', 'Android'], summary: 'A searchable restaurant menu and location experience built and checked across iOS, Android, and web bundles.', details: ['Searchable menu with category and vegetarian filters', 'Five location profiles, native tabs, ordering links, and directions', 'Development builds, deep links, app identifiers, and device installation'] },
  { title: 'Operating Systems & Systems Programming', context: 'COMP604', technologies: ['C', 'xv6', 'RISC-V', 'Linux'], summary: 'Low-level implementation and debugging work inside xv6 using C and Linux tooling.', details: ['System calls, processes, and memory management', 'Locks, semaphores, file systems, and I/O', 'Debugging low-level features in a RISC-V environment'] },
  { title: 'Mobile App Development', context: 'Course project', technologies: ['Flutter', 'Dart', 'Android Studio'], summary: 'A multi-screen mobile application structured around reusable UI and maintainable application state.', details: ['Reusable components, navigation, and structured data', 'State management and multi-screen behaviour', 'Testing, debugging, and refactoring'] },
] as const

export const toolkit = [
  { group: 'Languages', items: ['TypeScript — Fade Plug, Punjab Express', 'JavaScript — web and IoT', 'C# — RECurseD', 'C — xv6 / RISC-V', 'Python', 'Dart — Flutter'] },
  { group: 'Web & mobile', items: ['React — Fade Plug', 'React Native + Expo — Punjab Express', 'Node.js', 'Flutter + Android Studio'] },
  { group: 'Systems & interactive', items: ['Unity — RECurseD', 'xv6 / RISC-V', 'Linux', 'Blender — asset production'] },
  { group: 'Cloud, payments & IoT', items: ['Cloudflare D1 + R2', 'Drizzle ORM', 'Stripe', 'Arduino + LoRaWAN', 'MQTT + ThingsBoard'] },
  { group: 'Engineering practice', items: ['Git + GitHub', 'Modular design', 'Requirements + Agile / Scrum', 'Testing + debugging', 'Quality assurance + documentation'] },
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
  'Add verified repository and live-demo URLs for individual projects.',
  'Add real Fade Plug interface captures when approved for publication.',
  'Add Smart Vineyard prototype photos and ThingsBoard graphs.',
  'Add an approved RECurseD gameplay capture and Blender production media.',
  'Confirm a personal reflection or learning note for each detailed case study.',
] as const
