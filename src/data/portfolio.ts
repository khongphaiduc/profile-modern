export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  role?: string;
  image: string;
  description: string;
  architectureDetails: string[];
  techStack: string[];
  features: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
}

export interface TechItem {
  name: string;
  category: 'BackEnd' | 'Database' | 'Messaging' | 'DevOps' | 'FrontEnd';
  level: string;
  description: string;
  color?: string;
}

export interface TimelineItem {
  period: string;
  title: string;
  institution: string;
  category: string;
  description: string;
  highlights: string[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Phạm Trung Đức',
    firstName: 'Phạm',
    lastName: 'Trung Đức',
    title: '.NET BACKEND DEVELOPER',
    roleTag: 'BACKEND DEVELOPER',
    phone: '0329255823',
    email: 'ptrungduc1011@gmail.com',
    website: 'https://phamtrungduc.info',
    location: 'Hà Nội, Việt Nam',
    github: 'https://github.com/khongphaiduc',
    linkedin: 'https://www.linkedin.com/in/ptrungduc1011',
    facebook: 'https://www.facebook.com/phamtrungduc1011',
    university: 'FPT University',
    major: 'Software Engineering',
    educationPeriod: '2022 - 2026',
    certification: 'IELTS 6.0 (2025)',
    introBio: 'Building scalable microservices, high-concurrency systems and resilient backend web applications with .NET, C#, RabbitMQ and Redis.',
    aboutFull: "I'm Phạm Trung Đức, a Backend Developer with hands-on experience in building scalable, reliable, and high-performance applications. Skilled in .NET / C#, Microservices Architecture, RabbitMQ event-driven choreography, Redis distributed caching, database optimization, and automated CI/CD pipelines using Docker. Passionate about designing efficient backend systems, solving complex technical challenges, and continuously improving software quality.",
    editorialQuote: "Architecting resilient backends with clean boundaries and distributed precision.",
    handwrittenNote: "form follows function — engineering follows resilience",
  },

  aboutNavigation: [
    { label: 'Introduction', href: '#about-intro' },
    { label: 'Experience', href: '#about-experience' },
    { label: 'Skills', href: '#about-skills' },
    { label: 'Education', href: '#about-education' },
  ],

  interests: [
    {
      title: 'Microservices & Distributed Systems',
      desc: 'Decoupling services with RabbitMQ event choreography, Saga state machines, and transactional outbox patterns.',
    },
    {
      title: 'High-Concurrency & Distributed Locking',
      desc: 'Eliminating race conditions and overbooking using atomic database operations and Redis distributed locks.',
    },
    {
      title: 'Clean Architecture & Domain-Driven Design',
      desc: 'Structuring enterprise backend codebases with clear domain models, CQRS, and loose coupling.',
    },
    {
      title: 'DevOps & Automated CI/CD Pipelines',
      desc: 'Deploying multi-service containers to Linux VPS with Docker Compose, Nginx reverse proxy, and Jenkins CI/CD.',
    },
  ],

