import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Full Stack Web Developer",
    company: "The Penbrothers International, Inc.",
    location: "Metro Manila, Philippines",
    period: "June 2022 — May 2026",
    description:
      "Developed and maintained full-stack web applications, contributing to both frontend experiences and backend systems.",
    responsibilities: [
      "Developed applications using React, Redux, Node.js, Express, TypeScript, Redis, and MySQL.",
      "Collaborated with cross-functional teams to design and implement features that improved user experience and streamlined development.",
      "Optimized backend queries and frontend components to improve application performance and responsiveness.",
      "Built reusable Material UI components to help establish a consistent design system and improve development efficiency.",
    ],
    technologies: [
      "React",
      "Redux",
      "TypeScript",
      "Node.js",
      "Express",
      "Redis",
      "MySQL",
      "Material UI",
    ],
  },
  {
    role: "Junior Programmer",
    company: "New Media Services Pty. Ltd.",
    location: "Baguio City, Philippines",
    period: "August 2019 — September 2021",
    description:
      "Worked on the development and maintenance of web applications while collaborating with senior developers to improve application quality.",
    responsibilities: [
      "Developed and maintained web applications using JavaScript, Node.js, Express, React, and MySQL.",
      "Collaborated with senior developers to identify bugs, troubleshoot issues, and optimize application performance.",
      "Participated in code reviews and contributed to building reusable frontend components.",
    ],
    technologies: ["JavaScript", "React", "Node.js", "Express", "MySQL"],
  },
];

function Experience() {
  return (
    <Box
      id="experience"
      component="section"
      sx={{
        py: { xs: 10, md: 16 },
        backgroundColor: "#0B1020",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Heading */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="overline"
            color="primary"
            sx={{
              fontWeight: 700,
              letterSpacing: 3,
            }}
          >
            MY CAREER JOURNEY
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
            Professional Experience
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
            My professional journey, the teams I've worked with, and the
            solutions I've helped build.
          </Typography>
        </Box>

        {/* Experience Timeline */}
        <Box
          sx={{
            position: "relative",
            maxWidth: 900,
            ml: { xs: 0, md: 2 },
          }}
        >
          {/* Timeline Line */}
          <Box
            sx={{
              position: "absolute",
              left: 7,
              top: 12,
              bottom: 30,
              width: "2px",
              backgroundColor: "rgba(91, 140, 255, 0.25)",
            }}
          />

          {experiences.map((experience, index) => (
            <Box
              key={experience.company}
              component={motion.div}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              sx={{
                position: "relative",
                pl: { xs: 4, md: 5 },
                pb: index === experiences.length - 1 ? 0 : 7,
              }}
            >
              {/* Timeline Marker */}
              <Box
                sx={{
                  position: "absolute",
                  left: 0,
                  top: 6,
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  backgroundColor: "#5B8CFF",
                  border: "4px solid #0B1020",
                  boxShadow: "0 0 0 2px rgba(91, 140, 255, 0.4)",
                  zIndex: 1,
                }}
              />

              {/* Experience Card */}
              <Box
                sx={{
                  p: { xs: 3, md: 4 },
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 3,
                  backgroundColor: "background.paper",
                }}
              >
                {/* Role and Period */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: {
                      xs: "column",
                      sm: "row",
                    },
                    justifyContent: "space-between",
                    gap: 1,
                    mb: 2,
                  }}
                >
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        mb: 0.8,
                      }}
                    >
                      {experience.role}
                    </Typography>

                    <Typography
                      color="primary.light"
                      sx={{
                        fontWeight: 600,
                      }}
                    >
                      {experience.company}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 0.5 }}
                    >
                      {experience.location}
                    </Typography>
                  </Box>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {experience.period}
                  </Typography>
                </Box>

                <Typography
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.9,
                    mb: 3,
                  }}
                >
                  {experience.description}
                </Typography>

                {/* Responsibilities */}
                <Box
                  component="ul"
                  sx={{
                    pl: 2.5,
                    m: 0,
                    mb: 3,
                    color: "text.secondary",

                    "& li": {
                      pl: 0.5,
                      mb: 1.5,
                      lineHeight: 1.8,
                    },

                    "& li::marker": {
                      color: "#5B8CFF",
                    },
                  }}
                >
                  {experience.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </Box>

                {/* Technologies */}
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1,
                  }}
                >
                  {experience.technologies.map((technology) => (
                    <Box
                      key={technology}
                      sx={{
                        px: 1.5,
                        py: 0.7,
                        borderRadius: 1.5,
                        backgroundColor: "rgba(91, 140, 255, 0.10)",
                        color: "#B8CCFF",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                      }}
                    >
                      {technology}
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Experience;
