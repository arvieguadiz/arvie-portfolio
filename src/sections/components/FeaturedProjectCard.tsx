import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Box, Button, Chip, Typography } from "@mui/material";
import { motion, useReducedMotion } from "framer-motion";
import projectDetails from "../data/projectDetails";
import type { Project } from "../types/project";
import ProjectVisual from "./ProjectVisual";
import ScreenshotGallery from "./ScreenshotGallery";
import ProjectDetailsDialog from "./ProjectDetailsDialog";
import ScreenshotPreviewDialog from "./ScreenshotPreviewDialog";

type Props = { project: Project };

function FeaturedProjectCard({ project }: Props) {
  const shouldReduceMotion = useReducedMotion();
  const [activeScreenshot, setActiveScreenshot] = useState(0);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);

  const screenshots = project.screenshots ?? [];
  const details = projectDetails[project.name];
  const displayedTechnologies = project.technologies.slice(0, 6);
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
          duration: shouldReduceMotion ? 0 : 0.6,
        }}
        sx={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "0.9fr 1.1fr" },
          gap: { xs: 3, md: 5 },
          alignItems: "center",
          p: { xs: 2.5, md: 4 },
          border: "1px solid",
          borderColor: `${project.accent}65`,
          borderRadius: 3,
          backgroundColor: "background.paper",
          overflow: "hidden",
          transition: "all 0.3s ease",
          "&:hover": {
            borderColor: project.accent,
            boxShadow: `0 18px 45px ${project.accent}15`,
          },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: -100,
            right: -70,
            width: 280,
            height: 280,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${project.accent}20 0%, transparent 70%)`,
            pointerEvents: "none",
          }}
        />

        {/* Project information */}
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 1.2,
              mb: 3,
            }}
          >
            <Typography
              sx={{
                color: project.accent,
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: 2,
              }}
            >
              PROJECT {project.number}
            </Typography>

            <Chip
              label="FEATURED"
              size="small"
              sx={{
                backgroundColor: `${project.accent}18`,
                color: project.accent,
                border: `1px solid ${project.accent}50`,
                fontSize: "0.68rem",
                fontWeight: 700,
                letterSpacing: 0.5,
              }}
            />
          </Box>

          <Typography
            variant="h3"
            component="h3"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "1.8rem", md: "2.35rem" },
              lineHeight: 1.2,
              mb: 1.5,
            }}
          >
            {project.name}
          </Typography>

          {project.organization && (
            <Typography variant="body2" sx={{ color: "#B8C7DC", mb: 2.5 }}>
              {project.organization}
            </Typography>
          )}

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

        {/* Project visual */}
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            minWidth: 0,
            order: { xs: -1, md: 0 },
          }}
        >
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

export default FeaturedProjectCard;
