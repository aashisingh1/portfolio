/*
  All the words on the site live in this one file.
  Edit the text between the quotes, save, and refresh the page.
  Leave a list empty ( [] ) to hide that section.
*/
window.PORTFOLIO = {
  name: "Aashi Singh",
  firstName: "Aashi",

  hero: {
    status: "Engineer III at American Express",
    greeting: "Hi there, I'm",
    roleLine: "a Senior Software Engineer",
    tagline: "Java at the core, React at the surface, quality all the way through.",
    intro:
      "I build full-stack platforms with Spring Boot microservices behind and React up front, and I care a lot about shipping them without surprises.",
    badges: [
      { value: "7+ yrs", label: "building full-stack products" },
      { value: "Centurion Award", label: "American Express, 2025" },
    ],
  },

  photo: "photo.jpg",

  // Put a PDF next to index.html and write its file name here (e.g. "resume.pdf")
  // to show a "Download résumé" button. Left empty on purpose: see the hosting notes.
  resume: "",

  links: {
    email: "saashi364@gmail.com",
    linkedin: "https://www.linkedin.com/in/aashisingh1/",
    github: "",
  },

  ticker: [
    "Java", "Spring Boot", "React.js", "Microservices", "REST APIs", "Apache Kafka",
    "PostgreSQL", "MySQL", "Hibernate", "Vert.x", "AWS", "Docker", "Kubernetes",
    "Jenkins", "Playwright", "Selenium", "Cucumber", "Karate", "JUnit", "Jest",
    "Splunk", "AI Agents", "Test Automation", "Code Reviews", "Mentoring",
  ],

  about: {
    background: [
      "I'm a full-stack engineer with 7+ years of experience designing, building and maintaining applications in Java, with React.js on the frontend. Most of my work lives in microservices, APIs and the databases behind them.",
      "At American Express I've set up the UI framework and APIs for a new platform, built Spring Boot services that calculate fees, refunds and taxes, and led system integration testing across 3–4 teams with zero production defects.",
      "Lately I've been bringing AI and faster automation into the day-to-day: a custom AI agent for story grooming, and a workflow that moves Selenium–Cucumber suites to Playwright. Alongside the code, I lead and mentor a team of 3–5 junior developers.",
    ],
    facts: [
      { label: "Based in", value: "Bangalore, India" },
      { label: "Currently", value: "Engineer III, American Express" },
      { label: "Focus", value: "Java · Spring Boot · React.js" },
    ],
    cards: [
      {
        title: "How I Build",
        text: "Quality is a feature. Test early, automate what repeats, and build the reusable piece once so the next team doesn't have to.",
      },
      {
        title: "What I Bring to Teams",
        text: "Ownership from grooming to release. I clarify requirements with Product and Design, review code with care, mentor junior developers, and run deployments end to end.",
      },
    ],
  },

  experience: [
    {
      company: "American Express",
      location: "Bangalore",
      dates: "Mar 2026 – Present",
      role: "Engineer III",
      summary:
        "Leading delivery on the team: shaping requirements with Product and Design, mentoring developers, owning releases, and bringing AI and faster test automation into the workflow.",
      bullets: [
        "Contribute to Product and Design discussions with technical insight, clarifying requirements and aligning business expectations with feasible technical solutions.",
        "Lead and mentor a team of 3–5 junior developers, running code reviews and upholding coding standards, best practices and overall code quality.",
        "Independently managed and executed the majority of the May and June release deployments, owning smooth execution and timely delivery.",
        "Independently designed and developed the Admin Repository, with parallel and sequential API calls and a reusable common data library that improves maintainability, scalability and development efficiency.",
        "Designed and developed a custom AI agent for CPAT and story grooming that improves product understanding, identifies missing edge cases, uncovers requirement gaps and guides integration with existing systems through APIs.",
        "Designed and implemented an automation migration workflow to move existing Selenium–Cucumber tests to Playwright, aiming to significantly reduce test execution time.",
      ],
      tags: ["Java", "React.js", "AI Agents", "Playwright", "Release Management", "Mentoring"],
    },
    {
      company: "American Express",
      location: "Bangalore",
      dates: "Feb 2022 – Mar 2026",
      role: "Engineer II",
      summary:
        "Built the UI foundations and backend services for a new platform, and led cross-team integration testing with zero production defects.",
      bullets: [
        "Led SIT across 3–4 teams with zero production defects, earning the GCST Quality Pillar award.",
        "Established the initial UI framework and APIs for a new platform; designed and implemented the hierarchy module using React and Java backend APIs, aligned with product requirements.",
        "Developed a Spring Boot microservice that calculates fees, refunds and taxes for OneAP.",
        "Contributed to the architectural design and scalability of a GCF microservices application.",
        "Implemented delegator/delegatee personas for CID Parenting & Tagging and built reusable role-based authentication UI components.",
        "Created APIs to handle downstream responses for virtual cards, ensuring efficient and reliable downstream communication.",
        "Managed SQL databases and Kafka topics, and created comprehensive reporting systems.",
        "Fixed vulnerabilities in DotConnector and added JUnit tests and automation for enhanced reliability.",
      ],
      tags: ["React.js", "Spring Boot", "Microservices", "Kafka", "SQL", "JUnit", "SIT"],
    },
    {
      company: "Sakhatech Information Systems",
      location: "Bangalore",
      dates: "May 2019 – Feb 2022",
      role: "Senior Software Engineer",
      summary:
        "Full-stack delivery across client products in security research, automotive, education and e-commerce. Fast-tracked from fresher to Senior Engineer within two years.",
      bullets: [
        "Developed REST APIs with Java Spring Boot, designed user interfaces with React.js and created database structures across complete project development, following microservices architecture and Agile methodology.",
        "Vulhunt (security research): built the campaign module for reporting vulnerabilities and managing rewards; integrated Razorpay and Digio for Aadhaar and PAN card verification.",
        "Turbosense (car dealerships): developed data ingestion and processing features, and security modules for the report-generating dashboard, enhancing dealer automation.",
        "XUSOM (education): developed admin, employee and lead modules based on client requirements.",
        "Hopscotch (kids' fashion): worked on SEO management, Shadowfax integration, wishlist functionality and dynamic segments.",
      ],
      tags: ["Java", "Spring Boot", "React.js", "REST APIs", "Razorpay", "Agile"],
    },
  ],

  stats: [
    { value: "7+", label: "Years of Experience", note: "Full-stack with Java & React.js" },
    { value: "0", label: "Production Defects", note: "Leading SIT across 3–4 teams" },
    { value: "3–5", label: "Developers Mentored", note: "Code reviews & coding standards" },
    { value: "2", label: "American Express Awards", note: "Centurion 2025 · GCST Quality Pillar" },
    { value: "2 yrs", label: "Fresher to Senior Engineer", note: "Fast-tracked at Sakhatech" },
    { value: "4", label: "Client Products Delivered", note: "Vulhunt · Turbosense · XUSOM · Hopscotch" },
  ],

  projects: [
    {
      labels: ["AI Agent", "Developer Productivity"],
      org: "American Express",
      title: "AI Agent for Story Grooming",
      subtitle: "A custom AI agent that reviews stories before they reach development",
      description:
        "I designed and developed a custom AI agent for CPAT and story grooming. It helps the team understand the product faster and catches what a busy grooming session can miss.",
      tabs: [
        {
          name: "Goal",
          title: "Sharper stories, earlier",
          text: "Improve product understanding during CPAT and story grooming, so stories reach development with fewer open questions.",
        },
        {
          name: "Edge Cases",
          title: "Finding what's missing",
          text: "The agent identifies missing edge cases and uncovers gaps in requirements while a story is still being shaped.",
        },
        {
          name: "Integration",
          title: "Guidance on existing systems",
          text: "It provides guidance on integrating with existing systems through APIs, including integration approaches and the configurations required.",
        },
        {
          name: "My Role",
          title: "Designed and built end to end",
          text: "I designed and developed the agent myself, from the idea through to the team using it in grooming.",
        },
      ],
      tech: ["AI Agents", "Requirements Analysis", "API Integration", "Story Grooming"],
    },
    {
      labels: ["Full Stack", "Platform"],
      org: "American Express",
      title: "New Platform: UI Framework & Hierarchy Module",
      subtitle: "Laying the frontend and API foundations for a new platform",
      description:
        "I established the initial UI framework and APIs for a new platform, then designed and implemented its hierarchy module across React and Java.",
      tabs: [
        {
          name: "Foundation",
          title: "The first UI framework and APIs",
          text: "Established the initial UI framework and the APIs that the rest of the platform is built on.",
        },
        {
          name: "Hierarchy",
          title: "Hierarchy module, front to back",
          text: "Designed and implemented the hierarchy module using React and Java backend APIs, keeping it aligned with product requirements.",
        },
        {
          name: "Access",
          title: "Personas and role-based UI",
          text: "Implemented delegator/delegatee personas for CID Parenting & Tagging and built reusable role-based authentication UI components.",
        },
      ],
      tech: ["React.js", "Java", "REST APIs", "Role-based Auth", "Reusable Components"],
    },
    {
      labels: ["Quality", "Test Automation"],
      org: "American Express",
      title: "Zero-Defect SIT & the Move to Playwright",
      subtitle: "Leading cross-team integration testing and modernising test automation",
      description:
        "I led system integration testing across 3–4 teams with zero production defects, and designed the workflow that migrates Selenium–Cucumber tests to Playwright.",
      tabs: [
        {
          name: "SIT",
          title: "Integration testing across teams",
          text: "Led SIT across 3–4 teams, with zero production defects.",
        },
        {
          name: "Migration",
          title: "Selenium–Cucumber to Playwright",
          text: "Designed and implemented an automation migration workflow that transitions existing Selenium–Cucumber tests to Playwright, aiming to significantly reduce test execution time and improve automation efficiency.",
        },
        {
          name: "Reliability",
          title: "Hardening what already exists",
          text: "Fixed vulnerabilities in DotConnector and added JUnit tests and automation for enhanced reliability.",
        },
        {
          name: "Recognition",
          title: "GCST Quality Pillar award",
          text: "Earned the 2nd award at the GCST level under the Quality Pillar for leading thorough SIT across teams.",
        },
      ],
      tech: ["Playwright", "Selenium", "Cucumber", "JUnit", "Karate", "SIT"],
    },
  ],

  moreProjects: [
    {
      org: "American Express",
      title: "OneAP Fees, Refunds & Taxes Service",
      text: "A Spring Boot microservice that calculates fees, refunds and taxes for OneAP.",
      tech: ["Spring Boot", "Microservices"],
    },
    {
      org: "American Express",
      title: "Admin Repository & Common Data Library",
      text: "Independently designed and built, with parallel and sequential API calls and a reusable common data library.",
      tech: ["React.js", "APIs", "Shared Library"],
    },
    {
      org: "American Express",
      title: "Virtual Cards Downstream APIs",
      text: "APIs that handle downstream responses for virtual cards, keeping downstream communication efficient and reliable.",
      tech: ["Java", "REST APIs"],
    },
    {
      org: "Sakhatech",
      title: "Vulhunt",
      text: "Campaign module for reporting vulnerabilities and managing rewards, with Razorpay and Digio for Aadhaar and PAN verification.",
      tech: ["Spring Boot", "React.js", "Razorpay", "Digio"],
    },
    {
      org: "Sakhatech",
      title: "Turbosense",
      text: "Data ingestion and processing for a car dealership product, plus security modules for its reporting dashboard.",
      tech: ["Java", "Data Ingestion", "Dashboards"],
    },
    {
      org: "Sakhatech",
      title: "Hopscotch",
      text: "Kids' fashion website: SEO management, Shadowfax integration, wishlist functionality and dynamic segments.",
      tech: ["E-commerce", "SEO", "Shadowfax"],
    },
  ],

  skills: [
    { group: "Languages & Frontend", items: ["Java", "SQL", "React.js"] },
    { group: "Backend", items: ["Spring Boot", "Hibernate", "REST APIs", "Microservices", "Vert.x"] },
    { group: "Data & Messaging", items: ["PostgreSQL", "MySQL", "NoSQL", "Apache Kafka"] },
    { group: "Cloud & DevOps", items: ["AWS", "Hydra", "ECP", "Git", "Docker", "Kubernetes", "Jenkins", "ELF", "Splunk"] },
    { group: "Testing & Practices", items: ["JUnit", "Jest", "Playwright", "Selenium", "Cucumber", "Karate", "Test Automation"] },
    { group: "Leadership", items: ["Mentoring", "Code Reviews", "Release Management", "SIT Leadership", "Agile"] },
  ],

  awards: [
    {
      title: "Centurion Award 2025",
      org: "American Express",
      text: "For outstanding performance and impactful contributions.",
    },
    {
      title: "GCST Quality Pillar, 2nd Award",
      org: "American Express",
      text: "For leading thorough SIT across teams and ensuring zero production defects.",
    },
    {
      title: "Fresher to Senior in 2 Years",
      org: "Sakhatech",
      text: "Fast-tracked to Senior Engineer on the strength of technical contributions.",
    },
  ],

  education: [
    {
      degree: "B.E., Computer Science Engineering",
      school: "Institution of Engineering and Technology, Agra",
      dates: "Class of 2018",
      note: "85%",
    },
  ],

  // Add entries like { quote: "...", name: "...", title: "..." } to show this section.
  testimonials: [],

  contact: {
    heading: "Let's Connect",
    text: "I'm always open to talking about engineering roles, interesting problems, or simply how good software gets built.",
  },
};
