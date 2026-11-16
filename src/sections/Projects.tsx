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
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    name: "SkyCast",
    category: "Weather Application",
    description:
      "A weather application that provides current weather conditions, hourly and weekly forecasts, location search, favorite locations, and customizable settings. It also supports a home-screen weather widget.",
    technologies: ["Flutter", "Dart", "Provider", "Open-Meteo API", "Drift"],
    accent: "#5B8CFF",
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
    description:
      "A personal finance application designed to help users organize transactions, manage accounts, track spending, and monitor their finances through a structured interface.",
    technologies: ["Flutter", "Dart", "Provider", "Drift", "SQLite"],
    accent: "#10B981",
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
    description:
      "A task management application focused on organizing daily activities, tracking task progress, and helping users stay productive with a clean and intuitive interface.",
    technologies: ["Flutter", "Dart", "Provider", "Material 3"],
    accent: "#A78BFA",
    screenshots: [
      { src: "/images/projects/todo/tasks.jpg", label: "Task List" },
      { src: "/images/projects/todo/add-task.jpg", label: "Add Task" },
      { src: "/images/projects/todo/completed.jpg", label: "Completed Tasks" },
    ],
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const [activeScreenshot, setActiveScreenshot] = useState(0);
  const [previewOpen, setPreviewOpen] = useState(false);

  const previousScreenshot = () => {
    setActiveScreenshot((current) =>
      current === 0 ? project.screenshots.length - 1 : current - 1,
    );
  };

  const nextScreenshot = () => {
    setActiveScreenshot(
      (current) => (current + 1) % project.screenshots.length,
    );
  };

  return (
    <>
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, delay: index * 0.12 }}
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
            label="Personal Project"
            size="small"
            variant="outlined"
            sx={{
              borderColor: "divider",
              color: "text.secondary",
              fontSize: "0.7rem",
            }}
          />
        </Box>

        {/* Screenshot Gallery */}
        <Box sx={{ mb: 3 }}>
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
              src={project.screenshots[activeScreenshot].src}
              alt={`${project.name} - ${project.screenshots[activeScreenshot].label}`}
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

            {/* Previous Button */}
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

            {/* Next Button */}
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

          {/* Gallery Label and Indicators */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 1.5,
            }}
          >
            <Typography variant="caption" color="text.secondary">
              {project.screenshots[activeScreenshot].label}
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {project.screenshots.map((screenshot, screenshotIndex) => (
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
        </Box>

        {/* Project Information */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 0.8 }}>
            {project.name}
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: project.accent, fontWeight: 600 }}
          >
            {project.category}
          </Typography>
        </Box>

        <Typography
          color="text.secondary"
          sx={{
            fontSize: "0.95rem",
            lineHeight: 1.9,
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
                color: "text.secondary",
                fontWeight: 500,
                borderRadius: 1.5,
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Full-Screen Screenshot Preview */}
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
        {/* Preview Header */}
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

            <Typography variant="caption" sx={{ color: "#94A3B8" }}>
              {project.screenshots[activeScreenshot].label}
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

        {/* Preview Image */}
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
            src={project.screenshots[activeScreenshot].src}
            alt={`${project.name} - ${project.screenshots[activeScreenshot].label}`}
            sx={{
              display: "block",
              maxWidth: "100%",
              maxHeight: "70vh",
              objectFit: "contain",
              borderRadius: 1,
            }}
          />
        </DialogContent>

        {/* Preview Navigation */}
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
            {project.screenshots.map((screenshot, screenshotIndex) => (
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
    </>
  );
}

function Projects() {
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
        <Box sx={{ mb: 7 }}>
          <Typography
            variant="overline"
            color="primary"
            sx={{ fontWeight: 700, letterSpacing: 3 }}
          >
            SOME THINGS I'VE BUILT
          </Typography>

          <Typography
            variant="h2"
            sx={{
              mt: 1,
              fontSize: { xs: "2.3rem", md: "3.5rem" },
            }}
          >
            Featured Projects
            <Box component="span" sx={{ color: "primary.main" }}>
              .
            </Box>
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              mt: 2,
              maxWidth: 600,
              lineHeight: 1.9,
            }}
          >
            A selection of personal projects where I explore technologies, solve
            problems, and turn ideas into working applications.
          </Typography>
        </Box>

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
          {projects.map((project, index) => (
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
            More projects and source code coming soon
          </Typography>

          <ArrowUpRight size={16} color="#5B8CFF" />
        </Box>
      </Container>
    </Box>
  );
}

export default Projects;
