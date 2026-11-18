import { Box, Dialog, DialogContent, IconButton, Typography } from "@mui/material";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Project, Screenshot } from "../types/project";

type Props = {
  project: Project;
  screenshots: Screenshot[];
  activeIndex: number;
  open: boolean;
  onClose: () => void;
  onChange: (index: number) => void;
};

function ScreenshotPreviewDialog({
  project,
  screenshots,
  activeIndex,
  open,
  onClose,
  onChange,
}: Props) {
  if (screenshots.length === 0) return null;

  const activeScreenshot = screenshots[activeIndex];
  const goToPrevious = () =>
    onChange(activeIndex === 0 ? screenshots.length - 1 : activeIndex - 1);
  const goToNext = () => onChange((activeIndex + 1) % screenshots.length);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      aria-label={`${project.name} screenshot preview`}
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
            {activeScreenshot.label}
          </Typography>
        </Box>
        <IconButton
          aria-label="Close screenshot preview"
          onClick={onClose}
          sx={{
            color: "#F8FAFC",
            "&:hover": { backgroundColor: "rgba(148,163,184,0.15)" },
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
          src={activeScreenshot.src}
          alt={`${project.name} - ${activeScreenshot.label}`}
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
        <IconButton aria-label="Previous preview screenshot" onClick={goToPrevious} sx={{ color: "#F8FAFC" }}>
          <ChevronLeft />
        </IconButton>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {screenshots.map((screenshot, index) => (
            <Box
              key={screenshot.src}
              component="button"
              type="button"
              aria-label={`Show ${screenshot.label}`}
              onClick={() => onChange(index)}
              sx={{
                width: activeIndex === index ? 22 : 8,
                height: 8,
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
        <IconButton aria-label="Next preview screenshot" onClick={goToNext} sx={{ color: "#F8FAFC" }}>
          <ChevronRight />
        </IconButton>
      </Box>
    </Dialog>
  );
}

export default ScreenshotPreviewDialog;
