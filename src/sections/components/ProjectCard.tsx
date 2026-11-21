import { useState } from "react";
import { Box, Button, Chip, Typography } from "@mui/material";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import projectDetails from "../data/projectDetails";
import type { Project } from "../types/project";
import ProjectVisual from "./ProjectVisual";
import ScreenshotGallery from "./ScreenshotGallery";
import ProjectDetailsDialog from "./ProjectDetailsDialog";
import ScreenshotPreviewDialog from "./ScreenshotPreviewDialog";

type Props = { project: Project; index: number };

function ProjectCard({ project, index }: Props) {
  const shouldReduceMotion = useReducedMotion();
  const [activeScreenshot, setActiveScreenshot] = useState(0);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);

  const screenshots = project.screenshots ?? [];
  const details = projectDetails[project.name];
  const displayedTechnologies = project.technologies.slice(0, 7);
  const remainingTechnologies =
    project.technologies.length - displayedTechnologies.length;

  const openScreenshotFromDetails = (screenshotIndex: number) => {
    setActiveScreenshot(screenshotIndex);
    setDetailsOpen(false);
    setPreviewOpen(true);
  };

  return (
    <>
      <Box
        component={motion.div}
        initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.5,
          delay: shouldReduceMotion ? 0 : (index % 2) * 0.1,
        }}
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          p: { xs: 2.5, md: 3 },
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

        {/* Project header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 1,
            mb: 2.5,
          }}
        >
          <Typography
            sx={{
              color: project.accent,
              fontSize: "0.75rem",
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
              fontSize: "0.68rem",
            }}
          />
        </Box>

        {/* Project preview */}
        <Box sx={{ mb: 2.5 }}>
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
                sx={{ display: "block", mt: 0.8, textAlign: "center" }}
              >
                Illustrative preview
              </Typography>
            </>
          )}
        </Box>

        {/* Project title */}
        <Box sx={{ mb: 2 }}>
          <Typography
            variant="h4"
            component="h3"
            sx={{
              fontWeight: 700,
              mb: 0.7,
              fontSize: { xs: "1.3rem", md: "1.45rem" },
              lineHeight: 1.35,
            }}
          >
            {project.name}
          </Typography>

          {project.organization && (
            <Typography variant="caption" sx={{ color: "#B8C7DC" }}>
              {project.organization}
            </Typography>
          )}
        </Box>

        {/* Technologies */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 0.8,
            mt: "auto",
          }}
        >
          {displayedTechnologies.map((technology) => (
            <Chip
              key={technology}
              label={technology}
              size="small"
              sx={{
                backgroundColor: "rgba(148, 163, 184, 0.08)",
                color: "#B8C7DC",
                fontWeight: 500,
                borderRadius: 1.5,
                fontSize: "0.7rem",
              }}
            />
          ))}

          {remainingTechnologies > 0 && (
            <Chip
              label={`+${remainingTechnologies}`}
              size="small"
              sx={{
                backgroundColor: "rgba(148, 163, 184, 0.04)",
                color: "text.secondary",
                fontWeight: 600,
                fontSize: "0.7rem",
              }}
            />
          )}
        </Box>

        {/* Details action */}
        <Button
          variant="outlined"
          onClick={() => setDetailsOpen(true)}
          endIcon={<ArrowUpRight size={16} />}
          sx={{
            alignSelf: "flex-start",
            mt: 3,
            color: "#8EAEFF",
            "&:hover": {
              backgroundColor: "transparent",
              color: "#B8C7DC",
            },
          }}
        >
          Explore Project
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