  projects: [
    {
      id: 'foodly',
      number: '01',
      title: 'FOOD ORDERING MICROSERVICES',
      subtitle: 'Foodly — Food Ordering Microservices Platform',
      category: 'Microservices & Distributed Architecture',
      year: 'Dec 2025 — Present',
      role: 'Solo Developer',
      image: '/images/project-foodly.webp',
      description: 'An enterprise food ordering platform architected with Domain-Driven Design (DDD) and Event-Driven Architecture. Solves complex distributed transactions across cart, order, payment, and inventory services with eventual consistency and atomic concurrency guarantees.',
      architectureDetails: [
        'Choreography-based Saga: Orchestrated distributed transactions across Order, Inventory, Payment, and Cart, leveraging Inbox/Outbox patterns, idempotency, and compensating actions for eventual consistency.',
        'Concurrency-Safe Inventory: Designed and implemented atomic database operations to guarantee strict stock consistency during peak order rushes without race conditions.',
        'Reliable PayOS Payment Engine: Implemented idempotent payment verification with Idempotency Keys and webhooks for real-time status synchronization.',
        'Containerized VPS Deployment: Deployed to Linux VPS using Docker Compose and Nginx reverse proxy, configured HTTPS, and established Jenkins CI/CD for automated build and deployment.',
      ],
      techStack: [
        'ASP.NET Core',
        'Web API',
        'gRPC',
        'EF Core',
        'SQL Server',
        'PostgreSQL',
        'MinIO',
        'Redis',
        'RabbitMQ',
        'JWT',
        'ReactJS',
        'Docker',
        'Jenkins',
      ],
      features: [
        'Event-driven Choreography Saga across 4 microservices',
        'Atomic database operations for zero-overbooking stock management',
        'Idempotent PayOS payment flow with webhook verification',
        'Automated CI/CD build and deployment to Linux VPS',
      ],
      githubUrl: 'https://github.com/khongphaiduc/food-ordering-microservices-ddd.git',
      liveDemoUrl: 'https://foodly.mom',
    },
    {
      id: 'hotel-booking',
      number: '02',
      title: 'HOTEL BOOKING SYSTEM',
      subtitle: 'Full-Stack Hotel Management & Booking Engine',
      category: 'Web Application & Concurrency Control',
      year: 'Aug 2025 — Dec 2025',
      role: 'Solo Developer',
      image: '/images/project-nestone.webp',
      description: 'A full-stack hotel management and reservation platform designed to handle high booking concurrency. Resolves race conditions during room reservations through Redis-based distributed locking and background worker queues.',
      architectureDetails: [
        'Redis Distributed Lock: Implemented distributed locks to resolve concurrency race conditions and completely eliminate double-booking during peak reservation periods.',
        'High-Performance Query Caching: Utilized Redis caching for hot room catalog queries, reducing database load and cutting API response times by 66% in JMeter benchmark stress tests.',
        'Asynchronous Worker Processing: Offloaded email confirmations and notification dispatching to RabbitMQ background worker queues, reducing booking API latency from ~3–5s to under 1 second.',
        'Payment & Secure Auth: Integrated VNPAY and PayOS payment gateways with Google OAuth2, cookie-based session handling, and granular role-based access control.',
      ],
      techStack: [
        'C#',
        'ASP.NET Core MVC',
        'EF Core',
        'SQL Server',
        'Redis',
        'RabbitMQ',
        'OAuth2',
        'PayOS',
        'VNPAY',
        'Bootstrap',
      ],
      features: [
        'Redis distributed locking eliminating booking race conditions',
        '66% faster API response time with Redis query caching',
        'Sub-second booking latency via RabbitMQ background tasks',
        'Secure multi-role authentication with Google OAuth2',
      ],
      githubUrl: 'https://github.com/khongphaiduc/hotel-manager-booking.git',
    },
    {
      id: 'lemstem',
      number: '03',
      title: 'LÉM STEM',
      subtitle: 'STEM Educational E-Commerce Platform',
      category: 'Full-Stack E-Commerce & Cloud Storage',
      year: '2024',
      role: 'Backend Developer',
      image: '/images/project-lemstem.webp',
      description: 'A comprehensive educational kit e-commerce platform dedicated to STEM learning materials. Engineered with high-throughput order checkout, rich media delivery via Cloudflare R2, and automated deployment pipelines.',
      architectureDetails: [
        'Cloudflare R2 Integration: High-speed S3-compatible asset delivery for kit blueprints, tutorials, and images with zero egress cost.',
        'Asynchronous Message Queues: RabbitMQ queue handling order confirmation emails, invoice generation, and real-time alerts.',
        'Continuous Integration: Jenkins pipeline automating test execution, Docker container builds, and deployment.',
        'Relational Data Integrity: SQL Server with optimized EF Core queries and automated migration scripts.',
      ],
      techStack: [
        'ASP.NET Core',
        'React',
        'SQL Server',
        'Cloudflare R2',
        'RabbitMQ',
        'Jenkins',
        'Docker',
      ],
      features: [
        'Interactive STEM catalog with dynamic filtering and bundle discounts',
        'Secure multi-tier checkout pipeline with order tracing',
        'Admin dashboard for real-time inventory tracking and metrics',
        'Automated CI/CD deployment with zero downtime',
      ],
      githubUrl: 'https://github.com/khongphaiduc',
    },
    {
      id: 'smartparking',
      number: '04',
      title: 'SMART PARKING',
      subtitle: 'Hardware-Integrated IoT Parking System',
      category: 'Embedded IoT & Automated Control',
      year: '2023',
      role: 'Embedded Developer',
      image: '/images/project-smartparking.webp',
      description: 'An automated IoT barrier and guidance system engineered with Arduino microcontrollers, ultrasonic distance telemetry, servo-driven access control, and dynamic alphanumeric status displays.',
      architectureDetails: [
        'Sensor Array Processing: Real-time ultrasonic obstacle sensing calculating spot vacancies in under 50ms.',
        'Actuator Synchronization: Micro-servo barrier gate actuation synchronized with presence detection interrupts.',
        'Display Guidance Bus: I2C liquid crystal display showing live available parking lots and welcoming prompts.',
        'Hardware-Software Loop: Modular C/C++ firmware structured with debounced inputs and fail-safe defaults.',
      ],
      techStack: [
        'Arduino Uno',
        'Ultrasonic Sensors',
        'Servo Motors',
        'LCD (I2C)',
        'C/C++ Embedded',
      ],
      features: [
        'Automated entry and exit vehicle detection without human intervention',
        'Real-time LCD slot vacancy counter preventing parking congestion',
        'Hardware safety thresholding to prevent barrier collision',
        'Low-power sensor telemetry and resilient loop design',
      ],
      githubUrl: 'https://github.com/khongphaiduc',
    },
  ] as Project[],

