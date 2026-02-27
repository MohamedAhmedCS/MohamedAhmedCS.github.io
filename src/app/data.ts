export const hero = {
  name: 'Mohamed Ahmed',
  title: 'Software Engineer | Distributed Systems & Cloud',
  summary:
    'CS grad (CSUS, Dec 2024) focused on resilient backends, automation, and developer experience. I ship reliable services, streamline pipelines, and keep infra observable.',
  stats: [
    { label: 'Years coding', value: '5+' },
    { label: 'Primary stacks', value: 'Go · Python · JS/TS' },
    { label: 'Cloud & Ops', value: 'Docker · K8s · CI/CD' }
  ],
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mohamed-ahmed2/', variant: 'primary' },
    { label: 'GitHub', href: 'https://github.com/MohamedAhmedCS', variant: 'ghost' },
    { label: 'Email', href: 'mailto:mohamedahmed2@csus.edu', variant: 'ghost' }
  ]
};

export const skills = [
  {
    title: 'Languages',
    items: ['Golang', 'Python', 'JavaScript/TypeScript', 'C/C++', 'Java', 'HTML/CSS']
  },
  {
    title: 'Cloud & DevOps',
    items: ['Docker', 'Kubernetes (K3s/Microk8s)', 'Azure', 'AWS', 'GitHub Actions', 'CI/CD', 'Linux servers']
  },
  {
    title: 'Data',
    items: ['PostgreSQL', 'MySQL', 'SQLite', 'Data APIs']
  },
  {
    title: 'Tooling',
    items: ['Ansible', 'Bash', 'Power Automate', 'Power BI (learning)', 'UML', 'Agile & Waterfall']
  }
];

export const experience = [
  {
    role: 'Connectivity R&D Software Development Intern',
    company: 'Keysight Technologies',
    location: 'Loveland, CO',
    dates: 'Jun 2024 – Sep 2024',
    bullets: [
      'Built authN/authZ features in Go for a distributed system to tighten access control.',
      'Created dependency management flows to shrink error resolution time and improve performance.'
    ]
  },
  {
    role: 'Data Support Student Assistant',
    company: 'CalSTRS',
    location: 'West Sacramento, CA',
    dates: 'Apr 2023 – Dec 2024',
    bullets: [
      'Delivered data analysis and reporting with high accuracy.',
      'Automated document generation with VBA, reducing manual effort and cycle times.'
    ]
  },
  {
    role: 'Tutor / Teaching Assistant',
    company: 'Los Rios Community College District',
    location: 'Sacramento, CA',
    dates: 'Jan 2019 – Nov 2022',
    bullets: [
      'Guided students through complex CS topics with adaptable instruction.',
      'Improved student performance via targeted mentoring and feedback.'
    ]
  }
];

export const projects = [
  {
    name: 'GoChat - Real-time Chat',
    desc: 'WebSocket-powered chat in Go showcasing concurrency patterns and clean architecture.',
    tags: ['Go', 'WebSockets', 'Concurrency'],
    link: 'https://github.com/MohamedAhmedCS/gochat'
  },
  {
    name: 'Homemade Database System',
    desc: 'C-based relational database implementing select/project/join/union.',
    tags: ['C', 'Databases', 'Systems'],
    link: 'https://github.com/MohamedAhmedCS/HomemadeDB'
  },
  {
    name: '2D Graphics Game',
    desc: 'Java OOP game featuring inheritance, polymorphism, and 2D UI fundamentals.',
    tags: ['Java', 'OOP', 'Graphics'],
    link: 'https://github.com/MohamedAhmedCS/CSC-133-CSUS'
  },
  {
    name: 'Home Lab Automation',
    desc: 'Self-hosted services on Linux servers with Ansible automation and K3s.',
    tags: ['Ansible', 'K3s', 'Linux'],
    link: '#'
  },
  {
    name: 'Yelp Rating Prediction',
    desc: 'TensorFlow regression with TF-IDF features and tuned hyperparameters.',
    tags: ['Python', 'TensorFlow', 'ML'],
    link: '#'
  },
  {
    name: 'Project Domas (Capstone)',
    desc: 'Next.js realtor platform with REST APIs and Python-based automation testing.',
    tags: ['Next.js', 'REST', 'QA Automation'],
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
  email: 'mohamedahmed2@csus.edu',
  phone: '(530) 760-7481',
  linkedin: 'https://www.linkedin.com/in/mohamed-ahmed2/',
  github: 'https://github.com/MohamedAhmedCS'
};
