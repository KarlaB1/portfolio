// Global site information. Fields marked TODO are pending information from you —
// nothing here should be invented. Empty strings are hidden on the site.

export const site = {
  name: 'Karla Bibiano',
  role: 'Diseñadora UX/UI',
  tagline: 'Formación en ingeniería de software · Narrativa visual',
  // Hero statement (option A). `<em>` marks the accented fragment.
  heroStatement:
    'Diseño interfaces como haría el storyboard de un cómic: <em>cuadro por cuadro</em>, sabiendo qué viene después.',
  description:
    'Diseñadora UX/UI con formación en ingeniería de software y en narrativas multimedia. Casos de estudio, fotografía, video y cómic.',
  email: 'merarikarla2018@gmail.com',
  location: 'Puebla, México',
  lang: 'es',
  url: 'https://portfoliokrlb.netlify.app',
  cvUrl: '/Karla_Bibiano_CV.pdf',
  ogImage: '', // TODO: e.g. '/og.jpg' (1200×630) in /public
  social: [
    { label: 'WhatsApp', href: 'https://wa.me/522222083967' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/karla-bibiano-ba72962b8' },
  ],
};

export const education = [
  {
    title: 'Ingeniería en Gestión y Desarrollo de Software',
    institution: 'Universidad Tecnológica de Puebla',
    years: 'Sep 2020 – may 2024',
    status: 'concluida' as const,
  },
  {
    title: 'Licenciatura en Humanidades y Narrativas Multimedia',
    institution: 'Universidad Nacional Rosario Castellanos · en línea',
    years: 'Desde marzo 2026',
    status: 'en curso' as const,
  },
];

// Names as they appear in Karla's CV. Entries with `pending: true` only show in local dev.
export const certifications = [
  // 5 of 7 course certificates earned (2026-11); verifiable on her LinkedIn.
  {
    name: 'Certificación Google UX Design (Coursera) — en curso, 5 de 7 cursos completados',
    issuer: 'Google',
    year: '',
    url: 'https://www.linkedin.com/in/karla-bibiano-ba72962b8/details/certifications/',
    pending: false,
  },
  { name: 'Claude 101', issuer: 'Anthropic', year: '', url: '', pending: false },
];

// Only tools you listed. Groups with no items are hidden.
export const tools = [
  { group: 'Diseño', items: ['Figma', 'Affinity'] },
  { group: 'Desarrollo', items: ['HTML', 'CSS', 'TypeScript', 'Angular', 'Angular Material', 'Bootstrap', 'Git'] },
  { group: 'Colaboración', items: ['Azure DevOps', 'Postman'] },
  { group: 'Medios', items: ['Adobe Premiere (básico)', 'CapCut'] },
  { group: 'IA', items: ['Claude'] },
];
