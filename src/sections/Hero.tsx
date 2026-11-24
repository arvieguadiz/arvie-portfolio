import { Box, Button, Container, Typography } from "@mui/material";
import {
  ArrowDown,
  ArrowUpRight,
  ArrowUp,
  Download,
  Code2,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const technologies = [
  "React",
  "TypeScript",
  "Node.js",
  "Express",
  "MySQL",
  "Redis",
];

function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Box
      id="home"
      sx={{
        minHeight: { xs: "auto", md: "calc(100vh - 76px)" },
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        py: { xs: 7, sm: 9, md: 12 },
        background:
          "radial-gradient(circle at 78% 40%, rgba(53, 104, 212, 0.15), transparent 35%)",
      }}
    >
      {/* Ambient Background Orbs */}
      <Box
        component={motion.div}
        animate={
          shouldReduceMotion
            ? { x: 0, y: 0 }
            : {
                x: [0, 35, 0],
                y: [0, -25, 0],
              }
        }
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : {
                duration: 14,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
        sx={{
          position: "absolute",
          top: "5%",
          right: "5%",
          width: { xs: 220, md: 380 },
          height: { xs: 220, md: 380 },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(53, 104, 212, 0.13), transparent 70%)",
          filter: "blur(35px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <Box
        component={motion.div}
        animate={
          shouldReduceMotion
            ? { x: 0, y: 0 }
            : {
                x: [0, -25, 0],
                y: [0, 30, 0],
              }
        }
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : {
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
        sx={{
          position: "absolute",
          bottom: "0%",
          left: "-8%",
          width: { xs: 200, md: 340 },
          height: { xs: 200, md: 340 },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(91, 70, 180, 0.10), transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.15fr 0.85fr" },
            alignItems: "center",
            gap: { xs: 7, md: 5 },
          }}
        >
          {/* Left: Introduction */}
          <Box
            component={motion.div}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.7 }}
            sx={{ maxWidth: 700 }}
          >
            {/* Availability */}
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
                  backgroundColor: "#10B981",
                  boxShadow: "0 0 10px rgba(16, 185, 129, 0.6)",
                }}
              />
              <Typography
                variant="caption"
                sx={{
                  color: "#B8C7DC",
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
                fontSize: {
                  xs: "2.4rem",
                  sm: "4rem",
                  md: "4.5rem",
                },
                lineHeight: 1.12,
                mb: 3,
              }}
            >
              I build digital experiences that{" "}
              <Box component="span" sx={{ color: "primary.light" }}>
                matter.
              </Box>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.9,
                maxWidth: 600,
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
                gap: { xs: 1.5, sm: 2 },
                mb: 5,
                "& .MuiButton-root": {
                  minHeight: 44,
                },
              }}
            >
              <Button
                component="a"
                href="#projects"
                variant="contained"
                color="primary"
                sx={{
                  transition: "all 0.25s ease",
                  "&:hover": {
                    transform: "translateY(-3px)",
                  },
                }}
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
                  transition: "all 0.25s ease",
                  "&:hover": {
                    transform: "translateY(-3px)",
                  },
                }}
              >
                Get In Touch
              </Button>

              <Button
                component="a"
                href="/resume.pdf"
                download="Christian-Arvie-Benito-Resume.pdf"
                variant="outlined"
                color="inherit"
                sx={{
                  borderColor: "divider",
                  color: "text.primary",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    transform: "translateY(-3px)",
                  },
                }}
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
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.5,
                  minHeight: 44,
                  "&:hover": { color: "primary.light" },
                }}
              >
                GitHub <ArrowUpRight size={14} />
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
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.5,
                  minHeight: 44,
                  "&:hover": { color: "primary.light" },
                }}
              >
                LinkedIn <ArrowUpRight size={14} />
              </Box>
            </Box>
          </Box>

          {/* Right: Developer Visual */}
          <Box
            component={motion.div}
            initial={shouldReduceMotion ? false : { opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.9,
              delay: shouldReduceMotion ? 0 : 0.2,
            }}
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minWidth: 0,
            }}
          >
            {/* Ambient Glow */}
            <Box
              sx={{
                position: "absolute",
                width: "80%",
                aspectRatio: "1",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(53, 104, 212, 0.18), transparent 70%)",
                filter: "blur(25px)",
              }}
            />

            {/* Code Editor Card */}
            <Box
              component={motion.div}
              animate={shouldReduceMotion ? { y: 0 } : { y: [0, -10, 0] }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : {
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
              }
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: 440,
                border: "1px solid rgba(148, 163, 184, 0.18)",
                borderRadius: 3,
                overflow: "hidden",
                backgroundColor: "rgba(16, 22, 37, 0.92)",
                backdropFilter: "blur(20px)",
                boxShadow: "0 30px 80px rgba(0, 0, 0, 0.3)",
              }}
            >
              {/* Editor Header */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  px: 2.5,
                  py: 1.8,
                  borderBottom: "1px solid rgba(148, 163, 184, 0.12)",
                  backgroundColor: "rgba(255, 255, 255, 0.02)",
                }}
              >
                <Box sx={{ display: "flex", gap: 0.8 }}>
                  {["#F87171", "#FBBF24", "#34D399"].map((color) => (
                    <Box
                      key={color}
                      sx={{
                        width: 9,
                        height: 9,
                        borderRadius: "50%",
                        backgroundColor: color,
                      }}
                    />
                  ))}
                </Box>

                <Typography
                  variant="caption"
                  sx={{ color: "text.secondary", fontFamily: "monospace" }}
                >
                  developer.ts
                </Typography>

                <Box sx={{ width: 35 }} />
              </Box>

              {/* Code Content */}
              <Box sx={{ p: { xs: 2, sm: 3.5 } }}>
                <Typography
                  variant="caption"
                  sx={{
                    color: "#64748B",
                    fontFamily: "monospace",
                    display: "block",
                    mb: 2,
                  }}
                >
                  01 — ABOUT ME
                </Typography>

                <Box
                  sx={{
                    fontFamily: "monospace",
                    fontSize: { xs: "0.78rem", sm: "0.9rem" },
                    lineHeight: 2,
                    whiteSpace: "pre-wrap",
                    overflowWrap: "anywhere",
                  }}
                >
                  <Box component="div">
                    <Box component="span" sx={{ color: "#C084FC" }}>
                      const
                    </Box>{" "}
                    <Box component="span" sx={{ color: "#60A5FA" }}>
                      developer
                    </Box>{" "}
                    = {"{"}
                  </Box>

                  <Box sx={{ pl: 2 }}>
                    <Box component="div">
                      <Box component="span" sx={{ color: "#93C5FD" }}>
                        name
                      </Box>
                      :{" "}
                      <Box component="span" sx={{ color: "#86EFAC" }}>
                        "Christian Arvie Benito"
                      </Box>
                      ,
                    </Box>

                    <Box component="div">
                      <Box component="span" sx={{ color: "#93C5FD" }}>
                        role
                      </Box>
                      :{" "}
                      <Box component="span" sx={{ color: "#86EFAC" }}>
                        "Full-Stack Developer"
                      </Box>
                      ,
                    </Box>

                    <Box component="div">
                      <Box component="span" sx={{ color: "#93C5FD" }}>
                        focus
                      </Box>
                      :{" "}
                      <Box component="span" sx={{ color: "#86EFAC" }}>
                        "Building useful products"
                      </Box>
                      ,
                    </Box>

                    <Box component="div">
                      <Box component="span" sx={{ color: "#93C5FD" }}>
                        mindset
                      </Box>
                      :{" "}
                      <Box component="span" sx={{ color: "#86EFAC" }}>
                        "Always learning"
                      </Box>
                    </Box>
                  </Box>

                  <Box component="div">
                    {"};"}
                    <Box
                      component="span"
                      sx={{
                        display: "inline-block",
                        width: "2px",
                        height: "18px",
                        ml: 0.5,
                        verticalAlign: "middle",
                        backgroundColor: "#10B981",
                        animation: shouldReduceMotion
                          ? "none"
                          : "blink 1s step-end infinite",
                        "@keyframes blink": {
                          "50%": { opacity: 0 },
                        },
                      }}
                    />
                  </Box>
                </Box>

                <Box
                  sx={{
                    height: "1px",
                    backgroundColor: "rgba(148, 163, 184, 0.12)",
                    my: 3,
                  }}
                />

                <Typography
                  variant="caption"
                  sx={{
                    color: "#64748B",
                    fontFamily: "monospace",
                    display: "block",
                    mb: 2,
                  }}
                >
                  02 — TECHNOLOGY STACK
                </Typography>

                <Box
                  component={motion.div}
                  initial={shouldReduceMotion ? false : "hidden"}
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: shouldReduceMotion ? 0 : 0.12,
                        delayChildren: shouldReduceMotion ? 0 : 0.3,
                      },
                    },
                  }}
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1,
                  }}
                >
                  {technologies.map((technology) => (
                    <Box
                      key={technology}
                      component={motion.div}
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.35,
                        ease: "easeOut",
                      }}
                      sx={{
                        px: 1.5,
                        py: 0.8,
                        borderRadius: 1.5,
                        border: "1px solid rgba(91, 140, 255, 0.2)",
                        backgroundColor: "rgba(53, 104, 212, 0.09)",
                        color: "#B8C7DC",
                        fontSize: "0.78rem",
                        fontWeight: 600,
                      }}
                    >
                      {technology}
                    </Box>
                  ))}
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    mt: 3,
                    color: "#10B981",
                  }}
                >
                  <Box
                    sx={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      backgroundColor: "#10B981",
                    }}
                  />
                  <Typography
                    variant="caption"
                    sx={{ fontFamily: "monospace", color: "#94A3B8" }}
                  >
                    Ready to build something meaningful
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Floating Developer Badge */}
            <Box
              component={motion.div}
              animate={shouldReduceMotion ? { y: 0 } : { y: [0, -8, 0] }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
              }
              sx={{
                position: "absolute",
                bottom: { xs: -45, md: -25 },
                right: { xs: 0, md: -15 },
                zIndex: 2,
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                px: 2,
                py: 1.5,
                borderRadius: 2,
                border: "1px solid rgba(148, 163, 184, 0.2)",
                backgroundColor: "rgba(16, 22, 37, 0.95)",
                backdropFilter: "blur(16px)",
                boxShadow: "0 12px 35px rgba(0, 0, 0, 0.3)",
              }}
            >
              <Box
                sx={{
                  width: 38,
                  height: 38,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 1.5,
                  backgroundColor: "rgba(53, 104, 212, 0.15)",
                  color: "primary.light",
                }}
              >
                <Code2 size={21} />
              </Box>

              <Box>
                <Typography
                  sx={{
                    color: "text.primary",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                  }}
                >
                  Full-Stack Developer
                </Typography>

                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: "0.7rem",
                  }}
                >
                  Frontend • Backend • Databases
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Scroll Indicator */}
        <Box
          component="a"
          href="#about"
          sx={{
            position: "absolute",
            bottom: 24,
            left: "50%",
            transform: "translateX(-50%)",
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: 1,
            color: "text.secondary",
            textDecoration: "none",
            fontSize: "0.8rem",
            "&:hover": { color: "primary.light" },
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
