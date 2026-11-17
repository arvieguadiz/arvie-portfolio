import { useState } from "react";
import {
  Box,
  Chip,
  Container,
  Typography,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  X,
  Code2,
  MessageSquare,
  ShieldCheck,
  Users,
  Image,
  GraduationCap,
  Layers3,
} from "lucide-react";
import { motion } from "framer-motion";

type Screenshot = {
  src: string;
  label: string;
};

type Project = {
  number: string;
  name: string;
  category: string;
  group: "Professional" | "Academic & Internship" | "Personal";
  organization?: string;
  description: string;
  technologies: string[];
  accent: string;
  visual:
    | "chat"
    | "moderation"
    | "bridge"
    | "management"
    | "messaging"
    | "training"
    | "thesis"
    | "web"
    | "weather"
    | "finance"
    | "tasks";
  screenshots?: Screenshot[];
};

const projects: Project[] = [
  // PERSONAL PROJECTS
  {
    number: "01",
    name: "SkyCast",
    category: "Weather Application",
    group: "Personal",
    description:
      "A weather application that provides current weather conditions, hourly and weekly forecasts, location search, favorite locations, and customizable settings. It also supports a home-screen weather widget.",
    technologies: ["Flutter", "Dart", "Provider", "Open-Meteo API", "Drift"],
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
    technologies: ["Flutter", "Dart", "Provider", "Drift", "SQLite"],
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
    technologies: ["Flutter", "Dart", "Provider", "Material 3"],
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
    description:
      "An in-house platform that allows employees to securely access payslips, file leaves, monitor leave balances, and read company announcements. HR users can manage employee information, review leave requests, and publish announcements.",
    technologies: ["React", "TypeScript", "REST APIs", "Role-Based Access"],
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
    technologies: ["Node.js", "React", "NeDB", "Material UI v5"],
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
    technologies: ["PHP", "API Integration", "Backend Development"],
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
      "Redis",
      "SQL",
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
      "Redis",
      "SQL",
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
      "Redis",
      "SQL",
      "NeDB",
      "Socket.IO",
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

const filters = [
  "All",
  "Professional",
  "Academic & Internship",
  "Personal",
] as const;

type ProjectFilter = (typeof filters)[number];

function ProjectVisual({ project }: { project: Project }) {
  const visualIcons = {
    chat: MessageSquare,
    moderation: ShieldCheck,
    bridge: Layers3,
    management: Users,
    messaging: MessageSquare,
    training: Image,
    thesis: GraduationCap,
    web: Code2,
    weather: Code2,
    finance: Layers3,
    tasks: Code2,
  };

  const VisualIcon = visualIcons[project.visual];

  return (
    <Box
      sx={{
        height: { xs: 230, sm: 260 },
        borderRadius: 2.5,
        background:
          "radial-gradient(circle at 50% 0%, rgba(91,140,255,0.13), transparent 65%), #080B14",
        border: "1px solid rgba(148,163,184,0.12)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        p: 3,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: 220,
          height: 220,
          borderRadius: "50%",
          border: `1px solid ${project.accent}25`,
        }}
      />

      <Box
        sx={{
          width: 64,
          height: 64,
          borderRadius: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: `${project.accent}18`,
          border: `1px solid ${project.accent}45`,
          color: project.accent,
          mb: 2,
        }}
      >
        <VisualIcon size={30} />
      </Box>

      <Typography
        sx={{
          color: "#F8FAFC",
          fontWeight: 700,
          fontSize: { xs: "1rem", sm: "1.1rem" },
          textAlign: "center",
          maxWidth: 300,
        }}
      >
        {project.name}
      </Typography>

      <Typography
        sx={{
          color: "#B8C7DC",
          fontSize: "0.78rem",
          mt: 0.8,
          textAlign: "center",
        }}
      >
        {project.category}
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 0.8,
          mt: 2.5,
        }}
      >
        {[0, 1, 2].map((item) => (
          <Box
            key={item}
            sx={{
              width: item === 1 ? 24 : 7,
              height: 7,
              borderRadius: 5,
              backgroundColor:
                item === 1 ? project.accent : "rgba(148,163,184,0.3)",
            }}
          />
        ))}
      </Box>

      <Typography
        sx={{
          position: "absolute",
          bottom: 12,
          right: 14,
          color: "rgba(184,199,220,0.55)",
          fontSize: "0.65rem",
          letterSpacing: 1,
        }}
      >
        PROJECT PREVIEW
      </Typography>
    </Box>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [activeScreenshot, setActiveScreenshot] = useState(0);
  const [previewOpen, setPreviewOpen] = useState(false);

  const screenshots = project.screenshots ?? [];
  const hasScreenshots = screenshots.length > 0;

  const previousScreenshot = () => {
    setActiveScreenshot((current) =>
      current === 0 ? screenshots.length - 1 : current - 1,
    );
  };

  const nextScreenshot = () => {
    setActiveScreenshot((current) => (current + 1) % screenshots.length);
  };

  return (
    <>
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          p: { xs: 2.5, md: 3.5 },
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 3,
          backgroundColor: "background.paper",
          overflow: "hidden",
          transition: "all 0.25s ease",
          "&:hover": {
            transform: "translateY(-5px)",
            borderColor: project.accent,
            boxShadow: `0 12px 35px ${project.accent}12`,
          },
        }}
      >
        {/* Decorative Accent */}
        <Box
          sx={{
            position: "absolute",
            top: -65,
            right: -65,
            width: 160,
            height: 160,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${project.accent}20 0%, transparent 70%)`,
            pointerEvents: "none",
          }}
        />

        {/* Project Number and Category */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 1,
            mb: 3,
          }}
        >
          <Typography
            sx={{
              color: project.accent,
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: 2,
            }}
          >
            PROJECT {project.number}
          </Typography>

          <Chip
            label={project.group}
            size="small"
            variant="outlined"
            sx={{
              borderColor: `${project.accent}70`,
              color: "#B8C7DC",
              fontSize: "0.7rem",
            }}
          />
        </Box>

        {/* Screenshot Gallery or Illustrative Preview */}
        <Box sx={{ mb: 3 }}>
          {hasScreenshots ? (
            <>
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: 260,
                  height: { xs: 300, sm: 340 },
                  p: 2,
                  borderRadius: 2.5,
                  backgroundColor: "#080B14",
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src={screenshots[activeScreenshot].src}
                  alt={`${project.name} - ${screenshots[activeScreenshot].label}`}
                  onClick={() => setPreviewOpen(true)}
                  sx={{
                    height: "100%",
                    maxWidth: "100%",
                    objectFit: "contain",
                    borderRadius: 1.5,
                    cursor: "zoom-in",
                    transition: "opacity 0.2s ease",
                  }}
                />

                <IconButton
                  aria-label="Previous screenshot"
                  onClick={previousScreenshot}
                  sx={{
                    position: "absolute",
                    left: 10,
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: 36,
                    height: 36,
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "#FFFFFF",
                    backgroundColor: "rgba(8,11,20,0.75)",
                    "&:hover": {
                      backgroundColor: project.accent,
                    },
                  }}
                >
                  <ChevronLeft size={19} />
                </IconButton>

                <IconButton
                  aria-label="Next screenshot"
                  onClick={nextScreenshot}
                  sx={{
                    position: "absolute",
                    right: 10,
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: 36,
                    height: 36,
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "#FFFFFF",
                    backgroundColor: "rgba(8,11,20,0.75)",
                    "&:hover": {
                      backgroundColor: project.accent,
                    },
                  }}
                >
                  <ChevronRight size={19} />
                </IconButton>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mt: 1.5,
                }}
              >
                <Typography variant="caption" color="text.secondary">
                  {screenshots[activeScreenshot].label}
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  {screenshots.map((screenshot, screenshotIndex) => (
                    <Box
                      key={screenshot.src}
                      component="button"
                      type="button"
                      aria-label={`Show ${screenshot.label}`}
                      onClick={() => setActiveScreenshot(screenshotIndex)}
                      sx={{
                        width: activeScreenshot === screenshotIndex ? 20 : 7,
                        height: 7,
                        p: 0,
                        border: 0,
                        borderRadius: 10,
                        backgroundColor:
                          activeScreenshot === screenshotIndex
                            ? project.accent
                            : "rgba(148,163,184,0.35)",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                      }}
                    />
                  ))}
                </Box>
              </Box>

              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ display: "block", mt: 1 }}
              >
                Click screenshot to enlarge
              </Typography>
            </>
          ) : (
            <>
              <ProjectVisual project={project} />
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ display: "block", mt: 1 }}
              >
                Illustrative project preview
              </Typography>
            </>
          )}
        </Box>

        {/* Project Information */}
        <Box sx={{ mb: 2 }}>
          <Typography
            variant="h4"
            component="h3"
            sx={{
              fontWeight: 700,
              mb: 0.8,
              fontSize: { xs: "1.35rem", md: "1.55rem" },
            }}
          >
            {project.name}
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: project.accent, fontWeight: 600 }}
          >
            {project.category}
          </Typography>

          {project.organization && (
            <Typography
              variant="caption"
              sx={{
                display: "block",
                color: "#B8C7DC",
                mt: 0.7,
              }}
            >
              {project.organization}
            </Typography>
          )}
        </Box>

        <Typography
          color="text.secondary"
          sx={{
            fontSize: "0.92rem",
            lineHeight: 1.85,
            mb: 3,
          }}
        >
          {project.description}
        </Typography>

        {/* Technologies */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            mt: "auto",
          }}
        >
          {project.technologies.map((technology) => (
            <Chip
              key={technology}
              label={technology}
              size="small"
              sx={{
                backgroundColor: "rgba(148, 163, 184, 0.08)",
                color: "#B8C7DC",
                fontWeight: 500,
                borderRadius: 1.5,
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Full-Screen Screenshot Preview */}
      {hasScreenshots && (
        <Dialog
          open={previewOpen}
          onClose={() => setPreviewOpen(false)}
          maxWidth="lg"
          fullWidth
          sx={{
            "& .MuiDialog-paper": {
              backgroundColor: "#080B14",
              border: "1px solid rgba(148,163,184,0.2)",
              borderRadius: 3,
              overflow: "hidden",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: 2.5,
              py: 2,
              borderBottom: "1px solid rgba(148,163,184,0.15)",
            }}
          >
            <Box>
              <Typography sx={{ color: "#F8FAFC", fontWeight: 700 }}>
                {project.name}
              </Typography>

              <Typography variant="caption" sx={{ color: "#B8C7DC" }}>
                {screenshots[activeScreenshot].label}
              </Typography>
            </Box>

            <IconButton
              aria-label="Close screenshot preview"
              onClick={() => setPreviewOpen(false)}
              sx={{
                color: "#F8FAFC",
                "&:hover": {
                  backgroundColor: "rgba(148,163,184,0.15)",
                },
              }}
            >
              <X size={21} />
            </IconButton>
          </Box>

          <DialogContent
            sx={{
              p: { xs: 1.5, md: 3 },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: { xs: 350, md: 500 },
            }}
          >
            <Box
              component="img"
              src={screenshots[activeScreenshot].src}
              alt={`${project.name} - ${screenshots[activeScreenshot].label}`}
              sx={{
                display: "block",
                maxWidth: "100%",
                maxHeight: "70vh",
                objectFit: "contain",
                borderRadius: 1,
              }}
            />
          </DialogContent>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 2.5,
              py: 2,
              borderTop: "1px solid rgba(148,163,184,0.15)",
            }}
          >
            <IconButton
              aria-label="Previous preview screenshot"
              onClick={previousScreenshot}
              sx={{ color: "#F8FAFC" }}
            >
              <ChevronLeft />
            </IconButton>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {screenshots.map((screenshot, screenshotIndex) => (
                <Box
                  key={screenshot.src}
                  component="button"
                  type="button"
                  aria-label={`Show ${screenshot.label}`}
                  onClick={() => setActiveScreenshot(screenshotIndex)}
                  sx={{
                    width: activeScreenshot === screenshotIndex ? 22 : 8,
                    height: 8,
                    p: 0,
                    border: 0,
                    borderRadius: 10,
                    backgroundColor:
                      activeScreenshot === screenshotIndex
                        ? project.accent
                        : "rgba(148,163,184,0.35)",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                />
              ))}
            </Box>

            <IconButton
              aria-label="Next preview screenshot"
              onClick={nextScreenshot}
              sx={{ color: "#F8FAFC" }}
            >
              <ChevronRight />
            </IconButton>
          </Box>
        </Dialog>
      )}
    </>
  );
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.group === activeFilter);

  return (
    <Box
      id="projects"
      component="section"
      sx={{
        py: { xs: 10, md: 16 },
        backgroundColor: "background.default",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Heading */}
        <Box sx={{ mb: 5 }}>
          <Typography
            variant="overline"
            color="#B8C7DC"
            sx={{ fontWeight: 700, letterSpacing: 3 }}
          >
            EXPERIENCE THROUGH PROJECTS
          </Typography>

          <Typography
            variant="h2"
            component="h2"
            sx={{
              mt: 1,
              fontSize: { xs: "2.3rem", md: "3.5rem" },
            }}
          >
            Projects
            <Box component="span" sx={{ color: "primary.main" }}>
              .
            </Box>
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              mt: 2,
              maxWidth: 650,
              lineHeight: 1.9,
            }}
          >
            A collection of professional, academic, and personal projects
            showcasing my experience building web applications, backend
            services, and mobile solutions.
          </Typography>
        </Box>

        {/* Project Filters */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1.2,
            mb: 4,
          }}
          role="group"
          aria-label="Filter projects by category"
        >
          {filters.map((filter) => (
            <Chip
              key={filter}
              label={filter}
              clickable
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
              sx={{
                px: 0.5,
                py: 2.2,
                fontWeight: 600,
                color: activeFilter === filter ? "#FFFFFF" : "#B8C7DC",
                backgroundColor:
                  activeFilter === filter
                    ? "#3568D4"
                    : "rgba(148,163,184,0.08)",
                border: "1px solid",
                borderColor:
                  activeFilter === filter
                    ? "#5B8CFF"
                    : "rgba(148,163,184,0.18)",
                "&:hover": {
                  backgroundColor:
                    activeFilter === filter
                      ? "#254FA8"
                      : "rgba(148,163,184,0.15)",
                },
              }}
            />
          ))}
        </Box>

        {/* Project Count */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 3 }}
          aria-live="polite"
        >
          Showing {filteredProjects.length}{" "}
          {filteredProjects.length === 1 ? "project" : "projects"}
        </Typography>

        {/* Project Cards */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(2, 1fr)",
            },
            gap: 3,
          }}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </Box>

        {/* Project Note */}
        <Box
          sx={{
            mt: 5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            Showcasing 11 professional, academic, and personal projects
          </Typography>

          <ArrowUpRight size={16} color="#5B8CFF" />
        </Box>
      </Container>
    </Box>
  );
}

export default Projects;
