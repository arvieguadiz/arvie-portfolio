import type { ProjectDetails } from "../types/project";

const projectDetails: Record<string, ProjectDetails> = {
  SkyCast: {
    overview:
      "A Flutter weather application that helps users check current weather conditions and forecasts for selected locations. It also provides personalized weather information through saved locations and a home-screen widget.",
    keyFeatures: [
      "Current weather conditions and weather details",
      "Hourly and seven-day weather forecasts",
      "Location search and favorite locations",
      "Temperature, wind speed, and precipitation unit settings",
      "Light and dark themes",
      "Android home-screen weather widget",
      "Cached weather data for faster startup",
    ],
    contributions: [
      "Designed and developed the application from scratch using Flutter and Dart",
      "Implemented state management using Provider",
      "Integrated the Open-Meteo weather API",
      "Implemented local data storage using Drift and SQLite",
      "Developed the weather forecast, favorites, and settings features",
      "Implemented the Android home-screen widget",
    ],
  },

  "Expense Tracker": {
    overview:
      "A personal finance application designed to help users manage their money through organized transactions, accounts, and budgeting features.",
    keyFeatures: [
      "Income and expense tracking",
      "Transaction organization",
      "Account management",
      "Budget management",
      "Financial summaries and spending overview",
    ],
    contributions: [
      "Designed and developed the application using Flutter and Dart",
      "Implemented application state management using Provider",
      "Used Drift and SQLite for local data persistence",
      "Developed the transaction and budgeting functionality",
    ],
  },

  "To Do": {
    overview:
      "A mobile task management application designed to help users organize daily activities, monitor task progress, and maintain productivity.",
    keyFeatures: [
      "Task creation and management",
      "Task completion tracking",
      "Organized task lists",
      "Clean and responsive mobile interface",
    ],
    contributions: [
      "Designed and developed the mobile application using Flutter and Dart",
      "Implemented task management functionality",
      "Used Provider for application state management",
      "Built the interface using Material 3 components",
    ],
  },

  "HR & Employee Management System": {
    overview:
      "An internal employee platform developed at The Penbrothers International, Inc. It provides employees with access to payslips, leave filing, leave balances, and company announcements, while HR users manage employee information and requests.",
    keyFeatures: [
      "Employee information management",
      "Payslip access",
      "Leave filing and leave balance monitoring",
      "Leave request management for HR users",
      "Company announcements",
      "Role-based access",
    ],
    contributions: [
      "Developed reusable React components",
      "Implemented frontend state management",
      "Integrated frontend features with REST APIs",
      "Worked on role-based access functionality",
      "Improved user experience and frontend component structure",
    ],
  },

  "To Do App - Web": {
    overview:
      "A feature-rich web-based task management application built to help users organize their activities and manage tasks through a practical interface.",
    keyFeatures: [
      "User login",
      "Task list management",
      "Profile settings",
      "Task customization",
    ],
    contributions: [
      "Designed and developed the web application",
      "Built the frontend using React and Material UI",
      "Implemented backend functionality using Node.js",
      "Used NeDB for data storage",
    ],
  },

  "LOOP Moderation Bridge": {
    overview:
      "A backend application developed at New Media Services Pty. Ltd. that connects LOOP Moderation with client applications, enabling communication and the exchange of moderation requests through APIs.",
    keyFeatures: [
      "Communication between LOOP Moderation and client applications",
      "API-based integration",
      "Backend handling of moderation requests",
    ],
    contributions: [
      "Worked on the PHP backend application",
      "Contributed to the API integration layer connecting client applications with LOOP Moderation",
    ],
  },

  "LOOP Moderation": {
    overview:
      "A content moderation platform developed at New Media Services Pty. Ltd. for handling text, image, and video moderation requests from multiple clients through API integrations.",
    keyFeatures: [
      "Text moderation",
      "Image moderation",
      "Video moderation",
      "Dashboard and moderation activity monitoring",
      "Online user monitoring",
      "User management",
      "Report viewing",
      "API integration for multiple clients",
    ],
    contributions: [
      "Contributed to the development and maintenance of the moderation platform",
      "Worked with the application's frontend and backend technologies",
      "Worked with real-time communication and data technologies used by the platform",
    ],
  },

  "NMS Apps": {
    overview:
      "A collection of interconnected internal applications and services developed at New Media Services Pty. Ltd. to support authentication, user management, HR processes, attendance tracking, and financial tools.",
    keyFeatures: [
      "Platform authentication",
      "User management",
      "Human resources functionality",
      "Attendance tracking",
      "Financial tools",
      "Centralized platform administration",
    ],
    contributions: [
      "Contributed to the development and maintenance of interconnected applications",
      "Worked with the platform's frontend and backend technologies",
    ],
  },

  "LOOP IM": {
    overview:
      "An instant messaging platform developed at New Media Services Pty. Ltd. to support communication across different clients through API integrations and real-time messaging.",
    keyFeatures: [
      "Agent login",
      "Agent parking and standby management",
      "Chat interface",
      "API-based client integration",
      "Support for high volumes of messaging traffic",
    ],
    contributions: [
      "Contributed to the development and maintenance of the messaging platform",
      "Worked with the application's frontend and backend technologies",
      "Worked with real-time communication technologies used by the platform",
    ],
  },

  "MSB Image Review": {
    overview:
      "An on-the-job training platform that allows new applicants to practice reviewing plate-number images. It provides a training experience similar to the image review system used in production.",
    keyFeatures: [
      "Applicant login",
      "Training dashboard",
      "Plate-number image review exercises",
      "Typing assessment",
      "Practice environment based on the production workflow",
    ],
    contributions: [
      "Worked on the development of an image-review training platform during the internship",
      "Worked with C#, ASP.NET, JavaScript, and SQL technologies",
    ],
  },

  "E-Police OCRMS": {
    overview:
      "E-Police Online Crime Record Management System, an academic thesis project developed for the Philippine National Police in the province of Pangasinan.",
    keyFeatures: [
      "Online crime record management",
      "Centralized digital record keeping",
      "Web-based system interface",
    ],
    contributions: [
      "Participated in the development of the academic thesis project",
      "Worked with PHP, JavaScript, jQuery, Bootstrap, SQL, and C#",
    ],
  },
};

export default projectDetails;
