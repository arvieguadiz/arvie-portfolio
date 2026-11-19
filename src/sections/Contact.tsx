import { Box, Button, Container, Typography } from "@mui/material";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <Box id="contact" component="section" sx={{ py: { xs: 9, md: 14 } }}>
      <Container maxWidth="lg">
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          sx={{
            maxWidth: 850,
            mx: "auto",
            p: { xs: 3, md: 6 },
            textAlign: "center",
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 4,
            background:
              "radial-gradient(circle at top, rgba(91, 140, 255, 0.12), transparent 65%)",
          }}
        >
          <Typography
            variant="overline"
            sx={{
              color: "#B8C7DC",
              fontWeight: 700,
              letterSpacing: "0.15em",
            }}
          >
            GET IN TOUCH
          </Typography>

          <Typography
            variant="h2"
            sx={{
              mt: 2,
              mb: 2,
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            Let's work together.
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              maxWidth: 580,
              mx: "auto",
              mb: 4,
              lineHeight: 1.9,
            }}
          >
            Have a project in mind, an opportunity, or just want to connect?
            Feel free to reach out. I'd be happy to hear from you.
          </Typography>

          <Button
            component="a"
            href="mailto:arvieguadiz@gmail.com"
            variant="contained"
            color="primary"
            endIcon={<ArrowUpRight size={18} />}
            sx={{ mb: 4 }}
          >
            Send Me an Email
          </Button>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
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
                "&:hover": { color: "primary.main" },
              }}
            >
              LinkedIn ↗
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Contact;
