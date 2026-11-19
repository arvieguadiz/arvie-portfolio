import { Box, IconButton, Typography } from "@mui/material";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Project, Screenshot } from "../types/project";

type Props = {
  project: Project;
  screenshots: Screenshot[];
  activeIndex: number;
  onChange: (index: number) => void;
  onOpenPreview: () => void;
};

function ScreenshotGallery({
  project,
  screenshots,
  activeIndex,
  onChange,
  onOpenPreview,
}: Props) {
  const activeScreenshot = screenshots[activeIndex];

  const goToPrevious = () =>
    onChange(activeIndex === 0 ? screenshots.length - 1 : activeIndex - 1);

  const goToNext = () => onChange((activeIndex + 1) % screenshots.length);

  return (
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
          src={activeScreenshot.src}
          alt={`${project.name} - ${activeScreenshot.label}`}
          onClick={onOpenPreview}
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
          onClick={goToPrevious}
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
            "&:hover": { backgroundColor: project.accent },
          }}
        >
          <ChevronLeft size={19} />
        </IconButton>
        <IconButton
          aria-label="Next screenshot"
          onClick={goToNext}
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
            "&:hover": { backgroundColor: project.accent },
          }}
        >
          <ChevronRight size={19} />
        </IconButton>
      </Box>

      <Box
        sx={{
          justifyItems: "center",
          mt: 1.5,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {screenshots.map((screenshot, index) => (
            <Box
              key={screenshot.src}
              component="button"
              type="button"
              aria-label={`Show ${screenshot.label}`}
              aria-current={activeIndex === index ? "true" : undefined}
              onClick={() => onChange(index)}
              sx={{
                width: activeIndex === index ? 20 : 7,
                height: 7,
                p: 0,
                border: 0,
                borderRadius: 10,
                backgroundColor:
                  activeIndex === index
                    ? project.accent
                    : "rgba(148,163,184,0.35)",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            />
          ))}
        </Box>
      </Box>
    </>
  );
}

export default ScreenshotGallery;