  techStack: [
    // BackEnd
    { name: 'C#', category: 'BackEnd', level: 'Core Language', description: 'Advanced object-oriented programming, LINQ, async/await concurrency, and modern C# features.' },
    { name: '.NET Core', category: 'BackEnd', level: 'Platform', description: 'High-performance cross-platform enterprise runtime for backend services and web APIs.' },
    { name: 'ASP.NET Core', category: 'BackEnd', level: 'Web Framework', description: 'RESTful API development, dependency injection, middleware pipelines, and JWT security.' },
    { name: 'EF Core', category: 'BackEnd', level: 'ORM', description: 'Entity Framework Core for relational modeling, LINQ queries, and database migrations.' },
    { name: 'Microservices', category: 'BackEnd', level: 'Architecture', description: 'Domain-Driven Design (DDD), distributed transactions, Saga choreography, and gRPC communication.' },

    // Database
    { name: 'SQL Server', category: 'Database', level: 'Relational DB', description: 'Relational database design, indexes, transactional integrity, and stored procedures.' },
    { name: 'PostgreSQL', category: 'Database', level: 'Relational DB', description: 'ACID transactions, JSONB querying, and isolated microservice data stores.' },
    { name: 'Redis', category: 'Database', level: 'In-Memory Cache', description: 'Distributed caching (66% latency drop), session state, and distributed locking for race conditions.' },

    // Real-Time / Messaging
    { name: 'RabbitMQ', category: 'Messaging', level: 'Message Broker', description: 'Asynchronous event queuing, worker service processing, sub-second latency offloading, and Saga coordination.' },
    { name: 'SignalR', category: 'Messaging', level: 'Real-Time', description: 'Bi-directional WebSocket communication for real-time order updates and status streaming.' },
    { name: 'Worker Service', category: 'Messaging', level: 'Background Processing', description: 'Long-running background tasks, scheduled lifecycle workers, and queue consumers.' },

    // DevOps / Tools
    { name: 'Docker & Compose', category: 'DevOps', level: 'Containerization', description: 'Containerized multi-service packaging, environment isolation, and VPS deployment.' },
    { name: 'Jenkins CI/CD', category: 'DevOps', level: 'Automation', description: 'Automated build triggers, unit test runs, and continuous deployment to Linux servers.' },
    { name: 'Git & GitHub', category: 'DevOps', level: 'Version Control', description: 'Feature branching, code reviews, PR workflows, and repository management.' },
    { name: 'Postman & xUnit', category: 'DevOps', level: 'Testing & QA', description: 'API contract testing with Postman and automated backend unit tests with xUnitTest.' },

    // FrontEnd
    { name: 'ReactJS', category: 'FrontEnd', level: 'Frontend Library', description: 'Building responsive single-page applications, UI state management, and modern component design.' },
    { name: 'HTML / CSS / Bootstrap', category: 'FrontEnd', level: 'UI Foundations', description: 'Semantic markup, modern styling, and responsive grid layouts.' },
  ] as TechItem[],

