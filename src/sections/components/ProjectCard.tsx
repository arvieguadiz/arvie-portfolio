import { useState } from "react";
import { Box, Button, Chip, Typography } from "@mui/material";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import projectDetails from "../data/projectDetails";
import type { Project } from "../types/project";
import ProjectVisual from "./ProjectVisual";
import ScreenshotGallery from "./ScreenshotGallery";
import ProjectDetailsDialog from "./ProjectDetailsDialog";
import ScreenshotPreviewDialog from "./ScreenshotPreviewDialog";

type Props = { project: Project; index: number };

function ProjectCard({ project, index }: Props) {
  const [activeScreenshot, setActiveScreenshot] = useState(0);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);

  const screenshots = project.screenshots ?? [];
  const details = projectDetails[project.name];

  const openScreenshotFromDetails = (screenshotIndex: number) => {
    setActiveScreenshot(screenshotIndex);
    setDetailsOpen(false);
    setPreviewOpen(true);
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

        <Box sx={{ mb: 3 }}>
          {screenshots.length > 0 ? (
            <ScreenshotGallery
              project={project}
              screenshots={screenshots}
              activeIndex={activeScreenshot}
              onChange={setActiveScreenshot}
              onOpenPreview={() => setPreviewOpen(true)}
            />
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
          <Typography variant="body2" sx={{ color: project.accent, fontWeight: 600 }}>
            {project.category}
          </Typography>
          {project.organization && (
            <Typography
              variant="caption"
              sx={{ display: "block", color: "#B8C7DC", mt: 0.7 }}
            >
              {project.organization}
            </Typography>
          )}
        </Box>

        <Typography
          color="text.secondary"
          sx={{ fontSize: "0.92rem", lineHeight: 1.85, mb: 3 }}
        >
          {project.description}
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: "auto" }}>
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

        <Button
          variant="outlined"
          onClick={() => setDetailsOpen(true)}
          endIcon={<ArrowUpRight size={17} />}
          sx={{
            alignSelf: "flex-start",
            mt: 3,
            borderColor: `${project.accent}80`,
            color: "#DCE7F8",
            "&:hover": {
              borderColor: project.accent,
              backgroundColor: `${project.accent}12`,
            },
          }}
        >
          View Project Details
        </Button>
      </Box>

      <ProjectDetailsDialog
        project={project}
        details={details}
        screenshots={screenshots}
        open={detailsOpen}
        onClose={() => setDetailsOpen(false)}
        onSelectScreenshot={openScreenshotFromDetails}
      />

      <ScreenshotPreviewDialog
        project={project}
        screenshots={screenshots}
        activeIndex={activeScreenshot}
        open={previewOpen}
        onClose={() => setPreviewOpen(false)}
        onChange={setActiveScreenshot}
      />
    </>
  );
}

export default ProjectCard;
