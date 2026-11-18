import { Box, Button, Container, Typography } from "@mui/material";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <Box
      id="home"
      sx={{
        minHeight: "calc(100vh - 76px)",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        py: { xs: 10, md: 14 },
        background:
          "radial-gradient(circle at 75% 35%, rgba(91, 140, 255, 0.13), transparent 35%)",
      }}
    >
      <Container maxWidth="lg">
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          sx={{ maxWidth: 850 }}
        >
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              px: 2,
              py: 1,
              mb: 4,
              border: "1px solid rgba(91, 140, 255, 0.3)",
              borderRadius: 20,
              backgroundColor: "rgba(91, 140, 255, 0.08)",
            }}
          >
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "#5B8CFF",
              }}
            />
            <Typography
              variant="caption"
              sx={{
                color: "primary.light",
                fontWeight: 700,
                letterSpacing: "0.12em",
              }}
            >
              OPEN TO OPPORTUNITIES
            </Typography>
          </Box>

          <Typography
            variant="h6"
            component="p"
            sx={{
              color: "text.secondary",
              mb: 2,
              fontWeight: 500,
            }}
          >
            Hi, I'm Christian Arvie Benito.
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.8rem", sm: "4rem", md: "5.2rem" },
              lineHeight: 1.08,
              mb: 3,
              maxWidth: 850,
            }}
          >
            I build digital experiences that{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              matter.
            </Box>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              fontSize: { xs: "1rem", md: "1.15rem" },
              lineHeight: 1.9,
              maxWidth: 650,
              mb: 4,
            }}
          >
            I'm a Full-Stack Developer focused on building modern web
            applications, scalable backend systems, and intuitive digital
            experiences.
          </Typography>

          {/* Action Buttons */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              mb: 5,
            }}
          >
            <Button
              component="a"
              href="#projects"
              variant="contained"
              color="primary"
              endIcon={<ArrowUpRight size={18} />}
            >
              Explore My Work
            </Button>

            <Button
              component="a"
              href="#contact"
              variant="outlined"
              color="inherit"
              sx={{
                borderColor: "divider",
                color: "text.primary",
              }}
            >
              Get In Touch
            </Button>

            <Button
              component="a"
              href="/resume.pdf"
              download="Christian-Arvie-Benito-Resume.pdf"
              variant="outlined"
              color="primary"
              startIcon={<Download size={18} />}
            >
              Download Resume
            </Button>
          </Box>

          {/* Social Links */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 3,
            }}
          >
            <Box
              component="a"
              href="https://github.com/arvieguadiz"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "text.secondary",
                textDecoration: "none",
                fontSize: "0.9rem",
                "&:hover": { color: "primary.main" },
              }}
            >
              GitHub ↗
            </Box>

            <Box
              component="a"
              href="https://www.linkedin.com/in/christian-arvie-benito-378399211/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "text.secondary",
                textDecoration: "none",
                fontSize: "0.9rem",
                "&:hover": { color: "primary.main" },
              }}
            >
              LinkedIn ↗
            </Box>
          </Box>
        </Box>

        {/* Scroll Indicator */}
        <Box
          component="a"
          href="#about"
          sx={{
            position: "absolute",
            bottom: 32,
            left: "50%",
            transform: "translateX(-50%)",
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: 1,
            color: "text.secondary",
            textDecoration: "none",
            fontSize: "0.8rem",
            "&:hover": { color: "primary.main" },
          }}
        >
          <ArrowDown size={16} />
          Scroll to explore
        </Box>
      </Container>
    </Box>
  );
}

export default Hero;
