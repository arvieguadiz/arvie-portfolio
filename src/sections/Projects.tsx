import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Box, Chip, Container, Typography } from "@mui/material";
import projects from "./data/projects";
import { projectFilters, type ProjectFilter } from "./types/project";
import ProjectCard from "./components/ProjectCard";
import FeaturedProjectCard from "./components/FeaturedProjectCard";

function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.group === activeFilter);

  const featuredProjects = filteredProjects.filter(
    (project) => project.featured,
  );

  const regularProjects = filteredProjects.filter(
    (project) => !project.featured,
  );

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
            sx={{ mt: 1, fontSize: { xs: "2.3rem", md: "3.5rem" } }}
          >
            Projects
            <Box component="span" sx={{ color: "primary.main" }}>
              .
            </Box>
          </Typography>

          <Typography
            color="text.secondary"
            sx={{ mt: 2, maxWidth: 650, lineHeight: 1.9 }}
          >
            A collection of professional, academic, and personal projects
            showcasing my experience building web applications, backend
            services, and mobile solutions.
          </Typography>
        </Box>

        <Box
          sx={{ display: "flex", flexWrap: "wrap", gap: 1.2, mb: 4 }}
          role="group"
          aria-label="Filter projects by category"
        >
          {projectFilters.map((filter) => (
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

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 3 }}
          aria-live="polite"
        >
          Showing {filteredProjects.length}{" "}
          {filteredProjects.length === 1 ? "project" : "projects"}
        </Typography>

        {featuredProjects.length > 0 && (
          <Box sx={{ mb: 4 }}>
            {featuredProjects.map((project) => (
              <FeaturedProjectCard key={project.name} project={project} />
            ))}
          </Box>
        )}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
            gap: 3,
          }}
        >
          {regularProjects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </Box>

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
