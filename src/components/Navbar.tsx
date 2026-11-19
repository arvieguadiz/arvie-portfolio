import { Box, Button, Container } from "@mui/material";
import { Download } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
];

function Navbar() {
  return (
    <Box
      component="header"
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        width: "100%",
        backgroundColor: "rgba(8, 11, 20, 0.85)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            minHeight: "76px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          {/* Logo */}
          <Box
            component="a"
            href="#home"
            sx={{
              color: "text.primary",
              textDecoration: "none",
              fontSize: "1.6rem",
              fontWeight: 800,
              letterSpacing: "-0.08em",
              flexShrink: 0,
            }}
          >
            CAB<span style={{ color: "#5B8CFF" }}>.</span>
          </Box>

          {/* Navigation Links */}
          <Box
            component="nav"
            aria-label="Main navigation"
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 3,
            }}
          >
            {navLinks.map((link) => (
              <Box
                key={link.label}
                component="a"
                href={link.href}
                sx={{
                  color: "text.secondary",
                  textDecoration: "none",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  transition: "color 0.2s ease",
                  "&:hover": { color: "primary.main" },
                }}
              >
                {link.label}
              </Box>
            ))}
          </Box>

          {/* Action Buttons */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 1, sm: 1.5 },
              flexShrink: 0,
            }}
          >
            <Button
              component="a"
              href="/resume.pdf"
              download="Christian-Arvie-Benito-Resume.pdf"
              variant="text"
              color="primary"
              startIcon={<Download size={16} />}
              sx={{
                px: { xs: 1, sm: 1.5 },
                minWidth: 0,
                fontSize: { xs: "0.75rem", sm: "0.85rem" },
                color: "#B8C7DC",
                whiteSpace: "nowrap",
              }}
            >
              Download CV
            </Button>

            <Button
              component="a"
              href="#contact"
              variant="outlined"
              color="primary"
              sx={{
                borderRadius: "8px",
                px: { xs: 1.5, sm: 2.5 },
                py: 1,
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
                color: "#B8C7DC",
                borderColor: "#B8C7DC",
                whiteSpace: "nowrap",
                "&:hover": {
                  borderColor: "#FFFFFF",
                  backgroundColor: "rgba(184, 199, 220, 0.08)",
                },
              }}
            >
              Let's Talk
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Navbar;
