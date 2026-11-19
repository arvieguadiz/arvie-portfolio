import { Box, Typography } from "@mui/material";
import {
  Code2,
  GraduationCap,
  Image,
  Layers3,
  MessageSquare,
  ShieldCheck,
  Users,
} from "lucide-react";
import type { Project } from "../types/project";

type Props = { project: Project };

function ProjectVisual({ project }: Props) {
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
        height: { xs: 250, sm: 300 },
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
      <Box sx={{ display: "flex", gap: 0.8, mt: 2.5 }}>
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

export default ProjectVisual;