  timeline: [
    {
      period: 'May 2026 — Present',
      title: 'Freelancer Backend Developer',
      institution: 'Freelance & Independent Contractor',
      category: 'Work Experience',
      description: 'Building custom backend systems, designing microservices architectures, cloud deployment to VPS, and collaborating on high-impact client projects.',
      highlights: [
        'Developing distributed backend systems and RESTful APIs with .NET Core and cloud technologies.',
        'Deploying and maintaining production workloads on Linux VPS with Docker Compose and CI/CD pipelines.',
        'Delivering high-concurrency solutions with Redis caching and RabbitMQ messaging.',
      ],
    },
    {
      period: 'Sep 2025 — April 2026',
      title: 'Back End Developer',
      institution: 'FPT Software',
      category: 'Work Experience',
      description: 'Worked as a Back End Developer contributing to production systems and enterprise software delivery.',
      highlights: [
        'Built and maintained RESTful APIs to support features and seamless client-side integration.',
        'Maintained and improved existing code to ensure system stability and support new feature requirements.',
        'Participated in Agile-based development, collaborating in sprints, daily stand-ups, and iterative feature delivery.',
      ],
    },
    {
      period: '2022 — 2026',
      title: 'Software Engineering Degree',
      institution: 'FPT University',
      category: 'Education',
      description: 'Pursuing Software Engineering degree at FPT University in Hà Nội. Completed core foundation in software development, database architecture, and system design.',
      highlights: [
        'Comprehensive study of Data Structures, OOP, Database Architecture, and Distributed Systems.',
        'Earned IELTS 6.0 English proficiency certification (2025).',
        'Top practical implementation in C# .NET, cloud deployment, and system architecture.',
      ],
    },
    {
      period: 'Dec 2025 — Present',
      title: 'Food Ordering Microservices (Foodly)',
      institution: 'Distributed Systems Project',
      category: 'Key Engineering Project',
      description: 'Solo Developer of an enterprise food ordering microservices platform (foodly.mom).',
      highlights: [
        'Engineered Choreography-based Saga with RabbitMQ, Inbox/Outbox, and idempotency.',
        'Atomic database operations for concurrency-safe stock reservation.',
        'Deployed to Linux VPS with Docker Compose, Nginx reverse proxy, and Jenkins CI/CD.',
      ],
    },
    {
      period: 'Aug 2025 — Dec 2025',
      title: 'Hotel Booking Management System',
      institution: 'High-Concurrency Full-Stack Project',
      category: 'Key Engineering Project',
      description: 'Solo Developer of a full-stack hotel management and reservation platform.',
      highlights: [
        'Implemented Redis distributed locks eliminating double-booking under concurrency.',
        'Achieved 66% faster API response times via Redis catalog caching in JMeter tests.',
        'Reduced booking response time from ~3–5s to under 1s using RabbitMQ background tasks.',
      ],
    },
  ] as TimelineItem[],
};
