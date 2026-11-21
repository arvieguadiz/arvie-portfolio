import { Box, Container, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        borderTop: "1px solid",
        borderColor: "divider",
        backgroundColor: "background.default",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: { xs: 1.5, sm: 2 },
          }}
        >
          <Box
            component="a"
            href="#home"
            aria-label="CAB - Back to home"
            sx={{
              color: "text.primary",
              textDecoration: "none",
              fontSize: "1.3rem",
              fontWeight: 800,
              letterSpacing: "-0.08em",
              minHeight: 44,
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            CAB<span style={{ color: "#5B8CFF" }}>.</span>
          </Box>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              textAlign: "center",
              lineHeight: 1.7,
              overflowWrap: "anywhere",
            }}
          >
            © {new Date().getFullYear()} Christian Arvie Benito. All rights
            reserved.
          </Typography>

          <Box
            component="a"
            href="#home"
            sx={{
              color: "text.secondary",
              textDecoration: "none",
              fontSize: "0.85rem",
              fontWeight: 600,
              minHeight: 44,
              display: "inline-flex",
              alignItems: "center",
              "&:hover": { color: "primary.main" },
            }}
          >
            Back to top ↑
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
