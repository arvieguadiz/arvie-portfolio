import type { Project } from "../types/project";

const projects: Project[] = [
  // PERSONAL PROJECTS
  {
    number: "01",
    name: "SkyCast",
    category: "Weather Application",
    group: "Personal",
    description:
      "A weather application that provides current weather conditions, hourly and weekly forecasts, location search, favorite locations, and customizable settings. It also supports a home-screen weather widget.",
    technologies: [
      "Flutter",
      "Dart",
      "Provider",
      "Material 3",
      "Open-Meteo API",
      "Drift",
      "SQLite",
    ],
    accent: "#5B8CFF",
    visual: "weather",
    screenshots: [
      { src: "/images/projects/skycast/home.jpg", label: "Home Screen" },
      {
        src: "/images/projects/skycast/forecast.jpg",
        label: "Weekly Forecast",
      },
      { src: "/images/projects/skycast/details.jpg", label: "Weather Details" },
    ],
  },
  {
    number: "02",
    name: "Expense Tracker",
    category: "Personal Finance Application",
    group: "Personal",
    description:
      "A personal finance application designed to help users organize transactions, manage accounts, track spending, and monitor their finances through a structured interface.",
    technologies: [
      "Flutter",
      "Dart",
      "Provider",
      "Material 3",
      "Drift",
      "SQLite",
    ],
    accent: "#10B981",
    visual: "finance",
    screenshots: [
      {
        src: "/images/projects/expense-tracker/dashboard.jpg",
        label: "Dashboard",
      },
      {
        src: "/images/projects/expense-tracker/transactions.jpg",
        label: "Transactions",
      },
      {
        src: "/images/projects/expense-tracker/budgets.jpg",
        label: "Budgets",
      },
    ],
  },
  {
    number: "03",
    name: "To Do",
    category: "Task Management Application",
    group: "Personal",
    description:
      "A mobile task management application focused on organizing daily activities, tracking task progress, and helping users stay productive with a clean and intuitive interface.",
    technologies: [
      "Flutter",
      "Dart",
      "Provider",
      "Material 3",
      "Drift",
      "SQLite",
    ],
    accent: "#A78BFA",
    visual: "tasks",
    screenshots: [
      { src: "/images/projects/todo/tasks.jpg", label: "Task List" },
      { src: "/images/projects/todo/add-task.jpg", label: "Add Task" },
      { src: "/images/projects/todo/completed.jpg", label: "Completed Tasks" },
    ],
  },

  // PROFESSIONAL PROJECTS - PENBROTHERS
  {
    number: "04",
    name: "HR & Employee Management System",
    category: "Human Resources Application",
    group: "Professional",
    organization: "The Penbrothers International, Inc.",
    featured: true,
    description:
      "An in-house platform that allows employees to securely access payslips, file leaves, monitor leave balances, and read company announcements. HR users can manage employee information, review leave requests, and publish announcements.",
    technologies: [
      "React",
      "JavaScript",
      "TypeScript",
      "Redux",
      "Material UI",
      "Bootstrap",
      "HTML5",
      "CSS",
      "Node.js",
      "Express.js",
      "REST APIs",
      "MySQL",
      "Redis",
      "Git",
      "Jest",
      "Swagger",
      "Role-Based Access",
    ],
    accent: "#5B8CFF",
    visual: "management",
  },

  // PERSONAL PROJECTS
  {
    number: "05",
    name: "To Do App - Web",
    category: "Web Task Management Application",
    group: "Personal",
    description:
      "A feature-rich web-based task management application designed to help users organize their activities and get things done through a practical and intuitive interface.",
    technologies: [
      "Node.js",
      "React",
      "JavaScript",
      "NeDB",
      "Material UI v5",
      "Bootstrap",
      "HTML5",
      "CSS",
      "MySQL",
    ],
    accent: "#EC4899",
    visual: "web",
    screenshots: [
      { src: "/images/projects/todo-web/todo_01.png", label: "Login Page" },
      { src: "/images/projects/todo-web/todo_02.png", label: "Task Lists" },
      {
        src: "/images/projects/todo-web/todo_03.png",
        label: "Profile Settings",
      },
      {
        src: "/images/projects/todo-web/todo_04.png",
        label: "Task Customization",
      },
    ],
  },

  // PROFESSIONAL PROJECTS - NEW MEDIA SERVICES
  {
    number: "06",
    name: "LOOP Moderation Bridge",
    category: "Backend API Integration",
    group: "Professional",
    organization: "New Media Services Pty. Ltd.",
    description:
      "A backend application that acts as a bridge between LOOP Moderation and client applications, allowing systems to communicate and exchange moderation requests through APIs.",
    technologies: [
      "PHP",
      "REST APIs",
      "API Integration",
      "Backend Development",
    ],
    accent: "#8B5CF6",
    visual: "bridge",
  },
  {
    number: "07",
    name: "LOOP Moderation",
    category: "Content Moderation Platform",
    group: "Professional",
    organization: "New Media Services Pty. Ltd.",
    description:
      "A web application responsible for handling text, image, and video moderation requests from different clients through APIs.",
    technologies: [
      "Laravel",
      "Node.js",
      "React",
      "JavaScript",
      "Material UI",
      "Bootstrap",
      "HTML5",
      "CSS",
      "Redis",
      "REST APIs",
      "MySQL",
      "NeDB",
      "Socket.IO",
      "Docker",
    ],
    accent: "#F59E0B",
    visual: "moderation",
    screenshots: [
      { src: "/images/projects/loop-mod/loopmod_01.png", label: "Login Page" },
      { src: "/images/projects/loop-mod/loopmod_02.png", label: "Dashboard" },
      {
        src: "/images/projects/loop-mod/loopmod_03.png",
        label: "Image Moderation",
      },
      {
        src: "/images/projects/loop-mod/loopmod_04.png",
        label: "Text Moderation",
      },
      {
        src: "/images/projects/loop-mod/loopmod_05.png",
        label: "Online Users",
      },
      {
        src: "/images/projects/loop-mod/loopmod_06.png",
        label: "User Management",
      },
      {
        src: "/images/projects/loop-mod/loopmod_07.png",
        label: "Report",
      },
    ],
  },
  {
    number: "08",
    name: "NMS Apps",
    category: "Enterprise Application Suite",
    group: "Professional",
    organization: "New Media Services Pty. Ltd.",
    description:
      "A collection of interconnected applications and services supporting platform authentication, user management, human resources, attendance tracking, and financial tools.",
    technologies: [
      "Laravel",
      "Node.js",
      "React",
      "JavaScript",
      "Material UI",
      "Bootstrap",
      "HTML5",
      "CSS",
      "Redis",
      "REST APIs",
      "MySQL",
      "NeDB",
      "Socket.IO",
    ],
    accent: "#10B981",
    visual: "management",
    screenshots: [
      { src: "/images/projects/nms-apps/nmsapps_01.png", label: "Dashboard" },
      {
        src: "/images/projects/nms-apps/nmsapps_02.png",
        label: "Notifications",
      },
      {
        src: "/images/projects/nms-apps/nmsapps_03.png",
        label: "Platform Administration",
      },
    ],
  },
  {
    number: "09",
    name: "LOOP IM",
    category: "Instant Messaging Platform",
    group: "Professional",
    organization: "New Media Services Pty. Ltd.",
    description:
      "An instant messaging platform designed to handle high volumes of traffic from different clients through API integrations.",
    technologies: [
      "Laravel",
      "Node.js",
      "AngularJS",
      "JavaScript",
      "Bootstrap",
      "HTML5",
      "CSS",
      "Redis",
      "REST APIs",
      "MySQL",
      "NeDB",
      "Socket.IO",
      "Git",
    ],
    accent: "#38BDF8",
    visual: "messaging",
    screenshots: [
      { src: "/images/projects/loop-im/loopim_01.png", label: "Login Page" },
      {
        src: "/images/projects/loop-im/loopim_02.png",
        label: "Agent Parking",
      },
      {
        src: "/images/projects/loop-im/loopim_03.png",
        label: "Chat Interface",
      },
    ],
  },

  // ACADEMIC AND INTERNSHIP PROJECTS
  {
    number: "10",
    name: "MSB Image Review",
    category: "OJT Training Platform",
    group: "Academic & Internship",
    organization: "On-the-Job Training",
    description:
      "A training platform for new applicants to practice plate-number image review. The system provides a training experience similar to the image review platform used in production.",
    technologies: ["C#", "ASP.NET", "JavaScript", "Bootstrap", "jQuery", "SQL"],
    accent: "#F97316",
    visual: "training",
    screenshots: [
      {
        src: "/images/projects/msb-image-review/msb_01.png",
        label: "Login Page",
      },
      {
        src: "/images/projects/msb-image-review/msb_02.png",
        label: "Dashboard",
      },
      {
        src: "/images/projects/msb-image-review/msb_03.png",
        label: "Image Review",
      },
      {
        src: "/images/projects/msb-image-review/msb_04.png",
        label: "Typing Assessment",
      },
    ],
  },
  {
    number: "11",
    name: "E-Police OCRMS",
    category: "Thesis Project",
    group: "Academic & Internship",
    organization: "Pangasinan",
    description:
      "E-Police Online Crime Record Management System, developed as an academic thesis project for the Philippine National Police of the province of Pangasinan.",
    technologies: ["PHP", "JavaScript", "jQuery", "Bootstrap", "SQL", "C#"],
    accent: "#A78BFA",
    visual: "thesis",
    screenshots: [
      {
        src: "/images/projects/e-police-ocrms/ocrms_01.png",
        label: "Dashboard",
      },
    ],
  },
];

export default projects;
