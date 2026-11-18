import { Box, Chip, Dialog, DialogContent, IconButton, Typography } from "@mui/material";
import type { ReactNode } from "react";
import { X } from "lucide-react";
import type { Project, ProjectDetails, Screenshot } from "../types/project";

type Props = {
  project: Project;
  details: ProjectDetails;
  screenshots: Screenshot[];
  open: boolean;
  onClose: () => void;
  onSelectScreenshot: (index: number) => void;
};

function ProjectDetailsDialog({
  project,
  details,
  screenshots,
  open,
  onClose,
  onSelectScreenshot,
}: Props) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      scroll="paper"
      aria-labelledby={`project-details-title-${project.number}`}
      sx={{
        "& .MuiDialog-paper": {
          backgroundColor: "#0B1220",
          backgroundImage: "none",
          border: "1px solid rgba(148,163,184,0.2)",
          borderRadius: 3,
          overflow: "hidden",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 2,
          px: { xs: 2.5, md: 3.5 },
          py: 2.5,
          borderBottom: "1px solid rgba(148,163,184,0.15)",
        }}
      >
        <Box sx={{ minWidth: 0 }}>
          <Typography
            variant="overline"
            sx={{ color: project.accent, fontWeight: 700, letterSpacing: 2 }}
          >
            PROJECT {project.number} · {project.group}
          </Typography>
          <Typography
            id={`project-details-title-${project.number}`}
            variant="h4"
            component="h2"
            sx={{
              color: "#F8FAFC",
              fontWeight: 700,
              mt: 0.5,
              fontSize: { xs: "1.35rem", sm: "1.7rem" },
            }}
          >
            {project.name}
          </Typography>
          {project.organization && (
            <Typography sx={{ color: "#B8C7DC", fontSize: "0.85rem", mt: 0.7 }}>
              {project.organization}
            </Typography>
          )}
        </Box>
        <IconButton
          aria-label="Close project details"
          onClick={onClose}
          sx={{ color: "#F8FAFC", mt: 0.5 }}
        >
          <X size={21} />
        </IconButton>
      </Box>

      <DialogContent sx={{ px: { xs: 2.5, md: 3.5 }, py: 3 }}>
        <DetailSection title="Project Overview" accent={project.accent}>
          <Typography sx={{ color: "#CBD5E1", lineHeight: 1.9 }}>
            {details.overview}
          </Typography>
        </DetailSection>

        <DetailSection title="Key Features" accent={project.accent}>
          <BulletList items={details.keyFeatures} />
        </DetailSection>

        <DetailSection title="My Contributions" accent={project.accent}>
          <BulletList items={details.contributions} />
        </DetailSection>

        <Box>
          <SectionTitle title="Technologies Used" accent={project.accent} />
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {project.technologies.map((technology) => (
              <Chip
                key={technology}
                label={technology}
                size="small"
                sx={{
                  backgroundColor: "rgba(148,163,184,0.1)",
                  color: "#DCE7F8",
                  border: "1px solid rgba(148,163,184,0.15)",
                }}
              />
            ))}
          </Box>
        </Box>

        {screenshots.length > 0 && (
          <Box sx={{ mt: 3.5 }}>
            <SectionTitle title="Screenshots" accent={project.accent} />
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
                gap: 1.5,
              }}
            >
              {screenshots.map((screenshot, index) => (
                <Box key={screenshot.src}>
                  <Box
                    component="button"
                    type="button"
                    onClick={() => onSelectScreenshot(index)}
                    aria-label={`Enlarge ${screenshot.label} screenshot`}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                      minHeight: 150,
                      p: 1,
                      border: "1px solid rgba(148,163,184,0.18)",
                      borderRadius: 2,
                      backgroundColor: "#080B14",
                      cursor: "zoom-in",
                      "&:hover": { borderColor: project.accent },
                    }}
                  >
                    <Box
                      component="img"
                      src={screenshot.src}
                      alt={`${project.name} - ${screenshot.label}`}
                      loading="lazy"
                      sx={{
                        display: "block",
                        maxWidth: "100%",
                        maxHeight: 220,
                        objectFit: "contain",
                        borderRadius: 1,
                      }}
                    />
                  </Box>
                  <Typography
                    variant="caption"
                    sx={{ display: "block", color: "#B8C7DC", mt: 0.8 }}
                  >
                    {screenshot.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
}

type SectionProps = { title: string; accent: string; children: ReactNode };

function DetailSection({ title, accent, children }: SectionProps) {
  return (
    <Box sx={{ mb: 3.5 }}>
      <SectionTitle title={title} accent={accent} />
      {children}
    </Box>
  );
}

function SectionTitle({ title, accent }: Omit<SectionProps, "children">) {
  return (
    <Typography component="h3" sx={{ color: accent, fontWeight: 700, mb: 1.2 }}>
      {title}
    </Typography>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <Box component="ul" sx={{ m: 0, pl: 2.5, color: "#CBD5E1" }}>
      {items.map((item) => (
        <Box component="li" key={item} sx={{ pl: 0.5, mb: 0.8, lineHeight: 1.7 }}>
          {item}
        </Box>
      ))}
    </Box>
  );
}

export default ProjectDetailsDialog;
