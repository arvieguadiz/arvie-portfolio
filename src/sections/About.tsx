import { Box, Container, Typography } from "@mui/material";
import { Code2, Layers3, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Building complete web applications, from intuitive frontend interfaces to reliable backend systems.",
  },
  {
    icon: Layers3,
    title: "Scalable Solutions",
    description:
      "Creating maintainable architectures, reusable components, and efficient database solutions.",
  },
  {
    icon: Rocket,
    title: "Continuous Improvement",
    description:
      "Optimizing performance, solving technical challenges, and continuously learning new technologies.",
  },
];

function About() {
  return (
    <Box
      id="about"
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
            GET TO KNOW ME
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
            About Me<span style={{ color: "#5B8CFF" }}>.</span>
          </Typography>
        </Box>

        {/* Main Content */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1.1fr 0.9fr",
            },
            gap: { xs: 5, md: 8 },
            alignItems: "start",
          }}
        >
          {/* Biography */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontSize: {
                  xs: "1.5rem",
                  md: "2rem",
                },
                lineHeight: 1.5,
                fontWeight: 600,
                mb: 3,
              }}
            >
              Turning ideas into functional, meaningful digital products.
            </Typography>

            <Typography
              color="text.secondary"
              sx={{
                fontSize: "1rem",
                lineHeight: 2,
                mb: 2.5,
              }}
            >
              I'm a Full-Stack Developer with professional experience building
              and maintaining web applications. My work focuses on creating
              reliable systems, intuitive user experiences, and maintainable
              solutions.
            </Typography>

            <Typography
              color="text.secondary"
              sx={{
                fontSize: "1rem",
                lineHeight: 2,
                mb: 2.5,
              }}
            >
              Throughout my career, I've worked with technologies including
              React, TypeScript, Node.js, Express, and relational databases. I
              enjoy working across the development stack and understanding how
              different parts of an application work together.
            </Typography>

            <Typography
              color="text.secondary"
              sx={{
                fontSize: "1rem",
                lineHeight: 2,
              }}
            >
              I believe good software is more than just code. It's about solving
              real problems, making thoughtful technical decisions, and
              continuously improving the experience for the people who use it.
            </Typography>
          </Box>

          {/* Highlight Cards */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <Box
                  key={item.title}
                  component={motion.div}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                  }}
                  sx={{
                    display: "flex",
                    gap: 2.5,
                    p: 3,
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
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 2,
                      color: "primary.main",
                      backgroundColor: "rgba(91, 140, 255, 0.12)",
                    }}
                  >
                    <Icon size={23} />
                  </Box>

                  <Box>
                    <Typography
                      variant="h6"
                      component="h4"
                      sx={{
                        fontSize: "1rem",
                        fontWeight: 700,
                        mb: 0.8,
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ lineHeight: 1.8 }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default About;
