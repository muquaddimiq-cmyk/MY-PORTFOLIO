import { HOL, B_ZY, B_SYN, B_STEM, IG, STEM_SITE, B_NOVA, B_GUARD, B_BRIZ, PROTOTYPE } from './links.js';

// Work cards on the home page: [title, text, gradient, icon path, link, mark key]
export const cards = [
  ['THE IQ SYNAPSE', 'Founder and lead UI UX designer. A full design system and tokens for dementia care, from home to clinic.', 'linear-gradient(160deg,#1f3a5f,#5f86b4)', 'M12 3a9 9 0 1 0 0 18', '#synapse', 'synapse'],
  ['STEM Tisha', 'Designed every graphic on the STEM Tisha Instagram, TechGen Africa’s live tutor led coding and AI program for kids.', 'linear-gradient(160deg,#b93a00,#f26a0a)', 'M3 9l9-5 9 5-9 5z', '#stem', 'stem'],
  ['Hashgraph Online', 'Formerly design assistant and community manager. Technical ecosystem news turned into clear visuals.', 'linear-gradient(160deg,#2a2a2d,#6a6a70)', 'M12 3l8 4.5v9L12 21l-8-4.5v-9z', HOL, 'hol'],
  ['Zaynab Yahya & Co', 'Freelance brand identity design: logo, typography, colour and promotional materials.', 'linear-gradient(160deg,#a21f78,#e0509f)', 'M12 3a9 9 0 1 0 0 18z', B_ZY, 'zaynab'],
  ['Qitmeer Network', 'Visual content, educational explainers and threads that made blockchain concepts accessible.', 'linear-gradient(160deg,#4a2c24,#9a6a52)', 'M12 4l9 16H3z', '#resume', null],
  ['Sentimex AI Bot', 'UX research and beta testing. Friction found and fixed before public release.', 'linear-gradient(160deg,#0f5f66,#3fb6b0)', 'M5 5h14v10H9l-4 4z', '#resume', null],
  ['DIMAI', 'Onboarding and awareness content with feedback loops built in from day one.', 'linear-gradient(160deg,#432a7a,#8a6be0)', 'M4 18l5-6 4 3 7-9', '#resume', null],
];

// Extra links shown under matching resume entries (keyed by the job title)
export const jobLinks = {
  'Founder & Lead UI UX Designer, THE IQ SYNAPSE': [[PROTOTYPE, 'Interactive prototype'], [B_SYN, 'View on Behance']],
  'Designer, STEM Tisha at TechGen Africa': [[IG, 'STEM Tisha on Instagram'], [STEM_SITE, 'STEM Tisha on TechGen Africa'], [B_STEM, 'Graphics on Behance']],
  'Design Assistant and Community Manager, Hashgraph Online (HOL)': [[HOL, 'hol.org']],
  'Brand Identity Designer (Freelance), Zaynab Yahya & Co': [[B_ZY, 'View on Behance']],
};

// Side projects. Shots are [image key, alt text, width in px, caption].
export const sideProjects = [
  { name: 'NovaOps', href: B_NOVA, tag: 'SaaS',
    text: 'An AI powered operations platform that helps modern teams automate workflows, manage AI agents, monitor productivity and understand the business impact of AI.',
    meta: 'UX and UI, Web design, SaaS. Role: UI UX Designer',
    shots: [['ndash', 'NovaOps dashboard screen', 340, 'Dashboard'], ['nagents', 'NovaOps AI agents screen', 340, 'AI agents']] },
  { name: 'GuardPay', href: B_GUARD, tag: 'Mobile banking concept',
    text: 'A security first mobile banking concept built on the promise “Your Money. Guarded.” It combines Guard Score, Guardian AI, AI Scam Shield and a Smart Spending Coach, shown through an end to end UX and UI process from research and strategy to a high fidelity interface.',
    meta: 'End to end UX and UI design, mobile app',
    shots: [['gsplash', 'GuardPay splash screen', 170, 'Splash'], ['ghome', 'GuardPay home screen', 170, 'Home']] },
  { name: 'Brizzle', href: B_BRIZ, tag: 'Food ordering',
    text: 'A chicken ordering platform for university campuses, where students and nearby residents can order fried chicken meals for campus delivery or pickup.',
    meta: 'UX and UI design, Logo design, Wireframing, Product design. Published Aug 4, 2026',
    shots: [['bsplash', 'Brizzle splash screen', 330, 'Splash'], ['bhome', 'Brizzle home screen', 170, 'Home']] },
];

