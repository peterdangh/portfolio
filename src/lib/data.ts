// ─────────────────────────────────────────────────────────────
// Portfolio content — edit this file to update the whole site.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Thach Dang',
  role: 'Senior Backend Engineer',
  company: 'FireGroup Technology',
  location: 'Da Nang, Vietnam',
  email: 'thachdh.work@gmail.com',
  linkedin: 'https://linkedin.com/in/thachdanghuu',
  github: 'https://github.com/peterdangh',
  tagline:
    'Building scalable, event-driven systems in Node.js (NestJS) & PHP (Laravel).',
  summary:
    'Senior Backend Engineer with 6+ years building scalable, distributed systems in Node.js (NestJS) and PHP (Laravel), backed by a solid frontend foundation (Vue.js, React.js) and 1+ year on the Shopify platform. AWS Certified Solutions Architect focused on cloud-native infrastructure, microservices, and event-driven architectures (Kafka, RabbitMQ).',
  goal: 'Growing into a Professional Technical Leader role within the next year.',
} as const;

export const stats = [
  { value: '6+', label: 'Years of experience' },
  { value: '15K+', label: 'Shopify stores synced' },
  { value: '1.4TB → 400GB', label: 'Data footprint cut' },
  { value: 'AWS', label: 'Certified SA – Associate' },
] as const;

export type Experience = {
  company: string;
  title: string;
  period: string;
  location?: string;
  points: string[];
};

export const experiences: Experience[] = [
  {
    company: 'FireGroup Technology',
    title: 'Senior Backend Engineer',
    period: 'Jan 2025 — Present',
    location: 'Da Nang, Vietnam · On-site',
    points: [
      'Redesigned a large-scale MongoDB database (schema + storage), cutting storage from 600 GB to under 100 GB and total data from 1.4 TB to ~400 GB.',
      'Led the architectural refactoring of the core system into microservices (NestJS + Laravel), improving maintainability for a 15-person team.',
      'Engineered an asynchronous event pipeline with Kafka and RabbitMQ for high-volume data streams and system decoupling.',
      'Built a Kafka-based sync pipeline for high-volume Shopify webhooks/API data, ensuring real-time consistency for 15,000+ multi-store merchants.',
      'Spearheaded Generative AI workflows with LangGraph and Langfuse, including an AI-driven image-translation feature.',
      'Managed polyglot persistence (MySQL + MongoDB); monitored services with Prometheus and Grafana.',
    ],
  },
  {
    company: 'Kozocom',
    title: 'Senior Backend Engineer',
    period: 'Jan 2024 — Jan 2025',
    location: 'Da Nang, Vietnam',
    points: [
      'Designed end-to-end feature flows for large-scale e-commerce systems; optimized PostgreSQL schemas and RESTful API performance.',
      'Implemented reliable background processing and audit logging with AWS SQS and DocumentDB.',
      'Served as the primary technical bridge with Japanese clients for requirements and architecture.',
      'Recognized as "Rookie of the Year" for technical leadership and contributions.',
    ],
  },
  {
    company: 'CMC Global',
    title: 'Fullstack Engineer',
    period: 'Mar 2021 — Jan 2024',
    location: 'Da Nang, Vietnam',
    points: [
      'Mentored junior developers and conducted code reviews to uphold engineering standards and best practices.',
      'Built and managed cloud-native environments on AWS (EC2, S3) for secure, cost-effective hosting.',
      'Honored as a "Key Member" for consistent excellence in the Business Unit.',
    ],
  },
  {
    company: 'Freelance',
    title: 'Fullstack Engineer',
    period: 'Jan 2020 — Feb 2021',
    points: [
      'Delivered full-stack applications with React Native, Vue.js, and Symfony, focused on real-time features and third-party integrations (Shopee, TikTok).',
      'Developed serverless functions with AWS Lambda and asynchronous notifications via AWS SNS.',
    ],
  },
];

export type Highlight = {
  metric: string;
  title: string;
  description: string;
};

export const highlights: Highlight[] = [
  {
    metric: '−75%',
    title: 'MongoDB storage redesign',
    description:
      'Reworked schema and storage on a large-scale MongoDB deployment: storage 600 GB → under 100 GB, total data 1.4 TB → ~400 GB — cutting infrastructure cost and boosting performance.',
  },
  {
    metric: '15K+',
    title: 'Shopify real-time sync',
    description:
      'Kafka-based pipeline for high-volume Shopify webhooks/API data, keeping 15,000+ multi-store merchants consistent in real time.',
  },
  {
    metric: '15-dev',
    title: 'Microservices refactor',
    description:
      'Led the architectural refactor of a core monolith into NestJS + Laravel microservices, enabling a 15-person team to ship features independently.',
  },
  {
    metric: 'GenAI',
    title: 'AI-driven workflows',
    description:
      'Built Generative AI workflows with LangGraph and Langfuse, including an AI-driven image-translation feature integrated into production.',
  },
];

export const skillGroups: { label: string; items: string[] }[] = [
  {
    label: 'Languages',
    items: ['TypeScript', 'JavaScript', 'PHP', 'Node.js'],
  },
  {
    label: 'Backend & Frameworks',
    items: ['NestJS', 'Express.js', 'Laravel', 'Symfony', 'RESTful APIs'],
  },
  {
    label: 'Architecture',
    items: [
      'Microservices',
      'Event-Driven Architecture',
      'System Design',
      'Solution Architecture',
    ],
  },
  {
    label: 'Messaging & Data',
    items: [
      'Apache Kafka',
      'RabbitMQ',
      'Redis',
      'MongoDB',
      'MySQL',
      'PostgreSQL',
      'DynamoDB',
    ],
  },
  {
    label: 'Cloud & DevOps',
    items: [
      'AWS',
      'AWS Lambda',
      'Docker',
      'Kubernetes',
      'CI/CD',
      'Prometheus',
      'Grafana',
    ],
  },
  {
    label: 'Platforms & AI',
    items: ['Shopify', 'Vue.js', 'React.js', 'LangGraph', 'Langfuse'],
  },
];

export const awards = [
  {
    title: 'Rookie of the Year',
    issuer: 'Kozocom',
    date: 'Jan 2025',
    note: 'Recognized for exceptional technical leadership and contributions.',
  },
  {
    title: 'Key Member',
    issuer: 'CMC Global',
    date: 'Nov 2022',
    note: 'Honored for consistent excellence in the Business Unit.',
  },
];

export const education = {
  school: 'Danang University of Science and Technology',
  degree: 'Software Engineering',
};

export const certification = {
  title: 'AWS Certified Solutions Architect – Associate',
  issuer: 'Amazon Web Services',
};
