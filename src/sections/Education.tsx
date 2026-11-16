import { Box, Container, Typography } from "@mui/material";
import { GraduationCap, Award } from "lucide-react";
import { motion } from "framer-motion";

const developmentActivities = [
  {
    title: "AI Training (SPEC Framework)",
    date: "March 2026",
  },
  {
    title: "Gen AI Hackathon",
    date: "November 2025",
  },
  {
    title: "Thinking Machines: AI Enablement for Professionals",
    date: "November 2025",
  },
  {
    title: "AI Assistant Workshop with Cline AI",
    date: "September 2025",
  },
];

function Education() {
  return (
    <Box
      id="education"
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
            sx={{
              fontWeight: 700,
              letterSpacing: 3,
            }}
          >
            MY BACKGROUND
          </Typography>

          <Typography
            variant="h2"
            sx={{
              mt: 1,
              fontSize: {
                xs: "2.3rem",
                md: "3.5rem",
              },
            }}
          >
            Education & Development
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
            My academic foundation and commitment to continuous learning through
            professional development.
          </Typography>
        </Box>

        {/* Main Content */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "0.9fr 1.1fr",
            },
            gap: 3,
            alignItems: "stretch",
          }}
        >
          {/* Education Card */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            sx={{
              p: { xs: 3, md: 4 },
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 3,
              backgroundColor: "background.paper",
            }}
          >
            <Box
              sx={{
                width: 52,
                height: 52,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 2,
                color: "primary.main",
                backgroundColor: "rgba(91, 140, 255, 0.12)",
                mb: 3,
              }}
            >
              <GraduationCap size={26} />
            </Box>

            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                mb: 3,
              }}
            >
              Education
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontSize: "1.1rem",
                fontWeight: 700,
                lineHeight: 1.6,
                mb: 1,
              }}
            >
              Bachelor of Science in Information Technology
            </Typography>

            <Typography
              color="text.secondary"
              sx={{
                lineHeight: 1.8,
                mb: 2,
              }}
            >
              Pangasinan State University – Urdaneta City Campus
            </Typography>

            <Typography
              color="primary.light"
              sx={{
                fontSize: "0.9rem",
                fontWeight: 600,
              }}
            >
              2018
            </Typography>
          </Box>

          {/* Professional Development Card */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            sx={{
              p: { xs: 3, md: 4 },
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 3,
              backgroundColor: "background.paper",
            }}
          >
            <Box
              sx={{
                width: 52,
                height: 52,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 2,
                color: "#A78BFA",
                backgroundColor: "rgba(167, 139, 250, 0.12)",
                mb: 3,
              }}
            >
              <Award size={26} />
            </Box>

            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                mb: 3,
              }}
            >
              Professional Development
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2.5,
              }}
            >
              {developmentActivities.map((activity, index) => (
                <Box
                  key={activity.title}
                  sx={{
                    display: "flex",
                    gap: 2,
                    alignItems: "flex-start",
                    pb: index === developmentActivities.length - 1 ? 0 : 2.5,
                    borderBottom:
                      index === developmentActivities.length - 1
                        ? "none"
                        : "1px solid",
                    borderColor: "divider",
                  }}
                >
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      mt: 1,
                      flexShrink: 0,
                      borderRadius: "50%",
                      backgroundColor: "#A78BFA",
                    }}
                  />

                  <Box sx={{ flex: 1 }}>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        lineHeight: 1.6,
                      }}
                    >
                      {activity.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 0.5 }}
                    >
                      {activity.date}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>

            <Typography
              variant="caption"
              color="text.secondary"
              sx={{
                display: "block",
                mt: 3,
              }}
            >
              Professional development activities at The Penbrothers
              International, Inc.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Education;
