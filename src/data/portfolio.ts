export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies?: string[];
  logo?: string; // Placeholder for now
}

export interface Project {
  id: string;
  title: string;
  category: "Mobile" | "Web" | "Backend";
  description: string;
  technologies: string[];
  link?: string;
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
  };
  skills: string[];
  experience: Experience[];
  education: {
    institution: string;
    period: string;
    degree?: string;
  }[];
  projects: Project[]; // Derived from experience description or separate
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Anas KC",
    role: "Flutter Developer",
    email: "anuanas615@gmail.com",
    phone: "+974 77180425",
    linkedin: "https://www.linkedin.com/in/anas-kc-887bbb190",
    summary:
      "With over five years of dedicated experience as an Android & Flutter Developer, I specialize in the creation and maintenance of scalable, user-centric mobile applications. My skill set is extensive, encompassing programming languages such as Kotlin, Java, Dart, Javascript and GoLang. I am well-versed in microservices frontend architecture and excel in incorporating adept third-party integrations, as well as developing real-time applications.",
  },
  skills: [
    "Android",
    "Java",
    "Kotlin",
    "Flutter (Dart)",
    "React.js",
    "Next.js",
    "SQL",
    "Clean Architecture",
    "MVVM",
    "Bloc/Riverpod",
    "Microservices",
    "DevOps",
  ],
  experience: [
    {
      id: "family-food-center",
      company: "Family Food Center",
      role: "Software Developer",
      period: "Jan 2024 — Current",
      description: [
        "Developed and maintained cross-platform applications for iOS and Android, enhancing the online shopping experience for Family Qatar's supermarket chain.",
        "Designed and implemented robust Flutter architectures using BLoC/Riverpod, improving app scalability.",
        "Implemented features to streamline stock ordering processes in Order Plus.",
        "Engineered a driver-specific delivery management tool, Q-Drive.",
        "Contributed to ERConnect Pro (HRMS) solution.",
        "Played a key role in the development of the ALYOUMI App.",
        "Developed Family Qatar Grocery App in Next.js.",
      ],
      technologies: ["Flutter", "Next.js", "BLoC", "Riverpod", "iOS", "Android"],
    },
    {
      id: "foodbell",
      company: "Foodbell",
      role: "Mobile Application Developer",
      period: "Feb 2022 — Dec 2023",
      description: [
        "Developed and maintained the Foodbell e-commerce app using native Android and Flutter.",
        "Implemented features for the Foodbell Restaurant App on Android.",
        "Worked on Market2Home - Ecommerce grocery delivery app.",
      ],
      technologies: ["Android", "Flutter", "E-commerce"],
    },
    {
      id: "thoughtbox",
      company: "ThoughtBox",
      role: "Mobile Application Developer",
      period: "Jan 2019 — Oct 2021",
      description: [
        "Development of Android applications using Kotlin, MVVM, Retrofit, and Jetpack components.",
        "Refactored legacy codebase to Kotlin.",
        "Integrated REST and gRPC APIs with real-time socket features.",
        "Published and maintained apps on Play Store (AL JADEED Exchange, HAMDAN HEXPAY).",
      ],
      technologies: ["Kotlin", "MVVM", "Retrofit", "Jetpack", "gRPC", "Real-time Sockets"],
    },
  ],
  education: [
    {
      institution: "MES Ponnani College, Malappuram, Kerala",
      period: "2017 — 2019",
    },
    {
      institution: "SSMVHSS Edakkazhiyoor",
      period: "Completed",
    },
  ],
  projects: [
    {
      id: "family-qatar-app",
      title: "Family Qatar - Grocery App",
      category: "Mobile",
      description: "Online shopping app for a SKU supermarket chain in Qatar.",
      technologies: ["iOS", "Android", "Web"],
    },
    {
      id: "order-plus",
      title: "Order Plus",
      category: "Mobile",
      description: "Facilitated stock ordering for both retail staff and suppliers.",
      technologies: ["iOS", "Android"],
    },
    {
      id: "q-drive",
      title: "Q-Drive",
      category: "Mobile",
      description: "Driver-specific delivery management tool for B2B order fulfillment.",
      technologies: ["iOS", "Android"],
    },
    {
      id: "er-connect-pro",
      title: "ERConnect Pro",
      category: "Mobile",
      description:
        "HRMS solution with features like payslips, leave management, team access, and announcements.",
      technologies: ["iOS", "Android"],
    },
    {
      id: "foodbell-app",
      title: "Foodbell",
      category: "Mobile",
      description: "Ecommerce food delivery app.",
      technologies: ["Flutter", "Android"],
    },
    {
      id: "al-jadeed",
      title: "AL JADEED Exchange App",
      category: "Mobile",
      description: "Mobile remittance app.",
      technologies: ["Kotlin", "Android"],
    },
  ],
};
