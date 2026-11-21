import { useEffect, useState } from "react";
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
  const [activeSection, setActiveSection] = useState("#about");

  // Detect the section currently being viewed.
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((section): section is Element => section !== null);

    const observer = new IntersectionObserver(
      () => {
        const currentSection = sections
          .filter((section) => section.getBoundingClientRect().top <= 140)
          .pop();

        if (currentSection) {
          setActiveSection(`#${currentSection.id}`);
        } else {
          setActiveSection("#about");
        }
      },
      {
        rootMargin: "-100px 0px -60% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Smoothly scroll to the selected section.
  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();

    const section = document.querySelector(href);

    if (section) {
      const top = window.scrollY + section.getBoundingClientRect().top - 90;

      window.history.pushState(null, "", href);

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

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
            onClick={(event: React.MouseEvent<HTMLAnchorElement>) =>
              handleNavClick(event, "#home")
            }
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
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;

              return (
                <Box
                  key={link.label}
                  component="a"
                  href={link.href}
                  aria-current={isActive ? "location" : undefined}
                  onClick={(event: React.MouseEvent<HTMLAnchorElement>) =>
                    handleNavClick(event, link.href)
                  }
                  sx={{
                    position: "relative",
                    color: isActive ? "#5B8CFF" : "text.secondary",
                    textDecoration: "none",
                    fontSize: "0.85rem",
                    fontWeight: isActive ? 600 : 500,
                    transition: "color 0.2s ease",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      bottom: "-8px",
                      width: isActive ? "100%" : "0%",
                      height: "2px",
                      backgroundColor: "#5B8CFF",
                      borderRadius: "2px",
                      transition: "width 0.2s ease",
                    },
                    "&:hover": {
                      color: "#5B8CFF",
                    },
                  }}
                >
                  {link.label}
                </Box>
              );
            })}
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
              onClick={(event: React.MouseEvent<HTMLAnchorElement>) =>
                handleNavClick(event, "#contact")
              }
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
