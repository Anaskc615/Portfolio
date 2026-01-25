export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string[];
  technologies?: string[];
  logo?: string;
}

export interface Project {
  id: string;
  title: string;
  category: "Mobile" | "Web" | "Backend";
  description: string;
  technologies: string[];
  links?: { url: string; label: string }[];
  image?: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    email: string;
    phone: string;
    linkedin: string;
    summary: string;
    location?: string;
  };
  skills: string[];
  experience: Experience[];
  education: {
    institution: string;
    period: string;
    degree?: string;
    location?: string;
  }[];
  projects: Project[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Anas KC",
    role: "Flutter Developer / Frontend Engineer",
    email: "anuanas615@gmail.com",
    phone: "+974 77180425",
    linkedin: "https://www.linkedin.com/in/anas-kc-887bbb190",
    summary:
      "Senior Flutter Developer with 5+ years of experience delivering scalable mobile applications for iOS and Android, with expertise in BLoC/Riverpod, MVVM/DDD, real-time apps, REST/WebSockets, push notifications, and payment integrations. Additionally, experience in Next.js for web applications (SSR, SSG, dynamic routing, SEO). Proficient in CI/CD, Agile delivery, and growing skills in backend, cloud, DevOps, and AI integrations.",
    location: "Doha, Qatar",
  },
  skills: [
    "Flutter (Dart)",
    "Android (Java/Kotlin)",
    "Next.js",
    "React.js",
    "BLoC/Riverpod",
    "Clean Architecture",
    "MVVM/DDD",
    "Payment Integrations",
    "SQL",
    "CI/CD",
    "Microservices",
  ],
  experience: [
    {
      id: "family-holdings",
      company: "Family Holdings",
      role: "Frontend Engineer",
      period: "Jan 2024 – Current",
      location: "Doha, Qatar",
      description: [
        "Developed and maintained cross-platform mobile applications for iOS and Android, enhancing the online shopping experience for Family Qatar’s hypermarket chain.",
        "Designed and implemented robust Flutter architectures using BLoC and Riverpod, improving scalability, testability, and long-term maintainability.",
        "Built a feature-rich e-commerce web application using Next.js, leveraging Server-Side Rendering (SSR), Static Generation, dynamic routing, SEO optimization, and performance best practices.",
        "Implemented real-time communication using WebSockets for live order updates and notifications.",
        "Integrated secure payment gateways including CyberSource, QPay, and Apple Pay, ensuring smooth, reliable, and compliant checkout flows.",
      ],
      technologies: ["Flutter", "Next.js", "BLoC", "Riverpod", "WebSockets", "Payment Gateways"],
    },
    {
      id: "foodbell",
      company: "Foodbell",
      role: "Mobile Application Developer",
      period: "Feb 2022 – Dec 2023",
      location: "Dubai, UAE",
      description: [
        "Developed and maintained the Foodbell e-commerce app using native Android and Flutter for both iOS and Android platforms.",
        "Implemented features for the Foodbell Restaurant App on Android, enabling restaurants to efficiently manage online orders.",
        "Ensured a seamless shopping experience for users across multiple platforms.",
      ],
      technologies: ["Flutter", "Android", "E-commerce"],
    },
    {
      id: "thoughtbox",
      company: "Thought Box",
      role: "Mobile Application Developer",
      period: "Jan 2019 – Oct 2021",
      location: "Kerala, India",
      description: [
        "Gained hands-on experience in mobile application development by working with a large-scale fintech mobile app team.",
        "Developed and maintained Android applications using Kotlin, following MVVM architecture.",
        "Refactored legacy Android codebase to Kotlin, improving performance, readability, and long-term maintainability.",
        "Integrated REST and gRPC APIs, along with real-time socket-based communication.",
        "Collaborated closely with cross-functional teams (product, backend, QA) in an Agile development environment.",
      ],
      technologies: ["Kotlin", "MVVM", "gRPC", "Socket.io", "Fintech"],
    },
  ],
  education: [
    {
      institution: "MES Ponnani College",
      period: "2017 – 2019",
      location: "Malappuram, Kerala",
    },
    {
      institution: "SSMVHSS Edakkazhiyoor",
      period: "Completed",
    },
  ],
  projects: [
    {
      id: "family-qatar-nextjs",
      title: "Family Qatar (Next.js)",
      category: "Web",
      description: "A high-performance e-commerce web application built with Next.js, featuring SSR, dynamic routing, and SEO optimization.",
      technologies: ["Next.js", "React", "SSR", "Tailwind"],
      links: [
        { url: "https://test-ecom-v2.family.qa/", label: "Live Web" },
      ],
    },
    {
      id: "family-qatar-flutter",
      title: "Family Qatar (Flutter)",
      category: "Web",
      description: "Cross-platform mobile application for iOS and Android, with web support. Features BLoC state management and real-time updates.",
      technologies: ["Flutter", "Dart", "Android", "iOS", "Web"],
      links: [
        { url: "https://interim-atxpview-ecom-v2.family.qa/", label: "Web Preview" },
      ],
    },
    {
      id: "er-connect-pro",
      title: "ER Connect Pro",
      category: "Mobile",
      description: "HRMS solution with features like payslips, leave management, team access, and announcements.",
      technologies: ["Flutter", "HRMS"],
      links: [
        { url: "https://apps.apple.com/in/app/erconnect-pro/id6451446336", label: "App Store" },
      ],
    },
    {
      id: "alyoumi",
      title: "Alyoumi",
      category: "Mobile",
      description: "Loyalty program launched by Retail Mart, allowing customers to earn, track, and redeem points.",
      technologies: ["Flutter", "Loyalty"],
      links: [
        { url: "https://play.google.com/store/apps/details?id=com.alyoumi.app&hl=en", label: "Play Store" },
      ],
    },
    {
      id: "q-drive",
      title: "Q-Drive",
      category: "Mobile",
      description: "Driver-specific delivery management tool for B2B order fulfillment.",
      technologies: ["Mobile", "Logistics"],
      links: [
        { url: "https://play.google.com/store/apps/details?id=com.ffc.qdrive&hl=en_US", label: "Play Store" },
      ],
    },
    {
      id: "q-daily",
      title: "Q-Daily",
      category: "Mobile",
      description: "B2B order management tool designed for optimized purchasing workflows.",
      technologies: ["Mobile", "B2B"],
      links: [
        { url: "https://play.google.com/store/apps/details?id=com.ffc.qdaily&hl=en_US", label: "Play Store" },
      ],
    },
    {
      id: "qserve",
      title: "Qserve",
      category: "Mobile",
      description: "Integrated solution to streamline operations for waitstaff and administrators at restaurants.",
      technologies: ["Mobile", "Hospitality"],
      links: [
        { url: "https://play.google.com/store/apps/details?id=com.ffc.qserve&hl=en_US", label: "Play Store" },
      ],
    },
    {
      id: "order-plus",
      title: "Order Plus",
      category: "Mobile",
      description: "Facilitated stock ordering for both retail staff and suppliers.",
      technologies: ["iOS", "Android"],
    },
    {
      id: "foodbell-app",
      title: "Foodbell",
      category: "Mobile",
      description: "Ecommerce food delivery app.",
      technologies: ["Flutter", "Food Delivery"],
      links: [
        { url: "https://play.google.com/store/apps/details?id=com.foodbellryk.foodbell&hl=en", label: "Play Store" },
      ],
    },
    {
      id: "foodbell-restaurant",
      title: "Foodbell Restaurant",
      category: "Mobile",
      description: "Ecommerce order receiving app for restaurants.",
      technologies: ["Android", "Restaurant"],
      links: [
        { url: "https://play.google.com/store/apps/details?id=com.foodbellryk.foodbell_restaurant&hl=en", label: "Play Store" },
      ],
    },
    {
      id: "unimoni",
      title: "Unimoni",
      category: "Mobile",
      description: "Secure fintech mobile application enabling international money transfers.",
      technologies: ["Android", "Fintech"],
      links: [
        { url: "https://play.google.com/store/apps/details?id=io.thoughtbox.unimoni&hl=en", label: "Play Store" },
      ],
    },
    {
      id: "hamdan-hexpay",
      title: "Hamdan HEXPAY",
      category: "Mobile",
      description: "Easy and quick bank transfer and Faster Cash pickup facilities.",
      technologies: ["Android", "Fintech"],
      links: [
        { url: "https://play.google.com/store/search?q=hexpay&c=apps&hl=en_US", label: "Play Store" },
      ],
    },
  ],
};