export const synapseNodes = [
  ['Patient Node', 'A zero touch ambient display providing time orientation, reminiscence therapy and automated reminders. No physical interaction required.'],
  ['Caregiver App', 'A mobile hub for local and diaspora family members to collaboratively log vitals and track behavioral spikes.'],
  ['Clinical Dashboard', 'A predictive web portal that replaces caregiver recall bias with longitudinal data graphs for neurologists.'],
];
export const synapseHighlights = [
  ['Accessible by default', 'Purely passive patient interfaces designed specifically for cognitive decline.'],
  ['Clinical UI', 'A muted slate blue palette and strict WCAG contrast compliance to reduce visual fatigue during high stress chart reviews.'],
  ['Offline resilience', 'SQLite local caching ensures the system never breaks or shows network errors during residential internet outages.'],
];
export const synapseShots = [
  ['ssplash', 'THE IQ SYNAPSE onboarding screen', 170, 'Onboarding'],
  ['shome', 'THE IQ SYNAPSE caregiver app home screen', 170, 'Caregiver app'],
  ['sclin', 'THE IQ SYNAPSE clinical dashboard', 380, 'Clinical overview'],
  ['shealth', 'THE IQ SYNAPSE patient health trends screen', 380, 'Health trends'],
];
export const stemShots = [
  ['hook', 'Student Demo Day opening slide', 230, '01 / 07 Opening'],
  ['sec', 'Security slide by Rachel', 230, '02 / 07 Security'],
  ['supply', 'Supply Chain slide by Raphael', 230, '03 / 07 Supply Chain'],
  ['data', 'Data Manager slide by Michelle', 230, '04 / 07 Data Manager'],
  ['log', 'Logistics slide by Hanif', 230, '05 / 07 Logistics'],
  ['ident', 'Digital Identity slide by Mariam', 230, '06 / 07 Digital Identity'],
  ['enroll', 'Enrollment call to action slide', 230, '07 / 07 Enrollment'],
];

// Resume experience: [title, dates, bullet points]
export const jobs = [
  ['Founder & Lead UI UX Designer, THE IQ SYNAPSE', 'Founder', ['Founded THE IQ SYNAPSE, now a fully registered business (CAC), to connect dementia patients, their families and their healthcare practitioners.', 'Run the whole design system and tokens for a tri node dementia care platform: zero touch kiosk, mobile app and web dashboard.', 'Designed purely passive patient interfaces for cognitive decline, with a muted slate blue palette and strict WCAG contrast compliance.', 'Designed 55+ screens across the caregiver app (25), the patient node (10+) and the clinician dashboard (20+), shaped by interviews with about 10 people, a UK matron and a Nigerian neurosurgery resident.', 'Specified offline resilience with SQLite local caching so the system never shows network errors during residential internet outages.']],
  ['Designer, STEM Tisha at TechGen Africa', 'Present', ['Designed every graphic on the STEM Tisha Instagram page, for TechGen Africa’s live tutor led coding, AI and product building program for kids aged 5 to 17.', 'Help keep the visual identity and learning experience consistent for parents and young builders.']],
  ['Design Assistant and Community Manager, Hashgraph Online (HOL)', 'Jan 2026, past role', ['Designed graphics and visual assets for social media and community communications.', 'Helped translate technical concepts and ecosystem developments into accessible visual content.', 'Supported brand consistency across digital materials, keeping designs clear and true to the organisation’s visual identity.', 'Created educational and community focused content, visuals and threads explaining emerging topics in AI, Web3 and decentralized technologies.', 'Contributed to community initiatives and programs that encouraged collaboration among developers, builders and enthusiasts.', 'Shaped narratives around ongoing initiatives and promoted events and spaces for a broader audience.']],
  ['Brand Identity Designer (Freelance), Zaynab Yahya & Co', 'Jan 2026 to Present', ['Designed the company logo and developed the visual direction of the firm’s brand.', 'Created promotional flyers and marketing materials to support visual communication and outreach.', 'Focused on typography, colour selection, layout and visual consistency across all promotional materials.']],
  ['Content Creator & Design Ambassador, Qitmeer Network', 'Nov 2023 to Feb 2025', ['Created visual content and graphics for social media and community platforms.', 'Developed educational content explaining blockchain concepts, ecosystem developments and project updates.', 'Wrote informative threads and short form content that made technical topics accessible.', 'Supported campaigns, announcements and ecosystem initiatives through visual storytelling.']],
  ['UX Researcher & Beta Tester (AI Product), Sentimex.io', 'Oct to Dec 2024', ['Contributed to product design of an AI bot by helping define how it structured and surfaced live data for users.', 'Ran structured UX and usability testing ahead of public release, identifying friction points.', 'Delivered actionable feedback that directly improved usability and stability.']],
  ['Social Media & Visual Design Intern, Sentimex.io', 'Oct to Dec 2024', ['Designed templates and visual content that grew the Telegram community from 0 to 500+ members in 1 month.', 'Designed outreach materials for Key Opinion Leader (KOL) partnerships to drive project visibility.']],
  ['Community Ambassador & Content Designer, DIMAI', 'Aug 2023 to Jan 2024', ['Designed onboarding and awareness content to support new community members.', 'Built structured content and feedback loops to keep design and messaging aligned with user needs.']],
];
