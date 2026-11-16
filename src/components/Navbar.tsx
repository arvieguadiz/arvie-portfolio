import { Box, Button, Container } from "@mui/material";

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
          }}
        >
          <Box
            component="a"
            href="#home"
            sx={{
              color: "text.primary",
              textDecoration: "none",
              fontSize: "1.6rem",
              fontWeight: 800,
              letterSpacing: "-0.08em",
            }}
          >
            CAB<span style={{ color: "#5B8CFF" }}>.</span>
          </Box>

          <Box
            component="nav"
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

          <Button
            component="a"
            href="#contact"
            variant="outlined"
            color="primary"
            sx={{ borderRadius: "8px", px: 2.5, py: 1 }}
          >
            Let's Talk
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Navbar;
