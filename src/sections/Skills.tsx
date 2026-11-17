import { Box, Chip, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend Development",
    description: "Building responsive and intuitive user interfaces.",
    skills: [
      "React",
      "Redux",
      "Angular",
      "Material UI",
      "HTML5",
      "CSS3",
      "Bootstrap",
    ],
  },
  {
    title: "Backend Development",
    description: "Developing APIs and reliable server-side applications.",
    skills: ["Node.js", "Express.js", "Laravel", "REST APIs"],
  },
  {
    title: "Programming Languages",
    description: "Languages used across different parts of development.",
    skills: ["JavaScript", "TypeScript", "PHP", "SQL"],
  },
  {
    title: "Databases",
    description: "Working with relational and in-memory databases.",
    skills: ["MySQL", "MariaDB", "PostgreSQL", "Redis"],
  },
  {
    title: "Tools & Workflow",
    description: "Tools and practices for efficient development.",
    skills: [
      "Git",
      "Docker",
      "npm",
      "Postman",
      "Swagger",
      "Jest",
      "Agile",
      "Scrum",
      "CI/CD",
    ],
  },
];

function Skills() {
  return (
    <Box
      id="skills"
      component="section"
      sx={{
        py: { xs: 10, md: 16 },
        backgroundColor: "#0B1020",
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
            WHAT I WORK WITH
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
            Technical Skills
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
            Technologies and tools I use to design, develop, and maintain modern
            web applications.
          </Typography>
        </Box>

        {/* Skill Groups */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
            },
            gap: 2.5,
          }}
        >
          {skillGroups.map((group, index) => (
            <Box
              key={group.title}
              component={motion.div}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              sx={{
                p: { xs: 3, md: 3.5 },
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 3,
                backgroundColor: "background.paper",
                transition: "border-color 0.2s ease",

                "&:hover": {
                  borderColor: "primary.main",
                },
              }}
            >
              <Typography
                variant="h6"
                component="h3"
                sx={{
                  fontWeight: 700,
                  mb: 1,
                }}
              >
                {group.title}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  lineHeight: 1.7,
                  mb: 3,
                }}
              >
                {group.description}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1,
                }}
              >
                {group.skills.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    size="small"
                    sx={{
                      color: "#B8CCFF",
                      backgroundColor: "rgba(91, 140, 255, 0.10)",
                      border: "1px solid rgba(91, 140, 255, 0.18)",
                      borderRadius: 1.5,
                      fontWeight: 500,
                    }}
                  />
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Skills;
