export const hero = {
  name: 'Mohamed Ahmed',
  title: 'System Security Admin • Software/DevOps',
  summary:
    'Security-minded engineer blending sysadmin, support, and backend automation. I harden access, keep services reliable, and build tools that cut toil.',
  stats: [
    { label: 'Locations', value: 'Davis, CA · Remote' },
    { label: 'Focus', value: 'Security · Ops · Backend' },
    { label: 'Stacks', value: 'Go · Python · JS/TS' }
  ],
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mohamed-ahmed2/', variant: 'primary' },
    { label: 'GitHub', href: 'https://github.com/MohamedAhmedCS', variant: 'ghost' },
    { label: 'Email', href: 'mailto:ahmed.csus@gmail.com', variant: 'ghost' }
  ]
};

export const skills = [
  {
    title: 'Languages',
    items: ['Python', 'Go', 'JavaScript/TypeScript', 'Java', 'C/C++', 'C#', 'Visual Basic']
  },
  {
    title: 'Web & App',
    items: ['React', 'Next.js', 'Node.js/Express', 'REST APIs', 'Flutter', 'CSS', 'Tailwind CSS']
  },
  {
    title: 'Cloud & DevOps',
    items: ['Docker', 'Kubernetes (K3s/Microk8s)', 'GitHub Actions', 'CI/CD', 'Ansible', 'Linux servers']
  },
  {
    title: 'Data',
    items: ['PostgreSQL', 'MySQL', 'SQLite', 'MongoDB', 'Supabase', 'Firebase']
  },
  {
    title: 'Testing & Monitoring',
    items: ['Jest', 'Selenium', 'Unit/Integration', 'Health checks', 'Bug tracking']
  },
  {
    title: 'Tools & Methods',
    items: ['Agile', 'Jira/Confluence', 'UML', 'M365/SharePoint/OneDrive/AD', 'Technical documentation']
  }
];

export const experience = [
  {
    role: 'System Security Administrator',
    company: 'CalSTRS',
    location: 'West Sacramento, CA',
    dates: 'Dec 2025 – Present',
    bullets: [
      'Manage incidents, changes, and access requests end to end; document resolutions.',
      'Support audits, recovery operations, and backups; review and adjust account access.',
      'Provision and maintain user access across enterprise systems, SaaS, and Active Directory.'
    ]
  },
  {
    role: 'Freelance IT Support Technician',
    company: 'HelloTech',
    location: 'Davis, CA',
    dates: 'Jan 2024 – Present',
    bullets: [
      'Delivered onsite/remote support for Windows, macOS, and iOS; resolved 95% on first visit.',
      'Automated device setup and SOPs, reducing onboarding time by 20%.',
      'Tracked incidents and authored knowledge articles to speed recurring responses.'
    ]
  },
  {
    role: 'Data Support',
    company: 'CalSTRS',
    location: 'West Sacramento, CA',
    dates: 'Apr 2023 – Dec 2025',
    bullets: [
      'Validated and updated retirement records across legacy and modernized systems.',
      'Built VBA automation integrated with SharePoint, cutting manual processing time by 50%.',
      'Authored SQL checks to catch data discrepancies and improve accuracy for 900k+ accounts.'
    ]
  },
  {
    role: 'Connectivity R&D Software Development Intern',
    company: 'Keysight Technologies',
    location: 'Loveland, CO',
    dates: 'Jun 2024 – Sep 2024',
    bullets: [
      'Debugged auth failures by correlating logs and DB snapshots; added constraints and tests.',
      'Built Go backend pieces and service health checks with automated recovery hooks.',
      'Designed integration/system tests across Go and C++ services tied to lab instruments.'
    ]
  },
  {
    role: 'Tutor / Teaching Assistant',
    company: 'Los Rios Community College District',
    location: 'Sacramento, CA',
    dates: 'Jan 2019 – Nov 2022',
    bullets: [
      'Guided students through CS topics with adaptable instruction.',
      'Improved performance via targeted mentoring and feedback.'
    ]
  }
];

export const projects = [
  {
    name: 'Job Inventory Manager',
    desc: 'Full-stack app (.NET + React) with encrypted credential storage and JWT-protected REST APIs.',
    tags: ['React', '.NET', 'Entity Framework', 'AES-256'],
    link: '#'
  },
  {
    name: 'Home Lab Setup',
    desc: 'Docker/K3s deployments with GitHub Actions + Ansible CI/CD, health monitoring, and REST APIs for automation.',
    tags: ['React', 'Node', 'PostgreSQL', 'Docker', 'K3s', 'Ansible'],
    link: '#'
  },
  {
    name: 'Homemade Database System',
    desc: 'C-based relational database implementing select/project/join/union.',
    tags: ['C', 'Databases', 'Systems'],
    link: 'https://github.com/MohamedAhmedCS/HomemadeDB'
  },
  {
    name: 'GoChat - Real-time Chat',
    desc: 'WebSocket-powered chat in Go showcasing concurrency patterns and clean architecture.',
    tags: ['Go', 'WebSockets', 'Concurrency'],
    link: 'https://github.com/MohamedAhmedCS/gochat'
  },
  {
    name: 'Project Domas (Capstone)',
    desc: 'Next.js realtor platform with REST APIs, IDX/iHomefinder integration, and CI automation.',
    tags: ['Next.js', 'REST', 'CI/CD'],
    link: '#'
  },
  {
    name: 'Yelp Rating Prediction',
    desc: 'TensorFlow regression with TF-IDF features and tuned hyperparameters.',
    tags: ['Python', 'TensorFlow', 'ML'],
    link: '#'
  }
];

export const education = {
  school: 'California State University, Sacramento',
  degree: 'B.S. Computer Science',
  grad: 'Graduated: December 2024'
};

export const leadership = [
  {
    title: 'MESA Idea Accelerator Program | Qualcomm HQ',
    dates: 'Aug 2023 – Oct 2023',
    bullets: [
      'Co-built a prototype with a three-person team.',
      'Won 2nd place ($2500) by applying human-centered design and technical execution.'
    ]
  },
  {
    title: 'MESA Student Leadership Conference',
    dates: 'Oct 20–22, 2023',
    bullets: [
      'Project-managed a nine-person team to design and present a technical prototype.',
      'Strengthened leadership and collaboration skills.'
    ]
  }
];

export const blogs = [
  {
    title: 'The OS Odyssey: From Operators to Diversity',
    link: '/TheOSOdysseyBlog'
  },
  {
    title: 'The Rise of Artificial Intelligence: A New Dawn',
    link: '/blogs'
  },
  {
    title: 'The Future of Quantum Computing: A Quantum Leap',
    link: '/blogs'
  }
];

export const contact = {
  email: 'ahmed.csus@gmail.com',
  phone: '(530) 760-7481',
  linkedin: 'https://www.linkedin.com/in/mohamed-ahmed2/',
  github: 'https://github.com/MohamedAhmedCS'
};
